import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Pill, 
  MapPin, 
  MessageCircle, 
  Calendar, 
  RefreshCw, 
  Search,
  Home,
  User,
  Settings,
  Bell
} from 'lucide-react';

const PatientMobileDemo = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  
  // Sample prescription data matching the mobile app
  const prescriptions = [
    {
      id: 1,
      medicationName: 'Lisinopril',
      dosage: '10mg',
      frequency: 'Once daily',
      refillsRemaining: 2,
      status: 'Active',
      nextRefill: '2024-06-15',
    },
    {
      id: 2,
      medicationName: 'Metformin',
      dosage: '500mg',
      frequency: 'Twice daily',
      refillsRemaining: 5,
      status: 'Active',
      nextRefill: '2024-07-20',
    },
  ];

  const DashboardView = () => (
    <div className="p-4 space-y-4">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-600 to-cyan-500 text-white p-6 rounded-lg">
        <h1 className="text-2xl font-bold mb-2">Welcome, Sarah!</h1>
        <p className="text-blue-100">Your health dashboard</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <Pill className="w-8 h-8 mx-auto mb-2 text-blue-600" />
            <p className="text-2xl font-bold">{prescriptions.length}</p>
            <p className="text-sm text-gray-600">Active Prescriptions</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Calendar className="w-8 h-8 mx-auto mb-2 text-green-600" />
            <p className="text-2xl font-bold">2</p>
            <p className="text-sm text-gray-600">Upcoming Refills</p>
          </CardContent>
        </Card>
      </div>

      {/* Prescriptions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Pill className="w-5 h-5" />
            My Prescriptions
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {prescriptions.map((prescription) => (
            <div key={prescription.id} className="border rounded-lg p-4 space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg">{prescription.medicationName}</h3>
                  <p className="text-gray-600">{prescription.dosage} - {prescription.frequency}</p>
                </div>
                <Badge variant="outline" className="bg-green-50 text-green-700">
                  {prescription.status}
                </Badge>
              </div>
              <p className="text-sm text-gray-600">
                Refills remaining: {prescription.refillsRemaining}
              </p>
              <p className="text-sm text-gray-600">
                Next refill: {prescription.nextRefill}
              </p>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                <RefreshCw className="w-4 h-4 mr-2" />
                Request Refill
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );

  const PharmacySearchView = () => (
    <div className="p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            Find Pharmacy
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Input placeholder="Enter your location" />
            <Input placeholder="Search medication" />
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              <Search className="w-4 h-4 mr-2" />
              Search Pharmacies
            </Button>
          </div>
          
          <Separator />
          
          <div className="space-y-3">
            <h3 className="font-semibold">Nearby Pharmacies</h3>
            {[
              { name: "CVS Pharmacy", distance: "0.8 miles", inNetwork: true },
              { name: "Walgreens", distance: "1.2 miles", inNetwork: true },
              { name: "Rite Aid", distance: "1.5 miles", inNetwork: false }
            ].map((pharmacy, index) => (
              <div key={index} className="border rounded-lg p-3">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium">{pharmacy.name}</h4>
                  <Badge variant={pharmacy.inNetwork ? "default" : "secondary"}>
                    {pharmacy.inNetwork ? "In Network" : "Out of Network"}
                  </Badge>
                </div>
                <p className="text-sm text-gray-600 mb-2">{pharmacy.distance}</p>
                <Button size="sm" variant="outline" className="w-full">
                  View Details
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const AIAssistantView = () => (
    <div className="p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="w-5 h-5" />
            AI Health Assistant
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm mb-2"><strong>AI Assistant:</strong></p>
            <p className="text-sm">Hello! I'm here to help answer your medication questions and provide health guidance. How can I assist you today?</p>
          </div>
          
          <div className="space-y-2">
            <Input placeholder="Ask about your medications..." />
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              Send Message
            </Button>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-semibold text-sm">Quick Questions:</h3>
            <div className="space-y-2">
              {[
                "What are the side effects of my medications?",
                "When should I take my medicines?",
                "Can I take these together?",
                "What should I do if I miss a dose?"
              ].map((question, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="w-full text-left justify-start text-xs"
                >
                  {question}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-600 to-cyan-500 text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">RxBridge Patient</h1>
        <div className="flex gap-2">
          <Bell className="w-5 h-5" />
          <Settings className="w-5 h-5" />
        </div>
      </div>

      {/* Content */}
      <div className="pb-20">
        {activeTab === 'dashboard' && <DashboardView />}
        {activeTab === 'pharmacy' && <PharmacySearchView />}
        {activeTab === 'ai' && <AIAssistantView />}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-blue-900 text-white">
        <div className="flex justify-around py-3">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`flex flex-col items-center space-y-1 ${
              activeTab === 'dashboard' ? 'text-cyan-300' : 'text-white/70'
            }`}
          >
            <Home className="w-5 h-5" />
            <span className="text-xs">Dashboard</span>
          </button>
          <button
            onClick={() => setActiveTab('pharmacy')}
            className={`flex flex-col items-center space-y-1 ${
              activeTab === 'pharmacy' ? 'text-cyan-300' : 'text-white/70'
            }`}
          >
            <MapPin className="w-5 h-5" />
            <span className="text-xs">Pharmacy</span>
          </button>
          <button
            onClick={() => setActiveTab('ai')}
            className={`flex flex-col items-center space-y-1 ${
              activeTab === 'ai' ? 'text-cyan-300' : 'text-white/70'
            }`}
          >
            <MessageCircle className="w-5 h-5" />
            <span className="text-xs">AI Assistant</span>
          </button>
          <button className="flex flex-col items-center space-y-1 text-white/70">
            <User className="w-5 h-5" />
            <span className="text-xs">Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PatientMobileDemo;