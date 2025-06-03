import { pgTable, text, serial, integer, boolean, timestamp, decimal, json, varchar, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Users table for all portal types
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  role: text("role").notNull(), // 'patient', 'doctor', 'pharmacist', 'insurance'
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull().unique(),
  phone: text("phone"),
  licenseNumber: text("license_number"), // For doctors and pharmacists
  insuranceProvider: text("insurance_provider"), // For patients
  specialization: text("specialization"), // For doctors
  pharmacyChain: text("pharmacy_chain"), // For pharmacists
  createdAt: timestamp("created_at").defaultNow(),
});

// Prescriptions table
export const prescriptions = pgTable("prescriptions", {
  id: serial("id").primaryKey(),
  patientId: integer("patient_id").notNull(),
  doctorId: integer("doctor_id").notNull(),
  pharmacyId: integer("pharmacy_id"),
  medicationName: text("medication_name").notNull(),
  dosage: text("dosage").notNull(),
  frequency: text("frequency").notNull(),
  duration: text("duration").notNull(),
  instructions: text("instructions"),
  refillsRemaining: integer("refills_remaining").default(0),
  isGeneric: boolean("is_generic").default(false),
  status: text("status").notNull().default("pending"), // 'pending', 'filled', 'denied', 'expired'
  blockchainHash: text("blockchain_hash"),
  createdAt: timestamp("created_at").defaultNow(),
  expiresAt: timestamp("expires_at"),
});

// Pharmacies table
export const pharmacies = pgTable("pharmacies", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  address: text("address").notNull(),
  city: text("city").notNull(),
  state: text("state").notNull(),
  zipCode: text("zip_code").notNull(),
  phone: text("phone").notNull(),
  latitude: decimal("latitude", { precision: 10, scale: 8 }),
  longitude: decimal("longitude", { precision: 11, scale: 8 }),
  isInNetwork: boolean("is_in_network").default(false),
  rating: decimal("rating", { precision: 3, scale: 2 }),
  inventory: json("inventory"), // { medicationId: stock_count }
});

// Medication prices table
export const medicationPrices = pgTable("medication_prices", {
  id: serial("id").primaryKey(),
  pharmacyId: integer("pharmacy_id").notNull(),
  medicationName: text("medication_name").notNull(),
  brandPrice: decimal("brand_price", { precision: 10, scale: 2 }),
  genericPrice: decimal("generic_price", { precision: 10, scale: 2 }),
  inStock: boolean("in_stock").default(true),
  lastUpdated: timestamp("last_updated").defaultNow(),
});

// Insurance claims table
export const insuranceClaims = pgTable("insurance_claims", {
  id: serial("id").primaryKey(),
  prescriptionId: integer("prescription_id").notNull(),
  patientId: integer("patient_id").notNull(),
  insuranceProvider: text("insurance_provider").notNull(),
  claimAmount: decimal("claim_amount", { precision: 10, scale: 2 }).notNull(),
  copayAmount: decimal("copay_amount", { precision: 10, scale: 2 }),
  status: text("status").notNull().default("pending"), // 'pending', 'approved', 'denied'
  reason: text("reason"),
  processedAt: timestamp("processed_at"),
  createdAt: timestamp("created_at").defaultNow(),
});

// AI interactions table
export const aiInteractions = pgTable("ai_interactions", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull(),
  portal: text("portal").notNull(), // 'patient', 'doctor', 'pharmacy', 'insurance'
  query: text("query").notNull(),
  response: text("response").notNull(),
  actionTaken: text("action_taken"),
  confidence: decimal("confidence", { precision: 5, scale: 4 }),
  createdAt: timestamp("created_at").defaultNow(),
});

// Blockchain transactions table
export const blockchainTransactions = pgTable("blockchain_transactions", {
  id: serial("id").primaryKey(),
  transactionHash: text("transaction_hash").notNull().unique(),
  blockNumber: integer("block_number"),
  fromAddress: text("from_address").notNull(),
  toAddress: text("to_address").notNull(),
  actionType: text("action_type").notNull(), // 'prescription_created', 'prescription_filled', 'claim_processed'
  dataHash: text("data_hash").notNull(),
  gasUsed: decimal("gas_used", { precision: 20, scale: 0 }),
  gasFee: decimal("gas_fee", { precision: 20, scale: 8 }),
  networkId: text("network_id").notNull().default("bloqz-mainnet"),
  status: text("status").notNull().default("pending"), // 'pending', 'confirmed', 'failed'
  confirmations: integer("confirmations").default(0),
  metadata: jsonb("metadata"),
  createdAt: timestamp("created_at").defaultNow(),
});

// Smart contracts table
export const smartContracts = pgTable("smart_contracts", {
  id: serial("id").primaryKey(),
  contractAddress: text("contract_address").notNull().unique(),
  contractName: text("contract_name").notNull(),
  contractType: text("contract_type").notNull(), // 'prescription', 'insurance', 'identity', 'supply_chain'
  abi: jsonb("abi").notNull(),
  bytecode: text("bytecode").notNull(),
  version: text("version").notNull(),
  deployerAddress: text("deployer_address").notNull(),
  networkId: text("network_id").notNull().default("bloqz-mainnet"),
  isVerified: boolean("is_verified").default(false),
  status: text("status").notNull().default("deployed"), // 'deployed', 'paused', 'upgraded', 'deprecated'
  deploymentHash: text("deployment_hash"),
  gasUsedForDeployment: decimal("gas_used_for_deployment", { precision: 20, scale: 0 }),
  createdAt: timestamp("created_at").defaultNow(),
});

// Blockchain networks table
export const blockchainNetworks = pgTable("blockchain_networks", {
  id: serial("id").primaryKey(),
  networkId: text("network_id").notNull().unique(),
  networkName: text("network_name").notNull(),
  chainId: integer("chain_id").notNull().unique(),
  rpcUrl: text("rpc_url").notNull(),
  explorerUrl: text("explorer_url"),
  nativeCurrency: jsonb("native_currency").notNull(), // {symbol, name, decimals}
  networkType: text("network_type").notNull(), // 'mainnet', 'testnet', 'private'
  consensusAlgorithm: text("consensus_algorithm").notNull().default("proof_of_stake"),
  blockTime: integer("block_time").notNull().default(3), // seconds
  maxGasLimit: decimal("max_gas_limit", { precision: 20, scale: 0 }),
  isActive: boolean("is_active").default(true),
  configuration: jsonb("configuration"),
  createdAt: timestamp("created_at").defaultNow(),
});

// Cross-chain bridges table
export const crossChainBridges = pgTable("cross_chain_bridges", {
  id: serial("id").primaryKey(),
  bridgeName: text("bridge_name").notNull(),
  sourceNetworkId: text("source_network_id").notNull(),
  destinationNetworkId: text("destination_network_id").notNull(),
  bridgeContractSource: text("bridge_contract_source").notNull(),
  bridgeContractDestination: text("bridge_contract_destination").notNull(),
  supportedTokens: jsonb("supported_tokens").notNull(), // array of token addresses
  bridgeFee: decimal("bridge_fee", { precision: 10, scale: 8 }),
  minTransferAmount: decimal("min_transfer_amount", { precision: 20, scale: 8 }),
  maxTransferAmount: decimal("max_transfer_amount", { precision: 20, scale: 8 }),
  estimatedTime: integer("estimated_time").notNull(), // minutes
  status: text("status").notNull().default("active"), // 'active', 'paused', 'deprecated'
  securityLevel: text("security_level").notNull().default("high"), // 'low', 'medium', 'high', 'maximum'
  createdAt: timestamp("created_at").defaultNow(),
});

// Blockchain events table
export const blockchainEvents = pgTable("blockchain_events", {
  id: serial("id").primaryKey(),
  eventName: text("event_name").notNull(),
  contractAddress: text("contract_address").notNull(),
  transactionHash: text("transaction_hash").notNull(),
  blockNumber: integer("block_number").notNull(),
  logIndex: integer("log_index").notNull(),
  eventData: jsonb("event_data").notNull(),
  topics: text("topics").array().notNull(),
  networkId: text("network_id").notNull(),
  processed: boolean("processed").default(false),
  processingResult: jsonb("processing_result"),
  createdAt: timestamp("created_at").defaultNow(),
});

// Digital wallets table
export const digitalWallets = pgTable("digital_wallets", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull(),
  walletAddress: text("wallet_address").notNull().unique(),
  walletType: text("wallet_type").notNull(), // 'hot', 'cold', 'hardware', 'multisig'
  networkId: text("network_id").notNull(),
  publicKey: text("public_key").notNull(),
  encryptedPrivateKey: text("encrypted_private_key"), // Encrypted storage
  isDefault: boolean("is_default").default(false),
  balance: decimal("balance", { precision: 30, scale: 18 }).default("0"),
  lastSyncedBlock: integer("last_synced_block").default(0),
  securityLevel: text("security_level").notNull().default("standard"), // 'basic', 'standard', 'high', 'maximum'
  multiSigThreshold: integer("multi_sig_threshold"),
  multiSigOwners: text("multi_sig_owners").array(),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
  lastUsed: timestamp("last_used"),
});

// Token standards table
export const tokenStandards = pgTable("token_standards", {
  id: serial("id").primaryKey(),
  tokenAddress: text("token_address").notNull().unique(),
  tokenName: text("token_name").notNull(),
  tokenSymbol: text("token_symbol").notNull(),
  decimals: integer("decimals").notNull().default(18),
  tokenStandard: text("token_standard").notNull(), // 'ERC20', 'ERC721', 'ERC1155', 'BLOQZ-NATIVE'
  networkId: text("network_id").notNull(),
  totalSupply: decimal("total_supply", { precision: 30, scale: 18 }),
  circulatingSupply: decimal("circulating_supply", { precision: 30, scale: 18 }),
  contractCreator: text("contract_creator").notNull(),
  isVerified: boolean("is_verified").default(false),
  metadata: jsonb("metadata"),
  logoUrl: text("logo_url"),
  website: text("website"),
  createdAt: timestamp("created_at").defaultNow(),
});

// Blockchain analytics table
export const blockchainAnalytics = pgTable("blockchain_analytics", {
  id: serial("id").primaryKey(),
  networkId: text("network_id").notNull(),
  metricType: text("metric_type").notNull(), // 'transaction_volume', 'active_addresses', 'gas_usage', 'network_health'
  metricValue: decimal("metric_value", { precision: 30, scale: 8 }).notNull(),
  additionalData: jsonb("additional_data"),
  timeframe: text("timeframe").notNull(), // 'hourly', 'daily', 'weekly', 'monthly'
  recordedAt: timestamp("recorded_at").defaultNow().notNull(),
});

// HIPAA Compliance and Security Auditing Tables
export const auditLogs = pgTable("audit_logs", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull(),
  action: varchar("action", { length: 100 }).notNull(),
  resourceType: varchar("resource_type", { length: 50 }).notNull(),
  resourceId: varchar("resource_id", { length: 100 }),
  ipAddress: varchar("ip_address", { length: 45 }).notNull(),
  userAgent: text("user_agent"),
  details: jsonb("details"),
  riskLevel: varchar("risk_level", { length: 20 }).notNull().default("low"),
  complianceStatus: varchar("compliance_status", { length: 20 }).notNull().default("compliant"),
  timestamp: timestamp("timestamp").defaultNow().notNull(),
});

export const dataAccessLogs = pgTable("data_access_logs", {
  id: serial("id").primaryKey(),
  userId: integer("user_id").notNull(),
  patientId: integer("patient_id"),
  dataType: varchar("data_type", { length: 50 }).notNull(),
  accessType: varchar("access_type", { length: 20 }).notNull(), // read, write, delete, export
  purpose: varchar("purpose", { length: 100 }).notNull(),
  location: varchar("location", { length: 100 }),
  deviceInfo: jsonb("device_info"),
  dataClassification: varchar("data_classification", { length: 20 }).notNull().default("phi"), // phi, pii, public
  consentStatus: varchar("consent_status", { length: 20 }).notNull().default("required"),
  retentionDate: timestamp("retention_date"),
  timestamp: timestamp("timestamp").defaultNow().notNull(),
});

export const securityIncidents = pgTable("security_incidents", {
  id: serial("id").primaryKey(),
  incidentType: varchar("incident_type", { length: 50 }).notNull(),
  severity: varchar("severity", { length: 20 }).notNull(), // low, medium, high, critical
  description: text("description").notNull(),
  affectedUsers: jsonb("affected_users"),
  affectedData: jsonb("affected_data"),
  detectionMethod: varchar("detection_method", { length: 50 }).notNull(),
  status: varchar("status", { length: 20 }).notNull().default("open"), // open, investigating, resolved, closed
  assignedTo: integer("assigned_to"),
  responseActions: jsonb("response_actions"),
  resolutionNotes: text("resolution_notes"),
  reportedAt: timestamp("reported_at").defaultNow().notNull(),
  resolvedAt: timestamp("resolved_at"),
});

export const complianceReports = pgTable("compliance_reports", {
  id: serial("id").primaryKey(),
  reportType: varchar("report_type", { length: 50 }).notNull(), // hipaa, gdpr, audit, breach
  period: varchar("period", { length: 20 }).notNull(), // daily, weekly, monthly, quarterly
  generatedBy: integer("generated_by").notNull(),
  status: varchar("status", { length: 20 }).notNull().default("generated"),
  findings: jsonb("findings").notNull(),
  recommendations: jsonb("recommendations"),
  riskScore: integer("risk_score").notNull().default(0),
  complianceScore: integer("compliance_score").notNull().default(100),
  filePath: varchar("file_path", { length: 255 }),
  generatedAt: timestamp("generated_at").defaultNow().notNull(),
  reviewedAt: timestamp("reviewed_at"),
  reviewedBy: integer("reviewed_by"),
});

// Insert schemas
export const insertUserSchema = createInsertSchema(users).omit({ id: true, createdAt: true });
export const insertPrescriptionSchema = createInsertSchema(prescriptions).omit({ id: true, createdAt: true });
export const insertPharmacySchema = createInsertSchema(pharmacies).omit({ id: true });
export const insertMedicationPriceSchema = createInsertSchema(medicationPrices).omit({ id: true, lastUpdated: true });
export const insertInsuranceClaimSchema = createInsertSchema(insuranceClaims).omit({ id: true, createdAt: true, processedAt: true });
export const insertAiInteractionSchema = createInsertSchema(aiInteractions).omit({ id: true, createdAt: true });
export const insertBlockchainTransactionSchema = createInsertSchema(blockchainTransactions).omit({ id: true, createdAt: true });
export const insertSmartContractSchema = createInsertSchema(smartContracts).omit({ id: true, createdAt: true });
export const insertBlockchainNetworkSchema = createInsertSchema(blockchainNetworks).omit({ id: true, createdAt: true });
export const insertCrossChainBridgeSchema = createInsertSchema(crossChainBridges).omit({ id: true, createdAt: true });
export const insertBlockchainEventSchema = createInsertSchema(blockchainEvents).omit({ id: true, createdAt: true });
export const insertDigitalWalletSchema = createInsertSchema(digitalWallets).omit({ id: true, createdAt: true, lastUsed: true });
export const insertTokenStandardSchema = createInsertSchema(tokenStandards).omit({ id: true, createdAt: true });
export const insertBlockchainAnalyticsSchema = createInsertSchema(blockchainAnalytics).omit({ id: true, recordedAt: true });
export const insertAuditLogSchema = createInsertSchema(auditLogs).omit({ id: true, timestamp: true });
export const insertDataAccessLogSchema = createInsertSchema(dataAccessLogs).omit({ id: true, timestamp: true });
export const insertSecurityIncidentSchema = createInsertSchema(securityIncidents).omit({ id: true, reportedAt: true });
export const insertComplianceReportSchema = createInsertSchema(complianceReports).omit({ id: true, generatedAt: true });

// Types
export type User = typeof users.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;
export type Prescription = typeof prescriptions.$inferSelect;
export type InsertPrescription = z.infer<typeof insertPrescriptionSchema>;
export type Pharmacy = typeof pharmacies.$inferSelect;
export type InsertPharmacy = z.infer<typeof insertPharmacySchema>;
export type MedicationPrice = typeof medicationPrices.$inferSelect;
export type InsertMedicationPrice = z.infer<typeof insertMedicationPriceSchema>;
export type InsuranceClaim = typeof insuranceClaims.$inferSelect;
export type InsertInsuranceClaim = z.infer<typeof insertInsuranceClaimSchema>;
export type AiInteraction = typeof aiInteractions.$inferSelect;
export type InsertAiInteraction = z.infer<typeof insertAiInteractionSchema>;
export type BlockchainTransaction = typeof blockchainTransactions.$inferSelect;
export type InsertBlockchainTransaction = z.infer<typeof insertBlockchainTransactionSchema>;
export type SmartContract = typeof smartContracts.$inferSelect;
export type InsertSmartContract = z.infer<typeof insertSmartContractSchema>;
export type BlockchainNetwork = typeof blockchainNetworks.$inferSelect;
export type InsertBlockchainNetwork = z.infer<typeof insertBlockchainNetworkSchema>;
export type CrossChainBridge = typeof crossChainBridges.$inferSelect;
export type InsertCrossChainBridge = z.infer<typeof insertCrossChainBridgeSchema>;
export type BlockchainEvent = typeof blockchainEvents.$inferSelect;
export type InsertBlockchainEvent = z.infer<typeof insertBlockchainEventSchema>;
export type DigitalWallet = typeof digitalWallets.$inferSelect;
export type InsertDigitalWallet = z.infer<typeof insertDigitalWalletSchema>;
export type TokenStandard = typeof tokenStandards.$inferSelect;
export type InsertTokenStandard = z.infer<typeof insertTokenStandardSchema>;
export type BlockchainAnalytics = typeof blockchainAnalytics.$inferSelect;
export type InsertBlockchainAnalytics = z.infer<typeof insertBlockchainAnalyticsSchema>;
export type AuditLog = typeof auditLogs.$inferSelect;
export type InsertAuditLog = z.infer<typeof insertAuditLogSchema>;
export type DataAccessLog = typeof dataAccessLogs.$inferSelect;
export type InsertDataAccessLog = z.infer<typeof insertDataAccessLogSchema>;
export type SecurityIncident = typeof securityIncidents.$inferSelect;
export type InsertSecurityIncident = z.infer<typeof insertSecurityIncidentSchema>;
export type ComplianceReport = typeof complianceReports.$inferSelect;
export type InsertComplianceReport = z.infer<typeof insertComplianceReportSchema>;
