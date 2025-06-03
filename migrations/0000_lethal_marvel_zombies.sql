CREATE TABLE "ai_interactions" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer NOT NULL,
	"portal" text NOT NULL,
	"query" text NOT NULL,
	"response" text NOT NULL,
	"action_taken" text,
	"confidence" numeric(5, 4),
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "blockchain_transactions" (
	"id" serial PRIMARY KEY NOT NULL,
	"transaction_hash" text NOT NULL,
	"block_number" integer,
	"from_address" text NOT NULL,
	"to_address" text NOT NULL,
	"action_type" text NOT NULL,
	"data_hash" text NOT NULL,
	"gas_used" numeric(20, 0),
	"status" text DEFAULT 'pending' NOT NULL,
	"created_at" timestamp DEFAULT now(),
	CONSTRAINT "blockchain_transactions_transaction_hash_unique" UNIQUE("transaction_hash")
);
--> statement-breakpoint
CREATE TABLE "insurance_claims" (
	"id" serial PRIMARY KEY NOT NULL,
	"prescription_id" integer NOT NULL,
	"patient_id" integer NOT NULL,
	"insurance_provider" text NOT NULL,
	"claim_amount" numeric(10, 2) NOT NULL,
	"copay_amount" numeric(10, 2),
	"status" text DEFAULT 'pending' NOT NULL,
	"reason" text,
	"processed_at" timestamp,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "medication_prices" (
	"id" serial PRIMARY KEY NOT NULL,
	"pharmacy_id" integer NOT NULL,
	"medication_name" text NOT NULL,
	"brand_price" numeric(10, 2),
	"generic_price" numeric(10, 2),
	"in_stock" boolean DEFAULT true,
	"last_updated" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "pharmacies" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"address" text NOT NULL,
	"city" text NOT NULL,
	"state" text NOT NULL,
	"zip_code" text NOT NULL,
	"phone" text NOT NULL,
	"latitude" numeric(10, 8),
	"longitude" numeric(11, 8),
	"is_in_network" boolean DEFAULT false,
	"rating" numeric(3, 2),
	"inventory" json
);
--> statement-breakpoint
CREATE TABLE "prescriptions" (
	"id" serial PRIMARY KEY NOT NULL,
	"patient_id" integer NOT NULL,
	"doctor_id" integer NOT NULL,
	"pharmacy_id" integer,
	"medication_name" text NOT NULL,
	"dosage" text NOT NULL,
	"frequency" text NOT NULL,
	"duration" text NOT NULL,
	"instructions" text,
	"refills_remaining" integer DEFAULT 0,
	"is_generic" boolean DEFAULT false,
	"status" text DEFAULT 'pending' NOT NULL,
	"blockchain_hash" text,
	"created_at" timestamp DEFAULT now(),
	"expires_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"username" text NOT NULL,
	"password" text NOT NULL,
	"role" text NOT NULL,
	"first_name" text NOT NULL,
	"last_name" text NOT NULL,
	"email" text NOT NULL,
	"phone" text,
	"license_number" text,
	"insurance_provider" text,
	"specialization" text,
	"pharmacy_chain" text,
	"created_at" timestamp DEFAULT now(),
	CONSTRAINT "users_username_unique" UNIQUE("username"),
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
