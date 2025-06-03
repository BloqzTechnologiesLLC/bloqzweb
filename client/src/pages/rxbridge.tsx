import { Navigation } from "@/components/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DynamicBackground, DynamicButton } from "@/components/DynamicBackground";
import { useIndustryTheme } from "@/contexts/ThemeContext";
import { AnimatedCard, AnimatedButton, AnimatedIcon, FadeIn, Floating, Glow } from "@/components/AnimatedElements";
import { 
  Stethoscope,
  Shield,
  Users,
  Database,
  Zap,
  CheckCircle,
  ArrowRight,
  Pill,
  Building2,
  Globe,
  Lock,
  Network,
  FileText,
  TrendingUp,
  Clock,
  DollarSign
} from "lucide-react";

export default function RxBridge() {
  const currentTheme = useIndustryTheme();
  
  return (
    <DynamicBackground>
      <Navigation currentPage="rxbridge" />
      
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-500 rounded-xl flex items-center justify-center">
                <Stethoscope className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
                RxBridge
              </h1>
            </div>
            
            <p className="text-2xl text-green-600 dark:text-green-400 font-semibold mb-4">
              Healthcare & Prescription Management Platform
            </p>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              Connecting patients, doctors, pharmacies, and insurers across platforms with secure, 
              transparent blockchain technology that revolutionizes healthcare delivery.
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
                Revolutionizing Healthcare Infrastructure
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                RxBridge creates a unified ecosystem where all healthcare stakeholders can securely 
                interact, share information, and process transactions with complete transparency and trust.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="text-gray-700 dark:text-gray-300">Secure patient data management</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="text-gray-700 dark:text-gray-300">Real-time prescription tracking</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="text-gray-700 dark:text-gray-300">Automated insurance processing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <span className="text-gray-700 dark:text-gray-300">HIPAA-compliant blockchain architecture</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Key Statistics
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">99.9%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Uptime Guarantee</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">&lt;3s</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Transaction Speed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">256-bit</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Encryption</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Support</div>
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
              Comprehensive Healthcare Solutions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Integrated modules that work together to create a seamless healthcare experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeIn delay={200}>
              <AnimatedCard className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <Card className="h-full border-0 bg-white dark:bg-slate-800">
                  <CardHeader>
                    <Glow color="blue" intensity="light">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                        <AnimatedIcon hoverScale={1.2} hoverRotate={15}>
                          <Users className="h-6 w-6 text-white" />
                        </AnimatedIcon>
                      </div>
                    </Glow>
                    <CardTitle className="group-hover:text-blue-600 transition-colors duration-300">Patient Portal</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li className="hover:text-blue-600 transition-colors duration-200">• Secure health record access</li>
                      <li className="hover:text-blue-600 transition-colors duration-200">• Prescription management</li>
                      <li className="hover:text-blue-600 transition-colors duration-200">• Appointment scheduling</li>
                      <li className="hover:text-blue-600 transition-colors duration-200">• Real-time notifications</li>
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedCard>
            </FadeIn>

            <FadeIn delay={400}>
              <AnimatedCard className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <Card className="h-full border-0 bg-white dark:bg-slate-800">
                  <CardHeader>
                    <Glow color="green" intensity="light">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-500 rounded-lg flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300">
                        <AnimatedIcon hoverScale={1.2} hoverRotate={15}>
                          <Stethoscope className="h-6 w-6 text-white" />
                        </AnimatedIcon>
                      </div>
                    </Glow>
                    <CardTitle className="group-hover:text-green-600 transition-colors duration-300">Doctor Dashboard</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li className="hover:text-green-600 transition-colors duration-200">• Electronic prescribing</li>
                      <li className="hover:text-green-600 transition-colors duration-200">• Patient history access</li>
                      <li className="hover:text-green-600 transition-colors duration-200">• Drug interaction alerts</li>
                      <li className="hover:text-green-600 transition-colors duration-200">• Clinical decision support</li>
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedCard>
            </FadeIn>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-violet-500 rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Pharmacy System</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Inventory management</li>
                  <li>• Prescription verification</li>
                  <li>• Patient counseling tools</li>
                  <li>• Insurance processing</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-500 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Insurance Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Automated claims processing</li>
                  <li>• Prior authorization</li>
                  <li>• Fraud detection</li>
                  <li>• Cost transparency</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <Database className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Data Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Population health insights</li>
                  <li>• Prescription trends</li>
                  <li>• Cost optimization</li>
                  <li>• Outcome tracking</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <CardTitle>AI-Powered Intelligence</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Drug interaction predictions</li>
                  <li>• Dosage optimization recommendations</li>
                  <li>• Clinical decision support</li>
                  <li>• Automated health insights</li>
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
              AI-Powered Healthcare Intelligence
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Advanced artificial intelligence integrated throughout the platform to enhance clinical decisions and patient outcomes
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Intelligent Clinical Support
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <Zap className="h-4 w-4 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Drug Interaction Analysis</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Real-time AI analysis of medication combinations to prevent adverse reactions and optimize treatment plans.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Predictive Health Analytics</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Machine learning algorithms identify health trends and potential risks before they become critical issues.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Personalized Treatment Recommendations</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      AI-driven suggestions based on patient history, genetics, and treatment response patterns.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Ready-to-Use Solution
              </h3>
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Building2 className="h-10 w-10 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Pre-Installed Android Tablets</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Complete RxBridge solution delivered on enterprise-grade 10.5" Android tablets, ready for immediate deployment.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-300">Setup Time:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">Under 5 minutes</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-300">Training Required:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">Minimal</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-300">Technical Support:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">24/7 Included</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Transform Your Healthcare Operations
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Measurable improvements across all aspects of healthcare delivery
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">75%</h3>
              <p className="text-gray-600 dark:text-gray-300">Faster prescription processing</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">40%</h3>
              <p className="text-gray-600 dark:text-gray-300">Reduction in administrative costs</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-violet-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">99%</h3>
              <p className="text-gray-600 dark:text-gray-300">Reduction in medication errors</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">90%</h3>
              <p className="text-gray-600 dark:text-gray-300">Improvement in patient satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Enterprise-Grade Security
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Built with healthcare's most stringent security and compliance requirements in mind
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Compliance Standards
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                    HIPAA Compliant
                  </Badge>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                    SOC 2 Type II
                  </Badge>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                    HITECH Compliant
                  </Badge>
                </div>
                <div className="flex items-center space-x-3">
                  <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">
                    FDA 21 CFR Part 11
                  </Badge>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card>
                <CardHeader className="text-center">
                  <Lock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <CardTitle className="text-lg">Encryption</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    End-to-end AES-256 encryption for all data
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <Shield className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <CardTitle className="text-lg">Access Control</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Role-based permissions and multi-factor authentication
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <FileText className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <CardTitle className="text-lg">Audit Trails</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Immutable logs of all system activities
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <Database className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                  <CardTitle className="text-lg">Data Integrity</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Blockchain-verified data authenticity
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-600 to-emerald-500">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Healthcare?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Join leading healthcare organizations already using RxBridge to improve patient outcomes and reduce costs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3"
              onClick={() => window.location.href = '/#contact-section'}
            >
              Schedule Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white dark:bg-slate-900 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-300">
            © 2025 Bloqz Technologies. All rights reserved.<br />
            RxBridge - Connecting Healthcare Through Blockchain Innovation.
          </p>
        </div>
      </footer>
    </DynamicBackground>
  );
}