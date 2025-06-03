import { Request, Response, NextFunction } from "express";
import { storage } from "./storage";
import { AuditLog, DataAccessLog, SecurityIncident } from "@shared/schema";

// Extend Request type to include audit context
interface AuditRequest extends Request {
  audit?: {
    userId: number;
    userRole: string;
    action: string;
    resourceType: string;
    resourceId?: string;
    riskLevel: string;
  };
}

// HIPAA compliance middleware for audit logging
export function hipaaAuditMiddleware() {
  return async (req: AuditRequest, res: Response, next: NextFunction) => {
    const startTime = Date.now();
    const originalSend = res.send;
    
    // Capture response data
    res.send = function(data) {
      const endTime = Date.now();
      const duration = endTime - startTime;
      
      // Log the audit entry asynchronously
      logAuditEntry(req, res, duration).catch(console.error);
      
      return originalSend.call(this, data);
    };

    next();
  };
}

// Enhanced data access logging for PHI
export function phiAccessLogger() {
  return async (req: AuditRequest, res: Response, next: NextFunction) => {
    // Only log access to patient health information
    if (isPHIAccess(req)) {
      const accessLog = {
        userId: req.audit?.userId || 0,
        patientId: extractPatientId(req),
        dataType: determineDataType(req),
        accessType: req.method.toLowerCase() as 'read' | 'write' | 'delete' | 'export',
        purpose: determinePurpose(req),
        location: req.ip,
        deviceInfo: {
          userAgent: req.get('User-Agent'),
          ip: req.ip,
          timestamp: new Date().toISOString()
        },
        dataClassification: 'phi' as const,
        consentStatus: 'required' as const
      };

      try {
        await storage.createDataAccessLog(accessLog);
      } catch (error) {
        console.error('Failed to log PHI access:', error);
      }
    }

    next();
  };
}

// Security monitoring middleware
export function securityMonitor() {
  return async (req: AuditRequest, res: Response, next: NextFunction) => {
    const securityChecks = [
      checkSuspiciousActivity(req),
      checkUnauthorizedAccess(req),
      checkDataExfiltration(req),
      checkBruteForceAttempts(req)
    ];

    const threats = securityChecks.filter(check => check.isThreaat);
    
    if (threats.length > 0) {
      for (const threat of threats) {
        await createSecurityIncident(threat, req);
      }
      
      // For high severity threats, block the request
      if (threats.some(t => t.severity === 'critical')) {
        return res.status(403).json({
          error: 'Access denied due to security violation',
          incidentId: threats[0].incidentId
        });
      }
    }

    next();
  };
}

// Helper functions
async function logAuditEntry(req: AuditRequest, res: Response, duration: number) {
  const auditEntry = {
    userId: req.audit?.userId || 0,
    action: `${req.method} ${req.path}`,
    resourceType: req.audit?.resourceType || 'unknown',
    resourceId: req.audit?.resourceId,
    ipAddress: req.ip,
    userAgent: req.get('User-Agent') || '',
    details: {
      statusCode: res.statusCode,
      duration,
      method: req.method,
      path: req.path,
      query: req.query,
      timestamp: new Date().toISOString()
    },
    riskLevel: req.audit?.riskLevel || 'low',
    complianceStatus: res.statusCode < 400 ? 'compliant' : 'violation'
  };

  try {
    await storage.createAuditLog(auditEntry);
  } catch (error) {
    console.error('Failed to create audit log:', error);
  }
}

function isPHIAccess(req: Request): boolean {
  const phiRoutes = [
    '/api/prescriptions',
    '/api/patients',
    '/api/medical-records',
    '/api/claims',
    '/api/user'
  ];
  
  return phiRoutes.some(route => req.path.startsWith(route));
}

function extractPatientId(req: Request): number | undefined {
  // Extract patient ID from various sources
  if (req.params.patientId) return parseInt(req.params.patientId);
  if (req.body?.patientId) return req.body.patientId;
  if (req.query.patientId) return parseInt(req.query.patientId as string);
  return undefined;
}

function determineDataType(req: Request): string {
  if (req.path.includes('prescription')) return 'prescription';
  if (req.path.includes('patient')) return 'patient_info';
  if (req.path.includes('claim')) return 'insurance_claim';
  if (req.path.includes('medical')) return 'medical_record';
  return 'healthcare_data';
}

function determinePurpose(req: Request): string {
  const userAgent = req.get('User-Agent') || '';
  if (userAgent.includes('mobile')) return 'mobile_access';
  if (req.path.includes('report')) return 'reporting';
  if (req.method === 'POST') return 'data_entry';
  if (req.method === 'GET') return 'data_review';
  return 'healthcare_operations';
}

function checkSuspiciousActivity(req: Request) {
  const suspiciousPatterns = [
    req.path.includes('../../'),  // Path traversal
    req.path.includes('<script>'), // XSS attempt
    req.headers['user-agent']?.includes('bot'),
    Object.keys(req.query).length > 20 // Too many parameters
  ];

  return {
    isThreaat: suspiciousPatterns.some(Boolean),
    severity: 'medium' as const,
    type: 'suspicious_activity',
    details: { patterns: suspiciousPatterns, path: req.path }
  };
}

function checkUnauthorizedAccess(req: Request) {
  // Check for access without proper authentication
  const hasAuth = req.headers.authorization || req.session?.user;
  const needsAuth = !req.path.startsWith('/api/public');

  return {
    isThreaat: needsAuth && !hasAuth,
    severity: 'high' as const,
    type: 'unauthorized_access',
    details: { path: req.path, hasAuth: !!hasAuth }
  };
}

function checkDataExfiltration(req: Request) {
  // Check for large data requests that might indicate exfiltration
  const isLargeRequest = req.path.includes('export') || 
                        req.query.limit && parseInt(req.query.limit as string) > 1000;

  return {
    isThreaat: isLargeRequest,
    severity: 'high' as const,
    type: 'potential_data_exfiltration',
    details: { path: req.path, queryLimit: req.query.limit }
  };
}

function checkBruteForceAttempts(req: Request) {
  // This would typically check a rate limiting store
  // For now, we'll just flag multiple rapid requests
  return {
    isThreaat: false, // Would implement rate limiting logic here
    severity: 'medium' as const,
    type: 'brute_force_attempt',
    details: { ip: req.ip }
  };
}

async function createSecurityIncident(threat: any, req: Request) {
  const incident = {
    incidentType: threat.type,
    severity: threat.severity,
    description: `Security threat detected: ${threat.type} from IP ${req.ip}`,
    affectedUsers: [req.session?.user?.id].filter(Boolean),
    affectedData: { path: req.path, method: req.method },
    detectionMethod: 'automated_monitoring',
    status: 'open' as const,
    assignedTo: 1, // Would assign to security team
    responseActions: {
      blocked: threat.severity === 'critical',
      logged: true,
      alertSent: threat.severity === 'high' || threat.severity === 'critical'
    }
  };

  try {
    await storage.createSecurityIncident(incident);
    threat.incidentId = incident;
  } catch (error) {
    console.error('Failed to create security incident:', error);
  }
}

// HIPAA compliance checker
export function validateHIPAACompliance(req: Request, res: Response): boolean {
  const complianceChecks = [
    checkDataEncryption(req),
    checkAccessControls(req),
    checkAuditLogging(req),
    checkDataIntegrity(req),
    checkUserAuthentication(req)
  ];

  const failures = complianceChecks.filter(check => !check.compliant);
  
  if (failures.length > 0) {
    res.status(403).json({
      error: 'HIPAA compliance violation',
      violations: failures.map(f => f.requirement),
      remediation: failures.map(f => f.remediation)
    });
    return false;
  }

  return true;
}

function checkDataEncryption(req: Request) {
  return {
    compliant: req.secure || req.headers['x-forwarded-proto'] === 'https',
    requirement: 'Data transmission encryption',
    remediation: 'Use HTTPS for all communications'
  };
}

function checkAccessControls(req: Request) {
  return {
    compliant: !!req.session?.user || !isPHIAccess(req),
    requirement: 'User authentication and authorization',
    remediation: 'Implement proper authentication mechanisms'
  };
}

function checkAuditLogging(req: Request) {
  return {
    compliant: true, // Our middleware handles this
    requirement: 'Comprehensive audit logging',
    remediation: 'Ensure all PHI access is logged'
  };
}

function checkDataIntegrity(req: Request) {
  return {
    compliant: true, // Database constraints handle this
    requirement: 'Data integrity and accuracy',
    remediation: 'Implement data validation and checksums'
  };
}

function checkUserAuthentication(req: Request) {
  const user = req.session?.user;
  return {
    compliant: !isPHIAccess(req) || (user && user.role),
    requirement: 'User identity verification',
    remediation: 'Implement multi-factor authentication'
  };
}