import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Navigation } from "@/components/navigation";
import { AiAssistant } from "@/components/ai-assistant";
import { PrescriptionCard } from "@/components/prescription-card";
import { PharmacySearch } from "@/components/pharmacy-search";
import { 
  Pill, 
  MapPin, 
  Calendar, 
  Bell, 
  Heart,
  Search,
  Clock,
  AlertCircle,
  CheckCircle
} from "lucide-react";

export default function PatientPortal() {
  const [showAiAssistant, setShowAiAssistant] = useState(true);
  const [prescriptions] = useState([
    {
      id: 1,
      medicationName: "Lisinopril",
      dosage: "10mg",
      frequency: "Once daily",
      refillsRemaining: 2,
      status: "active",
      prescribedBy: "Dr. Sarah Johnson",
      lastFilled: "2024-01-15",
      nextRefill: "2024-02-15"
    },
    {
      id: 2,
      medicationName: "Metformin",
      dosage: "500mg",
      frequency: "Twice daily",
      refillsRemaining: 0,
      status: "refill_needed",
      prescribedBy: "Dr. Michael Chen",
      lastFilled: "2024-01-10",
      nextRefill: "2024-02-10"
    },
    {
      id: 3,
      medicationName: "Atorvastatin",
      dosage: "20mg",
      frequency: "Once daily at bedtime",
      refillsRemaining: 3,
      status: "active",
      prescribedBy: "Dr. Sarah Johnson",
      lastFilled: "2024-01-20",
      nextRefill: "2024-02-20"
    }
  ]);

  const [reminders] = useState([
    { time: "8:00 AM", medication: "Lisinopril", taken: true },
    { time: "8:00 AM", medication: "Metformin", taken: true },
    { time: "8:00 PM", medication: "Metformin", taken: false },
    { time: "10:00 PM", medication: "Atorvastatin", taken: false }
  ]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPortal="Patient Portal" />
      
      <main className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="portal-header mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Welcome back, Sarah!</h1>
              <p className="opacity-90">Manage your prescriptions and health with AI-powered assistance</p>
            </div>
            <div className="flex items-center space-x-2">
              <Bell className="h-6 w-6" />
              <Badge variant="destructive">3 Reminders</Badge>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="prescriptions" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="prescriptions">Prescriptions</TabsTrigger>
                <TabsTrigger value="reminders">Reminders</TabsTrigger>
                <TabsTrigger value="pharmacies">Find Pharmacy</TabsTrigger>
                <TabsTrigger value="history">History</TabsTrigger>
              </TabsList>

              <TabsContent value="prescriptions" className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-semibold">Active Prescriptions</h2>
                  <Button variant="outline">
                    <Search className="mr-2 h-4 w-4" />
                    Scan New Prescription
                  </Button>
                </div>
                
                <div className="grid gap-4">
                  {prescriptions.map((prescription) => (
                    <PrescriptionCard key={prescription.id} prescription={prescription} />
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="reminders" className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-semibold">Today's Medication Schedule</h2>
                  <Badge variant="outline">
                    <Calendar className="mr-1 h-3 w-3" />
                    January 25, 2024
                  </Badge>
                </div>
                
                <div className="space-y-3">
                  {reminders.map((reminder, index) => (
                    <Card key={index} className="portal-card">
                      <CardContent className="flex items-center justify-between p-4">
                        <div className="flex items-center space-x-3">
                          <div className={`p-2 rounded-full ${reminder.taken ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'}`}>
                            {reminder.taken ? <CheckCircle className="h-4 w-4" /> : <Clock className="h-4 w-4" />}
                          </div>
                          <div>
                            <p className="font-medium">{reminder.medication}</p>
                            <p className="text-sm text-muted-foreground">{reminder.time}</p>
                          </div>
                        </div>
                        {!reminder.taken && (
                          <Button size="sm">Mark as Taken</Button>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="pharmacies" className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-semibold">Find Nearby Pharmacies</h2>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>Within 10 miles of your location</span>
                  </div>
                </div>
                
                <PharmacySearch />
              </TabsContent>

              <TabsContent value="history" className="space-y-4">
                <h2 className="text-2xl font-semibold">Prescription History</h2>
                
                <Card className="portal-card">
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>Your prescription and pharmacy visit history</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <Pill className="h-5 w-5 text-blue-500" />
                          <div>
                            <p className="font-medium">Lisinopril refilled</p>
                            <p className="text-sm text-muted-foreground">CVS Pharmacy - Main St</p>
                          </div>
                        </div>
                        <span className="text-sm text-muted-foreground">Jan 15, 2024</span>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <AlertCircle className="h-5 w-5 text-yellow-500" />
                          <div>
                            <p className="font-medium">Metformin refill reminder</p>
                            <p className="text-sm text-muted-foreground">Reminder sent</p>
                          </div>
                        </div>
                        <span className="text-sm text-muted-foreground">Jan 10, 2024</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* AI Assistant Sidebar */}
          {showAiAssistant && (
            <div className="lg:col-span-1">
              <AiAssistant 
                portal="patient"
                suggestions={[
                  "Find cheapest pharmacy for Metformin",
                  "Set reminder for evening medications",
                  "Check for drug interactions",
                  "Find generic alternatives"
                ]}
                onClose={() => setShowAiAssistant(false)}
              />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
