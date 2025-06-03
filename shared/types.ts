import { Json } from 'drizzle-orm';

export interface AuditLog {
  id: number;
  timestamp: Date;
  userId: number;
  action: string;
  details: string;
  resource: string;
  riskLevel: string;
}

export interface DataAccessLog {
  id: number;
  timestamp: Date;
  userId: number;
  patientId: number;
  accessType: string;
  details: string;
}

export interface SecurityIncident {
  id: number;
  timestamp: Date;
  type: string;
  severity: string;
  status: string;
  details: string;
  affectedUsers: number[];
  resolutionSteps?: string;
  resolvedAt?: Date;
}

export interface ComplianceReport {
  id: number;
  timestamp: Date;
  reportType: string;
  period: string;
  data: Json;
  status: string;
  submittedBy: number;
}

export interface BlockchainTransaction {
  id: number;
  createdAt: Date | null;
  status: string;
  transactionHash: string;
  blockNumber: number | null;
  fromAddress: string;
  toAddress: string;
  actionType: string;
  dataHash: string;
  gasUsed: string | null;
  gasFee: string | null;
  networkId: string | null;
  confirmations: number | null;
  metadata: Json;
}
