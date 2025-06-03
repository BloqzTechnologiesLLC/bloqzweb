import { 
  users, 
  prescriptions, 
  pharmacies, 
  medicationPrices, 
  insuranceClaims, 
  aiInteractions, 
  blockchainTransactions,
  type User, 
  type InsertUser, 
  type Prescription, 
  type InsertPrescription,
  type Pharmacy,
  type InsertPharmacy,
  type MedicationPrice,
  type InsertMedicationPrice,
  type InsuranceClaim,
  type InsertInsuranceClaim,
  type AiInteraction,
  type InsertAiInteraction,
  type BlockchainTransaction,
  type InsertBlockchainTransaction
} from "@shared/schema";

import { DbStorage } from "./db-storage";

export interface IStorage {
  // User management
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getUsersByRole(role: string): Promise<User[]>;

  // Prescription management
  createPrescription(prescription: InsertPrescription): Promise<Prescription>;
  getPrescription(id: number): Promise<Prescription | undefined>;
  getPrescriptionsByPatient(patientId: number): Promise<Prescription[]>;
  getPrescriptionsByDoctor(doctorId: number): Promise<Prescription[]>;
  getPrescriptionsByPharmacy(pharmacyId: number): Promise<Prescription[]>;
  updatePrescriptionStatus(id: number, status: string): Promise<Prescription>;

  // Pharmacy management
  createPharmacy(pharmacy: InsertPharmacy): Promise<Pharmacy>;
  getPharmacy(id: number): Promise<Pharmacy | undefined>;
  searchPharmacies(filters: {
    latitude?: number;
    longitude?: number;
    radius?: number;
    medication?: string;
    inNetworkOnly?: boolean;
  }): Promise<Pharmacy[]>;
  getPharmacyInventory(pharmacyId: number): Promise<any>;

  // Medication pricing
  createMedicationPrice(price: InsertMedicationPrice): Promise<MedicationPrice>;
  getMedicationPrice(id: number): Promise<MedicationPrice | undefined>;
  compareMedicationPrices(medication: string, pharmacyIds: number[]): Promise<MedicationPrice[]>;
  updateMedicationPrice(id: number, price: Partial<MedicationPrice>): Promise<MedicationPrice>;

  // Insurance claims
  createInsuranceClaim(claim: InsertInsuranceClaim): Promise<InsuranceClaim>;
  getInsuranceClaim(id: number): Promise<InsuranceClaim | undefined>;
  getClaimsByProvider(provider: string, status?: string, limit?: number): Promise<InsuranceClaim[]>;
  getClaimsByPatient(patientId: number): Promise<InsuranceClaim[]>;
  processInsuranceClaim(id: number, status: string, reason?: string): Promise<InsuranceClaim>;

  // AI interactions
  createAiInteraction(interaction: InsertAiInteraction): Promise<AiInteraction>;
  getAiInteractionsByUser(userId: number, portal?: string): Promise<AiInteraction[]>;
  getAiInteractionsByPortal(portal: string): Promise<AiInteraction[]>;

  // Blockchain transactions
  createBlockchainTransaction(transaction: InsertBlockchainTransaction): Promise<BlockchainTransaction>;
  getBlockchainTransaction(hash: string): Promise<BlockchainTransaction | undefined>;
  getRecentBlockchainTransactions(limit: number): Promise<BlockchainTransaction[]>;
  updateBlockchainTransactionStatus(id: number, status: string): Promise<BlockchainTransaction>;

  // HIPAA Compliance and Security Auditing
  createAuditLog(auditLog: InsertAuditLog): Promise<AuditLog>;
  getAuditLogs(filters: { userId?: number; startDate?: Date; endDate?: Date; riskLevel?: string }): Promise<AuditLog[]>;
  createDataAccessLog(dataAccessLog: InsertDataAccessLog): Promise<DataAccessLog>;
  getDataAccessLogs(patientId?: number, startDate?: Date, endDate?: Date): Promise<DataAccessLog[]>;
  createSecurityIncident(incident: InsertSecurityIncident): Promise<SecurityIncident>;
  getSecurityIncidents(status?: string, severity?: string): Promise<SecurityIncident[]>;
  updateSecurityIncident(id: number, updates: Partial<SecurityIncident>): Promise<SecurityIncident>;
  createComplianceReport(report: InsertComplianceReport): Promise<ComplianceReport>;
  getComplianceReports(reportType?: string, period?: string): Promise<ComplianceReport[]>;
  generateComplianceMetrics(): Promise<{ riskScore: number; complianceScore: number; violations: number }>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private prescriptions: Map<number, Prescription>;
  private pharmacies: Map<number, Pharmacy>;
  private medicationPrices: Map<number, MedicationPrice>;
  private insuranceClaims: Map<number, InsuranceClaim>;
  private aiInteractions: Map<number, AiInteraction>;
  private blockchainTransactions: Map<number, BlockchainTransaction>;
  private transactionHashMap: Map<string, number>;
  private auditLogs: Map<number, AuditLog>;
  private dataAccessLogs: Map<number, DataAccessLog>;
  private securityIncidents: Map<number, SecurityIncident>;
  private complianceReports: Map<number, ComplianceReport>;
  private currentId: number;

  constructor() {
    this.users = new Map();
    this.prescriptions = new Map();
    this.pharmacies = new Map();
    this.medicationPrices = new Map();
    this.insuranceClaims = new Map();
    this.aiInteractions = new Map();
    this.blockchainTransactions = new Map();
    this.transactionHashMap = new Map();
    this.currentId = 1;
    
    // Initialize with sample data for demonstration
    this.initializeSampleData();
  }

  private initializeSampleData() {
    // Create sample users
    const sampleUsers = [
      {
        username: "sarah.mitchell",
        password: "password123",
        role: "patient",
        firstName: "Sarah",
        lastName: "Mitchell",
        email: "sarah.mitchell@email.com",
        phone: "(555) 123-4567",
        insuranceProvider: "Blue Cross Blue Shield"
      },
      {
        username: "dr.johnson",
        password: "password123",
        role: "doctor",
        firstName: "Dr. Sarah",
        lastName: "Johnson",
        email: "sarah.johnson@hospital.com",
        phone: "(555) 234-5678",
        licenseNumber: "MD123456",
        specialization: "Internal Medicine"
      },
      {
        username: "pharmacy.manager",
        password: "password123",
        role: "pharmacist",
        firstName: "Michael",
        lastName: "Chen",
        email: "michael.chen@pharmacy.com",
        phone: "(555) 345-6789",
        licenseNumber: "RPH789012",
        pharmacyChain: "CVS Health"
      },
      {
        username: "insurance.agent",
        password: "password123",
        role: "insurance",
        firstName: "Lisa",
        lastName: "Brown",
        email: "lisa.brown@insurance.com",
        phone: "(555) 456-7890",
        insuranceProvider: "BlueCross BlueShield"
      }
    ];

    sampleUsers.forEach(userData => {
      const user: User = { ...userData, id: this.currentId++ };
      this.users.set(user.id, user);
    });

    // Create sample pharmacies
    const samplePharmacies = [
      {
        name: "CVS Pharmacy",
        address: "123 Main St",
        city: "Anytown",
        state: "ST",
        zipCode: "12345",
        phone: "(555) 123-4567",
        latitude: "40.7128",
        longitude: "-74.0060",
        isInNetwork: true,
        rating: "4.2",
        inventory: { "lisinopril": 245, "metformin": 156, "atorvastatin": 89 }
      },
      {
        name: "Walgreens",
        address: "456 Oak Ave",
        city: "Anytown", 
        state: "ST",
        zipCode: "12345",
        phone: "(555) 234-5678",
        latitude: "40.7589",
        longitude: "-73.9851",
        isInNetwork: true,
        rating: "4.0",
        inventory: { "lisinopril": 189, "metformin": 203, "atorvastatin": 156 }
      }
    ];

    samplePharmacies.forEach(pharmacyData => {
      const pharmacy: Pharmacy = { ...pharmacyData, id: this.currentId++ };
      this.pharmacies.set(pharmacy.id, pharmacy);
    });

    // Create sample medication prices
    const samplePrices = [
      {
        pharmacyId: 3,
        medicationName: "Lisinopril 10mg",
        brandPrice: "45.50",
        genericPrice: "12.50",
        inStock: true
      },
      {
        pharmacyId: 4,
        medicationName: "Lisinopril 10mg", 
        brandPrice: "48.75",
        genericPrice: "15.25",
        inStock: true
      },
      {
        pharmacyId: 3,
        medicationName: "Metformin 500mg",
        brandPrice: "89.25", 
        genericPrice: "18.75",
        inStock: true
      }
    ];

    samplePrices.forEach(priceData => {
      const price: MedicationPrice = { 
        ...priceData, 
        id: this.currentId++,
        lastUpdated: new Date()
      };
      this.medicationPrices.set(price.id, price);
    });
  }

  // User management
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(user => user.username === username);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { 
      ...insertUser, 
      id, 
      createdAt: new Date()
    };
    this.users.set(id, user);
    return user;
  }

  async getUsersByRole(role: string): Promise<User[]> {
    return Array.from(this.users.values()).filter(user => user.role === role);
  }

  // Prescription management
  async createPrescription(insertPrescription: InsertPrescription): Promise<Prescription> {
    const id = this.currentId++;
    const prescription: Prescription = {
      ...insertPrescription,
      id,
      createdAt: new Date(),
      expiresAt: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000) // 1 year from now
    };
    this.prescriptions.set(id, prescription);
    return prescription;
  }

  async getPrescription(id: number): Promise<Prescription | undefined> {
    return this.prescriptions.get(id);
  }

  async getPrescriptionsByPatient(patientId: number): Promise<Prescription[]> {
    return Array.from(this.prescriptions.values()).filter(
      prescription => prescription.patientId === patientId
    );
  }

  async getPrescriptionsByDoctor(doctorId: number): Promise<Prescription[]> {
    return Array.from(this.prescriptions.values()).filter(
      prescription => prescription.doctorId === doctorId
    );
  }

  async getPrescriptionsByPharmacy(pharmacyId: number): Promise<Prescription[]> {
    return Array.from(this.prescriptions.values()).filter(
      prescription => prescription.pharmacyId === pharmacyId
    );
  }

  async updatePrescriptionStatus(id: number, status: string): Promise<Prescription> {
    const prescription = this.prescriptions.get(id);
    if (!prescription) {
      throw new Error("Prescription not found");
    }
    
    const updated = { ...prescription, status };
    this.prescriptions.set(id, updated);
    return updated;
  }

  // Pharmacy management
  async createPharmacy(insertPharmacy: InsertPharmacy): Promise<Pharmacy> {
    const id = this.currentId++;
    const pharmacy: Pharmacy = { ...insertPharmacy, id };
    this.pharmacies.set(id, pharmacy);
    return pharmacy;
  }

  async getPharmacy(id: number): Promise<Pharmacy | undefined> {
    return this.pharmacies.get(id);
  }

  async searchPharmacies(filters: {
    latitude?: number;
    longitude?: number;
    radius?: number;
    medication?: string;
    inNetworkOnly?: boolean;
  }): Promise<Pharmacy[]> {
    let results = Array.from(this.pharmacies.values());

    if (filters.inNetworkOnly) {
      results = results.filter(pharmacy => pharmacy.isInNetwork);
    }

    if (filters.medication) {
      results = results.filter(pharmacy => {
        const inventory = pharmacy.inventory as any;
        return inventory && inventory[filters.medication.toLowerCase()] > 0;
      });
    }

    // Simulate distance filtering (in real implementation, use proper geo calculations)
    if (filters.latitude && filters.longitude && filters.radius) {
      results = results.filter(pharmacy => {
        const distance = this.calculateDistance(
          filters.latitude!,
          filters.longitude!,
          parseFloat(pharmacy.latitude || "0"),
          parseFloat(pharmacy.longitude || "0")
        );
        return distance <= filters.radius!;
      });
    }

    return results;
  }

  async getPharmacyInventory(pharmacyId: number): Promise<any> {
    const pharmacy = this.pharmacies.get(pharmacyId);
    return pharmacy?.inventory || {};
  }

  private calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
    // Haversine formula for calculating distance between two points
    const R = 3959; // Earth's radius in miles
    const dLat = this.toRadians(lat2 - lat1);
    const dLon = this.toRadians(lon2 - lon1);
    const a = 
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.toRadians(lat1)) * Math.cos(this.toRadians(lat2)) * 
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }

  private toRadians(degrees: number): number {
    return degrees * (Math.PI / 180);
  }

  // Medication pricing
  async createMedicationPrice(insertPrice: InsertMedicationPrice): Promise<MedicationPrice> {
    const id = this.currentId++;
    const price: MedicationPrice = { 
      ...insertPrice, 
      id,
      lastUpdated: new Date()
    };
    this.medicationPrices.set(id, price);
    return price;
  }

  async getMedicationPrice(id: number): Promise<MedicationPrice | undefined> {
    return this.medicationPrices.get(id);
  }

  async compareMedicationPrices(medication: string, pharmacyIds: number[]): Promise<MedicationPrice[]> {
    return Array.from(this.medicationPrices.values()).filter(
      price => 
        price.medicationName.toLowerCase().includes(medication.toLowerCase()) &&
        pharmacyIds.includes(price.pharmacyId)
    );
  }

  async updateMedicationPrice(id: number, updates: Partial<MedicationPrice>): Promise<MedicationPrice> {
    const price = this.medicationPrices.get(id);
    if (!price) {
      throw new Error("Medication price not found");
    }
    
    const updated = { ...price, ...updates, lastUpdated: new Date() };
    this.medicationPrices.set(id, updated);
    return updated;
  }

  // Insurance claims
  async createInsuranceClaim(insertClaim: InsertInsuranceClaim): Promise<InsuranceClaim> {
    const id = this.currentId++;
    const claim: InsuranceClaim = { 
      ...insertClaim, 
      id,
      createdAt: new Date()
    };
    this.insuranceClaims.set(id, claim);
    return claim;
  }

  async getInsuranceClaim(id: number): Promise<InsuranceClaim | undefined> {
    return this.insuranceClaims.get(id);
  }

  async getClaimsByProvider(provider: string, status?: string, limit: number = 50): Promise<InsuranceClaim[]> {
    let claims = Array.from(this.insuranceClaims.values()).filter(
      claim => claim.insuranceProvider === provider
    );

    if (status) {
      claims = claims.filter(claim => claim.status === status);
    }

    return claims.slice(0, limit);
  }

  async getClaimsByPatient(patientId: number): Promise<InsuranceClaim[]> {
    return Array.from(this.insuranceClaims.values()).filter(
      claim => claim.patientId === patientId
    );
  }

  async processInsuranceClaim(id: number, status: string, reason?: string): Promise<InsuranceClaim> {
    const claim = this.insuranceClaims.get(id);
    if (!claim) {
      throw new Error("Insurance claim not found");
    }
    
    const updated = { 
      ...claim, 
      status, 
      reason,
      processedAt: new Date()
    };
    this.insuranceClaims.set(id, updated);
    return updated;
  }

  // AI interactions
  async createAiInteraction(insertInteraction: InsertAiInteraction): Promise<AiInteraction> {
    const id = this.currentId++;
    const interaction: AiInteraction = { 
      ...insertInteraction, 
      id,
      createdAt: new Date()
    };
    this.aiInteractions.set(id, interaction);
    return interaction;
  }

  async getAiInteractionsByUser(userId: number, portal?: string): Promise<AiInteraction[]> {
    let interactions = Array.from(this.aiInteractions.values()).filter(
      interaction => interaction.userId === userId
    );

    if (portal) {
      interactions = interactions.filter(interaction => interaction.portal === portal);
    }

    return interactions.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async getAiInteractionsByPortal(portal: string): Promise<AiInteraction[]> {
    return Array.from(this.aiInteractions.values())
      .filter(interaction => interaction.portal === portal)
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  // Blockchain transactions
  async createBlockchainTransaction(insertTransaction: InsertBlockchainTransaction): Promise<BlockchainTransaction> {
    const id = this.currentId++;
    const transaction: BlockchainTransaction = { 
      ...insertTransaction, 
      id,
      createdAt: new Date()
    };
    this.blockchainTransactions.set(id, transaction);
    this.transactionHashMap.set(transaction.transactionHash, id);
    return transaction;
  }

  async getBlockchainTransaction(hash: string): Promise<BlockchainTransaction | undefined> {
    const id = this.transactionHashMap.get(hash);
    return id ? this.blockchainTransactions.get(id) : undefined;
  }

  async getRecentBlockchainTransactions(limit: number): Promise<BlockchainTransaction[]> {
    return Array.from(this.blockchainTransactions.values())
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
      .slice(0, limit);
  }

  async updateBlockchainTransactionStatus(id: number, status: string): Promise<BlockchainTransaction> {
    const transaction = this.blockchainTransactions.get(id);
    if (!transaction) {
      throw new Error("Blockchain transaction not found");
    }
    
    const updated = { ...transaction, status };
    this.blockchainTransactions.set(id, updated);
    return updated;
  }
}

// Use database storage for production
export const storage = new DbStorage();
