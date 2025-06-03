import { Navigation } from "@/components/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Network,
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
  Link,
  Blocks
} from "lucide-react";

export default function Bloqz() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 dark:from-slate-900 dark:via-blue-900 dark:to-cyan-900">
      <Navigation currentPage="bloqz" />
      
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center">
                <Network className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
                Bloqz
              </h1>
              <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-3 py-1">
                Core Platform
              </Badge>
            </div>
            <p className="text-2xl text-blue-600 dark:text-blue-400 font-semibold mb-4">
              The Ultimate Multi-Industry Blockchain Ecosystem
            </p>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              Revolutionary unified blockchain infrastructure enabling seamless cross-industry collaboration, 
              interoperability, and scalable solutions across all 13 specialized blockchain verticals.
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
                Unified Blockchain Ecosystem
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Bloqz serves as the backbone infrastructure connecting all Bloqz Technologies blockchain systems, 
                enabling unprecedented cross-industry collaboration and data interoperability with AI-powered optimization.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-amber-600" />
                  <span className="text-gray-700 dark:text-gray-300">Cross-industry interoperability</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-amber-600" />
                  <span className="text-gray-700 dark:text-gray-300">AI-powered ecosystem management</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-amber-600" />
                  <span className="text-gray-700 dark:text-gray-300">Unified data standards</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-amber-600" />
                  <span className="text-gray-700 dark:text-gray-300">Scalable infrastructure</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 mb-2">13+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Connected Industries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 mb-2">100%</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">System Interoperability</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 mb-2">Real-time</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Cross-Chain Sync</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 mb-2">Global</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Network Coverage</div>
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
              Advanced Ecosystem Solutions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive blockchain platform with AI-powered cross-industry integration and automation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-amber-600 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <Network className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Cross-Chain Interoperability</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Seamless data exchange</li>
                  <li>• Protocol standardization</li>
                  <li>• Multi-chain transactions</li>
                  <li>• Universal compatibility</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <CardTitle>AI-Powered Orchestration</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Intelligent routing</li>
                  <li>• Automated workflows</li>
                  <li>• Performance optimization</li>
                  <li>• Predictive scaling</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Enterprise Security</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Multi-layer encryption</li>
                  <li>• Identity federation</li>
                  <li>• Access governance</li>
                  <li>• Threat detection</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-500 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Analytics & Intelligence</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Cross-industry insights</li>
                  <li>• Pattern recognition</li>
                  <li>• Trend analysis</li>
                  <li>• Performance metrics</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-500 rounded-lg flex items-center justify-center mb-4">
                  <Link className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Industry Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Healthcare-Finance bridges</li>
                  <li>• Supply chain visibility</li>
                  <li>• Regulatory compliance</li>
                  <li>• Data standardization</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Global Infrastructure</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Worldwide deployment</li>
                  <li>• Edge node network</li>
                  <li>• Multi-region support</li>
                  <li>• Disaster recovery</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Connected Systems */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Connected Blockchain Systems
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Bloqz unifies all 13 specialized blockchain platforms into one cohesive ecosystem
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-slate-700 p-6 rounded-xl shadow-lg text-center">
              <Building2 className="h-8 w-8 text-amber-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Healthcare Systems</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">RxBridge integration for medical data</p>
            </div>
            
            <div className="bg-white dark:bg-slate-700 p-6 rounded-xl shadow-lg text-center">
              <Database className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Financial Networks</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">PolicyNet and insurance platforms</p>
            </div>
            
            <div className="bg-white dark:bg-slate-700 p-6 rounded-xl shadow-lg text-center">
              <Globe className="h-8 w-8 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Supply Chain</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">TrackPort and logistics systems</p>
            </div>
            
            <div className="bg-white dark:bg-slate-700 p-6 rounded-xl shadow-lg text-center">
              <Users className="h-8 w-8 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Education & More</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">LearnLedger and all vertical systems</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Unify Your Blockchain Ecosystem
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Bloqz is the live platform with exclusive multi-industry blockchain unification capabilities.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl max-w-2xl mx-auto">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Network className="h-10 w-10 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Ecosystem Management Tablets</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Enterprise-grade 10.5" Android tablets with Bloqz pre-installed for ecosystem orchestration.
              </p>
            </div>
            <div className="text-center text-gray-600 dark:text-gray-300">
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white dark:bg-slate-900 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-300">
            © 2025 Bloqz Technologies. All rights reserved.<br />
            Bloqz - Unifying Blockchain Ecosystems Through Cross-Industry Innovation. Live Platform.
          </p>
        </div>
      </footer>
    </div>
  );
}