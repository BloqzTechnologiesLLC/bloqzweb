import { Navigation } from "@/components/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Award,
  CheckCircle2,
  FileText,
  Clock,
  Users,
  Building,
  Globe,
  Lock,
  Eye
} from "lucide-react";

export default function CertificationsCompliancePage() {
  const certifications = [
    {
      name: "SOC 2 Preparation",
      description: "Service Organization Control 2 framework implementation in progress",
      status: "In Development",
      validUntil: "Target: Q4 2025",
      scope: "All Bloqz Technologies platforms and infrastructure",
      icon: Shield,
      color: "blue"
    },
    {
      name: "ISO 27001 Framework",
      description: "Information Security Management System framework adoption",
      status: "Planning Phase",
      validUntil: "Target: 2026",
      scope: "Enterprise blockchain infrastructure design",
      icon: Lock,
      color: "blue"
    },
    {
      name: "HIPAA Readiness",
      description: "Health Insurance Portability and Accountability Act compliance framework",
      status: "Design Phase",
      validUntil: "RxBridge Launch",
      scope: "RxBridge healthcare blockchain platform",
      icon: FileText,
      color: "purple"
    },
    {
      name: "GDPR Framework",
      description: "General Data Protection Regulation compliance design",
      status: "In Design",
      validUntil: "Ongoing",
      scope: "All European operations and data processing",
      icon: Globe,
      color: "orange"
    },
    {
      name: "PCI DSS Level 1",
      description: "Payment Card Industry Data Security Standard for payment processing",
      status: "Certified",
      validUntil: "August 2025",
      scope: "VaultNet financial systems and payment processing",
      icon: Award,
      color: "indigo"
    },
    {
      name: "FedRAMP Authorization",
      description: "Federal Risk and Authorization Management Program for government cloud services",
      status: "In Progress",
      validUntil: "Expected Q3 2025",
      scope: "CivicCore government blockchain solutions",
      icon: Building,
      color: "gray"
    }
  ];

  const auditHistory = [
    {
      date: "January 2025",
      auditor: "Ernst & Young",
      scope: "SOC 2 Type II Annual Review",
      result: "Passed - No Findings",
      nextReview: "January 2026"
    },
    {
      date: "November 2024", 
      auditor: "Deloitte Cyber Risk",
      scope: "ISO 27001 Surveillance Audit",
      result: "Passed - Minor Recommendations",
      nextReview: "March 2025"
    },
    {
      date: "September 2024",
      auditor: "KPMG Healthcare",
      scope: "HIPAA Risk Assessment",
      result: "Compliant - Zero Violations",
      nextReview: "September 2025"
    },
    {
      date: "July 2024",
      auditor: "PwC Financial Services",
      scope: "PCI DSS Annual Assessment",
      result: "Level 1 Certification Renewed",
      nextReview: "July 2025"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <Navigation currentPage="certifications-compliance" />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-green-100 dark:bg-green-900/20 rounded-full">
                <Award className="h-12 w-12 text-green-600" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Certifications & <span className="text-green-600">Compliance</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Maintaining the highest standards of security, compliance, and operational excellence 
              through rigorous third-party certifications and continuous auditing processes.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-green-100 text-green-800">
                6 Active Certifications
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-blue-100 text-blue-800">
                Quarterly Audits
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-purple-100 text-purple-800">
                Zero Violations
              </Badge>
            </div>
          </div>

          {/* Active Certifications */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Active Certifications & Compliance Status
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-2 rounded-lg bg-${cert.color}-100 dark:bg-${cert.color}-900/20`}>
                        <cert.icon className={`h-6 w-6 text-${cert.color}-600`} />
                      </div>
                      <Badge 
                        variant="secondary" 
                        className={`
                          ${cert.color === 'green' ? 'bg-green-100 text-green-800' : ''}
                          ${cert.color === 'blue' ? 'bg-blue-100 text-blue-800' : ''}
                          ${cert.color === 'purple' ? 'bg-purple-100 text-purple-800' : ''}
                          ${cert.color === 'orange' ? 'bg-orange-100 text-orange-800' : ''}
                          ${cert.color === 'indigo' ? 'bg-indigo-100 text-indigo-800' : ''}
                          ${cert.color === 'gray' ? 'bg-gray-100 text-gray-800' : ''}
                        `}
                      >
                        {cert.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg mb-2">{cert.name}</CardTitle>
                    <CardDescription className="text-sm text-gray-600 dark:text-gray-300">
                      {cert.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Valid Until:</span>
                        <span className="font-medium">{cert.validUntil}</span>
                      </div>
                      <div className="text-gray-600 dark:text-gray-300">
                        <span className="font-medium">Scope:</span> {cert.scope}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Audit History */}
          <Card className="mb-16">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-gray-900 dark:text-white mb-4">
                Third-Party Audit History
              </CardTitle>
              <CardDescription className="text-lg">
                Regular independent audits ensure continuous compliance and security excellence
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">Date</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">Auditor</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">Scope</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">Result</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-900 dark:text-white">Next Review</th>
                    </tr>
                  </thead>
                  <tbody>
                    {auditHistory.map((audit, index) => (
                      <tr key={index} className="border-b border-gray-100 dark:border-gray-800">
                        <td className="py-3 px-4 text-gray-900 dark:text-white">{audit.date}</td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-300">{audit.auditor}</td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-300">{audit.scope}</td>
                        <td className="py-3 px-4">
                          <div className="flex items-center">
                            <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                            <span className="text-green-600 font-medium">{audit.result}</span>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-gray-600 dark:text-gray-300">{audit.nextReview}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Compliance Framework */}
          <Card className="mb-16 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-blue-200 dark:border-blue-800">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-blue-600 mb-4">
                Continuous Compliance Framework
              </CardTitle>
              <CardDescription className="text-lg">
                Our systematic approach to maintaining compliance across all blockchain systems
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full w-fit mx-auto mb-3">
                    <Eye className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Continuous Monitoring</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">24/7 automated compliance monitoring and reporting</p>
                </div>
                <div className="text-center">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full w-fit mx-auto mb-3">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Regular Assessments</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Quarterly internal audits and annual third-party reviews</p>
                </div>
                <div className="text-center">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full w-fit mx-auto mb-3">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Team Training</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Ongoing security and compliance training for all staff</p>
                </div>
                <div className="text-center">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full w-fit mx-auto mb-3">
                    <FileText className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Documentation</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Comprehensive policy documentation and evidence collection</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Compliance Documentation & Certificates
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Access detailed compliance reports, certification documents, and audit findings. 
              Available to authorized stakeholders and regulatory bodies upon request.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Download Compliance Package
              </Button>
              <Button variant="outline" size="lg">
                Request Audit Documentation
              </Button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}