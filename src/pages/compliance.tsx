import { Navigation } from "@/components/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  FileText, 
  CheckCircle, 
  Lock, 
  Globe, 
  Award,
  Users,
  Database,
  Eye,
  AlertTriangle,
  Clock,
  Star
} from "lucide-react";

export default function CompliancePage() {
  const complianceStandards = [
    {
      title: "HIPAA Compliance",
      description: "Healthcare Information Portability and Accountability Act",
      systems: ["RxBridge"],
      status: "Certified",
      icon: Shield,
      details: "Full HIPAA compliance for healthcare data protection, patient privacy, and secure data transmission."
    },
    {
      title: "SOC 2 Type II",
      description: "Service Organization Control 2 Certification",
      systems: ["All Systems"],
      status: "Certified",
      icon: Lock,
      details: "Comprehensive security, availability, processing integrity, confidentiality, and privacy controls."
    },
    {
      title: "ISO 27001",
      description: "Information Security Management System",
      systems: ["All Systems"],
      status: "Certified", 
      icon: Award,
      details: "International standard for information security management systems and risk management."
    },
    {
      title: "GDPR Compliance",
      description: "General Data Protection Regulation",
      systems: ["All Systems"],
      status: "Compliant",
      icon: Globe,
      details: "European Union data protection and privacy regulation compliance for global operations."
    },
    {
      title: "PCI DSS",
      description: "Payment Card Industry Data Security Standard",
      systems: ["VaultNet", "ShopChain", "DineSync"],
      status: "Certified",
      icon: FileText,
      details: "Secure payment processing and financial data protection standards."
    },
    {
      title: "FDA 21 CFR Part 11",
      description: "Electronic Records and Signatures",
      systems: ["RxBridge", "CannaLink"],
      status: "Validated",
      icon: CheckCircle,
      details: "Regulatory compliance for electronic records in healthcare and pharmaceutical industries."
    }
  ];

  const auditFeatures = [
    {
      title: "Real-Time Monitoring",
      description: "Continuous compliance monitoring across all blockchain systems",
      icon: Eye
    },
    {
      title: "Automated Reporting",
      description: "Scheduled compliance reports and regulatory documentation",
      icon: FileText
    },
    {
      title: "Risk Assessment",
      description: "Proactive risk identification and mitigation strategies",
      icon: AlertTriangle
    },
    {
      title: "Audit Trail",
      description: "Immutable blockchain-based audit logs for all transactions",
      icon: Clock
    },
    {
      title: "Data Governance",
      description: "Comprehensive data lifecycle management and protection",
      icon: Database
    },
    {
      title: "Third-Party Validation",
      description: "Independent security assessments and penetration testing",
      icon: Star
    }
  ];

  const industryCompliance = [
    {
      industry: "Healthcare",
      regulations: ["HIPAA", "FDA 21 CFR Part 11", "HITECH Act", "State Privacy Laws"],
      systems: ["RxBridge"]
    },
    {
      industry: "Financial Services", 
      regulations: ["PCI DSS", "SOX", "FFIEC", "Anti-Money Laundering"],
      systems: ["VaultNet"]
    },
    {
      industry: "Cannabis",
      regulations: ["State Tracking Laws", "FDA Guidelines", "DEA Compliance"],
      systems: ["CannaLink"]
    },
    {
      industry: "Real Estate",
      regulations: ["RESPA", "TILA", "Fair Housing Act", "State Regulations"],
      systems: ["MetaEstate"]
    },
    {
      industry: "Energy & Utilities",
      regulations: ["NERC CIP", "FERC", "EPA Guidelines", "State Utility Commissions"],
      systems: ["GridFlux"]
    },
    {
      industry: "Government",
      regulations: ["FedRAMP", "FISMA", "NIST Framework", "Section 508"],
      systems: ["CivicCore"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <Navigation currentPage="compliance" />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-blue-100 dark:bg-blue-900/20 rounded-full">
                <Shield className="h-12 w-12 text-blue-600" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Compliance & <span className="text-blue-600">Certifications</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Maintaining the highest standards of regulatory compliance, security, and data protection 
              across all blockchain solutions and industry verticals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                SOC 2 Type II Certified
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                ISO 27001 Compliant
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                HIPAA Validated
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                GDPR Compliant
              </Badge>
            </div>
          </div>

          {/* Compliance Standards */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Certification Standards
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {complianceStandards.map((standard, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <standard.icon className="h-8 w-8 text-blue-600" />
                      <Badge 
                        variant={standard.status === "Certified" ? "default" : "secondary"}
                        className="text-xs"
                      >
                        {standard.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{standard.title}</CardTitle>
                    <CardDescription>{standard.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                      {standard.details}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {standard.systems.map((system, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {system}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Audit & Monitoring Features */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Audit & Monitoring Capabilities
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {auditFeatures.map((feature, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-full">
                        <feature.icon className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Industry-Specific Compliance */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Industry-Specific Regulations
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {industryCompliance.map((industry, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg text-blue-600">{industry.industry}</CardTitle>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {industry.systems.map((system, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {system}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {industry.regulations.map((regulation, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-sm text-gray-600 dark:text-gray-300">{regulation}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Data Protection & Privacy */}
          <Card className="mb-16 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-blue-200 dark:border-blue-800">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-blue-600 mb-4">Data Protection & Privacy</CardTitle>
              <CardDescription className="text-lg">
                Comprehensive data protection measures across all blockchain systems
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full w-fit mx-auto mb-3">
                    <Lock className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">End-to-End Encryption</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">AES-256 encryption for all data transmission and storage</p>
                </div>
                <div>
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full w-fit mx-auto mb-3">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Access Controls</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Role-based permissions and multi-factor authentication</p>
                </div>
                <div>
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full w-fit mx-auto mb-3">
                    <Database className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Data Residency</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Configurable data storage locations for regulatory compliance</p>
                </div>
                <div>
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full w-fit mx-auto mb-3">
                    <Eye className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Audit Logging</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Immutable blockchain-based audit trails for all activities</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Questions About Compliance?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Our compliance team is ready to discuss your regulatory requirements and 
              how our blockchain solutions can meet your industry-specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Contact Compliance Team
              </Button>
              <Button variant="outline" size="lg">
                Download Compliance Documentation
              </Button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}