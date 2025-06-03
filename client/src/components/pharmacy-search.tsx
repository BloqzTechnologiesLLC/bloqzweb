import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { 
  MapPin, 
  Star, 
  Clock, 
  Phone, 
  Navigation,
  DollarSign,
  Package,
  CheckCircle
} from "lucide-react";

interface Pharmacy {
  id: number;
  name: string;
  address: string;
  distance: number;
  rating: number;
  isInNetwork: boolean;
  isOpen: boolean;
  hours: string;
  phone: string;
  medications: {
    lisinopril: { brand: number; generic: number; inStock: boolean };
    metformin: { brand: number; generic: number; inStock: boolean };
  };
}

export function PharmacySearch() {
  const [searchRadius, setSearchRadius] = useState([10]);
  const [preferGeneric, setPreferGeneric] = useState(true);
  const [inNetworkOnly, setInNetworkOnly] = useState(false);
  const [selectedMedication, setSelectedMedication] = useState("lisinopril");

  const [pharmacies] = useState<Pharmacy[]>([
    {
      id: 1,
      name: "CVS Pharmacy",
      address: "123 Main St, Anytown, ST 12345",
      distance: 0.8,
      rating: 4.2,
      isInNetwork: true,
      isOpen: true,
      hours: "8 AM - 10 PM",
      phone: "(555) 123-4567",
      medications: {
        lisinopril: { brand: 45.50, generic: 12.50, inStock: true },
        metformin: { brand: 89.25, generic: 18.75, inStock: true }
      }
    },
    {
      id: 2,
      name: "Walgreens",
      address: "456 Oak Ave, Anytown, ST 12345",
      distance: 1.2,
      rating: 4.0,
      isInNetwork: true,
      isOpen: true,
      hours: "7 AM - 11 PM",
      phone: "(555) 234-5678",
      medications: {
        lisinopril: { brand: 48.75, generic: 15.25, inStock: true },
        metformin: { brand: 92.50, generic: 22.10, inStock: false }
      }
    },
    {
      id: 3,
      name: "MediCare Pharmacy",
      address: "789 Pine Rd, Anytown, ST 12345",
      distance: 2.1,
      rating: 4.7,
      isInNetwork: false,
      isOpen: false,
      hours: "9 AM - 6 PM",
      phone: "(555) 345-6789",
      medications: {
        lisinopril: { brand: 42.25, generic: 11.80, inStock: true },
        metformin: { brand: 85.60, generic: 16.95, inStock: true }
      }
    },
    {
      id: 4,
      name: "Rite Aid",
      address: "321 Elm St, Anytown, ST 12345",
      distance: 3.4,
      rating: 3.8,
      isInNetwork: true,
      isOpen: true,
      hours: "8 AM - 9 PM",
      phone: "(555) 456-7890",
      medications: {
        lisinopril: { brand: 46.80, generic: 13.95, inStock: true },
        metformin: { brand: 88.40, generic: 19.50, inStock: true }
      }
    }
  ]);

  const filteredPharmacies = pharmacies
    .filter(pharmacy => pharmacy.distance <= searchRadius[0])
    .filter(pharmacy => !inNetworkOnly || pharmacy.isInNetwork)
    .sort((a, b) => {
      const aMed = a.medications[selectedMedication as keyof typeof a.medications];
      const bMed = b.medications[selectedMedication as keyof typeof b.medications];
      const aPrice = preferGeneric ? aMed.generic : aMed.brand;
      const bPrice = preferGeneric ? bMed.generic : bMed.brand;
      return aPrice - bPrice;
    });

  const getBestPrice = (medications: any) => {
    const med = medications[selectedMedication];
    return preferGeneric ? med.generic : med.brand;
  };

  const isInStock = (medications: any) => {
    return medications[selectedMedication].inStock;
  };

  return (
    <div className="space-y-6">
      {/* Search Filters */}
      <Card className="portal-card">
        <CardHeader>
          <CardTitle className="flex items-center">
            <MapPin className="mr-2 h-5 w-5" />
            Pharmacy Search Filters
          </CardTitle>
          <CardDescription>
            AI-powered recommendations based on your preferences and location
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="medication" className="text-sm font-medium">
                  Medication
                </Label>
                <Select value={selectedMedication} onValueChange={setSelectedMedication}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="lisinopril">Lisinopril 10mg</SelectItem>
                    <SelectItem value="metformin">Metformin 500mg</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label className="text-sm font-medium">
                  Search Radius: {searchRadius[0]} miles
                </Label>
                <Slider
                  value={searchRadius}
                  onValueChange={setSearchRadius}
                  max={50}
                  min={1}
                  step={1}
                  className="mt-2"
                />
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="prefer-generic" className="text-sm font-medium">
                  Prefer Generic
                </Label>
                <Switch
                  id="prefer-generic"
                  checked={preferGeneric}
                  onCheckedChange={setPreferGeneric}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <Label htmlFor="in-network" className="text-sm font-medium">
                  In-Network Only
                </Label>
                <Switch
                  id="in-network"
                  checked={inNetworkOnly}
                  onCheckedChange={setInNetworkOnly}
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Search Results */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">
            {filteredPharmacies.length} pharmacies found
          </h3>
          <Badge variant="outline">
            Sorted by {preferGeneric ? "generic" : "brand"} price
          </Badge>
        </div>
        
        {filteredPharmacies.map((pharmacy, index) => (
          <Card key={pharmacy.id} className="portal-card">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-aqua-gradient dark:bg-stripe-gradient rounded-lg">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="text-lg font-semibold">{pharmacy.name}</h3>
                      {index === 0 && (
                        <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                          Best Price
                        </Badge>
                      )}
                      {pharmacy.isInNetwork && (
                        <Badge variant="outline">In Network</Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{pharmacy.address}</p>
                    <div className="flex items-center space-x-4 mt-2 text-sm">
                      <div className="flex items-center space-x-1">
                        <Navigation className="h-4 w-4 text-muted-foreground" />
                        <span>{pharmacy.distance} miles</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-500" />
                        <span>{pharmacy.rating}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span className={pharmacy.isOpen ? "text-green-600" : "text-red-600"}>
                          {pharmacy.isOpen ? "Open" : "Closed"} • {pharmacy.hours}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-600">
                    ${getBestPrice(pharmacy.medications).toFixed(2)}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {preferGeneric ? "Generic" : "Brand"}
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="flex items-center space-x-2">
                  <Package className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">
                    {isInStock(pharmacy.medications) ? (
                      <span className="text-green-600 flex items-center">
                        <CheckCircle className="h-4 w-4 mr-1" />
                        In Stock
                      </span>
                    ) : (
                      <span className="text-red-600">Out of Stock</span>
                    )}
                  </span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">
                    Brand: ${pharmacy.medications[selectedMedication as keyof typeof pharmacy.medications].brand.toFixed(2)}
                  </span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{pharmacy.phone}</span>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <Phone className="mr-2 h-4 w-4" />
                  Call
                </Button>
                <Button variant="outline" size="sm">
                  <Navigation className="mr-2 h-4 w-4" />
                  Directions
                </Button>
                <Button 
                  size="sm" 
                  className="bg-aqua-gradient dark:bg-stripe-gradient hover:opacity-90"
                  disabled={!isInStock(pharmacy.medications)}
                >
                  Transfer Prescription
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
