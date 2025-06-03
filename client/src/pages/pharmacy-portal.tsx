import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Navigation } from "@/components/navigation";
import { AiAssistant } from "@/components/ai-assistant";
import { HIPAACompliance } from "@/components/hipaa-compliance";
import { 
  Building2, 
  Package, 
  FileText, 
  AlertTriangle,
  CheckCircle,
  Clock,
  Search,
  Scan,
  Users,
  TrendingUp
} from "lucide-react";

export default function PharmacyPortal() {
  const [pendingPrescriptions] = useState([
    {
      id: 1,
      patient: "Sarah Mitchell",
      medication: "Lisinopril 10mg",
      prescriber: "Dr. Johnson",
      quantity: 30,
      status: "ready_for_pickup",
      receivedTime: "2 hours ago",
      insurance: "Blue Cross"
    },
    {
      id: 2,
      patient: "Robert Chen",
      medication: "Atorvastatin 20mg",
      prescriber: "Dr. Smith",
      quantity: 90,
      status: "verifying",
      receivedTime: "30 minutes ago",
      insurance: "Medicare"
    },
    {
      id: 3,
      patient: "Maria Garcia",
      medication: "Sumatriptan 50mg",
      prescriber: "Dr. Wilson",
      quantity: 12,
      status: "filling",
      receivedTime: "1 hour ago",
      insurance: "Aetna"
    }
  ]);

  const [inventory] = useState([
    {
      medication: "Lisinopril 10mg",
      stock: 245,
      lowStockThreshold: 50,
      cost: "$12.50",
      supplier: "McKesson"
    },
    {
      medication: "Metformin 500mg",
      stock: 18,
      lowStockThreshold: 25,
      cost: "$8.75",
      supplier: "Cardinal Health"
    },
    {
      medication: "Atorvastatin 20mg",
      stock: 156,
      lowStockThreshold: 30,
      cost: "$15.20",
      supplier: "AmerisourceBergen"
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "ready_for_pickup": return "bg-green-100 text-green-600";
      case "verifying": return "bg-yellow-100 text-yellow-600";
      case "filling": return "bg-blue-100 text-blue-600";
      default: return "bg-gray-100 text-gray-600";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "ready_for_pickup": return <CheckCircle className="h-4 w-4" />;
      case "verifying": return <AlertTriangle className="h-4 w-4" />;
      case "filling": return <Clock className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPortal="Pharmacy Portal" />
      
      <main className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="portal-header mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">MediCare Pharmacy</h1>
              <p className="opacity-90">Prescription processing and inventory management with AI workflow optimization</p>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline">
                <FileText className="mr-1 h-3 w-3" />
                12 Pending
              </Badge>
              <Badge variant="destructive">
                <Package className="mr-1 h-3 w-3" />
                3 Low Stock
              </Badge>
              <Badge variant="secondary">
                <Users className="mr-1 h-3 w-3" />
                8 Waiting
              </Badge>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="prescriptions" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="prescriptions">Prescriptions</TabsTrigger>
                <TabsTrigger value="inventory">Inventory</TabsTrigger>
                <TabsTrigger value="patients">Patient Care</TabsTrigger>
                <TabsTrigger value="reports">Reports</TabsTrigger>
              </TabsList>

              <TabsContent value="prescriptions" className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-semibold">Prescription Queue</h2>
                  <div className="flex space-x-2">
                    <Button variant="outline">
                      <Scan className="mr-2 h-4 w-4" />
                      Scan Prescription
                    </Button>
                    <Button variant="outline">
                      <Search className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="grid gap-4">
                  {pendingPrescriptions.map((prescription) => (
                    <Card key={prescription.id} className="portal-card">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className={`p-2 rounded-full ${getStatusColor(prescription.status)}`}>
                              {getStatusIcon(prescription.status)}
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold">{prescription.patient}</h3>
                              <p className="text-sm text-muted-foreground">
                                {prescription.medication} • Qty: {prescription.quantity}
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <Badge variant="outline" className="mb-2">
                              {prescription.status.replace('_', ' ')}
                            </Badge>
                            <p className="text-sm text-muted-foreground">{prescription.receivedTime}</p>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                          <div>
                            <p className="font-medium mb-1">Prescriber</p>
                            <p className="text-muted-foreground">{prescription.prescriber}</p>
                          </div>
                          <div>
                            <p className="font-medium mb-1">Insurance</p>
                            <p className="text-muted-foreground">{prescription.insurance}</p>
                          </div>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">View Details</Button>
                            <Button size="sm">Process</Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="inventory" className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-semibold">Inventory Management</h2>
                  <div className="flex space-x-2">
                    <Button variant="outline">
                      <TrendingUp className="mr-2 h-4 w-4" />
                      Analytics
                    </Button>
                    <Button variant="outline">
                      <Package className="mr-2 h-4 w-4" />
                      Reorder
                    </Button>
                  </div>
                </div>
                
                <div className="grid gap-4">
                  {inventory.map((item, index) => (
                    <Card key={index} className="portal-card">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h3 className="text-lg font-semibold">{item.medication}</h3>
                            <p className="text-sm text-muted-foreground">Supplier: {item.supplier}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-bold">{item.stock} units</p>
                            <p className="text-sm text-muted-foreground">Cost: {item.cost}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            {item.stock <= item.lowStockThreshold ? (
                              <Badge variant="destructive">Low Stock</Badge>
                            ) : (
                              <Badge variant="secondary">In Stock</Badge>
                            )}
                            <span className="text-sm text-muted-foreground">
                              Threshold: {item.lowStockThreshold}
                            </span>
                          </div>
                          {item.stock <= item.lowStockThreshold && (
                            <Button size="sm">Reorder Now</Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="patients" className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-semibold">Patient Counseling</h2>
                  <Button variant="outline">
                    <Users className="mr-2 h-4 w-4" />
                    Consultation Queue
                  </Button>
                </div>
                
                <Card className="portal-card">
                  <CardHeader>
                    <CardTitle>Today's Counseling Sessions</CardTitle>
                    <CardDescription>AI-recommended counseling points for new medications</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">Sarah Mitchell - Lisinopril</p>
                          <p className="text-sm text-muted-foreground">New medication - First time ACE inhibitor</p>
                        </div>
                        <Button size="sm">Start Counseling</Button>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">Robert Chen - Atorvastatin</p>
                          <p className="text-sm text-muted-foreground">Dosage change - Monitor for side effects</p>
                        </div>
                        <Button size="sm">Start Counseling</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reports" className="space-y-4">
                <h2 className="text-2xl font-semibold">Analytics & Reports</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="portal-card">
                    <CardHeader>
                      <CardTitle>Daily Statistics</CardTitle>
                      <CardDescription>Today's performance metrics</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span>Prescriptions Filled</span>
                          <span className="font-semibold">24</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Average Wait Time</span>
                          <span className="font-semibold">12 min</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Customer Satisfaction</span>
                          <span className="font-semibold">4.8/5</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Revenue</span>
                          <span className="font-semibold">$2,450</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="portal-card">
                    <CardHeader>
                      <CardTitle>AI Insights</CardTitle>
                      <CardDescription>Workflow optimization recommendations</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 text-sm">
                        <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded-lg">
                          <p className="font-medium">Peak Hours Detected</p>
                          <p className="text-muted-foreground">Consider adding staff during 2-4 PM</p>
                        </div>
                        <div className="p-3 bg-yellow-50 dark:bg-yellow-950 rounded-lg">
                          <p className="font-medium">Inventory Alert</p>
                          <p className="text-muted-foreground">Reorder Metformin within 2 days</p>
                        </div>
                        <div className="p-3 bg-green-50 dark:bg-green-950 rounded-lg">
                          <p className="font-medium">Efficiency Improved</p>
                          <p className="text-muted-foreground">15% faster processing this week</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* AI Assistant Sidebar */}
          <div className="lg:col-span-1">
            <AiAssistant 
              portal="pharmacy"
              suggestions={[
                "Check drug interaction for new prescription",
                "Optimize inventory reorder schedule",
                "Review patient counseling points",
                "Analyze workflow efficiency"
              ]}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
