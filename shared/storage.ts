import { AuditLog, DataAccessLog, SecurityIncident, ComplianceReport, BlockchainTransaction } from './types';
import { User, Prescription, Pharmacy, MedicationPrice, InsuranceClaim, AiInteraction } from './schema';

export interface IStorage {
  // User operations
  createUser(userData: Omit<User, 'id' | 'createdAt'>): Promise<User>;
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  updateUser(id: number, updates: Partial<User>): Promise<User>;
  
  // Prescription operations
  createPrescription(prescriptionData: Omit<Prescription, 'id' | 'createdAt'>): Promise<Prescription>;
  getPrescription(id: number): Promise<Prescription | undefined>;
  updatePrescription(id: number, updates: Partial<Prescription>): Promise<Prescription>;
  getPrescriptionsByPatient(patientId: number): Promise<Prescription[]>;
  getPrescriptionsByDoctor(doctorId: number): Promise<Prescription[]>;
  
  // Pharmacy operations
  createPharmacy(pharmacyData: Omit<Pharmacy, 'id'>): Promise<Pharmacy>;
  getPharmacy(id: number): Promise<Pharmacy | undefined>;
  updatePharmacy(id: number, updates: Partial<Pharmacy>): Promise<Pharmacy>;
  searchPharmacies(filters: { medication?: string; location?: { lat: number; lng: number; radius: number } }): Promise<Pharmacy[]>;
  
  // Medication price operations
  createMedicationPrice(priceData: Omit<MedicationPrice, 'id'>): Promise<MedicationPrice>;
  getMedicationPrice(pharmacyId: number, medicationName: string): Promise<MedicationPrice | undefined>;
  updateMedicationPrice(id: number, updates: Partial<MedicationPrice>): Promise<MedicationPrice>;
  
  // Insurance claim operations
  createInsuranceClaim(claimData: Omit<InsuranceClaim, 'id' | 'createdAt' | 'processedAt'>): Promise<InsuranceClaim>;
  getInsuranceClaim(id: number): Promise<InsuranceClaim | undefined>;
  updateInsuranceClaim(id: number, updates: Partial<InsuranceClaim>): Promise<InsuranceClaim>;
  getInsuranceClaimsByPatient(patientId: number): Promise<InsuranceClaim[]>;
  
  // AI interaction operations
  createAiInteraction(interactionData: Omit<AiInteraction, 'id' | 'createdAt'>): Promise<AiInteraction>;
  getAiInteraction(id: number): Promise<AiInteraction | undefined>;
  getAiInteractionsByUser(userId: number, portal?: string): Promise<AiInteraction[]>;
  
  // Blockchain transaction operations
  createBlockchainTransaction(transactionData: Omit<BlockchainTransaction, 'id' | 'createdAt'>): Promise<BlockchainTransaction>;
  getBlockchainTransaction(transactionHash: string): Promise<BlockchainTransaction | undefined>;
  getBlockchainTransactions(filters: { fromAddress?: string; toAddress?: string; actionType?: string }): Promise<BlockchainTransaction[]>;
  
  // Compliance and audit operations
  createAuditLog(auditLog: Omit<AuditLog, 'id'>): Promise<AuditLog>;
  getAuditLogs(filters: { userId?: number; startDate?: Date; endDate?: Date; riskLevel?: string }): Promise<AuditLog[]>;
  createDataAccessLog(dataAccessLog: Omit<DataAccessLog, 'id'>): Promise<DataAccessLog>;
  getDataAccessLogs(patientId?: number, startDate?: Date, endDate?: Date): Promise<DataAccessLog[]>;
  createSecurityIncident(incident: Omit<SecurityIncident, 'id'>): Promise<SecurityIncident>;
  getSecurityIncidents(status?: string, severity?: string): Promise<SecurityIncident[]>;
  updateSecurityIncident(id: number, updates: Partial<SecurityIncident>): Promise<SecurityIncident>;
  createComplianceReport(report: Omit<ComplianceReport, 'id'>): Promise<ComplianceReport>;
  getComplianceReports(reportType?: string, period?: string): Promise<ComplianceReport[]>;
}
