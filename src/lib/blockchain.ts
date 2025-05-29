import { apiRequest } from "./queryClient";

export interface BlockchainTransaction {
  id: string;
  transactionHash: string;
  blockNumber: number;
  fromAddress: string;
  toAddress: string;
  actionType: 'prescription_created' | 'prescription_filled' | 'claim_processed' | 'insurance_verified';
  dataHash: string;
  gasUsed: string;
  status: 'pending' | 'confirmed' | 'failed';
  createdAt: string;
}

export interface BlockchainNetwork {
  name: string;
  status: 'connected' | 'pending' | 'disconnected';
  chainId: number;
  lastBlock: number;
  gasPrice: string;
  transactions: number;
  rpcUrl: string;
}

export class BlockchainService {
  private networks: BlockchainNetwork[] = [
    {
      name: 'Ethereum',
      status: 'connected',
      chainId: 1,
      lastBlock: 19234567,
      gasPrice: '25 gwei',
      transactions: 1247,
      rpcUrl: process.env.ETHEREUM_RPC_URL || 'https://mainnet.infura.io/v3/demo'
    },
    {
      name: 'Polygon',
      status: 'connected',
      chainId: 137,
      lastBlock: 52845632,
      gasPrice: '30 gwei',
      transactions: 3456,
      rpcUrl: process.env.POLYGON_RPC_URL || 'https://polygon-rpc.com'
    },
    {
      name: 'Arbitrum',
      status: 'connected',
      chainId: 42161,
      lastBlock: 178345621,
      gasPrice: '0.1 gwei',
      transactions: 892,
      rpcUrl: process.env.ARBITRUM_RPC_URL || 'https://arb1.arbitrum.io/rpc'
    }
  ];

  async createPrescriptionRecord(prescriptionData: {
    patientId: number;
    doctorId: number;
    medicationName: string;
    dosage: string;
    frequency: string;
  }): Promise<BlockchainTransaction> {
    try {
      const response = await apiRequest('POST', '/api/blockchain/prescription', {
        ...prescriptionData,
        actionType: 'prescription_created'
      });
      
      return await response.json();
    } catch (error) {
      console.error('Failed to create prescription on blockchain:', error);
      throw error;
    }
  }

  async fillPrescription(prescriptionId: number, pharmacyId: number): Promise<BlockchainTransaction> {
    try {
      const response = await apiRequest('POST', '/api/blockchain/prescription-fill', {
        prescriptionId,
        pharmacyId,
        actionType: 'prescription_filled'
      });
      
      return await response.json();
    } catch (error) {
      console.error('Failed to record prescription fill on blockchain:', error);
      throw error;
    }
  }

  async processInsuranceClaim(claimData: {
    prescriptionId: number;
    patientId: number;
    insuranceProvider: string;
    claimAmount: number;
  }): Promise<BlockchainTransaction> {
    try {
      const response = await apiRequest('POST', '/api/blockchain/insurance-claim', {
        ...claimData,
        actionType: 'claim_processed'
      });
      
      return await response.json();
    } catch (error) {
      console.error('Failed to process insurance claim on blockchain:', error);
      throw error;
    }
  }

  async verifyTransactionStatus(transactionHash: string): Promise<BlockchainTransaction> {
    try {
      const response = await apiRequest('GET', `/api/blockchain/transaction/${transactionHash}`);
      return await response.json();
    } catch (error) {
      console.error('Failed to verify transaction status:', error);
      throw error;
    }
  }

  async getNetworkStatus(): Promise<BlockchainNetwork[]> {
    try {
      const response = await apiRequest('GET', '/api/blockchain/networks');
      return await response.json();
    } catch (error) {
      console.error('Failed to get network status:', error);
      // Return cached network status if API fails
      return this.networks;
    }
  }

  async getRecentTransactions(limit: number = 10): Promise<BlockchainTransaction[]> {
    try {
      const response = await apiRequest('GET', `/api/blockchain/transactions?limit=${limit}`);
      return await response.json();
    } catch (error) {
      console.error('Failed to get recent transactions:', error);
      throw error;
    }
  }

  generateDataHash(data: any): string {
    // Create a deterministic hash of the data for blockchain storage
    const jsonString = JSON.stringify(data, Object.keys(data).sort());
    
    // Simple hash function for demo purposes
    // In production, use a proper cryptographic hash function
    let hash = 0;
    for (let i = 0; i < jsonString.length; i++) {
      const char = jsonString.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    
    return Math.abs(hash).toString(16).padStart(8, '0');
  }

  formatGasPrice(gasPrice: string): string {
    // Format gas price for display
    const price = parseFloat(gasPrice.replace(' gwei', ''));
    if (price < 1) {
      return `${(price * 1000).toFixed(0)} mwei`;
    }
    return `${price.toFixed(1)} gwei`;
  }

  getNetworkExplorerUrl(network: string, transactionHash: string): string {
    const explorers: Record<string, string> = {
      'Ethereum': 'https://etherscan.io/tx/',
      'Polygon': 'https://polygonscan.com/tx/',
      'Arbitrum': 'https://arbiscan.io/tx/'
    };
    
    return explorers[network] ? `${explorers[network]}${transactionHash}` : '#';
  }

  async estimateGasCost(actionType: string, network: string = 'Ethereum'): Promise<{
    estimatedGas: number;
    gasPriceGwei: number;
    estimatedCostUSD: number;
  }> {
    try {
      const response = await apiRequest('POST', '/api/blockchain/estimate-gas', {
        actionType,
        network
      });
      return await response.json();
    } catch (error) {
      console.error('Failed to estimate gas cost:', error);
      
      // Return default estimates if API fails
      const gasEstimates: Record<string, number> = {
        'prescription_created': 150000,
        'prescription_filled': 100000,
        'claim_processed': 120000,
        'insurance_verified': 80000
      };
      
      return {
        estimatedGas: gasEstimates[actionType] || 100000,
        gasPriceGwei: 25,
        estimatedCostUSD: 15.50
      };
    }
  }
}

// Export singleton instance
export const blockchainService = new BlockchainService();

// Utility functions for blockchain integration
export const formatTransactionHash = (hash: string): string => {
  if (hash.length <= 10) return hash;
  return `${hash.substring(0, 6)}...${hash.substring(hash.length - 4)}`;
};

export const getTransactionStatusIcon = (status: string) => {
  switch (status) {
    case 'confirmed':
      return '✅';
    case 'pending':
      return '⏳';
    case 'failed':
      return '❌';
    default:
      return '❓';
  }
};

export const getTransactionStatusColor = (status: string): string => {
  switch (status) {
    case 'confirmed':
      return 'text-green-600 dark:text-green-400';
    case 'pending':
      return 'text-yellow-600 dark:text-yellow-400';
    case 'failed':
      return 'text-red-600 dark:text-red-400';
    default:
      return 'text-gray-600 dark:text-gray-400';
  }
};
