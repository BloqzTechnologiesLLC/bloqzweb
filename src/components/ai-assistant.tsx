import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Brain, Send, Lightbulb, MessageCircle, Sparkles, X, Minimize2, Maximize2 } from "lucide-react";

interface AiAssistantProps {
  portal: "patient" | "doctor" | "pharmacy" | "insurance";
  suggestions: string[];
  onClose?: () => void;
}

export function AiAssistant({ portal, suggestions, onClose }: AiAssistantProps) {
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Array<{
    type: "ai" | "user";
    content: string;
    timestamp: Date;
  }>>([
    {
      type: "ai" as const,
      content: `Hello! I'm your AI assistant for the ${portal} portal. How can I help you today?`,
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const getPortalSpecificGreeting = () => {
    switch (portal) {
      case "patient":
        return "I can help you manage prescriptions, find pharmacies, set reminders, and answer health questions.";
      case "doctor":
        return "I provide clinical decision support, drug interaction checks, and prescription optimization.";
      case "pharmacy":
        return "I assist with prescription verification, inventory optimization, and workflow efficiency.";
      case "insurance":
        return "I help with claims processing, coverage determination, and fraud detection.";
      default:
        return "I'm here to assist you with your healthcare needs.";
    }
  };

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = {
      type: "user" as const,
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        type: "ai" as const,
        content: generateAiResponse(input, portal),
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1000);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInput(suggestion);
  };

  const generateAiResponse = (query: string, portal: string): string => {
    const lowerQuery = query.toLowerCase();
    
    if (lowerQuery.includes("pharmacy") || lowerQuery.includes("find")) {
      return "I found 3 nearby pharmacies with your medication in stock. CVS on Main St has the best price at $12.50. Would you like me to check their current wait times?";
    }
    
    if (lowerQuery.includes("interaction") || lowerQuery.includes("drug")) {
      return "I've checked for drug interactions with your current medications. No major interactions found, but I recommend taking this medication with food to reduce stomach upset.";
    }
    
    if (lowerQuery.includes("reminder") || lowerQuery.includes("time")) {
      return "I've set up personalized reminders based on your medication schedule. You'll receive notifications at optimal times for maximum effectiveness.";
    }
    
    if (lowerQuery.includes("generic") || lowerQuery.includes("alternative")) {
      return "I found a generic alternative that could save you 75% on costs. The generic version has the same active ingredient and effectiveness. Would you like me to check with your doctor?";
    }
    
    if (lowerQuery.includes("insurance") || lowerQuery.includes("coverage")) {
      return "Your insurance covers 80% of this medication cost. Your copay would be $15. I can also check for manufacturer coupons that might reduce this further.";
    }
    
    return `I understand you're asking about "${query}". Based on my analysis of your ${portal} data, I recommend reviewing the relevant information in your dashboard. Would you like me to provide more specific guidance?`;
  };

  // If minimized, show just a floating button
  if (isMinimized) {
    return (
      <Button
        onClick={() => setIsMinimized(false)}
        className="fixed bottom-4 right-4 h-14 w-14 rounded-full ai-assistant-bubble shadow-lg z-50 hover:scale-105 transition-transform"
        size="sm"
      >
        <Brain className="h-6 w-6 text-white" />
      </Button>
    );
  }

  return (
    <Card className="h-[600px] flex flex-col portrait:h-[400px] portrait:max-h-[50vh]">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center justify-between text-lg">
          <div className="flex items-center">
            <div className="ai-assistant-bubble p-2 rounded-full mr-3">
              <Brain className="h-4 w-4 text-white" />
            </div>
            AI Assistant
          </div>
          <div className="flex items-center space-x-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMinimized(true)}
              className="h-6 w-6 p-0 hover:bg-muted rounded-full"
            >
              <Minimize2 className="h-4 w-4" />
            </Button>
            {onClose && (
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="h-6 w-6 p-0 hover:bg-muted rounded-full"
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
        </CardTitle>
        <CardDescription className="text-sm portrait:hidden">
          {getPortalSpecificGreeting()}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="flex-1 flex flex-col space-y-4">
        {/* Chat Messages */}
        <ScrollArea className="flex-1 h-[300px] portrait:h-[180px]">
          <div className="space-y-3 pr-3">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] p-2 rounded-lg text-xs portrait:text-[10px] ${
                    message.type === "user"
                      ? "bg-primary text-primary-foreground"
                      : "ai-assistant-bubble text-white"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="ai-assistant-bubble p-2 rounded-lg text-white text-xs">
                  <div className="flex items-center space-x-1">
                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" />
                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.1s" }} />
                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        {/* Quick Suggestions - Hidden in portrait mode to save space */}
        <div className="space-y-2 portrait:hidden">
          <div className="flex items-center text-xs text-muted-foreground">
            <Lightbulb className="h-3 w-3 mr-1" />
            Quick suggestions:
          </div>
          <div className="flex flex-wrap gap-1">
            {suggestions.slice(0, 3).map((suggestion, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                className="text-xs h-6 px-2"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                <Sparkles className="h-3 w-3 mr-1" />
                {suggestion}
              </Button>
            ))}
          </div>
        </div>

        {/* Input Area */}
        <div className="flex space-x-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything..."
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
            className="text-sm portrait:text-xs portrait:h-8"
          />
          <Button 
            size="sm" 
            onClick={handleSendMessage}
            disabled={!input.trim() || isLoading}
            className="shrink-0 portrait:h-8 portrait:w-8 portrait:p-0"
          >
            <Send className="h-4 w-4 portrait:h-3 portrait:w-3" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
