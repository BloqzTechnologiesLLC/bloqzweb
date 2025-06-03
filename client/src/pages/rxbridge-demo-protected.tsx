import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Lock, 
  Eye, 
  EyeOff, 
  Shield,
  Stethoscope,
  Smartphone,
  Tablet,
  Monitor
} from "lucide-react";

export default function RxBridgeProtectedDemo() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState("");

  // Demo password - in production this would be more secure
  const DEMO_PASSWORD = "rxbridge2025";

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === DEMO_PASSWORD) {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Invalid password. Please contact Bloqz Technologies for access.");
      setPassword("");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-green-900 via-emerald-900 to-teal-900 flex items-center justify-center px-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Stethoscope className="h-8 w-8 text-white" />
            </div>
            <CardTitle className="text-2xl">RxBridge Demo Access</CardTitle>
            <CardDescription>
              Enter the demo password to access the RxBridge healthcare blockchain platform demonstration
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter demo password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              
              {error && (
                <div className="text-sm text-red-600 bg-red-50 p-3 rounded-md">
                  {error}
                </div>
              )}

              <Button type="submit" className="w-full bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600">
                <Lock className="h-4 w-4 mr-2" />
                Access Demo
              </Button>
            </form>

            <div className="mt-6 pt-6 border-t">
              <div className="text-center text-sm text-gray-600 dark:text-gray-400">
                <p className="font-medium mb-2">Contact for Demo Access:</p>
                <p>Bloqz Technologies</p>
                <p className="text-green-600">demo@bloqztechnologies.com</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-green-900 via-emerald-900 to-teal-900">
      {/* Header */}
      <div className="bg-white dark:bg-slate-800 shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-emerald-500 rounded-xl flex items-center justify-center">
                <Stethoscope className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">RxBridge Demo</h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">Healthcare Blockchain Platform</p>
              </div>
            </div>
            <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
              <Shield className="h-3 w-3 mr-1" />
              Secure Demo
            </Badge>
          </div>
        </div>
      </div>

      {/* Demo Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Welcome to RxBridge Healthcare Platform
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Experience the future of healthcare with our comprehensive blockchain-powered platform 
            designed for secure patient data management, prescription tracking, and care coordination.
          </p>
        </div>

        {/* Demo Applications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Patient Portal */}
          <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer" onClick={() => window.open('/patient', '_blank')}>
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Smartphone className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg">Patient Portal</CardTitle>
              <CardDescription>Mobile-first patient experience</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>• Secure health records</li>
                <li>• Prescription management</li>
                <li>• Appointment scheduling</li>
                <li>• Lab results access</li>
              </ul>
            </CardContent>
          </Card>

          {/* Doctor Portal */}
          <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer" onClick={() => window.open('/doctor', '_blank')}>
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Monitor className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg">Doctor Portal</CardTitle>
              <CardDescription>Clinical workflow management</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>• Patient chart reviews</li>
                <li>• Prescription writing</li>
                <li>• Clinical decision support</li>
                <li>• Treatment tracking</li>
              </ul>
            </CardContent>
          </Card>

          {/* Pharmacy Portal */}
          <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer" onClick={() => window.open('/pharmacy', '_blank')}>
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-violet-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Tablet className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg">Pharmacy Portal</CardTitle>
              <CardDescription>Prescription fulfillment system</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>• Prescription verification</li>
                <li>• Inventory management</li>
                <li>• Drug interaction checks</li>
                <li>• Patient counseling tools</li>
              </ul>
            </CardContent>
          </Card>

          {/* Insurance Portal */}
          <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer" onClick={() => window.open('/insurance', '_blank')}>
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-lg">Insurance Portal</CardTitle>
              <CardDescription>Claims processing automation</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>• Automated claims review</li>
                <li>• Prior authorization</li>
                <li>• Fraud detection</li>
                <li>• Coverage verification</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Mobile Demo Access */}
        <Card className="max-w-2xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Mobile Experience</CardTitle>
            <CardDescription>
              Experience RxBridge's mobile-optimized patient portal designed for smartphones and tablets
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Button 
              onClick={() => window.open('/patient-mobile', '_blank')}
              className="bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600"
            >
              <Smartphone className="h-5 w-5 mr-2" />
              Launch Mobile Demo
            </Button>
          </CardContent>
        </Card>

        {/* Demo Notice */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-yellow-50 dark:bg-yellow-900 border border-yellow-200 dark:border-yellow-700 rounded-lg">
            <Shield className="h-4 w-4 text-yellow-600 mr-2" />
            <span className="text-sm text-yellow-800 dark:text-yellow-200">
              This is a demonstration environment with simulated data for evaluation purposes only.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}