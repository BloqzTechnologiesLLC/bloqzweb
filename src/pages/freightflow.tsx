import { Navigation } from "@/components/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Truck,
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
  Package,
  MapPin
} from "lucide-react";

export default function FreightFlow() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50 to-teal-50 dark:from-slate-900 dark:via-green-900 dark:to-teal-900">
      <Navigation currentPage="freightflow" />
      
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-teal-500 rounded-xl flex items-center justify-center">
                <Truck className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
                FreightFlow
              </h1>
              <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 px-3 py-1">
                Coming Soon
              </Badge>
            </div>
            <p className="text-2xl text-green-600 dark:text-green-400 font-semibold mb-4">
              Supply Chain & Logistics Management Platform
            </p>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              Revolutionary blockchain-powered supply chain ecosystem providing end-to-end visibility, 
              automated compliance, and intelligent logistics optimization across global freight networks.
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Revolutionize Your Supply Chain
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              FreightFlow is coming soon with exclusive supply chain transformation capabilities.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl max-w-2xl mx-auto">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Truck className="h-10 w-10 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Logistics Management Tablets</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Rugged 10.5" Android tablets with FreightFlow pre-installed for supply chain operations.
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
            FreightFlow - Optimizing Supply Chains Through Blockchain Innovation. Coming Q2 2026.
          </p>
        </div>
      </footer>
    </div>
  );
}