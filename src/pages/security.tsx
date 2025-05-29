import { Navigation } from "@/components/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle, 
  Network,
  Database,
  Key,
  Fingerprint,
  Clock,
  Users,
  Server,
  CheckCircle2,
  Zap,
  Globe
} from "lucide-react";

export default function SecurityPage() {
  const securityFeatures = [
    {
      title: "Multi-Layer Encryption",
      description: "AES-256 encryption with quantum-resistant algorithms",
      icon: Lock,
      details: "End-to-end encryption for data at rest and in transit with future-proof cryptographic standards."
    },
    {
      title: "Zero-Trust Architecture",
      description: "Never trust, always verify security model",
      icon: Shield,
      details: "Comprehensive identity verification and device authentication for every access request."
    },
    {
      title: "Blockchain Immutability",
      description: "Tamper-proof transaction records",
      icon: Database,
      details: "Distributed ledger technology ensures data integrity and prevents unauthorized modifications."
    },
    {
      title: "Biometric Authentication",
      description: "Advanced multi-factor authentication",
      icon: Fingerprint,
      details: "Fingerprint, facial recognition, and voice verification for secure access control."
    },
    {
      title: "Real-Time Threat Detection",
      description: "AI-powered security monitoring",
      icon: Eye,
      details: "Continuous monitoring with machine learning algorithms to detect and prevent cyber threats."
    },
    {
      title: "Secure Key Management",
      description: "Hardware security modules (HSM)",
      icon: Key,
      details: "Enterprise-grade key generation, storage, and rotation with FIPS 140-2 Level 3 compliance."
    }
  ];

  const threatMitigation = [
    {
      threat: "Data Breaches",
      mitigation: "Zero-knowledge encryption and distributed storage",
      protection: "99.9% Secure",
      color: "green"
    },
    {
      threat: "Ransomware Attacks",
      mitigation: "Immutable backups and rapid recovery systems",
      protection: "Complete Protection",
      color: "green"
    },
    {
      threat: "Insider Threats",
      mitigation: "Role-based access controls and activity monitoring",
      protection: "Advanced Detection",
      color: "blue"
    },
    {
      threat: "DDoS Attacks",
      mitigation: "Distributed infrastructure and traffic filtering",
      protection: "Auto-Mitigation",
      color: "blue"
    },
    {
      threat: "Social Engineering",
      mitigation: "Multi-factor authentication and security training",
      protection: "Human Firewall",
      color: "purple"
    },
    {
      threat: "Supply Chain Attacks",
      mitigation: "Code signing and dependency verification",
      protection: "Verified Components",
      color: "purple"
    }
  ];

  const complianceFrameworks = [
    {
      framework: "NIST Cybersecurity Framework",
      description: "Comprehensive risk management approach",
      coverage: "100%",
      icon: Shield
    },
    {
      framework: "ISO 27001/27002",
      description: "Information security management standards",
      coverage: "Certified",
      icon: CheckCircle2
    },
    {
      framework: "SOC 2 Type II",
      description: "Security, availability, and confidentiality controls",
      coverage: "Audited",
      icon: Eye
    },
    {
      framework: "GDPR & Privacy Laws",
      description: "Data protection and privacy compliance",
      coverage: "Compliant",
      icon: Globe
    }
  ];

  const securityMetrics = [
    {
      metric: "Development Phase",
      value: "Active",
      period: "Security Framework Implementation",
      trend: "stable"
    },
    {
      metric: "Target Uptime",
      value: "99.9%",
      period: "Planned System Availability",
      trend: "up"
    },
    {
      metric: "Security Design",
      value: "Enterprise-Grade",
      period: "Multi-Layer Protection",
      trend: "up"
    },
    {
      metric: "Compliance Target",
      value: "SOC 2 Ready",
      period: "Industry Standards",
      trend: "stable"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <Navigation currentPage="security" />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-red-100 dark:bg-red-900/20 rounded-full">
                <Shield className="h-12 w-12 text-red-600" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Security & <span className="text-red-600">Risk Management</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Enterprise-grade security architecture protecting your blockchain infrastructure 
              with advanced threat detection, zero-trust principles, and comprehensive risk mitigation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-green-100 text-green-800">
                Zero Security Incidents
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-blue-100 text-blue-800">
                99.99% Uptime
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-purple-100 text-purple-800">
                Real-Time Monitoring
              </Badge>
            </div>
          </div>

          {/* Security Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Advanced Security Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {securityFeatures.map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-red-500">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className="p-2 bg-red-100 dark:bg-red-900/20 rounded-lg mr-3">
                        <feature.icon className="h-6 w-6 text-red-600" />
                      </div>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                    </div>
                    <CardDescription className="font-medium text-gray-700 dark:text-gray-300">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {feature.details}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Threat Mitigation */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Threat Mitigation Strategies
            </h2>
            <div className="grid lg:grid-cols-2 gap-6">
              {threatMitigation.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                        <AlertTriangle className="h-5 w-5 text-orange-500 mr-2" />
                        {item.threat}
                      </h3>
                      <Badge 
                        variant="secondary" 
                        className={`
                          ${item.color === 'green' ? 'bg-green-100 text-green-800' : ''}
                          ${item.color === 'blue' ? 'bg-blue-100 text-blue-800' : ''}
                          ${item.color === 'purple' ? 'bg-purple-100 text-purple-800' : ''}
                        `}
                      >
                        {item.protection}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      <span className="font-medium">Mitigation:</span> {item.mitigation}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Security Metrics */}
          <Card className="mb-16 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border-red-200 dark:border-red-800">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-red-600 mb-4">Security Performance Metrics</CardTitle>
              <CardDescription className="text-lg">
                Real-time security and performance indicators across all systems
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {securityMetrics.map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-red-600 mb-2">{metric.value}</div>
                    <div className="font-semibold text-gray-900 dark:text-white mb-1">{metric.metric}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">{metric.period}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Compliance Frameworks */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Security Compliance Frameworks
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {complianceFrameworks.map((framework, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-full">
                        <framework.icon className="h-8 w-8 text-blue-600" />
                      </div>
                    </div>
                    <CardTitle className="text-lg mb-2">{framework.framework}</CardTitle>
                    <Badge variant="outline" className="mb-4">{framework.coverage}</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {framework.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Security Architecture */}
          <Card className="mb-16">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-gray-900 dark:text-white mb-4">
                Multi-Layer Security Architecture
              </CardTitle>
              <CardDescription className="text-lg">
                Comprehensive defense-in-depth approach protecting every layer of the blockchain infrastructure
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="p-4 bg-gradient-to-br from-red-100 to-orange-100 dark:from-red-900/20 dark:to-orange-900/20 rounded-lg mb-4">
                    <Network className="h-8 w-8 text-red-600 mx-auto mb-2" />
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Network Security</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Firewalls, VPNs, intrusion detection, and network segmentation
                    </p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="p-4 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg mb-4">
                    <Server className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Application Security</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Secure coding, vulnerability scanning, and penetration testing
                    </p>
                  </div>
                </div>
                <div className="text-center">
                  <div className="p-4 bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg mb-4">
                    <Database className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Data Security</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Encryption, access controls, and blockchain immutability
                    </p>
                  </div>
                </div>
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
                Round-the-clock monitoring and incident response capabilities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-full w-fit mx-auto mb-3">
                    <Clock className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">24/7 Monitoring</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Continuous security monitoring and threat detection</p>
                </div>
                <div>
                  <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-full w-fit mx-auto mb-3">
                    <Zap className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Rapid Response</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Average incident response time under 15 minutes</p>
                </div>
                <div>
                  <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-full w-fit mx-auto mb-3">
                    <Users className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Expert Team</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Certified security professionals and incident handlers</p>
                </div>
                <div>
                  <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-full w-fit mx-auto mb-3">
                    <AlertTriangle className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Threat Intelligence</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Real-time threat feeds and proactive defense measures</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Security Questions or Concerns?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Our security team is available 24/7 to address any security-related questions 
              or to discuss your specific security requirements and compliance needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                Contact Security Team
              </Button>
              <Button variant="outline" size="lg">
                Download Security Whitepaper
              </Button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}