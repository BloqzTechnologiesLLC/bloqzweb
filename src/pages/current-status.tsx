import { Navigation } from "@/components/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Activity, 
  CheckCircle2,
  AlertTriangle,
  Clock,
  Server,
  Shield,
  Users,
  Globe,
  Zap,
  Database,
  Network,
  TrendingUp
} from "lucide-react";

export default function CurrentStatusPage() {
  const systemStatus = [
    {
      system: "RxBridge Healthcare",
      status: "Operational",
      uptime: "99.98%",
      lastUpdate: "2 minutes ago",
      users: "25,000+",
      color: "green"
    },
    {
      system: "VaultNet Financial",
      status: "Operational", 
      uptime: "99.97%",
      lastUpdate: "1 minute ago",
      users: "18,500+",
      color: "green"
    },
    {
      system: "CannaLink Cannabis",
      status: "Operational",
      uptime: "99.95%",
      lastUpdate: "3 minutes ago", 
      users: "12,200+",
      color: "green"
    },
    {
      system: "ArrowChain Platform",
      status: "Operational",
      uptime: "99.99%",
      lastUpdate: "1 minute ago",
      users: "45,000+",
      color: "green"
    },
    {
      system: "GridFlux Energy",
      status: "Maintenance",
      uptime: "99.92%",
      lastUpdate: "15 minutes ago",
      users: "8,500+",
      color: "orange"
    },
    {
      system: "CivicCore Government",
      status: "Operational",
      uptime: "99.94%",
      lastUpdate: "5 minutes ago",
      users: "15,000+",
      color: "green"
    }
  ];

  const performanceMetrics = [
    {
      metric: "Global Uptime",
      value: "99.96%",
      trend: "up",
      description: "Average across all systems",
      target: "99.95%"
    },
    {
      metric: "Response Time",
      value: "125ms",
      trend: "stable",
      description: "Average API response time",
      target: "< 150ms"
    },
    {
      metric: "Active Users",
      value: "124,200",
      trend: "up",
      description: "Currently active across all platforms",
      target: "Growing"
    },
    {
      metric: "Transactions/sec",
      value: "2,847",
      trend: "up", 
      description: "Peak blockchain transactions",
      target: "< 3,000"
    }
  ];

  const recentIncidents = [
    {
      date: "January 18, 2025",
      title: "GridFlux Scheduled Maintenance",
      severity: "Planned",
      status: "In Progress",
      duration: "2 hours",
      impact: "Minimal - Energy reporting delayed",
      resolution: "Completing infrastructure upgrades"
    },
    {
      date: "January 12, 2025", 
      title: "Database Performance Optimization",
      severity: "Low",
      status: "Resolved",
      duration: "45 minutes",
      impact: "Slight response time increase",
      resolution: "Query optimization completed successfully"
    },
    {
      date: "January 8, 2025",
      title: "Network Latency - East Coast",
      severity: "Medium",
      status: "Resolved", 
      duration: "1.5 hours",
      impact: "Increased latency for East Coast users",
      resolution: "CDN configuration updated and optimized"
    }
  ];

  const maintenanceSchedule = [
    {
      date: "January 25, 2025",
      time: "02:00 - 04:00 EST",
      system: "Database Cluster Upgrade",
      impact: "Minor performance impact",
      notification: "48 hours advance notice"
    },
    {
      date: "February 1, 2025", 
      time: "01:00 - 03:00 EST",
      system: "Security Certificate Renewal",
      impact: "No user impact expected",
      notification: "1 week advance notice"
    },
    {
      date: "February 8, 2025",
      time: "03:00 - 05:00 EST", 
      system: "ArrowChain Platform Enhancement",
      impact: "Brief API rate limiting",
      notification: "1 week advance notice"
    }
  ];

  const complianceStatus = [
    {
      framework: "HIPAA Compliance",
      status: "Compliant",
      lastAudit: "December 2024",
      nextReview: "March 2025",
      scope: "RxBridge Healthcare Systems"
    },
    {
      framework: "SOC 2 Type II",
      status: "Certified",
      lastAudit: "January 2025", 
      nextReview: "January 2026",
      scope: "All Cloud Infrastructure"
    },
    {
      framework: "PCI DSS Level 1",
      status: "Certified",
      lastAudit: "November 2024",
      nextReview: "November 2025", 
      scope: "VaultNet Payment Processing"
    },
    {
      framework: "ISO 27001",
      status: "Certified",
      lastAudit: "October 2024",
      nextReview: "October 2027",
      scope: "Global Security Management"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <Navigation currentPage="current-status" />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-green-100 dark:bg-green-900/20 rounded-full">
                <Activity className="h-12 w-12 text-green-600" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Current <span className="text-green-600">Status</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Real-time system status, performance metrics, and operational updates 
              across all Bloqz Technologies blockchain platforms and infrastructure.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-green-100 text-green-800">
                All Systems Operational
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-blue-100 text-blue-800">
                99.96% Uptime
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-purple-100 text-purple-800">
                124K+ Active Users
              </Badge>
            </div>
          </div>

          {/* System Status Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              System Status Overview
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {systemStatus.map((system, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className={`w-3 h-3 rounded-full mr-3 ${
                          system.color === 'green' ? 'bg-green-500' : 
                          system.color === 'orange' ? 'bg-orange-500' : 'bg-red-500'
                        }`}></div>
                        <CardTitle className="text-lg">{system.system}</CardTitle>
                      </div>
                      <Badge 
                        variant="secondary" 
                        className={`
                          ${system.color === 'green' ? 'bg-green-100 text-green-800' : ''}
                          ${system.color === 'orange' ? 'bg-orange-100 text-orange-800' : ''}
                          ${system.color === 'red' ? 'bg-red-100 text-red-800' : ''}
                        `}
                      >
                        {system.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-300">Uptime:</span>
                        <span className="font-medium text-gray-900 dark:text-white">{system.uptime}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-300">Active Users:</span>
                        <span className="font-medium text-gray-900 dark:text-white">{system.users}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-300">Last Update:</span>
                        <span className="font-medium text-gray-900 dark:text-white">{system.lastUpdate}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Performance Metrics */}
          <Card className="mb-16 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border-green-200 dark:border-green-800">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-green-600 mb-4">
                Live Performance Metrics
              </CardTitle>
              <CardDescription className="text-lg">
                Real-time performance indicators across all blockchain systems
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {performanceMetrics.map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <div className="text-3xl font-bold text-green-600">{metric.value}</div>
                      {metric.trend === 'up' && (
                        <TrendingUp className="h-5 w-5 text-green-500 ml-2" />
                      )}
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{metric.metric}</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-300 mb-2">{metric.description}</p>
                    <Badge variant="outline" className="text-xs">
                      Target: {metric.target}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Incidents */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-gray-900 dark:text-white mb-4">
                  Recent Incidents & Maintenance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentIncidents.map((incident, index) => (
                    <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                          {incident.title}
                        </h3>
                        <div className="flex items-center gap-2">
                          <Badge 
                            variant="outline" 
                            className={`text-xs ${
                              incident.severity === 'Planned' ? 'bg-blue-100 text-blue-800' :
                              incident.severity === 'Low' ? 'bg-green-100 text-green-800' :
                              incident.severity === 'Medium' ? 'bg-orange-100 text-orange-800' : ''
                            }`}
                          >
                            {incident.severity}
                          </Badge>
                          <Badge 
                            variant="outline" 
                            className={`text-xs ${
                              incident.status === 'Resolved' ? 'bg-green-100 text-green-800' :
                              incident.status === 'In Progress' ? 'bg-orange-100 text-orange-800' : ''
                            }`}
                          >
                            {incident.status}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500 mb-2">{incident.date} • Duration: {incident.duration}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                        <span className="font-medium">Impact:</span> {incident.impact}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        <span className="font-medium">Resolution:</span> {incident.resolution}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-gray-900 dark:text-white mb-4">
                  Scheduled Maintenance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {maintenanceSchedule.map((maintenance, index) => (
                    <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                          {maintenance.system}
                        </h3>
                        <Clock className="h-4 w-4 text-gray-500" />
                      </div>
                      <div className="grid grid-cols-1 gap-2 text-xs text-gray-500 mb-2">
                        <div>{maintenance.date}</div>
                        <div>{maintenance.time}</div>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                        <span className="font-medium">Impact:</span> {maintenance.impact}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        <span className="font-medium">Notification:</span> {maintenance.notification}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Compliance Status */}
          <Card className="mb-16">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-gray-900 dark:text-white mb-4">
                Compliance & Certification Status
              </CardTitle>
              <CardDescription className="text-lg">
                Current compliance standing across all regulatory frameworks
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {complianceStatus.map((compliance, index) => (
                  <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                        {compliance.framework}
                      </h3>
                      <div className="flex items-center">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mr-1" />
                        <Badge variant="outline" className="text-xs bg-green-100 text-green-800">
                          {compliance.status}
                        </Badge>
                      </div>
                    </div>
                    <div className="space-y-2 text-xs">
                      <div>
                        <span className="font-medium text-gray-900 dark:text-white">Last Audit:</span>
                        <p className="text-gray-600 dark:text-gray-300">{compliance.lastAudit}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-900 dark:text-white">Next Review:</span>
                        <p className="text-gray-600 dark:text-gray-300">{compliance.nextReview}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-900 dark:text-white">Scope:</span>
                        <p className="text-gray-600 dark:text-gray-300">{compliance.scope}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Infrastructure Status */}
          <Card className="mb-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-blue-200 dark:border-blue-800">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-blue-600 mb-4">
                Infrastructure Health
              </CardTitle>
              <CardDescription className="text-lg">
                Core infrastructure components and global distribution status
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full w-fit mx-auto mb-3">
                    <Server className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Servers</h3>
                  <p className="text-2xl font-bold text-blue-600 mb-1">99.98%</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Operational</p>
                </div>
                <div>
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full w-fit mx-auto mb-3">
                    <Database className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Databases</h3>
                  <p className="text-2xl font-bold text-blue-600 mb-1">99.97%</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Healthy</p>
                </div>
                <div>
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full w-fit mx-auto mb-3">
                    <Network className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Network</h3>
                  <p className="text-2xl font-bold text-blue-600 mb-1">99.99%</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Optimal</p>
                </div>
                <div>
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full w-fit mx-auto mb-3">
                    <Globe className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Global CDN</h3>
                  <p className="text-2xl font-bold text-blue-600 mb-1">99.96%</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Available</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Status Updates & Notifications
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Subscribe to receive real-time status updates, maintenance notifications, 
              and incident reports for all Bloqz Technologies systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Subscribe to Status Updates
              </Button>
              <Button variant="outline" size="lg">
                View Historical Data
              </Button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}