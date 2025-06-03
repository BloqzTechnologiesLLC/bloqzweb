import { Navigation } from "@/components/navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ShoppingBag,
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
  CreditCard,
  Package
} from "lucide-react";

export default function ShopChain() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-purple-900 dark:to-pink-900">
      <Navigation currentPage="shopchain" />
      
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-500 rounded-xl flex items-center justify-center">
                <ShoppingBag className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
                ShopChain
              </h1>
              <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 px-3 py-1">
              </Badge>
            </div>
            <p className="text-2xl text-purple-600 dark:text-purple-400 font-semibold mb-4">
              Next-Generation Retail & E-commerce Platform
            </p>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              Revolutionary blockchain-powered retail ecosystem enabling seamless omnichannel experiences, 
              supply chain transparency, and customer loyalty rewards across global marketplaces.
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
                Complete Retail Transformation
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                ShopChain revolutionizes retail operations with AI-powered inventory management, 
                blockchain-verified authenticity, and seamless customer experiences.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-purple-600" />
                  <span className="text-gray-700 dark:text-gray-300">Omnichannel inventory synchronization</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-purple-600" />
                  <span className="text-gray-700 dark:text-gray-300">Product authenticity verification</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-purple-600" />
                  <span className="text-gray-700 dark:text-gray-300">Blockchain loyalty rewards</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-purple-600" />
                  <span className="text-gray-700 dark:text-gray-300">AI-driven personalization</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Retail Performance Gains
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">45%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Sales Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">80%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Faster Checkout</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Customer Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">Real-time</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Analytics</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/30 dark:to-purple-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              ShopChain is coming soon with exclusive retail transformation capabilities.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            </h3>
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="h-10 w-10 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Retail Management Tablets</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Complete ShopChain solution will be available on retail-optimized 10.5" Android tablets.
              </p>
            </div>
            <div className="space-y-3 mb-6">
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
            ShopChain - Revolutionizing Retail Through Blockchain Innovation. Coming Q4 2025.
          </p>
        </div>
      </footer>
    </div>
  );
}