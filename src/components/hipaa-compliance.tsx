import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  Eye,
  FileText,
  Clock,
  User,
  Lock,
  TrendingUp,
  Download
} from "lucide-react";

export function HIPAACompliance() {
  const [complianceData] = useState({
    overallScore: 98,
    riskLevel: "Low",
    totalAudits: 1247,
    violations: 3,
    lastAudit: "2024-01-20T10:30:00Z"
  });

  const [auditLogs] = useState([
    {
      id: 1,
      timestamp: "2024-01-20T14:25:00Z",
      user: "Dr. Sarah Johnson",
      action: "Viewed Patient Record",
      resource: "Patient #12345",
      ipAddress: "192.168.1.100",
      riskLevel: "low",
      complianceStatus: "compliant"
    },
    {
      id: 2,
      timestamp: "2024-01-20T14:20:00Z",
      user: "Pharmacist Mike Chen",
      action: "Prescription Verification",
      resource: "Prescription #98765",
      ipAddress: "192.168.1.105",
      riskLevel: "low",
      complianceStatus: "compliant"
    },
    {
      id: 3,
      timestamp: "2024-01-20T14:15:00Z",
      user: "Insurance Agent Lisa Wong",
      action: "Claim Processing",
      resource: "Claim #CLM-2024-001",
      ipAddress: "192.168.1.110",
      riskLevel: "medium",
      complianceStatus: "flagged"
    }
  ]);

  const [securityIncidents] = useState([
    {
      id: 1,
      type: "Failed Login Attempt",
      severity: "medium",
      timestamp: "2024-01-20T12:15:00Z",
      description: "Multiple failed login attempts from IP 203.0.113.42",
      status: "investigating",
      affectedUser: "Unknown"
    },
    {
      id: 2,
      type: "Unusual Data Access",
      severity: "low",
      timestamp: "2024-01-20T11:30:00Z",
      description: "Off-hours access to patient records",
      status: "resolved",
      affectedUser: "Dr. Emily Rodriguez"
    }
  ]);

  const getRiskBadgeColor = (risk: string) => {
    switch (risk.toLowerCase()) {
      case 'low': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'high': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getStatusBadgeColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'compliant': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'flagged': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'violation': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <div className="space-y-6">
      {/* Compliance Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Compliance Score</CardTitle>
            <Shield className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{complianceData.overallScore}%</div>
            <p className="text-xs text-muted-foreground">HIPAA Compliant</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Risk Level</CardTitle>
            <TrendingUp className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{complianceData.riskLevel}</div>
            <p className="text-xs text-muted-foreground">Current Status</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Audits</CardTitle>
            <Eye className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-purple-600">{complianceData.totalAudits.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Violations</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{complianceData.violations}</div>
            <p className="text-xs text-muted-foreground">Requires attention</p>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Compliance View */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <FileText className="h-5 w-5 mr-2" />
            HIPAA Compliance & Security Auditing
          </CardTitle>
          <CardDescription>
            Real-time monitoring of healthcare data access and security compliance
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="audit-logs" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="audit-logs">Audit Logs</TabsTrigger>
              <TabsTrigger value="security-incidents">Security Incidents</TabsTrigger>
              <TabsTrigger value="compliance-reports">Reports</TabsTrigger>
            </TabsList>

            <TabsContent value="audit-logs" className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Access Audit Trail</h3>
                <Button size="sm" variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Export Logs
                </Button>
              </div>
              
              <ScrollArea className="h-[400px]">
                <div className="space-y-3">
                  {auditLogs.map((log) => (
                    <div key={log.id} className="border rounded-lg p-4 space-y-2">
                      <div className="flex justify-between items-start">
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2">
                            <User className="h-4 w-4 text-blue-600" />
                            <span className="font-medium">{log.user}</span>
                            <Badge className={getRiskBadgeColor(log.riskLevel)}>
                              {log.riskLevel} risk
                            </Badge>
                            <Badge className={getStatusBadgeColor(log.complianceStatus)}>
                              {log.complianceStatus}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {log.action} - {log.resource}
                          </p>
                          <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                            <span className="flex items-center">
                              <Clock className="h-3 w-3 mr-1" />
                              {new Date(log.timestamp).toLocaleString()}
                            </span>
                            <span className="flex items-center">
                              <Lock className="h-3 w-3 mr-1" />
                              {log.ipAddress}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </TabsContent>

            <TabsContent value="security-incidents" className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Security Monitoring</h3>
                <Button size="sm" variant="outline">
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  Create Incident
                </Button>
              </div>
              
              <ScrollArea className="h-[400px]">
                <div className="space-y-3">
                  {securityIncidents.map((incident) => (
                    <div key={incident.id} className="border rounded-lg p-4 space-y-2">
                      <div className="flex justify-between items-start">
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2">
                            <AlertTriangle className="h-4 w-4 text-orange-600" />
                            <span className="font-medium">{incident.type}</span>
                            <Badge className={getRiskBadgeColor(incident.severity)}>
                              {incident.severity}
                            </Badge>
                            <Badge variant={incident.status === 'resolved' ? 'default' : 'secondary'}>
                              {incident.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {incident.description}
                          </p>
                          <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                            <span className="flex items-center">
                              <Clock className="h-3 w-3 mr-1" />
                              {new Date(incident.timestamp).toLocaleString()}
                            </span>
                            <span className="flex items-center">
                              <User className="h-3 w-3 mr-1" />
                              {incident.affectedUser}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </TabsContent>

            <TabsContent value="compliance-reports" className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">Compliance Reports</h3>
                <Button size="sm">
                  <FileText className="h-4 w-4 mr-2" />
                  Generate Report
                </Button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Monthly HIPAA Report</CardTitle>
                    <CardDescription>Comprehensive compliance assessment</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Compliance Score:</span>
                        <span className="font-semibold text-green-600">98%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Risk Score:</span>
                        <span className="font-semibold text-blue-600">12/100</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Violations:</span>
                        <span className="font-semibold text-red-600">3</span>
                      </div>
                    </div>
                    <Button size="sm" variant="outline" className="w-full mt-4">
                      <Download className="h-4 w-4 mr-2" />
                      Download PDF
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Security Audit Trail</CardTitle>
                    <CardDescription>Detailed access logging report</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Total Accesses:</span>
                        <span className="font-semibold">1,247</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Flagged Activities:</span>
                        <span className="font-semibold text-yellow-600">15</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Data Breaches:</span>
                        <span className="font-semibold text-green-600">0</span>
                      </div>
                    </div>
                    <Button size="sm" variant="outline" className="w-full mt-4">
                      <Download className="h-4 w-4 mr-2" />
                      Download CSV
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}