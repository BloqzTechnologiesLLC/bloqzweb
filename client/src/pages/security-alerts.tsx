import { Navigation } from "@/components/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  AlertTriangle, 
  Shield,
  Bell,
  Eye,
  Lock,
  CheckCircle2,
  Clock,
  Users,
  Server,
  Network,
  Database,
  Zap
} from "lucide-react";

export default function SecurityAlertsPage() {
  const currentAlerts = [
    {
      id: "SA-2025-001",
      level: "Low",
      title: "Unusual Login Pattern Detected",
      description: "Multiple login attempts from new geographic location for enterprise account",
      timestamp: "2 minutes ago",
      system: "RxBridge Authentication",
      status: "Monitoring",
      actions: ["Geo-blocking enabled", "User notified", "Account flagged for review"],
      color: "yellow"
    },
    {
      id: "SA-2025-002", 
      level: "Medium",
      title: "API Rate Limit Threshold Approached",
      description: "VaultNet API approaching 80% of rate limit from client application",
      timestamp: "15 minutes ago",
      system: "VaultNet API Gateway",
      status: "Auto-Resolved",
      actions: ["Rate limiting applied", "Client contacted", "Additional capacity allocated"],
      color: "orange"
    }
  ];

  const recentThreats = [
    {
      date: "January 18, 2025",
      threat: "DDoS Attack Attempt",
      severity: "High",
      target: "Bloqz API Endpoints",
      blocked: "Yes",
      description: "Coordinated DDoS attack from botnet targeting main API endpoints",
      mitigation: "CDN protection activated, traffic filtered, source IPs blocked"
    },
    {
      date: "January 15, 2025",
      threat: "Credential Stuffing Attack",
      severity: "Medium", 
      target: "User Authentication System",
      blocked: "Yes",
      description: "Automated login attempts using compromised credential databases",
      mitigation: "CAPTCHA enabled, suspicious IPs blocked, users notified to update passwords"
    },
    {
      date: "January 12, 2025",
      threat: "SQL Injection Attempt",
      severity: "High",
      target: "CannaLink Database Interface",
      blocked: "Yes", 
      description: "Attempted SQL injection through inventory management forms",
      mitigation: "WAF rules updated, database permissions reviewed, code audit initiated"
    },
    {
      date: "January 8, 2025",
      threat: "Malware Upload Attempt",
      severity: "Medium",
      target: "Document Upload System",
      blocked: "Yes",
      description: "Malicious file upload attempt through compliance document portal",
      mitigation: "File scanning enhanced, upload restrictions tightened, user account reviewed"
    }
  ];

  const securityMetrics = [
    {
      metric: "Threats Blocked",
      value: "1,247",
      period: "Last 30 Days",
      trend: "up",
      description: "Automated threat detection and blocking"
    },
    {
      metric: "Mean Response Time",
      value: "3.2 min",
      period: "Average", 
      trend: "down",
      description: "From detection to initial response"
    },
    {
      metric: "False Positives",
      value: "0.03%",
      period: "Rate",
      trend: "down", 
      description: "Accuracy of threat detection system"
    },
    {
      metric: "Compliance Score",
      value: "99.7%",
      period: "Current",
      trend: "stable",
      description: "Overall security compliance rating"
    }
  ];

  const monitoringSystems = [
    {
      system: "SIEM Platform",
      status: "Active",
      monitored: "All Systems",
      events: "15,847/day",
      description: "Security Information and Event Management"
    },
    {
      system: "Intrusion Detection",
      status: "Active", 
      monitored: "Network Traffic",
      events: "2,156/hour",
      description: "Real-time network monitoring and analysis"
    },
    {
      system: "Vulnerability Scanner",
      status: "Active",
      monitored: "Infrastructure",
      events: "Daily Scans",
      description: "Automated vulnerability assessment"
    },
    {
      system: "Threat Intelligence",
      status: "Active",
      monitored: "Global Feeds",
      events: "Real-time",
      description: "External threat intelligence integration"
    }
  ];

  const alertCategories = [
    {
      category: "Authentication Anomalies",
      count: 23,
      severity: "Low-Medium",
      description: "Unusual login patterns and access attempts",
      icon: Lock,
      color: "yellow"
    },
    {
      category: "Network Intrusions",
      count: 8,
      severity: "Medium-High", 
      description: "Unauthorized network access attempts",
      icon: Network,
      color: "orange"
    },
    {
      category: "Data Access Violations",
      count: 4,
      severity: "High",
      description: "Unauthorized data access or modification attempts",
      icon: Database,
      color: "red"
    },
    {
      category: "System Vulnerabilities",
      count: 12,
      severity: "Medium",
      description: "Newly discovered security vulnerabilities",
      icon: Server,
      color: "blue"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <Navigation currentPage="security-alerts" />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-red-100 dark:bg-red-900/20 rounded-full">
                <AlertTriangle className="h-12 w-12 text-red-600" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Security <span className="text-red-600">Alerts</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Real-time security monitoring, threat detection, and incident response 
              across all Bloqz Technologies blockchain platforms and infrastructure.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-green-100 text-green-800">
                All Systems Secure
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-blue-100 text-blue-800">
                24/7 Monitoring
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-purple-100 text-purple-800">
                Real-Time Response
              </Badge>
            </div>
          </div>

          {/* Current Active Alerts */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Current Security Alerts
            </h2>
            {currentAlerts.length > 0 ? (
              <div className="space-y-4">
                {currentAlerts.map((alert, index) => (
                  <Card key={index} className={`border-l-4 ${
                    alert.color === 'red' ? 'border-red-500' :
                    alert.color === 'orange' ? 'border-orange-500' :
                    alert.color === 'yellow' ? 'border-yellow-500' : 'border-green-500'
                  }`}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <AlertTriangle className={`h-5 w-5 mr-3 ${
                            alert.color === 'red' ? 'text-red-500' :
                            alert.color === 'orange' ? 'text-orange-500' :
                            alert.color === 'yellow' ? 'text-yellow-500' : 'text-green-500'
                          }`} />
                          <div>
                            <CardTitle className="text-lg">{alert.title}</CardTitle>
                            <CardDescription className="text-sm">
                              Alert ID: {alert.id} • {alert.timestamp}
                            </CardDescription>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge 
                            variant="secondary" 
                            className={`${
                              alert.level === 'High' ? 'bg-red-100 text-red-800' :
                              alert.level === 'Medium' ? 'bg-orange-100 text-orange-800' :
                              'bg-yellow-100 text-yellow-800'
                            }`}
                          >
                            {alert.level}
                          </Badge>
                          <Badge variant="outline">{alert.status}</Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <p className="text-gray-600 dark:text-gray-300 mb-4">{alert.description}</p>
                          <div className="text-sm">
                            <span className="font-medium text-gray-900 dark:text-white">Affected System:</span>
                            <p className="text-gray-600 dark:text-gray-300">{alert.system}</p>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-white mb-2">Actions Taken:</h4>
                          <ul className="space-y-1">
                            {alert.actions.map((action, actionIndex) => (
                              <li key={actionIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                                <CheckCircle2 className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                                {action}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="text-center py-12">
                <CardContent>
                  <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    No Active Security Alerts
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    All systems are operating normally with no active security concerns.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Security Metrics */}
          <Card className="mb-16 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border-red-200 dark:border-red-800">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-red-600 mb-4">
                Security Performance Metrics
              </CardTitle>
              <CardDescription className="text-lg">
                Real-time security monitoring and response effectiveness
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {securityMetrics.map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-red-600 mb-2">{metric.value}</div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{metric.metric}</h3>
                    <p className="text-sm text-gray-500 mb-2">{metric.period}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-300">{metric.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Threats Blocked */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Recent Threats Blocked
            </h2>
            <div className="space-y-4">
              {recentThreats.map((threat, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <Shield className="h-5 w-5 text-green-500 mr-3" />
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white">{threat.threat}</h3>
                          <p className="text-sm text-gray-500">{threat.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge 
                          variant="secondary" 
                          className={`${
                            threat.severity === 'High' ? 'bg-red-100 text-red-800' :
                            threat.severity === 'Medium' ? 'bg-orange-100 text-orange-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}
                        >
                          {threat.severity}
                        </Badge>
                        <Badge variant="outline" className="bg-green-100 text-green-800">
                          Blocked
                        </Badge>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <div className="mb-3">
                          <span className="font-medium text-gray-900 dark:text-white">Target:</span>
                          <p className="text-gray-600 dark:text-gray-300">{threat.target}</p>
                        </div>
                        <div>
                          <span className="font-medium text-gray-900 dark:text-white">Description:</span>
                          <p className="text-gray-600 dark:text-gray-300">{threat.description}</p>
                        </div>
                      </div>
                      <div>
                        <span className="font-medium text-gray-900 dark:text-white">Mitigation Actions:</span>
                        <p className="text-gray-600 dark:text-gray-300">{threat.mitigation}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Alert Categories */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Alert Categories (Last 30 Days)
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {alertCategories.map((category, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className={`p-3 rounded-full w-fit mx-auto mb-4 bg-${category.color}-100 dark:bg-${category.color}-900/20`}>
                      <category.icon className={`h-6 w-6 text-${category.color}-600`} />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {category.count}
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {category.category}
                    </h3>
                    <Badge variant="outline" className="mb-3">
                      {category.severity}
                    </Badge>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {category.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Monitoring Systems */}
          <Card className="mb-16">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-gray-900 dark:text-white mb-4">
                Active Monitoring Systems
              </CardTitle>
              <CardDescription className="text-lg">
                Comprehensive security monitoring and threat detection infrastructure
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {monitoringSystems.map((system, index) => (
                  <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                        {system.system}
                      </h3>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        <Badge variant="outline" className="text-xs bg-green-100 text-green-800">
                          {system.status}
                        </Badge>
                      </div>
                    </div>
                    <div className="space-y-2 text-xs">
                      <div>
                        <span className="font-medium text-gray-900 dark:text-white">Monitoring:</span>
                        <p className="text-gray-600 dark:text-gray-300">{system.monitored}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-900 dark:text-white">Events:</span>
                        <p className="text-gray-600 dark:text-gray-300">{system.events}</p>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">{system.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Emergency Response */}
          <Card className="mb-16 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border-orange-200 dark:border-orange-800">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-orange-600 mb-4">
                24/7 Security Operations Center
              </CardTitle>
              <CardDescription className="text-lg">
                Round-the-clock security monitoring and incident response
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-full w-fit mx-auto mb-3">
                    <Eye className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Continuous Monitoring</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">24/7 automated threat detection and analysis</p>
                </div>
                <div>
                  <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-full w-fit mx-auto mb-3">
                    <Zap className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Rapid Response</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Average response time under 3 minutes</p>
                </div>
                <div>
                  <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-full w-fit mx-auto mb-3">
                    <Users className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Expert Team</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Certified security analysts and incident responders</p>
                </div>
                <div>
                  <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-full w-fit mx-auto mb-3">
                    <Bell className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Alert Escalation</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Automated escalation and notification system</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Security Incident Reporting
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Report security concerns or incidents immediately to our security team. 
              All reports are treated with the highest priority and confidentiality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                Report Security Incident
              </Button>
              <Button variant="outline" size="lg">
                Subscribe to Alerts
              </Button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}