import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Pill, 
  Calendar, 
  RefreshCw, 
  AlertTriangle, 
  CheckCircle,
  Clock,
  MapPin
} from "lucide-react";

interface Prescription {
  id: number;
  medicationName: string;
  dosage: string;
  frequency: string;
  refillsRemaining: number;
  status: string;
  prescribedBy: string;
  lastFilled: string;
  nextRefill: string;
}

interface PrescriptionCardProps {
  prescription: Prescription;
}

export function PrescriptionCard({ prescription }: PrescriptionCardProps) {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "active": return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "refill_needed": return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      case "expired": return <Clock className="h-4 w-4 text-red-500" />;
      default: return <Pill className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "refill_needed": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      case "expired": return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "active": return "Active";
      case "refill_needed": return "Refill Needed";
      case "expired": return "Expired";
      default: return "Unknown";
    }
  };

  return (
    <Card className="portal-card hover:shadow-lg transition-all duration-200">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-aqua-gradient dark:bg-stripe-gradient rounded-lg">
              <Pill className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">{prescription.medicationName}</h3>
              <p className="text-sm text-muted-foreground">
                {prescription.dosage} • {prescription.frequency}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            {getStatusIcon(prescription.status)}
            <Badge className={getStatusColor(prescription.status)}>
              {getStatusText(prescription.status)}
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 text-sm">
          <div>
            <p className="font-medium mb-1">Prescribed by</p>
            <p className="text-muted-foreground">{prescription.prescribedBy}</p>
          </div>
          <div>
            <p className="font-medium mb-1">Last filled</p>
            <p className="text-muted-foreground">{prescription.lastFilled}</p>
          </div>
          <div>
            <p className="font-medium mb-1">Next refill</p>
            <p className="text-muted-foreground">{prescription.nextRefill}</p>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-1">
              <RefreshCw className="h-4 w-4 text-muted-foreground" />
              <span>{prescription.refillsRemaining} refills remaining</span>
            </div>
          </div>
          
          <div className="flex space-x-2">
            <Button variant="outline" size="sm">
              <MapPin className="mr-2 h-4 w-4" />
              Find Pharmacy
            </Button>
            {prescription.status === "refill_needed" ? (
              <Button size="sm" className="bg-aqua-gradient dark:bg-stripe-gradient hover:opacity-90">
                Request Refill
              </Button>
            ) : (
              <Button variant="outline" size="sm">
                View Details
              </Button>
            )}
          </div>
        </div>

        {prescription.status === "refill_needed" && (
          <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-950 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <div className="flex items-center space-x-2">
              <AlertTriangle className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
              <p className="text-sm text-yellow-800 dark:text-yellow-200">
                Your prescription is ready for refill. Contact your pharmacy or request a refill now.
              </p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
