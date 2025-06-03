import { Navigation } from "@/components/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Utensils,
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
  ChefHat,
  Receipt
} from "lucide-react";

export default function DineSync() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-amber-50 to-orange-50 dark:from-slate-900 dark:via-amber-900 dark:to-orange-900">
      <Navigation currentPage="dinesync" />
      
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-600 to-orange-500 rounded-xl flex items-center justify-center">
                <Utensils className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
                DineSync
              </h1>
              <Badge className="bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200 px-3 py-1">
                Coming Soon
              </Badge>
            </div>
            <p className="text-2xl text-amber-600 dark:text-amber-400 font-semibold mb-4">
              Restaurant & Food Service Management Platform
            </p>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              Comprehensive blockchain-powered restaurant ecosystem streamlining operations, 
              supply chain tracking, and customer experiences across the food service industry.
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
                Complete Restaurant Operations
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                DineSync transforms restaurant management with farm-to-table tracking, 
                AI-powered ordering, and blockchain-verified food safety protocols.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-amber-600" />
                  <span className="text-gray-700 dark:text-gray-300">Farm-to-table supply chain tracking</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-amber-600" />
                  <span className="text-gray-700 dark:text-gray-300">AI-powered inventory optimization</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-amber-600" />
                  <span className="text-gray-700 dark:text-gray-300">Blockchain food safety verification</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-amber-600" />
                  <span className="text-gray-700 dark:text-gray-300">Smart kitchen automation</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/30 dark:to-orange-900/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Restaurant Efficiency Gains
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600 mb-2">50%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Faster Service</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600 mb-2">30%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600 mb-2">100%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Food Safety</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600 mb-2">24/7</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Monitoring</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Transform Your Restaurant Operations
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              DineSync is coming soon with exclusive restaurant management capabilities.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl max-w-2xl mx-auto">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-amber-600 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Utensils className="h-10 w-10 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Restaurant Management Tablets</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Kitchen-ready 10.5" Android tablets with DineSync pre-installed for immediate deployment.
              </p>
            </div>
            <div className="space-y-3 mb-6">
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
            DineSync - Revolutionizing Food Service Through Blockchain Technology. Coming Q1 2026.
          </p>
        </div>
      </footer>
    </div>
  );
}