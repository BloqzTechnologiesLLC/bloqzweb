import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Zap, 
  Users, 
  FileText, 
  Phone, 
  Mail, 
  MapPin,
  Stethoscope,
  Pill,
  Building2,
  CreditCard,
  CheckCircle,
  ArrowRight
} from "lucide-react";

export function MarketingLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 dark:from-slate-900 dark:via-blue-900 dark:to-cyan-900">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center">
              <Pill className="h-7 w-7 text-white" />
            </div>
            <span className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              RxBridge
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Bridging Healthcare with{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Blockchain Innovation
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform prescription management with our comprehensive platform connecting patients, 
            doctors, pharmacies, and insurance providers through secure blockchain technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-3"
              onClick={() => {
                const contactSection = document.querySelector('#contact-section');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Request Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Four Portal Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Four Specialized Portals
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Each stakeholder gets a tailored experience designed for their specific workflow and needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Patient Portal */}
            <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardHeader className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Patient Portal</CardTitle>
                <CardDescription>
                  Mobile-first prescription tracking and pharmacy discovery
                </CardDescription>
              </CardHeader>
              <CardContent className="relative">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Real-time prescription tracking</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Pharmacy finder with pricing</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">AI health assistant</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Prescription history</span>
                  </li>
                </ul>
                <Badge className="mt-4 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                  Android & iOS
                </Badge>
              </CardContent>
            </Card>

            {/* Doctor Portal */}
            <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardHeader className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <Stethoscope className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Doctor Portal</CardTitle>
                <CardDescription>
                  Secure prescription management and patient communication
                </CardDescription>
              </CardHeader>
              <CardContent className="relative">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Digital prescription writing</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Patient medication history</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Drug interaction alerts</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">HIPAA compliance tools</span>
                  </li>
                </ul>
                <Badge className="mt-4 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                  Tablet Optimized
                </Badge>
              </CardContent>
            </Card>

            {/* Pharmacy Portal */}
            <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardHeader className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-violet-500 rounded-lg flex items-center justify-center mb-4">
                  <Pill className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Pharmacy Portal</CardTitle>
                <CardDescription>
                  Inventory management and prescription fulfillment
                </CardDescription>
              </CardHeader>
              <CardContent className="relative">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Prescription queue management</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Real-time inventory tracking</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Dynamic pricing management</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Insurance verification</span>
                  </li>
                </ul>
                <Badge className="mt-4 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                  Tablet Optimized
                </Badge>
              </CardContent>
            </Card>

            {/* Insurance Portal */}
            <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardHeader className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-500 rounded-lg flex items-center justify-center mb-4">
                  <CreditCard className="h-6 w-6 text-white" />
                </div>
                <CardTitle>Insurance Portal</CardTitle>
                <CardDescription>
                  Claims processing and coverage management
                </CardDescription>
              </CardHeader>
              <CardContent className="relative">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Automated claims processing</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Real-time coverage verification</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Fraud detection algorithms</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Analytics and reporting</span>
                  </li>
                </ul>
                <Badge className="mt-4 bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200">
                  Tablet Optimized
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Powered by Advanced Technology
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Built on blockchain infrastructure with AI assistance for a secure, intelligent healthcare ecosystem
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Blockchain Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Immutable prescription records and secure multi-party transactions with full audit trails
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-violet-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <CardTitle>AI-Powered Assistance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Smart recommendations, drug interaction checking, and personalized health insights
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <CardTitle>HIPAA Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Full regulatory compliance with automated auditing and privacy protection standards
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-section" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Transform Healthcare?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Contact us to learn how RxBridge can streamline your healthcare operations
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Microsoft Form Integration */}
            <Card>
              <CardContent className="p-0">
                <div className="rounded-lg overflow-hidden relative" style={{ height: '900px' }}>
                  <iframe 
                    width="100%" 
                    height="1100px" 
                    src="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAMAAY_C049UNDEzNTJRSzI3RUxBOVNRRFEySVE4Mzg3WC4u&embed=true" 
                    frameBorder="0" 
                    marginWidth="0" 
                    marginHeight="0" 
                    style={{ border: 'none', maxWidth: '100%', position: 'absolute', top: 0, left: 0 }}
                    allowFullScreen 
                    webkitallowfullscreen="true"
                    mozallowfullscreen="true"
                    msallowfullscreen="true"
                  />
                  {/* Overlay to hide Microsoft branding */}
                  <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white via-white dark:from-slate-900 dark:via-slate-900 to-transparent pointer-events-none z-10" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white dark:bg-slate-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
              <Pill className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              RxBridge
            </span>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-center">
            © 2025 Bloqz Technologies. All rights reserved. © RxBridge is a product of Bloqz Technologies.<br />
            Innovating Industries with the strength of Blockchain.
          </p>
        </div>
      </footer>
    </div>
  );
}