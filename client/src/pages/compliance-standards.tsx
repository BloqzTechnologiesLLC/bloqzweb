import { Navigation } from "@/components/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  FileText,
  Globe,
  Building,
  Stethoscope,
  CreditCard,
  Factory,
  Users,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Book
} from "lucide-react";

export default function ComplianceStandardsPage() {
  const complianceStandards = [
    {
      name: "NIST Cybersecurity Framework",
      description: "Comprehensive cybersecurity risk management framework",
      applicability: "All Bloqz Technologies systems",
      status: "Fully Implemented",
      icon: Shield,
      color: "blue",
      details: "Five core functions: Identify, Protect, Detect, Respond, Recover"
    },
    {
      name: "ISO 27001/27002",
      description: "International information security management standards",
      applicability: "Global operations and data management",
      status: "Certified",
      icon: Globe,
      color: "green",
      details: "Information Security Management System (ISMS) controls"
    },
    {
      name: "SOC 2 Type II",
      description: "Service Organization Control for security and availability",
      applicability: "Cloud services and SaaS platforms",
      status: "Audited Annually",
      icon: Building,
      color: "purple",
      details: "Trust service criteria: Security, Availability, Confidentiality"
    },
    {
      name: "HIPAA/HITECH",
      description: "Healthcare data protection and privacy regulations",
      applicability: "RxBridge healthcare blockchain systems",
      status: "Compliant",
      icon: Stethoscope,
      color: "red",
      details: "Protected Health Information (PHI) safeguards"
    },
    {
      name: "PCI DSS",
      description: "Payment Card Industry Data Security Standard",
      applicability: "VaultNet financial transaction systems",
      status: "Level 1 Certified",
      icon: CreditCard,
      color: "orange",
      details: "Secure payment processing and cardholder data protection"
    },
    {
      name: "Cannabis Regulations",
      description: "State-specific cannabis compliance frameworks",
      applicability: "CannaLink supply chain systems",
      status: "Multi-State Compliant",
      icon: Factory,
      color: "green",
      details: "Seed-to-sale tracking and regulatory reporting"
    }
  ];

  const implementationAreas = [
    {
      area: "Data Protection & Privacy",
      standards: ["GDPR", "CCPA", "PIPEDA"],
      controls: 25,
      status: "Implemented",
      description: "Comprehensive data protection controls across all platforms"
    },
    {
      area: "Access Management",
      standards: ["NIST", "ISO 27001", "SOC 2"],
      controls: 18,
      status: "Implemented",
      description: "Role-based access controls and identity management"
    },
    {
      area: "Incident Response",
      standards: ["NIST CSF", "ISO 27035"],
      controls: 12,
      status: "Implemented", 
      description: "24/7 security incident detection and response procedures"
    },
    {
      area: "Business Continuity",
      standards: ["ISO 22301", "SOC 2"],
      controls: 15,
      status: "Implemented",
      description: "Disaster recovery and business continuity planning"
    },
    {
      area: "Risk Management",
      standards: ["ISO 31000", "COSO"],
      controls: 20,
      status: "Implemented",
      description: "Enterprise risk assessment and mitigation strategies"
    },
    {
      area: "Vendor Management",
      standards: ["SOC 2", "ISO 27001"],
      controls: 10,
      status: "Implemented",
      description: "Third-party risk assessment and vendor security requirements"
    }
  ];

  const industryCompliance = [
    {
      industry: "Healthcare",
      systems: ["RxBridge"],
      regulations: ["HIPAA", "HITECH", "FDA 21 CFR Part 11"],
      keyRequirements: ["PHI Protection", "Audit Trails", "Data Integrity", "Access Controls"]
    },
    {
      industry: "Financial Services",
      systems: ["VaultNet"],
      regulations: ["PCI DSS", "SOX", "GLBA", "FFIEC Guidelines"],
      keyRequirements: ["Payment Security", "Financial Reporting", "Consumer Privacy", "Operational Risk"]
    },
    {
      industry: "Cannabis",
      systems: ["CannaLink"],
      regulations: ["State Regulations", "Metrc Compliance", "Seed-to-Sale"],
      keyRequirements: ["Inventory Tracking", "Chain of Custody", "Regulatory Reporting", "Tax Compliance"]
    },
    {
      industry: "Government",
      systems: ["CivicCore"],
      regulations: ["FedRAMP", "FISMA", "NIST SP 800-53"],
      keyRequirements: ["Authority to Operate", "Continuous Monitoring", "Security Controls", "Risk Assessment"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <Navigation currentPage="compliance-standards" />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-blue-100 dark:bg-blue-900/20 rounded-full">
                <Book className="h-12 w-12 text-blue-600" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Compliance <span className="text-blue-600">Standards</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive adherence to international standards, industry regulations, and 
              best practices ensuring the highest levels of security, privacy, and operational excellence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-blue-100 text-blue-800">
                100+ Controls Implemented
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-green-100 text-green-800">
                Multi-Industry Compliance
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-purple-100 text-purple-800">
                Continuous Monitoring
              </Badge>
            </div>
          </div>

          {/* Compliance Standards Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Implemented Compliance Standards
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {complianceStandards.map((standard, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-blue-500">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-2 rounded-lg bg-${standard.color}-100 dark:bg-${standard.color}-900/20`}>
                        <standard.icon className={`h-6 w-6 text-${standard.color}-600`} />
                      </div>
                      <Badge 
                        variant="secondary" 
                        className={`
                          ${standard.color === 'green' ? 'bg-green-100 text-green-800' : ''}
                          ${standard.color === 'blue' ? 'bg-blue-100 text-blue-800' : ''}
                          ${standard.color === 'purple' ? 'bg-purple-100 text-purple-800' : ''}
                          ${standard.color === 'red' ? 'bg-red-100 text-red-800' : ''}
                          ${standard.color === 'orange' ? 'bg-orange-100 text-orange-800' : ''}
                        `}
                      >
                        {standard.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg mb-2">{standard.name}</CardTitle>
                    <CardDescription className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                      {standard.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="font-medium text-gray-900 dark:text-white">Applicability:</span>
                        <p className="text-gray-600 dark:text-gray-300">{standard.applicability}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-900 dark:text-white">Key Focus:</span>
                        <p className="text-gray-600 dark:text-gray-300">{standard.details}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Implementation Areas */}
          <Card className="mb-16">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-gray-900 dark:text-white mb-4">
                Control Implementation Areas
              </CardTitle>
              <CardDescription className="text-lg">
                Comprehensive security and compliance controls across all operational domains
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {implementationAreas.map((area, index) => (
                  <div key={index} className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-gray-900 dark:text-white">{area.area}</h3>
                      <Badge variant="outline" className="text-xs">
                        {area.controls} Controls
                      </Badge>
                    </div>
                    <div className="flex items-center mb-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-green-600 font-medium text-sm">{area.status}</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{area.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {area.standards.map((standard, stdIndex) => (
                        <Badge key={stdIndex} variant="secondary" className="text-xs">
                          {standard}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Industry-Specific Compliance */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Industry-Specific Compliance Requirements
            </h2>
            <div className="grid lg:grid-cols-2 gap-6">
              {industryCompliance.map((industry, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <CardTitle className="text-xl text-gray-900 dark:text-white">
                        {industry.industry}
                      </CardTitle>
                      <div className="flex gap-2">
                        {industry.systems.map((system, sysIndex) => (
                          <Badge key={sysIndex} variant="outline" className="text-xs">
                            {system}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">Applicable Regulations:</h4>
                        <div className="flex flex-wrap gap-2">
                          {industry.regulations.map((reg, regIndex) => (
                            <Badge key={regIndex} variant="secondary" className="text-xs">
                              {reg}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white mb-2">Key Requirements:</h4>
                        <ul className="grid grid-cols-2 gap-1 text-sm text-gray-600 dark:text-gray-300">
                          {industry.keyRequirements.map((req, reqIndex) => (
                            <li key={reqIndex} className="flex items-center">
                              <CheckCircle2 className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Compliance Management */}
          <Card className="mb-16 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border-green-200 dark:border-green-800">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-green-600 mb-4">
                Compliance Management Process
              </CardTitle>
              <CardDescription className="text-lg">
                Systematic approach to maintaining compliance across all standards and regulations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-full w-fit mx-auto mb-3">
                    <FileText className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Policy Development</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Comprehensive policies aligned with regulatory requirements</p>
                </div>
                <div>
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-full w-fit mx-auto mb-3">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Training & Awareness</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Regular compliance training for all team members</p>
                </div>
                <div>
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-full w-fit mx-auto mb-3">
                    <Clock className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Continuous Monitoring</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Real-time compliance monitoring and reporting</p>
                </div>
                <div>
                  <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-full w-fit mx-auto mb-3">
                    <CheckCircle2 className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Regular Audits</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Internal and external audits to verify compliance</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Compliance Standards Documentation
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Access detailed compliance standards documentation, control matrices, and implementation guides 
              for each regulatory framework and industry standard.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Download Standards Matrix
              </Button>
              <Button variant="outline" size="lg">
                Request Compliance Assessment
              </Button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}