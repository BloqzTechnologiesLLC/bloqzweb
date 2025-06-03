import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link2, AlertCircle, CheckCircle, Clock, Activity } from "lucide-react";

interface BlockchainNetwork {
  name: string;
  status: "connected" | "pending" | "disconnected";
  lastBlock: number;
  gasPrice: string;
  transactions: number;
}

export function BlockchainStatus() {
  const [networks, setNetworks] = useState<BlockchainNetwork[]>([
    {
      name: "Ethereum",
      status: "connected",
      lastBlock: 19234567,
      gasPrice: "25 gwei",
      transactions: 1247
    },
    {
      name: "Polygon",
      status: "connected",
      lastBlock: 52845632,
      gasPrice: "30 gwei",
      transactions: 3456
    },
    {
      name: "Arbitrum",
      status: "pending",
      lastBlock: 178345621,
      gasPrice: "0.1 gwei",
      transactions: 892
    }
  ]);

  const [recentTransactions] = useState([
    {
      hash: "0x1a2b3c...9f8e7d",
      type: "Prescription Created",
      network: "Ethereum",
      timestamp: "2 minutes ago",
      status: "confirmed"
    },
    {
      hash: "0x4d5e6f...c3b2a1",
      type: "Prescription Filled",
      network: "Polygon",
      timestamp: "5 minutes ago",
      status: "confirmed"
    },
    {
      hash: "0x7g8h9i...6e5d4c",
      type: "Insurance Claim",
      network: "Arbitrum",
      timestamp: "8 minutes ago",
      status: "pending"
    }
  ]);

  // Simulate network updates
  useEffect(() => {
    const interval = setInterval(() => {
      setNetworks(prev => prev.map(network => ({
        ...network,
        lastBlock: network.lastBlock + Math.floor(Math.random() * 5),
        transactions: network.transactions + Math.floor(Math.random() * 10)
      })));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getOverallStatus = () => {
    const connectedCount = networks.filter(n => n.status === "connected").length;
    const totalCount = networks.length;
    
    if (connectedCount === totalCount) return "connected";
    if (connectedCount > 0) return "partial";
    return "disconnected";
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "connected": return <CheckCircle className="h-3 w-3 text-green-500" />;
      case "pending": 
      case "partial": return <Clock className="h-3 w-3 text-yellow-500" />;
      case "disconnected": return <AlertCircle className="h-3 w-3 text-red-500" />;
      default: return <AlertCircle className="h-3 w-3 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "connected": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "pending": 
      case "partial": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      case "disconnected": return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  const overallStatus = getOverallStatus();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm" className="h-8 px-3">
          <Link2 className="h-4 w-4 mr-2" />
          <span className="hidden sm:inline">Blockchain</span>
          {getStatusIcon(overallStatus)}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-96" align="end">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-semibold">Blockchain Networks</h4>
            <Badge className={getStatusColor(overallStatus)}>
              {overallStatus === "connected" ? "All Connected" : 
               overallStatus === "partial" ? "Partially Connected" : "Disconnected"}
            </Badge>
          </div>

          {/* Network Status */}
          <div className="space-y-3">
            {networks.map((network) => (
              <Card key={network.name} className="p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="font-medium text-sm">{network.name}</span>
                    {getStatusIcon(network.status)}
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {network.status}
                  </Badge>
                </div>
                <div className="grid grid-cols-3 gap-2 text-xs text-muted-foreground">
                  <div>
                    <p className="font-medium">Block</p>
                    <p>{network.lastBlock.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="font-medium">Gas</p>
                    <p>{network.gasPrice}</p>
                  </div>
                  <div>
                    <p className="font-medium">TXs</p>
                    <p>{network.transactions}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Recent Transactions */}
          <div>
            <h5 className="font-medium mb-2 flex items-center">
              <Activity className="h-4 w-4 mr-2" />
              Recent Transactions
            </h5>
            <div className="space-y-2">
              {recentTransactions.map((tx, index) => (
                <div key={index} className="flex items-center justify-between p-2 border rounded text-sm">
                  <div>
                    <p className="font-medium">{tx.type}</p>
                    <p className="text-xs text-muted-foreground">
                      {tx.hash} • {tx.network}
                    </p>
                  </div>
                  <div className="text-right">
                    <Badge 
                      variant={tx.status === "confirmed" ? "default" : "secondary"}
                      className="text-xs"
                    >
                      {tx.status}
                    </Badge>
                    <p className="text-xs text-muted-foreground mt-1">{tx.timestamp}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
