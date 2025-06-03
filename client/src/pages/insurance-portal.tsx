import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Navigation } from "@/components/navigation";
import { AiAssistant } from "@/components/ai-assistant";
import { 
  Shield, 
  FileCheck, 
  AlertTriangle, 
  DollarSign,
  Clock,
  CheckCircle,
  XCircle,
  Search,
  Filter,
  TrendingUp,
  Users
} from "lucide-react";

export default function InsurancePortal() {
  const [claims] = useState([
    {
      id: "CLM-2024-001",
      patient: "Sarah Mitchell",
      provider: "Dr. Johnson",
      medication: "Lisinopril 10mg",
      claimAmount: 45.50,
      copay: 10.00,
      status: "approved",
      submittedDate: "2024-01-20",
      processedDate: "2024-01-21"
    },
    {
      id: "CLM-2024-002",
      patient: "Robert Chen",
      provider: "CVS Pharmacy",
      medication: "Atorvastatin 20mg",
      claimAmount: 89.25,
      copay: 25.00,
      status: "pending",
      submittedDate: "2024-01-22",
      processedDate: null
    },
    {
      id: "CLM-2024-003",
      patient: "Maria Garcia",
      provider: "Walgreens",
      medication: "Sumatriptan 50mg",
      claimAmount: 156.75,
      copay: 35.00,
      status: "under_review",
      submittedDate: "2024-01-23",
      processedDate: null
    }
  ]);

  const [priorAuthorizations] = useState([
    {
      id: "PA-2024-001",
      patient: "John Williams",
      medication: "Humira",
      prescriber: "Dr. Rodriguez",
      status: "pending",
      priority: "urgent",
      requestDate: "2024-01-24"
    },
    {
      id: "PA-2024-002",
      patient: "Lisa Brown",
      medication: "Ozempic",
      prescriber: "Dr. Smith",
      status: "approved",
      priority: "standard",
      requestDate: "2024-01-20"
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved": return "bg-green-100 text-green-600";
      case "pending": return "bg-yellow-100 text-yellow-600";
      case "under_review": return "bg-blue-100 text-blue-600";
      case "denied": return "bg-red-100 text-red-600";
      default: return "bg-gray-100 text-gray-600";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "approved": return <CheckCircle className="h-4 w-4" />;
      case "denied": return <XCircle className="h-4 w-4" />;
      case "pending": 
      case "under_review": return <Clock className="h-4 w-4" />;
      default: return <Clock className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPortal="Insurance Portal" />
      
      <main className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="portal-header mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">BlueCross Insurance</h1>
              <p className="opacity-90">Claims processing and coverage management with AI-powered fraud detection</p>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline">
                <FileCheck className="mr-1 h-3 w-3" />
                45 Claims Today
              </Badge>
              <Badge variant="secondary">
                <AlertTriangle className="mr-1 h-3 w-3" />
                8 Pending PA
              </Badge>
              <Badge variant="destructive">
                <Shield className="mr-1 h-3 w-3" />
                2 Fraud Alerts
              </Badge>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="claims" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="claims">Claims</TabsTrigger>
                <TabsTrigger value="authorizations">Prior Auth</TabsTrigger>
                <TabsTrigger value="coverage">Coverage</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
              </TabsList>

              <TabsContent value="claims" className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-semibold">Claims Processing</h2>
                  <div className="flex space-x-2">
                    <Input placeholder="Search claims..." className="w-64" />
                    <Button variant="outline">
                      <Filter className="h-4 w-4" />
                    </Button>
                    <Button variant="outline">
                      <Search className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="grid gap-4">
                  {claims.map((claim) => (
                    <Card key={claim.id} className="portal-card">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className={`p-2 rounded-full ${getStatusColor(claim.status)}`}>
                              {getStatusIcon(claim.status)}
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold">{claim.id}</h3>
                              <p className="text-sm text-muted-foreground">
                                {claim.patient} • {claim.medication}
                              </p>
                            </div>
                          </div>
                          <div className="text-right">
                            <Badge variant="outline" className="mb-2">
                              {claim.status.replace('_', ' ')}
                            </Badge>
                            <p className="text-sm text-muted-foreground">
                              Submitted: {claim.submittedDate}
                            </p>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                          <div>
                            <p className="font-medium mb-1">Provider</p>
                            <p className="text-muted-foreground">{claim.provider}</p>
                          </div>
                          <div>
                            <p className="font-medium mb-1">Claim Amount</p>
                            <p className="text-muted-foreground">${claim.claimAmount.toFixed(2)}</p>
                          </div>
                          <div>
                            <p className="font-medium mb-1">Copay</p>
                            <p className="text-muted-foreground">${claim.copay.toFixed(2)}</p>
                          </div>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">Review</Button>
                            <Button size="sm">Process</Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="authorizations" className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-semibold">Prior Authorizations</h2>
                  <Button variant="outline">
                    <FileCheck className="mr-2 h-4 w-4" />
                    New Authorization
                  </Button>
                </div>
                
                <div className="grid gap-4">
                  {priorAuthorizations.map((pa) => (
                    <Card key={pa.id} className="portal-card">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className={`p-2 rounded-full ${getStatusColor(pa.status)}`}>
                              {getStatusIcon(pa.status)}
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold">{pa.id}</h3>
                              <p className="text-sm text-muted-foreground">
                                {pa.patient} • {pa.medication}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            {pa.priority === "urgent" && (
                              <Badge variant="destructive">Urgent</Badge>
                            )}
                            <Badge variant="outline">
                              {pa.status.replace('_', ' ')}
                            </Badge>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                          <div>
                            <p className="font-medium mb-1">Prescriber</p>
                            <p className="text-muted-foreground">{pa.prescriber}</p>
                          </div>
                          <div>
                            <p className="font-medium mb-1">Request Date</p>
                            <p className="text-muted-foreground">{pa.requestDate}</p>
                          </div>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">Review</Button>
                            <Button size="sm">
                              {pa.status === "pending" ? "Approve" : "View"}
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="coverage" className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-semibold">Coverage Determination</h2>
                  <Button variant="outline">
                    <Shield className="mr-2 h-4 w-4" />
                    Formulary Management
                  </Button>
                </div>
                
                <Card className="portal-card">
                  <CardHeader>
                    <CardTitle>Coverage Lookup</CardTitle>
                    <CardDescription>Check medication coverage and formulary status</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="member-id">Member ID</Label>
                        <Input id="member-id" placeholder="Enter member ID" />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="medication">Medication</Label>
                        <Input id="medication" placeholder="Enter medication name" />
                      </div>
                    </div>
                    
                    <Button>Check Coverage</Button>
                  </CardContent>
                </Card>

                <Card className="portal-card">
                  <CardHeader>
                    <CardTitle>Recent Coverage Decisions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">Ozempic - Tier 3 Coverage</p>
                          <p className="text-sm text-muted-foreground">Prior authorization required</p>
                        </div>
                        <Badge variant="secondary">Approved</Badge>
                      </div>
                      
                      <div className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">Humira - Specialty Medication</p>
                          <p className="text-sm text-muted-foreground">Step therapy required</p>
                        </div>
                        <Badge variant="destructive">Denied</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="analytics" className="space-y-4">
                <h2 className="text-2xl font-semibold">Analytics & Insights</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="portal-card">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <TrendingUp className="mr-2 h-5 w-5" />
                        Claims Statistics
                      </CardTitle>
                      <CardDescription>Monthly performance metrics</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span>Total Claims Processed</span>
                          <span className="font-semibold">1,247</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Average Processing Time</span>
                          <span className="font-semibold">2.3 hours</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Approval Rate</span>
                          <span className="font-semibold">94.2%</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Total Paid Out</span>
                          <span className="font-semibold">$456,789</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="portal-card">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Shield className="mr-2 h-5 w-5" />
                        Fraud Detection
                      </CardTitle>
                      <CardDescription>AI-powered fraud prevention</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="p-3 bg-red-50 dark:bg-red-950 rounded-lg">
                          <p className="font-medium text-red-800 dark:text-red-200">High Risk Alert</p>
                          <p className="text-sm text-red-600 dark:text-red-300">
                            Unusual prescription pattern detected for provider ID: 12345
                          </p>
                        </div>
                        
                        <div className="p-3 bg-yellow-50 dark:bg-yellow-950 rounded-lg">
                          <p className="font-medium text-yellow-800 dark:text-yellow-200">Medium Risk</p>
                          <p className="text-sm text-yellow-600 dark:text-yellow-300">
                            Multiple claims from same patient in short timeframe
                          </p>
                        </div>
                        
                        <div className="p-3 bg-green-50 dark:bg-green-950 rounded-lg">
                          <p className="font-medium text-green-800 dark:text-green-200">Fraud Prevented</p>
                          <p className="text-sm text-green-600 dark:text-green-300">
                            $12,450 in fraudulent claims blocked this month
                          </p>
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
              portal="insurance"
              suggestions={[
                "Analyze claim patterns for fraud",
                "Expedite prior authorization",
                "Check coverage alternatives",
                "Review formulary updates"
              ]}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
