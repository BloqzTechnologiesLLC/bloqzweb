import { Navigation } from "@/components/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap,
  Shield,
  Users,
  Database,
  Zap,
  CheckCircle,
  ArrowRight,
  Building2,
  Globe,
  Lock,
  FileText,
  TrendingUp,
  Clock,
  DollarSign,
  BookOpen,
  Award
} from "lucide-react";

export default function LearnLedger() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50 dark:from-slate-900 dark:via-emerald-900 dark:to-teal-900">
      <Navigation currentPage="learnledger" />
      
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-teal-500 rounded-xl flex items-center justify-center">
                <GraduationCap className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
                LearnLedger
              </h1>
              <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200 px-3 py-1">
                Coming Soon
              </Badge>
            </div>
            <p className="text-2xl text-emerald-600 dark:text-emerald-400 font-semibold mb-4">
              Education & Credential Management Platform
            </p>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              Comprehensive blockchain-powered education ecosystem enabling secure credential verification, 
              personalized learning paths, and transparent academic records across global educational institutions.
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
                Revolutionary Education Platform
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                LearnLedger transforms education with AI-powered personalized learning, 
                blockchain-secured credentials, and comprehensive academic record management across all educational levels.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-600" />
                  <span className="text-gray-700 dark:text-gray-300">AI-personalized learning paths</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-600" />
                  <span className="text-gray-700 dark:text-gray-300">Blockchain credential verification</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-600" />
                  <span className="text-gray-700 dark:text-gray-300">Immutable academic records</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-emerald-600" />
                  <span className="text-gray-700 dark:text-gray-300">Smart skill assessment</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">90%</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Learning Improvement</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">100%</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Credential Authenticity</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">75%</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Administrative Efficiency</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">Real-time</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Progress Tracking</div>
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
              Comprehensive Education Solutions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Complete educational platform with AI-powered learning and blockchain security
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-teal-500 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Personalized Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• AI-driven learning paths</li>
                  <li>• Adaptive assessments</li>
                  <li>• Individual progress tracking</li>
                  <li>• Learning style optimization</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Credential Management</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Blockchain verification</li>
                  <li>• Digital certificates</li>
                  <li>• Skill badges</li>
                  <li>• Professional portfolios</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-500 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Analytics & Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Learning analytics</li>
                  <li>• Performance predictions</li>
                  <li>• Skill gap analysis</li>
                  <li>• Career recommendations</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Collaborative Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Peer-to-peer learning</li>
                  <li>• Group projects</li>
                  <li>• Discussion forums</li>
                  <li>• Mentorship matching</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-500 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Academic Records</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Immutable transcripts</li>
                  <li>• Transfer credit tracking</li>
                  <li>• Grade verification</li>
                  <li>• Academic portfolios</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Security & Privacy</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• FERPA compliance</li>
                  <li>• Data encryption</li>
                  <li>• Access controls</li>
                  <li>• Privacy protection</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Educational Levels */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Multi-Level Education Support
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              LearnLedger supports all educational levels with specialized features and compliance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-slate-700 p-6 rounded-xl shadow-lg text-center">
              <GraduationCap className="h-8 w-8 text-emerald-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">K-12 Education</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Elementary, middle, and high school systems</p>
            </div>
            
            <div className="bg-white dark:bg-slate-700 p-6 rounded-xl shadow-lg text-center">
              <Building2 className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Higher Education</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Universities, colleges, graduate programs</p>
            </div>
            
            <div className="bg-white dark:bg-slate-700 p-6 rounded-xl shadow-lg text-center">
              <Zap className="h-8 w-8 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Professional Training</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Corporate learning, certifications</p>
            </div>
            
            <div className="bg-white dark:bg-slate-700 p-6 rounded-xl shadow-lg text-center">
              <Globe className="h-8 w-8 text-orange-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Online Learning</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">MOOCs, distance education, e-learning</p>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Transform Educational Operations
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              LearnLedger is coming soon with exclusive education transformation capabilities.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl max-w-2xl mx-auto">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-emerald-600 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-10 w-10 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Education Management Tablets</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Student-friendly 10.5" Android tablets with LearnLedger pre-installed for educational institutions.
              </p>
            </div>
            <div className="text-center text-gray-600 dark:text-gray-300">
              Coming Soon
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white dark:bg-slate-900 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-300">
            © 2025 Bloqz Technologies. All rights reserved.<br />
            LearnLedger - Revolutionizing Education Through Blockchain Innovation. Coming Q1 2027.
          </p>
        </div>
      </footer>
    </div>
  );
}