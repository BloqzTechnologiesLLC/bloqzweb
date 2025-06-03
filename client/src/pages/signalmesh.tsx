import { Navigation } from "@/components/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Radio,
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
  Wifi,
  Smartphone
} from "lucide-react";

export default function SignalMesh() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-violet-50 to-purple-50 dark:from-slate-900 dark:via-violet-900 dark:to-purple-900">
      <Navigation currentPage="signalmesh" />
      
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-violet-600 to-purple-500 rounded-xl flex items-center justify-center">
                <Radio className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
                SignalMesh
              </h1>
              <Badge className="bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-200 px-3 py-1">
              </Badge>
            </div>
            <p className="text-2xl text-violet-600 dark:text-violet-400 font-semibold mb-4">
              Telecommunications & Network Management Platform
            </p>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              Revolutionary blockchain-powered telecommunications infrastructure enabling secure communications, 
              network optimization, and decentralized connectivity across global telecom networks.
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
                Next-Generation Telecom Infrastructure
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                SignalMesh transforms telecommunications with AI-driven network optimization, 
                blockchain-secured communications, and decentralized infrastructure management across global telecom networks.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-violet-600" />
                  <span className="text-gray-700 dark:text-gray-300">AI-powered network optimization</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-violet-600" />
                  <span className="text-gray-700 dark:text-gray-300">Secure decentralized communications</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-violet-600" />
                  <span className="text-gray-700 dark:text-gray-300">Dynamic bandwidth allocation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-violet-600" />
                  <span className="text-gray-700 dark:text-gray-300">Real-time threat detection</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-violet-600 mb-2">99.9%</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Network Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-violet-600 mb-2">60%</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Bandwidth Optimization</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-violet-600 mb-2">Sub-1ms</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Latency Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-violet-600 mb-2">24/7</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">AI Monitoring</div>
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
              Advanced Telecommunications Solutions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Complete telecom platform with AI-powered optimization and blockchain security
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-violet-600 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <Wifi className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Network Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• AI-driven traffic routing</li>
                  <li>• Dynamic load balancing</li>
                  <li>• Predictive capacity planning</li>
                  <li>• Quality of service management</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Secure Communications</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• End-to-end encryption</li>
                  <li>• Blockchain verification</li>
                  <li>• Identity management</li>
                  <li>• Threat intelligence</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="h-6 w-6 text-white" />
                </div>
                <CardTitle>5G & Beyond</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• 5G network slicing</li>
                  <li>• Edge computing integration</li>
                  <li>• IoT device management</li>
                  <li>• Next-gen protocols</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-500 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Analytics & Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Real-time monitoring</li>
                  <li>• Performance analytics</li>
                  <li>• Predictive maintenance</li>
                  <li>• Customer behavior insights</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Global Connectivity</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Multi-carrier support</li>
                  <li>• Satellite integration</li>
                  <li>• International roaming</li>
                  <li>• Cross-platform compatibility</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <Lock className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Regulatory Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• FCC compliance</li>
                  <li>• International standards</li>
                  <li>• Privacy regulations</li>
                  <li>• Audit frameworks</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Network Infrastructure */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Comprehensive Network Solutions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              SignalMesh supports all telecommunications infrastructure with advanced AI and blockchain integration
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-slate-700 p-6 rounded-xl shadow-lg text-center">
              <Radio className="h-8 w-8 text-violet-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Wireless Networks</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">5G, LTE, WiFi, satellite communications</p>
            </div>
            
            <div className="bg-white dark:bg-slate-700 p-6 rounded-xl shadow-lg text-center">
              <Database className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Core Infrastructure</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Data centers, backbone networks, switches</p>
            </div>
            
            <div className="bg-white dark:bg-slate-700 p-6 rounded-xl shadow-lg text-center">
              <Zap className="h-8 w-8 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Edge Computing</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Low-latency processing, local deployment</p>
            </div>
            
            <div className="bg-white dark:bg-slate-700 p-6 rounded-xl shadow-lg text-center">
              <Building2 className="h-8 w-8 text-orange-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Enterprise Solutions</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Private networks, VPN, cloud connectivity</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Revolutionize Telecommunications
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              SignalMesh is coming soon with exclusive telecommunications transformation capabilities.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl max-w-2xl mx-auto">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-violet-600 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Radio className="h-10 w-10 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Network Management Tablets</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Advanced 10.5" Android tablets with SignalMesh pre-installed for telecom operations.
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
            SignalMesh - Transforming Telecommunications Through Blockchain Innovation. Coming Q4 2026.
          </p>
        </div>
      </footer>
    </div>
  );
}