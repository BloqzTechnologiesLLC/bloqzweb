import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Navigation } from "@/components/navigation";
import { AiAssistant } from "@/components/ai-assistant";
import { HIPAACompliance } from "@/components/hipaa-compliance";
import { 
  Stethoscope, 
  FileText, 
  Users, 
  AlertTriangle,
  Plus,
  Search,
  Calendar,
  Clock,
  CheckCircle
} from "lucide-react";

export default function DoctorPortal() {
  const [patients] = useState([
    {
      id: 1,
      name: "Sarah Mitchell",
      age: 45,
      lastVisit: "2024-01-20",
      conditions: ["Hypertension", "Type 2 Diabetes"],
      activePrescriptions: 3,
      upcomingAppointment: "2024-02-15"
    },
    {
      id: 2,
      name: "Robert Chen",
      age: 62,
      lastVisit: "2024-01-18",
      conditions: ["High Cholesterol", "Arthritis"],
      activePrescriptions: 2,
      upcomingAppointment: "2024-02-10"
    },
    {
      id: 3,
      name: "Maria Garcia",
      age: 38,
      lastVisit: "2024-01-22",
      conditions: ["Anxiety", "Migraine"],
      activePrescriptions: 2,
      upcomingAppointment: "2024-02-12"
    }
  ]);

  const [recentPrescriptions] = useState([
    {
      id: 1,
      patient: "Sarah Mitchell",
      medication: "Lisinopril 10mg",
      status: "filled",
      prescribedDate: "2024-01-20"
    },
    {
      id: 2,
      patient: "Robert Chen",
      medication: "Atorvastatin 20mg",
      status: "pending",
      prescribedDate: "2024-01-18"
    },
    {
      id: 3,
      patient: "Maria Garcia",
      medication: "Sumatriptan 50mg",
      status: "filled",
      prescribedDate: "2024-01-22"
    }
  ]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPortal="Doctor Portal" />
      
      <main className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="portal-header mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Dr. Johnson's Practice</h1>
              <p className="opacity-90">Electronic prescribing with AI-powered clinical decision support</p>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline">
                <Users className="mr-1 h-3 w-3" />
                12 Patients Today
              </Badge>
              <Badge variant="secondary">
                <FileText className="mr-1 h-3 w-3" />
                8 Pending Prescriptions
              </Badge>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="patients" className="space-y-6">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="patients">Patients</TabsTrigger>
                <TabsTrigger value="prescribe">E-Prescribe</TabsTrigger>
                <TabsTrigger value="prescriptions">Prescriptions</TabsTrigger>
                <TabsTrigger value="schedule">Schedule</TabsTrigger>
                <TabsTrigger value="compliance">HIPAA</TabsTrigger>
              </TabsList>

              <TabsContent value="patients" className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-semibold">Patient Dashboard</h2>
                  <div className="flex space-x-2">
                    <Input placeholder="Search patients..." className="w-64" />
                    <Button variant="outline">
                      <Search className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="grid gap-4">
                  {patients.map((patient) => (
                    <Card key={patient.id} className="portal-card">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h3 className="text-lg font-semibold">{patient.name}</h3>
                            <p className="text-sm text-muted-foreground">Age: {patient.age} | Last Visit: {patient.lastVisit}</p>
                          </div>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">View Chart</Button>
                            <Button size="sm">Prescribe</Button>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                          <div>
                            <p className="font-medium mb-1">Active Conditions</p>
                            <div className="space-y-1">
                              {patient.conditions.map((condition, index) => (
                                <Badge key={index} variant="secondary" className="text-xs">
                                  {condition}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div>
                            <p className="font-medium mb-1">Active Prescriptions</p>
                            <p className="text-muted-foreground">{patient.activePrescriptions} medications</p>
                          </div>
                          <div>
                            <p className="font-medium mb-1">Next Appointment</p>
                            <p className="text-muted-foreground">{patient.upcomingAppointment}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="prescribe" className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-semibold">Create New Prescription</h2>
                  <Badge variant="outline">
                    <AlertTriangle className="mr-1 h-3 w-3" />
                    AI Assistance Active
                  </Badge>
                </div>
                
                <Card className="portal-card">
                  <CardHeader>
                    <CardTitle>Electronic Prescription Form</CardTitle>
                    <CardDescription>AI will check for interactions and provide recommendations</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="patient">Patient</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select patient" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="sarah">Sarah Mitchell</SelectItem>
                            <SelectItem value="robert">Robert Chen</SelectItem>
                            <SelectItem value="maria">Maria Garcia</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="medication">Medication</Label>
                        <Input id="medication" placeholder="Start typing medication name..." />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="dosage">Dosage</Label>
                        <Input id="dosage" placeholder="e.g., 10mg" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="frequency">Frequency</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select frequency" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="once">Once daily</SelectItem>
                            <SelectItem value="twice">Twice daily</SelectItem>
                            <SelectItem value="three">Three times daily</SelectItem>
                            <SelectItem value="four">Four times daily</SelectItem>
                            <SelectItem value="asneeded">As needed</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="duration">Duration</Label>
                        <Input id="duration" placeholder="e.g., 30 days" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="refills">Refills</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select refills" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="0">0 refills</SelectItem>
                            <SelectItem value="1">1 refill</SelectItem>
                            <SelectItem value="2">2 refills</SelectItem>
                            <SelectItem value="3">3 refills</SelectItem>
                            <SelectItem value="5">5 refills</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="instructions">Special Instructions</Label>
                      <Textarea id="instructions" placeholder="Additional instructions for patient or pharmacist..." />
                    </div>
                    
                    <div className="flex justify-end space-x-2">
                      <Button variant="outline">Save as Draft</Button>
                      <Button>Send Prescription</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="prescriptions" className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-semibold">Recent Prescriptions</h2>
                  <Button variant="outline">
                    <FileText className="mr-2 h-4 w-4" />
                    Export Report
                  </Button>
                </div>
                
                <div className="space-y-3">
                  {recentPrescriptions.map((prescription) => (
                    <Card key={prescription.id} className="portal-card">
                      <CardContent className="flex items-center justify-between p-4">
                        <div className="flex items-center space-x-3">
                          <div className={`p-2 rounded-full ${
                            prescription.status === 'filled' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'
                          }`}>
                            {prescription.status === 'filled' ? <CheckCircle className="h-4 w-4" /> : <Clock className="h-4 w-4" />}
                          </div>
                          <div>
                            <p className="font-medium">{prescription.medication}</p>
                            <p className="text-sm text-muted-foreground">
                              {prescription.patient} • {prescription.prescribedDate}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge variant={prescription.status === 'filled' ? 'default' : 'secondary'}>
                            {prescription.status}
                          </Badge>
                          <Button size="sm" variant="outline">View</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="schedule" className="space-y-4">
                <h2 className="text-2xl font-semibold">Today's Schedule</h2>
                
                <Card className="portal-card">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Calendar className="mr-2 h-5 w-5" />
                      January 25, 2024
                    </CardTitle>
                    <CardDescription>8 appointments scheduled</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">Sarah Mitchell - Follow-up</p>
                          <p className="text-sm text-muted-foreground">Hypertension management</p>
                        </div>
                        <span className="text-sm font-medium">9:00 AM</span>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">Robert Chen - Consultation</p>
                          <p className="text-sm text-muted-foreground">Cholesterol review</p>
                        </div>
                        <span className="text-sm font-medium">10:30 AM</span>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">Maria Garcia - New Patient</p>
                          <p className="text-sm text-muted-foreground">Initial consultation</p>
                        </div>
                        <span className="text-sm font-medium">2:00 PM</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="compliance" className="space-y-4">
                <HIPAACompliance />
              </TabsContent>
            </Tabs>
          </div>

          {/* AI Assistant Sidebar */}
          <div className="lg:col-span-1">
            <AiAssistant 
              portal="doctor"
              suggestions={[
                "Check drug interactions for new prescription",
                "Review patient's medication history",
                "Find alternative medications",
                "Clinical decision support for dosage"
              ]}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
