import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { setupAuthRoutes } from "./auth-routes";
import { z } from "zod";
import { insertUserSchema, insertPrescriptionSchema, insertPharmacySchema, insertMedicationPriceSchema, insertInsuranceClaimSchema, insertAiInteractionSchema, insertBlockchainTransactionSchema } from "@shared/schema";

// Email service function using SendGrid
async function sendContactFormEmail(toEmail: string, content: string, formData: any) {
  try {
    // Import SendGrid (we already have it installed)
    const sgMail = require('@sendgrid/mail');
    
    // Set the API key
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    
    // Prepare the email
    const msg = {
      to: toEmail,
      from: 'noreply@bloqz.xyz', // Using authenticated domain
      subject: `New RxBridge Contact Form Submission from ${formData.name}`,
      text: content,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1E3A8A;">New RxBridge Information Request</h2>
          
          <div style="background: #F3F4F6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Contact Details:</h3>
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Company:</strong> ${formData.company}</p>
            <p><strong>Role:</strong> ${formData.role || 'Not specified'}</p>
            <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
          </div>
          
          <div style="background: #EFF6FF; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1E40AF; margin-top: 0;">Message:</h3>
            <p style="white-space: pre-wrap;">${formData.message || 'No additional message provided'}</p>
          </div>
          
          <p style="color: #6B7280; font-size: 14px;">
            Submitted at: ${new Date().toLocaleString()}
          </p>
          
          <hr style="border: none; border-top: 1px solid #E5E7EB; margin: 20px 0;">
          <p style="color: #6B7280; font-size: 12px;">
            This email was automatically generated from the RxBridge contact form.
          </p>
        </div>
      `
    };
    
    // Send the email
    await sgMail.send(msg);
    
    console.log(`✅ Email sent successfully to ${toEmail}`);
    console.log(`📧 Contact form submission from: ${formData.name} (${formData.email})`);
    
    return { success: true };
  } catch (error) {
    console.error('❌ Failed to send email via SendGrid:');
    console.error('Error details:', error.response ? error.response.body : error.message);
    console.error('Full error:', error);
    
    // Log the form data anyway for tracking
    console.log(`📧 CONTACT FORM SUBMISSION TO: ${toEmail}`);
    console.log('-----------------------------------');
    console.log(content);
    console.log('-----------------------------------');
    
    throw error;
  }
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form route for marketing landing page
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, company, role, phone, message } = req.body;
      
      // Validate required fields
      if (!name || !email || !company) {
        return res.status(400).json({ error: 'Name, email, and company are required' });
      }

      // Log the submission
      console.log('New contact form submission:', {
        name,
        email,
        company,
        role,
        phone,
        message,
        timestamp: new Date().toISOString()
      });

      // Send email notification to bloqztech@gmail.com
      try {
        const emailContent = `
New RxBridge Information Request

Contact Details:
- Name: ${name}
- Email: ${email}
- Company: ${company}
- Role: ${role || 'Not specified'}
- Phone: ${phone || 'Not provided'}

Message:
${message || 'No additional message provided'}

Submitted at: ${new Date().toLocaleString()}
        `;

        // Send email notification (using built-in email service)
        await sendContactFormEmail('nhartig@bloqz.xyz', emailContent, { name, email, company, role, phone, message });
        
        res.json({ 
          success: true, 
          message: 'Information request submitted successfully! We will contact you within 24 hours.' 
        });
      } catch (emailError) {
        console.error('Email sending failed:', emailError);
        // Still return success to user since we logged the submission
        res.json({ 
          success: true, 
          message: 'Information request submitted successfully! We will contact you within 24 hours.' 
        });
      }
    } catch (error) {
      console.error('Contact form submission error:', error);
      res.status(500).json({ error: 'Failed to submit information request' });
    }
  });

  // User authentication and management
  app.post("/api/auth/register", async (req, res) => {
    try {
      const userData = insertUserSchema.parse(req.body);
      const user = await storage.createUser(userData);
      res.json({ user: { ...user, password: undefined } });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  });

  app.post("/api/auth/login", async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await storage.getUserByUsername(username);
      
      if (!user || user.password !== password) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
      
      res.json({ user: { ...user, password: undefined } });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  });

  app.get("/api/users/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const user = await storage.getUser(id);
      
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      
      res.json({ ...user, password: undefined });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  });

  // Prescription management
  app.post("/api/prescriptions", async (req, res) => {
    try {
      const prescriptionData = insertPrescriptionSchema.parse(req.body);
      const prescription = await storage.createPrescription(prescriptionData);
      res.json(prescription);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  });

  app.get("/api/prescriptions/patient/:patientId", async (req, res) => {
    try {
      const patientId = parseInt(req.params.patientId);
      const prescriptions = await storage.getPrescriptionsByPatient(patientId);
      res.json(prescriptions);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  });

  app.get("/api/prescriptions/doctor/:doctorId", async (req, res) => {
    try {
      const doctorId = parseInt(req.params.doctorId);
      const prescriptions = await storage.getPrescriptionsByDoctor(doctorId);
      res.json(prescriptions);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  });

  app.patch("/api/prescriptions/:id/status", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const { status } = req.body;
      const prescription = await storage.updatePrescriptionStatus(id, status);
      res.json(prescription);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  });

  // Pharmacy management
  app.post("/api/pharmacies", async (req, res) => {
    try {
      const pharmacyData = insertPharmacySchema.parse(req.body);
      const pharmacy = await storage.createPharmacy(pharmacyData);
      res.json(pharmacy);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  });

  app.get("/api/pharmacies/search", async (req, res) => {
    try {
      const { lat, lng, radius, medication, inNetworkOnly } = req.query;
      const filters = {
        latitude: lat ? parseFloat(lat as string) : undefined,
        longitude: lng ? parseFloat(lng as string) : undefined,
        radius: radius ? parseFloat(radius as string) : undefined,
        medication: medication as string,
        inNetworkOnly: inNetworkOnly === 'true'
      };
      
      const pharmacies = await storage.searchPharmacies(filters);
      res.json(pharmacies);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  });

  app.get("/api/pharmacies/:id/inventory", async (req, res) => {
    try {
      const pharmacyId = parseInt(req.params.id);
      const inventory = await storage.getPharmacyInventory(pharmacyId);
      res.json(inventory);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  });

  // Medication pricing
  app.post("/api/medication-prices", async (req, res) => {
    try {
      const priceData = insertMedicationPriceSchema.parse(req.body);
      const price = await storage.createMedicationPrice(priceData);
      res.json(price);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  });

  app.get("/api/medication-prices/compare", async (req, res) => {
    try {
      const { medication, pharmacyIds } = req.query;
      const ids = typeof pharmacyIds === 'string' ? pharmacyIds.split(',').map(Number) : [];
      const prices = await storage.compareMedicationPrices(medication as string, ids);
      res.json(prices);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  });

  // Insurance claims
  app.post("/api/insurance-claims", async (req, res) => {
    try {
      const claimData = insertInsuranceClaimSchema.parse(req.body);
      const claim = await storage.createInsuranceClaim(claimData);
      res.json(claim);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  });

  app.get("/api/insurance-claims/provider/:provider", async (req, res) => {
    try {
      const provider = req.params.provider;
      const { status, limit } = req.query;
      const claims = await storage.getClaimsByProvider(
        provider, 
        status as string, 
        parseInt(limit as string) || 50
      );
      res.json(claims);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  });

  app.patch("/api/insurance-claims/:id/process", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const { status, reason } = req.body;
      const claim = await storage.processInsuranceClaim(id, status, reason);
      res.json(claim);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  });

  // AI Assistant endpoints
  app.post("/api/ai/query", async (req, res) => {
    try {
      const { query, portal, userId, context } = req.body;
      
      // Simulate AI processing with contextual responses
      const response = await generateRealAiResponse(query, portal, context);
      
      const interactionData = {
        userId,
        portal,
        query,
        response: response,
        actionTaken: "ai_response_generated",
        confidence: "0.92"
      };
      
      const interaction = await storage.createAiInteraction(interactionData);
      res.json(interaction);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  });

  app.get("/api/ai/suggestions", async (req, res) => {
    try {
      const { portal, userId, limit } = req.query;
      const suggestions = await generatePersonalizedSuggestions(
        portal as string, 
        parseInt(userId as string),
        parseInt(limit as string) || 5
      );
      res.json(suggestions);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  });

  app.post("/api/ai/drug-interactions", async (req, res) => {
    try {
      const { medications } = req.body;
      const analysis = await analyzeDrugInteractions(medications);
      res.json(analysis);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  });

  app.post("/api/ai/optimize-pharmacy", async (req, res) => {
    try {
      const searchParams = req.body;
      const optimization = await optimizePharmacySearch(searchParams);
      res.json(optimization);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  });

  app.post("/api/ai/clinical-insights", async (req, res) => {
    try {
      const patientData = req.body;
      const insights = await generateClinicalInsights(patientData);
      res.json(insights);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  });

  app.post("/api/ai/fraud-detection", async (req, res) => {
    try {
      const claimData = req.body;
      const analysis = await detectFraudulentClaims(claimData);
      res.json(analysis);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  });

  // Blockchain endpoints
  app.post("/api/blockchain/prescription", async (req, res) => {
    try {
      const prescriptionData = req.body;
      const transaction = await createBlockchainTransaction(
        'prescription_created',
        prescriptionData
      );
      res.json(transaction);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  });

  app.post("/api/blockchain/prescription-fill", async (req, res) => {
    try {
      const fillData = req.body;
      const transaction = await createBlockchainTransaction(
        'prescription_filled',
        fillData
      );
      res.json(transaction);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  });

  app.post("/api/blockchain/insurance-claim", async (req, res) => {
    try {
      const claimData = req.body;
      const transaction = await createBlockchainTransaction(
        'claim_processed',
        claimData
      );
      res.json(transaction);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  });

  app.get("/api/blockchain/transaction/:hash", async (req, res) => {
    try {
      const hash = req.params.hash;
      const transaction = await storage.getBlockchainTransaction(hash);
      if (!transaction) {
        return res.status(404).json({ message: "Transaction not found" });
      }
      res.json(transaction);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  });

  app.get("/api/blockchain/transactions", async (req, res) => {
    try {
      const limit = parseInt(req.query.limit as string) || 10;
      const transactions = await storage.getRecentBlockchainTransactions(limit);
      res.json(transactions);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  });

  app.get("/api/blockchain/networks", async (req, res) => {
    try {
      // Return simulated network status
      const networks = [
        {
          name: 'Ethereum',
          status: 'connected',
          chainId: 1,
          lastBlock: 19234567 + Math.floor(Math.random() * 100),
          gasPrice: `${25 + Math.floor(Math.random() * 10)} gwei`,
          transactions: 1247 + Math.floor(Math.random() * 50)
        },
        {
          name: 'Polygon',
          status: 'connected',
          chainId: 137,
          lastBlock: 52845632 + Math.floor(Math.random() * 100),
          gasPrice: `${30 + Math.floor(Math.random() * 15)} gwei`,
          transactions: 3456 + Math.floor(Math.random() * 100)
        },
        {
          name: 'Arbitrum',
          status: Math.random() > 0.3 ? 'connected' : 'pending',
          chainId: 42161,
          lastBlock: 178345621 + Math.floor(Math.random() * 100),
          gasPrice: `${0.1 + Math.random() * 0.2} gwei`,
          transactions: 892 + Math.floor(Math.random() * 30)
        }
      ];
      res.json(networks);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

// AI Helper Functions
async function generateRealAiResponse(query: string, portal: string, context?: any): Promise<string> {
  try {
    const openaiApiKey = process.env.OPENAI_API_KEY;
    if (!openaiApiKey) {
      throw new Error('OpenAI API key not configured');
    }

    // Create portal-specific system prompts for healthcare context
    const systemPrompts = {
      patient: "You are a helpful healthcare assistant for patients. Provide clear, supportive guidance while always recommending they consult with their healthcare provider for medical decisions. Keep responses caring and easy to understand.",
      doctor: "You are a clinical AI assistant for healthcare providers. Provide evidence-based medical information, diagnostic considerations, and treatment guidelines. Always emphasize clinical judgment and patient safety.",
      pharmacy: "You are a pharmacy AI assistant. Help with medication information, drug interactions, insurance coverage, and pharmacy operations. Focus on medication safety and pharmaceutical care.",
      insurance: "You are an insurance AI assistant for healthcare coverage. Help with coverage analysis, prior authorizations, claim processing, and benefits explanation. Focus on clear policy interpretation."
    };

    const systemPrompt = systemPrompts[portal] || systemPrompts.patient;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openaiApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4',
        messages: [
          {
            role: 'system',
            content: systemPrompt
          },
          {
            role: 'user',
            content: query
          }
        ],
        max_tokens: 500,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    const data = await response.json();
    return data.choices[0]?.message?.content || "I'm sorry, I couldn't generate a response at this time.";
    
  } catch (error) {
    console.error('OpenAI API Error:', error);
    // Fallback response
    return `I'm currently experiencing technical difficulties. Please try again later or contact your healthcare provider directly for assistance with: ${query}`;
  }
}

async function generateAiResponse(query: string, portal: string, context?: any) {
  // Simulate AI processing with realistic healthcare responses
  const responses: Record<string, any> = {
    patient: {
      "find pharmacy": {
        text: "I found 3 nearby pharmacies with your medication in stock. CVS on Main St has the best price at $12.50 with a 15-minute wait time. Would you like me to check if they accept your insurance?",
        action: "pharmacy_search",
        confidence: 0.92
      },
      "drug interaction": {
        text: "I've checked for interactions between your current medications. No major interactions found, but Lisinopril may increase potassium levels. Monitor your diet and consider regular blood tests.",
        action: "interaction_check",
        confidence: 0.95
      },
      "generic alternative": {
        text: "A generic version of your medication is available and could save you 75% on costs. The generic contains the same active ingredient with identical effectiveness. Shall I check with your doctor for approval?",
        action: "generic_suggestion",
        confidence: 0.88
      }
    },
    doctor: {
      "prescription": {
        text: "Based on the patient's history and current medications, I recommend starting with 10mg Lisinopril once daily. Monitor blood pressure weekly and check kidney function after 2 weeks. Watch for dry cough or angioedema.",
        action: "clinical_recommendation",
        confidence: 0.91
      },
      "interaction check": {
        text: "Potential interaction detected between Warfarin and the prescribed antibiotic. Consider dose adjustment or alternative antibiotic. Monitor INR more frequently if continuing current regimen.",
        action: "interaction_alert",
        confidence: 0.96
      }
    },
    pharmacy: {
      "inventory": {
        text: "Based on usage patterns, you should reorder Metformin 500mg within 3 days. Current stock will last approximately 5 days. I've optimized the order quantity to minimize waste while ensuring availability.",
        action: "inventory_optimization",
        confidence: 0.89
      },
      "workflow": {
        text: "Peak prescription volume occurs between 2-4 PM. Consider adding staff during these hours to reduce wait times. Current average processing time is 12 minutes, target is under 10 minutes.",
        action: "workflow_analysis",
        confidence: 0.87
      }
    },
    insurance: {
      "fraud detection": {
        text: "High-risk pattern detected: Same prescriber submitting unusual quantity claims for controlled substances. Recommend immediate review of prescriber ID 12345. Similar cases resulted in $45K fraud prevention.",
        action: "fraud_alert",
        confidence: 0.94
      },
      "prior authorization": {
        text: "This medication requires prior authorization, but patient meets criteria based on diagnosis and previous treatments. I can expedite the approval process. Estimated approval time: 24 hours.",
        action: "pa_expedite",
        confidence: 0.91
      }
    }
  };

  // Find best matching response
  const portalResponses = responses[portal] || {};
  const queryLower = query.toLowerCase();
  
  for (const [key, response] of Object.entries(portalResponses)) {
    if (queryLower.includes(key.toLowerCase())) {
      return response;
    }
  }

  // Default response
  return {
    text: `I understand you're asking about "${query}". Based on your ${portal} profile, I recommend reviewing the relevant information in your dashboard. Would you like me to provide more specific guidance?`,
    action: "general_guidance",
    confidence: 0.75
  };
}

async function generatePersonalizedSuggestions(portal: string, userId: number, limit: number) {
  const suggestions: Record<string, any[]> = {
    patient: [
      { type: 'pharmacy', title: 'Find cheaper alternatives', confidence: 0.85, priority: 'medium' },
      { type: 'reminder', title: 'Set medication reminders', confidence: 0.90, priority: 'high' },
      { type: 'interaction', title: 'Check drug interactions', confidence: 0.95, priority: 'high' }
    ],
    doctor: [
      { type: 'medication', title: 'Review medication efficacy', confidence: 0.88, priority: 'medium' },
      { type: 'interaction', title: 'Clinical decision support', confidence: 0.92, priority: 'high' }
    ],
    pharmacy: [
      { type: 'workflow', title: 'Optimize inventory', confidence: 0.87, priority: 'medium' },
      { type: 'workflow', title: 'Streamline dispensing', confidence: 0.84, priority: 'medium' }
    ],
    insurance: [
      { type: 'cost', title: 'Fraud detection', confidence: 0.93, priority: 'high' },
      { type: 'workflow', title: 'Expedite prior authorizations', confidence: 0.89, priority: 'medium' }
    ]
  };

  return (suggestions[portal] || []).slice(0, limit);
}

async function analyzeDrugInteractions(medications: string[]) {
  // Simulate drug interaction analysis
  const interactions = [];
  const knownInteractions: Record<string, any> = {
    'warfarin-aspirin': {
      severity: 'major',
      description: 'Increased bleeding risk',
      recommendation: 'Monitor INR closely, consider PPI'
    },
    'lisinopril-potassium': {
      severity: 'moderate', 
      description: 'Hyperkalemia risk',
      recommendation: 'Monitor serum potassium levels'
    }
  };

  for (let i = 0; i < medications.length; i++) {
    for (let j = i + 1; j < medications.length; j++) {
      const pair = `${medications[i].toLowerCase()}-${medications[j].toLowerCase()}`;
      if (knownInteractions[pair]) {
        interactions.push({
          drugs: [medications[i], medications[j]],
          ...knownInteractions[pair]
        });
      }
    }
  }

  return {
    interactions,
    safetyScore: Math.max(0.6, 1 - interactions.length * 0.2),
    recommendations: interactions.length > 0 
      ? ['Consult prescriber', 'Monitor closely', 'Consider alternatives']
      : ['No major interactions found', 'Continue current regimen']
  };
}

async function optimizePharmacySearch(params: any) {
  // Simulate pharmacy optimization
  return {
    recommendations: [
      {
        pharmacyId: 1,
        name: 'CVS Pharmacy',
        distance: 0.8,
        price: 12.50,
        savings: 15.25,
        estimatedWaitTime: 15,
        inStock: true,
        confidenceScore: 0.92
      }
    ],
    insights: [
      {
        category: 'cost',
        message: 'You can save $182 annually by switching to generic versions',
        timestamp: new Date().toISOString(),
        relevanceScore: 0.89
      }
    ]
  };
}

async function generateClinicalInsights(patientData: any) {
  return {
    riskFactors: [
      {
        factor: 'Hypertension with diabetes',
        risk: 'high',
        recommendation: 'Monitor BP weekly, HbA1c every 3 months'
      }
    ],
    medicationRecommendations: [
      {
        medication: 'Lisinopril',
        reason: 'ACE inhibitor preferred for diabetic hypertension',
        dosage: '10mg daily',
        monitoring: ['Blood pressure', 'Kidney function', 'Potassium levels']
      }
    ],
    followUpSchedule: [
      {
        timeframe: '2 weeks',
        purpose: 'Blood pressure check',
        tests: ['BP measurement', 'Basic metabolic panel']
      }
    ]
  };
}

async function detectFraudulentClaims(claimData: any) {
  const riskFactors = [];
  let riskScore = 0;

  // Simulate fraud detection logic
  if (claimData.quantity > 90) {
    riskFactors.push({
      type: 'Unusual quantity',
      severity: 'medium',
      description: 'Quantity exceeds typical prescription limits'
    });
    riskScore += 0.3;
  }

  if (claimData.claimAmount > 1000) {
    riskFactors.push({
      type: 'High cost claim',
      severity: 'high', 
      description: 'Claim amount significantly above average'
    });
    riskScore += 0.4;
  }

  return {
    riskScore: Math.min(riskScore, 1.0),
    flags: riskFactors,
    recommendation: riskScore > 0.7 ? 'investigate' : riskScore > 0.4 ? 'review' : 'approve',
    similarCases: [
      {
        caseId: 'CASE-2024-001',
        similarity: 0.85,
        outcome: 'fraudulent'
      }
    ]
  };
}

async function createBlockchainTransaction(actionType: string, data: any) {
  const transactionData = {
    transactionHash: generateTransactionHash(),
    blockNumber: Math.floor(Math.random() * 1000000) + 19000000,
    fromAddress: '0x' + Array(40).fill(0).map(() => Math.floor(Math.random() * 16).toString(16)).join(''),
    toAddress: '0x' + Array(40).fill(0).map(() => Math.floor(Math.random() * 16).toString(16)).join(''),
    actionType,
    dataHash: generateDataHash(data),
    gasUsed: Math.floor(Math.random() * 100000) + 50000,
    status: 'pending'
  };

  const transaction = await storage.createBlockchainTransaction(transactionData);
  
  // Simulate blockchain confirmation after delay
  setTimeout(async () => {
    await storage.updateBlockchainTransactionStatus(transaction.id, 'confirmed');
  }, 5000);

  return transaction;
}

function generateTransactionHash(): string {
  return '0x' + Array(64).fill(0).map(() => Math.floor(Math.random() * 16).toString(16)).join('');
}

function generateDataHash(data: any): string {
  const jsonString = JSON.stringify(data, Object.keys(data).sort());
  let hash = 0;
  for (let i = 0; i < jsonString.length; i++) {
    const char = jsonString.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash).toString(16).padStart(8, '0');
}
