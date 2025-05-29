import { Navigation } from "@/components/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  Download,
  ExternalLink,
  BookOpen,
  Scale,
  Building,
  Globe,
  Users,
  AlertCircle,
  Calendar,
  Search
} from "lucide-react";

export default function RegulatoryResourcesPage() {
  const documentCategories = [
    {
      category: "Healthcare Compliance",
      description: "HIPAA, HITECH, and FDA regulatory documentation",
      documents: [
        { name: "HIPAA Compliance Manual", type: "PDF", size: "2.3 MB", updated: "Jan 2025" },
        { name: "HITECH Security Requirements", type: "PDF", size: "1.8 MB", updated: "Dec 2024" },
        { name: "FDA 21 CFR Part 11 Guide", type: "PDF", size: "3.1 MB", updated: "Nov 2024" },
        { name: "Healthcare Data Protection Policy", type: "PDF", size: "1.5 MB", updated: "Jan 2025" }
      ],
      icon: FileText,
      color: "red"
    },
    {
      category: "Financial Services",
      description: "Banking, payment processing, and financial compliance",
      documents: [
        { name: "PCI DSS Implementation Guide", type: "PDF", size: "4.2 MB", updated: "Dec 2024" },
        { name: "SOX Compliance Framework", type: "PDF", size: "2.7 MB", updated: "Jan 2025" },
        { name: "GLBA Privacy Requirements", type: "PDF", size: "1.9 MB", updated: "Nov 2024" },
        { name: "Anti-Money Laundering Policy", type: "PDF", size: "2.1 MB", updated: "Dec 2024" }
      ],
      icon: Building,
      color: "blue"
    },
    {
      category: "Cannabis Regulations",
      description: "State-specific cannabis compliance and tracking requirements",
      documents: [
        { name: "Multi-State Cannabis Compliance Guide", type: "PDF", size: "5.1 MB", updated: "Jan 2025" },
        { name: "Seed-to-Sale Tracking Manual", type: "PDF", size: "3.4 MB", updated: "Dec 2024" },
        { name: "Cannabis Tax Compliance", type: "PDF", size: "2.6 MB", updated: "Nov 2024" },
        { name: "Inventory Management Standards", type: "PDF", size: "1.8 MB", updated: "Jan 2025" }
      ],
      icon: Scale,
      color: "green"
    },
    {
      category: "Data Protection",
      description: "GDPR, CCPA, and international privacy regulations",
      documents: [
        { name: "GDPR Implementation Guide", type: "PDF", size: "3.8 MB", updated: "Jan 2025" },
        { name: "CCPA Compliance Manual", type: "PDF", size: "2.9 MB", updated: "Dec 2024" },
        { name: "Data Subject Rights Procedures", type: "PDF", size: "1.7 MB", updated: "Nov 2024" },
        { name: "Cross-Border Data Transfer Policy", type: "PDF", size: "2.3 MB", updated: "Jan 2025" }
      ],
      icon: Globe,
      color: "purple"
    }
  ];

  const regulatoryUpdates = [
    {
      date: "January 15, 2025",
      title: "New HIPAA Security Updates",
      description: "Recent updates to HIPAA security requirements affecting electronic health records",
      impact: "Medium",
      action: "Review and update security protocols",
      deadline: "March 15, 2025"
    },
    {
      date: "December 20, 2024",
      title: "Cannabis Compliance Changes - California",
      description: "Updated track-and-trace requirements for California cannabis operations",
      impact: "High",
      action: "Update CannaLink tracking protocols",
      deadline: "February 1, 2025"
    },
    {
      date: "November 30, 2024",
      title: "PCI DSS v4.0 Implementation",
      description: "New payment card industry standards coming into effect",
      impact: "High",
      action: "Upgrade VaultNet security controls",
      deadline: "March 31, 2025"
    },
    {
      date: "November 15, 2024",
      title: "GDPR Enforcement Updates",
      description: "New guidelines for AI and automated decision-making under GDPR",
      impact: "Medium",
      action: "Review AI compliance procedures",
      deadline: "April 1, 2025"
    }
  ];

  const trainingResources = [
    {
      title: "HIPAA Privacy and Security Training",
      duration: "2 hours",
      format: "Online Course",
      audience: "Healthcare Team",
      certification: "Yes",
      description: "Comprehensive training on HIPAA privacy and security requirements"
    },
    {
      title: "PCI DSS Security Awareness",
      duration: "1.5 hours",
      format: "Video Series",
      audience: "Development Team",
      certification: "Yes",
      description: "Payment card industry security standards and implementation"
    },
    {
      title: "Cannabis Compliance Fundamentals",
      duration: "3 hours",
      format: "Interactive Workshop",
      audience: "Cannabis Industry Team",
      certification: "Yes",
      description: "State regulations and compliance requirements for cannabis operations"
    },
    {
      title: "GDPR Data Protection Training",
      duration: "2.5 hours",
      format: "Online Course",
      audience: "All Staff",
      certification: "Yes",
      description: "European data protection regulations and privacy requirements"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <Navigation currentPage="regulatory-resources" />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-purple-100 dark:bg-purple-900/20 rounded-full">
                <BookOpen className="h-12 w-12 text-purple-600" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Regulatory <span className="text-purple-600">Resources</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive regulatory documentation, compliance guides, training materials, 
              and regulatory updates to ensure ongoing compliance across all industry verticals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-purple-100 text-purple-800">
                200+ Documents
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-blue-100 text-blue-800">
                Regular Updates
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-green-100 text-green-800">
                Training Resources
              </Badge>
            </div>
          </div>

          {/* Document Categories */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Compliance Documentation Library
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {documentCategories.map((category, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className={`p-3 rounded-lg bg-${category.color}-100 dark:bg-${category.color}-900/20 mr-4`}>
                        <category.icon className={`h-6 w-6 text-${category.color}-600`} />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-gray-900 dark:text-white">
                          {category.category}
                        </CardTitle>
                        <CardDescription className="text-gray-600 dark:text-gray-300">
                          {category.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {category.documents.map((doc, docIndex) => (
                        <div key={docIndex} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                          <div className="flex items-center">
                            <FileText className="h-4 w-4 text-gray-500 mr-3" />
                            <div>
                              <div className="font-medium text-gray-900 dark:text-white text-sm">
                                {doc.name}
                              </div>
                              <div className="text-xs text-gray-500">
                                {doc.type} • {doc.size} • Updated {doc.updated}
                              </div>
                            </div>
                          </div>
                          <Button size="sm" variant="outline">
                            <Download className="h-3 w-3 mr-1" />
                            Download
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Regulatory Updates */}
          <Card className="mb-16">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-gray-900 dark:text-white mb-4">
                Recent Regulatory Updates
              </CardTitle>
              <CardDescription className="text-lg">
                Stay informed about the latest regulatory changes affecting your industry
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {regulatoryUpdates.map((update, index) => (
                  <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center">
                        <Calendar className="h-5 w-5 text-gray-500 mr-3" />
                        <div>
                          <h3 className="font-semibold text-gray-900 dark:text-white">{update.title}</h3>
                          <p className="text-sm text-gray-500">{update.date}</p>
                        </div>
                      </div>
                      <Badge 
                        variant="secondary" 
                        className={`
                          ${update.impact === 'High' ? 'bg-red-100 text-red-800' : ''}
                          ${update.impact === 'Medium' ? 'bg-orange-100 text-orange-800' : ''}
                          ${update.impact === 'Low' ? 'bg-green-100 text-green-800' : ''}
                        `}
                      >
                        {update.impact} Impact
                      </Badge>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">{update.description}</p>
                    <div className="flex items-center justify-between text-sm">
                      <div>
                        <span className="font-medium text-gray-900 dark:text-white">Action Required:</span>
                        <span className="text-gray-600 dark:text-gray-300 ml-2">{update.action}</span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-900 dark:text-white">Deadline:</span>
                        <span className="text-gray-600 dark:text-gray-300 ml-2">{update.deadline}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Training Resources */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Compliance Training Resources
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {trainingResources.map((training, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-3">
                      <CardTitle className="text-lg text-gray-900 dark:text-white">
                        {training.title}
                      </CardTitle>
                      {training.certification && (
                        <Badge variant="outline" className="text-xs">
                          Certification Available
                        </Badge>
                      )}
                    </div>
                    <CardDescription className="text-gray-600 dark:text-gray-300">
                      {training.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                      <div>
                        <span className="font-medium text-gray-900 dark:text-white">Duration:</span>
                        <p className="text-gray-600 dark:text-gray-300">{training.duration}</p>
                      </div>
                      <div>
                        <span className="font-medium text-gray-900 dark:text-white">Format:</span>
                        <p className="text-gray-600 dark:text-gray-300">{training.format}</p>
                      </div>
                      <div className="col-span-2">
                        <span className="font-medium text-gray-900 dark:text-white">Target Audience:</span>
                        <p className="text-gray-600 dark:text-gray-300">{training.audience}</p>
                      </div>
                    </div>
                    <Button className="w-full">
                      Access Training
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Resource Search */}
          <Card className="mb-16 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-blue-200 dark:border-blue-800">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-blue-600 mb-4">
                Regulatory Resource Search
              </CardTitle>
              <CardDescription className="text-lg">
                Quickly find specific compliance documents, regulations, and guidance materials
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="max-w-2xl mx-auto">
                <div className="flex gap-3 mb-6">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input 
                      type="text" 
                      placeholder="Search regulations, documents, or compliance topics..."
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white"
                    />
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Search
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary" className="cursor-pointer hover:bg-gray-200">HIPAA</Badge>
                  <Badge variant="secondary" className="cursor-pointer hover:bg-gray-200">PCI DSS</Badge>
                  <Badge variant="secondary" className="cursor-pointer hover:bg-gray-200">GDPR</Badge>
                  <Badge variant="secondary" className="cursor-pointer hover:bg-gray-200">Cannabis</Badge>
                  <Badge variant="secondary" className="cursor-pointer hover:bg-gray-200">SOX</Badge>
                  <Badge variant="secondary" className="cursor-pointer hover:bg-gray-200">ISO 27001</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Need Additional Regulatory Guidance?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Our compliance team is available to provide additional regulatory guidance, 
              custom documentation, and specialized training for your specific industry requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Contact Compliance Team
              </Button>
              <Button variant="outline" size="lg">
                Request Custom Documentation
              </Button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}