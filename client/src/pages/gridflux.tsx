import { Navigation } from "@/components/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Zap,
  Shield,
  Users,
  Database,
  CheckCircle,
  ArrowRight,
  Building2,
  Globe,
  Lock,
  FileText,
  TrendingUp,
  Clock,
  DollarSign,
  Battery,
  Sun
} from "lucide-react";

export default function GridFlux() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-yellow-50 to-orange-50 dark:from-slate-900 dark:via-yellow-900 dark:to-orange-900">
      <Navigation currentPage="gridflux" />
      
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-600 to-orange-500 rounded-xl flex items-center justify-center">
                <Zap className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
                GridFlux
              </h1>
              <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 px-3 py-1">
              </Badge>
            </div>
            <p className="text-2xl text-yellow-600 dark:text-yellow-400 font-semibold mb-4">
              Smart Energy Grid Management Platform
            </p>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              Revolutionary blockchain-based energy distribution system optimizing renewable energy, 
              grid stability, and carbon trading across global energy networks.
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
                Next-Generation Energy Infrastructure
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                GridFlux transforms energy management with intelligent grid optimization, 
                renewable energy integration, and transparent carbon credit trading.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-yellow-600" />
                  <span className="text-gray-700 dark:text-gray-300">Smart grid load balancing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-yellow-600" />
                  <span className="text-gray-700 dark:text-gray-300">Renewable energy optimization</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-yellow-600" />
                  <span className="text-gray-700 dark:text-gray-300">Carbon credit marketplace</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-yellow-600" />
                  <span className="text-gray-700 dark:text-gray-300">Peer-to-peer energy trading</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/30 dark:to-orange-900/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Energy Efficiency Gains
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">40%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Energy Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">85%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Grid Reliability</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">60%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Carbon Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">Real-time</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Monitoring</div>
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
              Comprehensive Energy Solutions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Complete energy management platform with AI-powered optimization and blockchain transparency
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-600 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Smart Grid Management</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Real-time load balancing</li>
                  <li>• Grid stability monitoring</li>
                  <li>• Demand forecasting</li>
                  <li>• Outage prevention</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <Sun className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Renewable Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Solar and wind optimization</li>
                  <li>• Energy storage management</li>
                  <li>• Weather-based predictions</li>
                  <li>• Green energy certification</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <DollarSign className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Carbon Trading</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Carbon credit marketplace</li>
                  <li>• Emissions tracking</li>
                  <li>• Offset verification</li>
                  <li>• Compliance reporting</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-violet-500 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Peer-to-Peer Trading</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Direct energy trading</li>
                  <li>• Microgrid management</li>
                  <li>• Community energy sharing</li>
                  <li>• Smart contract automation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <Battery className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Energy Storage</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Battery optimization</li>
                  <li>• Storage scheduling</li>
                  <li>• Peak shaving</li>
                  <li>• Grid support services</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <CardTitle>AI Energy Intelligence</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>• Demand prediction</li>
                  <li>• Price optimization</li>
                  <li>• Equipment maintenance</li>
                  <li>• Efficiency recommendations</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              GridFlux Energy Revolution
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              GridFlux is coming soon with exclusive energy management capabilities and early adopter benefits.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Early Adopter Benefits
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <Zap className="h-4 w-4 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Priority Access</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Be among the first to deploy GridFlux in your energy infrastructure with dedicated onboarding support.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <DollarSign className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">30% Early Bird Discount</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Exclusive pricing for early adopters, including lifetime license benefits and upgrade protection.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Direct Engineering Access</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Work directly with our development team to influence features and ensure optimal integration.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              </h3>
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-yellow-600 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-10 w-10 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Energy Management Tablets</h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Industrial-grade 10.5" Android tablets will be available pre-configured with GridFlux for energy operations.
                </p>
              </div>
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-300">Support Level:</span>
                  <span className="font-semibold text-gray-900 dark:text-white">Premium 24/7</span>
                </div>
              </div>
              <Button 
                className="w-full bg-gradient-to-r from-yellow-600 to-orange-500 hover:from-yellow-700 hover:to-orange-600 text-white"
                onClick={() => window.location.href = '/#contact-section'}
              >
                Contact for GridFlux
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-yellow-600 to-orange-500">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Energy Revolution
          </h2>
          <p className="text-xl text-yellow-100 mb-8 max-w-3xl mx-auto">
            GridFlux will transform energy management with intelligent grid optimization and renewable energy solutions
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white dark:bg-slate-900 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-600 dark:text-gray-300">
            © 2025 Bloqz Technologies. All rights reserved.<br />
            GridFlux - Smart Energy Management Through Blockchain Innovation. Coming Q3 2025.
          </p>
        </div>
      </footer>
    </div>
  );
}