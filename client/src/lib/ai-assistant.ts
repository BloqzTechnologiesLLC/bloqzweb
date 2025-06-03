import { apiRequest } from "./queryClient";

export interface AiInteraction {
  id: number;
  userId: number;
  portal: 'patient' | 'doctor' | 'pharmacy' | 'insurance';
  query: string;
  response: string;
  actionTaken?: string;
  confidence: number;
  createdAt: string;
}

export interface AiSuggestion {
  type: 'medication' | 'pharmacy' | 'interaction' | 'workflow' | 'cost' | 'reminder';
  title: string;
  description: string;
  confidence: number;
  actionable: boolean;
  priority: 'low' | 'medium' | 'high' | 'urgent';
}

export interface AiInsight {
  category: 'health' | 'cost' | 'workflow' | 'safety' | 'compliance';
  message: string;
  data?: any;
  timestamp: string;
  relevanceScore: number;
}

export class AiAssistantService {
  private apiKey: string;
  
  constructor() {
    this.apiKey = process.env.OPENAI_API_KEY || 'demo-key';
  }

  async sendQuery(
    query: string, 
    portal: 'patient' | 'doctor' | 'pharmacy' | 'insurance',
    userId: number,
    context?: any
  ): Promise<AiInteraction> {
    try {
      const response = await apiRequest('POST', '/api/ai/query', {
        query,
        portal,
        userId,
        context
      });
      
      return await response.json();
    } catch (error) {
      console.error('Failed to send AI query:', error);
      throw error;
    }
  }

  async getPersonalizedSuggestions(
    portal: 'patient' | 'doctor' | 'pharmacy' | 'insurance',
    userId: number,
    limit: number = 5
  ): Promise<AiSuggestion[]> {
    try {
      const response = await apiRequest('GET', `/api/ai/suggestions?portal=${portal}&userId=${userId}&limit=${limit}`);
      return await response.json();
    } catch (error) {
      console.error('Failed to get AI suggestions:', error);
      
      // Return default suggestions based on portal type
      return this.getDefaultSuggestions(portal);
    }
  }

  async analyzeDrugInteractions(medications: string[]): Promise<{
    interactions: Array<{
      drugs: string[];
      severity: 'minor' | 'moderate' | 'major';
      description: string;
      recommendation: string;
    }>;
    safetyScore: number;
    recommendations: string[];
  }> {
    try {
      const response = await apiRequest('POST', '/api/ai/drug-interactions', {
        medications
      });
      return await response.json();
    } catch (error) {
      console.error('Failed to analyze drug interactions:', error);
      throw error;
    }
  }

  async optimizePharmacySearch(params: {
    medication: string;
    location: { lat: number; lng: number };
    insuranceProvider?: string;
    preferGeneric: boolean;
    maxDistance: number;
  }): Promise<{
    recommendations: Array<{
      pharmacyId: number;
      name: string;
      distance: number;
      price: number;
      savings: number;
      estimatedWaitTime: number;
      inStock: boolean;
      confidenceScore: number;
    }>;
    insights: AiInsight[];
  }> {
    try {
      const response = await apiRequest('POST', '/api/ai/optimize-pharmacy', params);
      return await response.json();
    } catch (error) {
      console.error('Failed to optimize pharmacy search:', error);
      throw error;
    }
  }

  async generateClinicalInsights(patientData: {
    age: number;
    conditions: string[];
    currentMedications: string[];
    allergies: string[];
    vitalSigns?: any;
  }): Promise<{
    riskFactors: Array<{
      factor: string;
      risk: 'low' | 'medium' | 'high';
      recommendation: string;
    }>;
    medicationRecommendations: Array<{
      medication: string;
      reason: string;
      dosage: string;
      monitoring: string[];
    }>;
    followUpSchedule: Array<{
      timeframe: string;
      purpose: string;
      tests: string[];
    }>;
  }> {
    try {
      const response = await apiRequest('POST', '/api/ai/clinical-insights', patientData);
      return await response.json();
    } catch (error) {
      console.error('Failed to generate clinical insights:', error);
      throw error;
    }
  }

  async analyzeWorkflowEfficiency(
    portal: 'pharmacy' | 'insurance',
    timeframe: string = '7d'
  ): Promise<{
    efficiency: number;
    bottlenecks: Array<{
      process: string;
      impact: 'low' | 'medium' | 'high';
      suggestion: string;
      estimatedImprovement: string;
    }>;
    recommendations: string[];
    metrics: {
      avgProcessingTime: number;
      errorRate: number;
      customerSatisfaction: number;
    };
  }> {
    try {
      const response = await apiRequest('GET', `/api/ai/workflow-analysis?portal=${portal}&timeframe=${timeframe}`);
      return await response.json();
    } catch (error) {
      console.error('Failed to analyze workflow efficiency:', error);
      throw error;
    }
  }

  async detectFraudulentClaims(claimData: {
    patientId: number;
    prescriberId: number;
    pharmacyId: number;
    medicationName: string;
    quantity: number;
    claimAmount: number;
    submissionDate: string;
  }): Promise<{
    riskScore: number;
    flags: Array<{
      type: string;
      severity: 'low' | 'medium' | 'high';
      description: string;
    }>;
    recommendation: 'approve' | 'review' | 'investigate' | 'deny';
    similarCases: Array<{
      caseId: string;
      similarity: number;
      outcome: string;
    }>;
  }> {
    try {
      const response = await apiRequest('POST', '/api/ai/fraud-detection', claimData);
      return await response.json();
    } catch (error) {
      console.error('Failed to detect fraudulent claims:', error);
      throw error;
    }
  }

  async getHealthInsights(patientData: {
    prescriptions: any[];
    adherenceData: any[];
    appointmentHistory: any[];
  }): Promise<{
    adherenceScore: number;
    healthTrends: Array<{
      metric: string;
      trend: 'improving' | 'stable' | 'declining';
      recommendation: string;
    }>;
    riskAlerts: Array<{
      type: string;
      message: string;
      urgency: 'low' | 'medium' | 'high';
    }>;
    nextSteps: string[];
  }> {
    try {
      const response = await apiRequest('POST', '/api/ai/health-insights', patientData);
      return await response.json();
    } catch (error) {
      console.error('Failed to get health insights:', error);
      throw error;
    }
  }

  private getDefaultSuggestions(portal: string): AiSuggestion[] {
    const suggestions: Record<string, AiSuggestion[]> = {
      patient: [
        {
          type: 'pharmacy',
          title: 'Find cheaper alternatives',
          description: 'Compare prices across nearby pharmacies',
          confidence: 0.85,
          actionable: true,
          priority: 'medium'
        },
        {
          type: 'reminder',
          title: 'Set medication reminders',
          description: 'Improve adherence with personalized alerts',
          confidence: 0.90,
          actionable: true,
          priority: 'high'
        },
        {
          type: 'interaction',
          title: 'Check drug interactions',
          description: 'Review potential medication conflicts',
          confidence: 0.95,
          actionable: true,
          priority: 'high'
        }
      ],
      doctor: [
        {
          type: 'medication',
          title: 'Review medication efficacy',
          description: 'Analyze patient response to current treatments',
          confidence: 0.88,
          actionable: true,
          priority: 'medium'
        },
        {
          type: 'interaction',
          title: 'Clinical decision support',
          description: 'Get evidence-based treatment recommendations',
          confidence: 0.92,
          actionable: true,
          priority: 'high'
        }
      ],
      pharmacy: [
        {
          type: 'workflow',
          title: 'Optimize inventory',
          description: 'Reduce stockouts and excess inventory',
          confidence: 0.87,
          actionable: true,
          priority: 'medium'
        },
        {
          type: 'workflow',
          title: 'Streamline dispensing',
          description: 'Reduce patient wait times',
          confidence: 0.84,
          actionable: true,
          priority: 'medium'
        }
      ],
      insurance: [
        {
          type: 'cost',
          title: 'Fraud detection',
          description: 'Identify suspicious claim patterns',
          confidence: 0.93,
          actionable: true,
          priority: 'high'
        },
        {
          type: 'workflow',
          title: 'Expedite prior authorizations',
          description: 'Streamline approval processes',
          confidence: 0.89,
          actionable: true,
          priority: 'medium'
        }
      ]
    };

    return suggestions[portal] || [];
  }

  formatConfidence(confidence: number): string {
    return `${(confidence * 100).toFixed(0)}%`;
  }

  getPriorityColor(priority: string): string {
    switch (priority) {
      case 'urgent':
        return 'text-red-600 dark:text-red-400';
      case 'high':
        return 'text-orange-600 dark:text-orange-400';
      case 'medium':
        return 'text-yellow-600 dark:text-yellow-400';
      case 'low':
        return 'text-green-600 dark:text-green-400';
      default:
        return 'text-gray-600 dark:text-gray-400';
    }
  }

  getPriorityIcon(priority: string): string {
    switch (priority) {
      case 'urgent':
        return '🚨';
      case 'high':
        return '⚠️';
      case 'medium':
        return '📋';
      case 'low':
        return 'ℹ️';
      default:
        return '💡';
    }
  }
}

// Export singleton instance
export const aiAssistantService = new AiAssistantService();

// Utility functions for AI integration
export const generateContextualPrompt = (
  portal: string,
  query: string,
  userContext: any
): string => {
  const prompts: Record<string, string> = {
    patient: `As a healthcare AI assistant for patients, respond to: "${query}". Consider the patient's medical history, current medications, and personal preferences. Provide clear, actionable advice while emphasizing the importance of consulting healthcare providers.`,
    
    doctor: `As a clinical decision support AI for healthcare providers, analyze: "${query}". Provide evidence-based recommendations, consider drug interactions, patient safety, and current medical guidelines. Include relevant warnings and monitoring recommendations.`,
    
    pharmacy: `As a pharmacy workflow optimization AI, address: "${query}". Focus on medication safety, inventory management, patient counseling, and operational efficiency. Ensure compliance with pharmaceutical regulations.`,
    
    insurance: `As an insurance claims processing AI, evaluate: "${query}". Consider coverage policies, fraud detection, prior authorization requirements, and cost-effectiveness. Provide clear reasoning for decisions.`
  };

  return prompts[portal] || `Respond to: "${query}"`;
};

export const processAiResponse = (response: string, portal: string): {
  summary: string;
  actions: string[];
  warnings: string[];
} => {
  // Parse AI response and extract actionable items
  const lines = response.split('\n').filter(line => line.trim());
  
  const summary = lines[0] || response.substring(0, 100) + '...';
  const actions = lines.filter(line => 
    line.toLowerCase().includes('recommend') || 
    line.toLowerCase().includes('suggest') ||
    line.toLowerCase().includes('should')
  );
  const warnings = lines.filter(line => 
    line.toLowerCase().includes('warning') || 
    line.toLowerCase().includes('caution') ||
    line.toLowerCase().includes('alert')
  );

  return { summary, actions, warnings };
};
