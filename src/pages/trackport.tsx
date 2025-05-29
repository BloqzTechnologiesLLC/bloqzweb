import { Navigation } from "@/components/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin,
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
  Ship,
  Package
} from "lucide-react";

export default function TrackPort() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-50 dark:from-slate-900 dark:via-cyan-900 dark:to-blue-900">
      <Navigation currentPage="trackport" />
      
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-600 to-blue-500 rounded-xl flex items-center justify-center">
                <Ship className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
                TrackPort
              </h1>
              <Badge className="bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200 px-3 py-1">
                Coming Soon
              </Badge>
            </div>
            <p className="text-2xl text-cyan-600 dark:text-cyan-400 font-semibold mb-4">
              Global Logistics & Shipping Platform
            </p>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              Advanced blockchain-powered logistics ecosystem providing real-time cargo tracking, 
              port automation, and intelligent shipping optimization across global maritime networks.
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
                Next-Generation Maritime Platform
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                TrackPort revolutionizes global shipping with AI-powered route optimization, 
                blockchain-secured cargo tracking, and automated port operations across international maritime networks.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-cyan-600" />
                  <span className="text-gray-700 dark:text-gray-300">Real-time cargo tracking</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-cyan-600" />
                  <span className="text-gray-700 dark:text-gray-300">AI route optimization</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-cyan-600" />
                  <span className="text-gray-700 dark:text-gray-300">Automated port operations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-cyan-600" />
                  <span className="text-gray-700 dark:text-gray-300">Smart contract shipping</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-600 mb-2">95%</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">On-time Delivery</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-600 mb-2">30%</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-600 mb-2">Real-time</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Global Tracking</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-600 mb-2">24/7</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Port Automation</div>
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
              Advanced Maritime Solutions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Complete shipping platform with AI-powered logistics and blockchain transparency
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-600 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Real-time Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• GPS cargo monitoring</li>
                  <li>• IoT sensor integration</li>
                  <li>• Route visualization</li>
                  <li>• Delivery predictions</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-500 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Route Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• AI pathfinding</li>
                  <li>• Weather integration</li>
                  <li>• Fuel optimization</li>
                  <li>• Traffic analysis</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Port Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Automated loading</li>
                  <li>• Container management</li>
                  <li>• Berth scheduling</li>
                  <li>• Customs integration</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <Package className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Cargo Management</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Digital manifests</li>
                  <li>• Inventory tracking</li>
                  <li>• Damage monitoring</li>
                  <li>• Temperature control</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-500 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Documentation</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Digital bills of lading</li>
                  <li>• Customs declarations</li>
                  <li>• Insurance certificates</li>
                  <li>• Compliance tracking</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Analytics & Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Performance metrics</li>
                  <li>• Cost analysis</li>
                  <li>• Efficiency reports</li>
                  <li>• Predictive maintenance</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Shipping Networks */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Global Maritime Coverage
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              TrackPort supports all major shipping routes with integrated port and carrier networks
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-slate-700 p-6 rounded-xl shadow-lg text-center">
              <Ship className="h-8 w-8 text-cyan-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Ocean Freight</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Container shipping, bulk carriers</p>
            </div>
            
            <div className="bg-white dark:bg-slate-700 p-6 rounded-xl shadow-lg text-center">
              <Globe className="h-8 w-8 text-blue-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">International Trade</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Cross-border logistics, customs</p>
            </div>
            
            <div className="bg-white dark:bg-slate-700 p-6 rounded-xl shadow-lg text-center">
              <Building2 className="h-8 w-8 text-green-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Port Operations</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Terminal management, crane operations</p>
            </div>
            
            <div className="bg-white dark:bg-slate-700 p-6 rounded-xl shadow-lg text-center">
              <Package className="h-8 w-8 text-purple-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Supply Chain</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">End-to-end logistics, warehousing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Revolutionize Global Shipping
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              TrackPort is coming soon with exclusive maritime logistics transformation capabilities.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl max-w-2xl mx-auto">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-cyan-600 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Ship className="h-10 w-10 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Maritime Logistics Tablets</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Weather-resistant 10.5" Android tablets with TrackPort pre-installed for port operations.
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
            TrackPort - Optimizing Maritime Logistics Through Blockchain Innovation. Coming Q2 2027.
          </p>
        </div>
      </footer>
    </div>
  );
}