import { Navigation } from "@/components/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Building,
  Shield,
  Users,
  Database,
  Zap,
  CheckCircle,
  ArrowRight,
  Vote,
  Globe,
  Lock,
  FileText,
  TrendingUp,
  Clock,
  Scale,
  Flag,
  User
} from "lucide-react";

export default function CivicCore() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900">
      <Navigation currentPage="civiccore" />
      
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-500 rounded-xl flex items-center justify-center">
                <Building className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
                CivicCore
              </h1>
            </div>
            <p className="text-2xl text-blue-600 dark:text-blue-400 font-semibold mb-4">
              Government & Public Services Platform
            </p>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              Secure blockchain infrastructure for government operations, citizen services, 
              voting systems, and public record management with enterprise-grade security and transparency.
            </p>
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Secure Government Operations
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                CivicCore provides government agencies with secure, transparent, and efficient 
                digital infrastructure for citizen services and public administration.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                  <span className="text-gray-700 dark:text-gray-300">Secure digital identity management</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                  <span className="text-gray-700 dark:text-gray-300">Transparent voting systems</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                  <span className="text-gray-700 dark:text-gray-300">Immutable public records</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                  <span className="text-gray-700 dark:text-gray-300">FISMA-compliant security</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Government Efficiency Metrics
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">75%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Process Automation</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">90%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Citizen Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Audit Compliance</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Service Access</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Comprehensive Government Solutions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Complete digital government platform with AI automation and blockchain security
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-500 rounded-lg flex items-center justify-center mb-4">
                  <User className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Digital Identity</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Secure citizen ID management</li>
                  <li>• Biometric verification</li>
                  <li>• Multi-factor authentication</li>
                  <li>• Privacy-protected records</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <Vote className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Voting Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Secure blockchain voting</li>
                  <li>• Real-time result verification</li>
                  <li>• Audit trail transparency</li>
                  <li>• Voter privacy protection</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-violet-500 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Public Records</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Immutable record keeping</li>
                  <li>• Digital document verification</li>
                  <li>• Automated compliance</li>
                  <li>• Transparent access logs</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Security & Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• FISMA security standards</li>
                  <li>• FedRAMP authorization</li>
                  <li>• Continuous monitoring</li>
                  <li>• Incident response</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-yellow-500 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Citizen Services</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Online service delivery</li>
                  <li>• Automated processing</li>
                  <li>• Multi-channel access</li>
                  <li>• Service tracking</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <CardTitle>AI Government Intelligence</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Policy impact analysis</li>
                  <li>• Resource optimization</li>
                  <li>• Citizen sentiment monitoring</li>
                  <li>• Predictive governance</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AI Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              AI-Powered Government Intelligence
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Advanced analytics and automation improving government efficiency and citizen services
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Intelligent Public Administration
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Predictive Policy Analysis</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      AI models analyze policy impacts and recommend optimizations for better citizen outcomes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Automated Service Delivery</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Machine learning streamlines government processes and reduces citizen wait times.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Security Intelligence</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      AI-powered threat detection and response protecting government infrastructure and data.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Government-Grade Solution
              </h3>
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Building className="h-10 w-10 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Secure Government Tablets</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  FISMA-compliant 10.5" Android tablets with CivicCore pre-installed for government operations.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-300">Security Level:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">FISMA High</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-300">Authorization:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">FedRAMP Ready</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-300">Support:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">Government 24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-500">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Coming Soon - Government Digital Transformation
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            CivicCore will modernize government operations with secure, transparent blockchain infrastructure
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white dark:bg-slate-900 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-300">
            © 2025 Bloqz Technologies. All rights reserved.<br />
            CivicCore - Secure Government Operations Through Blockchain Innovation.
          </p>
        </div>
      </footer>
    </div>
  );
}