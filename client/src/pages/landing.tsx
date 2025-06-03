import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ThemeToggle } from "@/components/theme-toggle";
import { BlockchainStatus } from "@/components/blockchain-status";
import { 
  User, 
  Stethoscope, 
  Building2, 
  Shield,
  ArrowRight,
  Pill,
  Heart,
  Lock
} from "lucide-react";

export default function Landing() {
  const portals = [
    {
      title: "Patient Portal",
      description: "Manage prescriptions, find pharmacies, and track your health journey with AI-powered assistance.",
      icon: User,
      path: "/patient",
      color: "bg-blue-500 hover:bg-blue-600",
      features: ["Prescription Management", "Pharmacy Search", "Medication Reminders", "AI Health Assistant"]
    },
    {
      title: "Doctor Portal",
      description: "Create prescriptions, access patient history, and receive clinical decision support.",
      icon: Stethoscope,
      path: "/doctor",
      color: "bg-green-500 hover:bg-green-600",
      features: ["E-Prescribing", "Patient History", "Drug Interaction Checks", "Clinical AI Support"]
    },
    {
      title: "Pharmacy Portal",
      description: "Process prescriptions, manage inventory, and provide patient counseling.",
      icon: Building2,
      path: "/pharmacy",
      color: "bg-purple-500 hover:bg-purple-600",
      features: ["Prescription Processing", "Inventory Management", "Patient Counseling", "Workflow AI"]
    },
    {
      title: "Insurance Portal",
      description: "Process claims, manage authorizations, and detect fraud with AI assistance.",
      icon: Shield,
      path: "/insurance",
      color: "bg-orange-500 hover:bg-orange-600",
      features: ["Claims Processing", "Prior Authorization", "Fraud Detection", "Policy AI Engine"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Pill className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">
              RxBridge
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <BlockchainStatus />
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="portal-header mx-4 mt-8 mb-12">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">
            Revolutionary Prescription Management Ecosystem
          </h2>
          <p className="text-xl mb-6 max-w-3xl mx-auto opacity-90">
            Connecting patients, doctors, pharmacies, and insurance providers through 
            blockchain technology and intelligent AI assistance for seamless healthcare delivery.
          </p>
          <div className="flex items-center justify-center space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <Lock className="h-5 w-5" />
              <span>HIPAA Compliant</span>
            </div>
            <div className="flex items-center space-x-2">
              <Heart className="h-5 w-5" />
              <span>AI-Powered</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5" />
              <span>Blockchain Secured</span>
            </div>
          </div>
        </div>
      </section>

      {/* Portal Cards */}
      <main className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portals.map((portal) => {
            const IconComponent = portal.icon;
            return (
              <Card key={portal.title} className="portal-card group">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-3">
                    <div className={`p-3 rounded-lg ${portal.color} text-white`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl">{portal.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    {portal.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {portal.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-aqua-gradient dark:bg-stripe-gradient rounded-full" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link href={portal.path}>
                    <Button className="w-full bg-aqua-gradient dark:bg-stripe-gradient hover:opacity-90 transition-opacity group">
                      Enter Portal
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Features Section */}
        <section className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Platform Features</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience the future of healthcare with our comprehensive ecosystem designed 
              for all stakeholders in the prescription management process.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-aqua-gradient dark:bg-stripe-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Blockchain Security</h4>
              <p className="text-muted-foreground">
                Immutable prescription records with multi-chain architecture ensuring 
                data integrity and tamper-proof audit trails.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-aqua-gradient dark:bg-stripe-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">AI Assistant</h4>
              <p className="text-muted-foreground">
                Intelligent assistance across all portals with continuous learning, 
                personalized recommendations, and clinical decision support.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-aqua-gradient dark:bg-stripe-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Real-Time Sync</h4>
              <p className="text-muted-foreground">
                Instant updates across all stakeholders with offline-first architecture 
                and seamless data synchronization.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
