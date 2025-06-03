import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DynamicBackground, DynamicButton } from "@/components/DynamicBackground";
import { useIndustryTheme } from "@/contexts/ThemeContext";
import { AnimatedCard, AnimatedButton, AnimatedIcon, FadeIn, Floating, Glow } from "@/components/AnimatedElements";
import { ResponsiveLayout, ResponsiveGrid, ResponsiveText } from "@/components/ResponsiveLayout";
import { LoadingState, Skeleton, SmoothScroll } from "@/components/EnhancedUX";
import { GradientCard, IconBadge, FeatureHighlight, SectionHeader } from "@/components/VisualEnhancements";
import { SkipLink, ScreenReaderOnly } from "@/components/AccessibilityEnhancements";
import { useLazyLoad } from "@/hooks/usePerformance";
import { 
  Shield, 
  Zap, 
  Users, 
  FileText, 
  Phone, 
  Mail, 
  MapPin,
  Stethoscope,
  Pill,
  Building2,
  CreditCard,
  CheckCircle,
  ArrowRight,
  Blocks,
  Globe,
  TrendingUp,
  Briefcase,
  Factory,
  Truck,
  Home,
  DollarSign,
  Cpu,
  Network,
  Menu,
  X,
  ChevronDown
} from "lucide-react";
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export function BloqzLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBloqzSystemsOpen, setIsBloqzSystemsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const currentTheme = useIndustryTheme();

  // Initialize theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme-mode');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else {
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(systemPrefersDark);
      document.documentElement.classList.toggle('dark', systemPrefersDark);
    }
  }, []);

  const handleThemeToggle = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem('theme-mode', newTheme ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', newTheme);
  };

  const bloqzSystems = [
    { name: "RxBridge", description: "Healthcare & Prescription Management", icon: Stethoscope, link: "/rxbridge" },
    { name: "CannaLink", description: "Cannabis Compliance & Supply Chain", icon: Factory, link: "/cannalink" },
    { name: "VaultNet", description: "Finance & Banking Operations", icon: CreditCard, link: "/vaultnet" },
    { name: "MetaEstate", description: "Real Estate & Property Records", icon: Building2, link: "/terrachain" },
    { name: "GridFlux", description: "Energy & Utilities Management", icon: Zap, link: "/gridflux" },
    { name: "ShopChain", description: "Retail & Inventory Management", icon: DollarSign, link: "/shopchain" },
    { name: "DineSync", description: "Restaurant Supply & Operations", icon: MapPin, link: "/dinesync" },
    { name: "FreightFlow", description: "Supply Chain & Logistics", icon: Truck, link: "/freightflow" },
    { name: "CivicCore", description: "Government & Public Services", icon: Shield, link: "/civiccore" },
    { name: "PolicyNet", description: "Insurance & Claims Processing", icon: FileText, link: "/policynet" },
    { name: "SignalMesh", description: "Telecommunications Infrastructure", icon: Network, link: "/signalmesh" },
    { name: "LearnLedger", description: "Education & Credentials", icon: Users, link: "/learnledger" },
    { name: "TrackPort", description: "Logistics & Customs Data", icon: Globe, link: "/trackport" },
    { name: "Bloqz", description: "The Ultimate Multi-Industry Platform", icon: Network, link: "/bloqz" },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Skip Links for Accessibility */}
      <SkipLink href="#main-content">Skip to main content</SkipLink>
      <SkipLink href="#navigation">Skip to navigation</SkipLink>
      
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                <Blocks className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Bloqz Technologies
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Home
              </a>
              <a href="/about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                About
              </a>
              <div className="relative group">
                <button className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <span>Bloqz Systems</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div className="absolute top-full right-0 mt-2 w-80 max-h-96 overflow-y-auto bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    {bloqzSystems.map((system, index) => (
                      <a
                        key={index}
                        href={system.link}
                        className="flex items-center px-4 py-3 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
                      >
                        <system.icon className="h-5 w-5 text-blue-600 mr-3 flex-shrink-0" />
                        <div className="min-w-0">
                          <div className="font-medium text-gray-900 dark:text-white truncate">{system.name}</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">{system.description}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Theme Toggle */}
              <button
                onClick={handleThemeToggle}
                className="p-2 rounded-md text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border border-gray-300 dark:border-gray-600"
                title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
              >
                {isDarkMode ? (
                  <Sun className="h-5 w-5 text-yellow-400" />
                ) : (
                  <Moon className="h-5 w-5 text-gray-600" />
                )}
              </button>
            </div>

            {/* Mobile Hamburger Menu */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700 max-h-96 overflow-y-auto">
              <div className="space-y-4 px-4">
                <a href="#home" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Home
                </a>
                <a href="/about" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  About
                </a>
                
                {/* Mobile Theme Toggle */}
                <button
                  onClick={handleThemeToggle}
                  className="flex items-center space-x-2 w-full text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {isDarkMode ? (
                    <>
                      <Sun className="h-5 w-5 text-yellow-400" />
                      <span>Light Mode</span>
                    </>
                  ) : (
                    <>
                      <Moon className="h-5 w-5 text-gray-600" />
                      <span>Dark Mode</span>
                    </>
                  )}
                </button>
                
                <div>
                  <button
                    onClick={() => setIsBloqzSystemsOpen(!isBloqzSystemsOpen)}
                    className="flex items-center justify-between w-full text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <span>Bloqz Systems</span>
                    <ChevronDown className={`h-4 w-4 transition-transform ${isBloqzSystemsOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isBloqzSystemsOpen && (
                    <div className="mt-2 ml-4 space-y-3 max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
                      {bloqzSystems.map((system, index) => (
                        <a
                          key={index}
                          href={system.link}
                          className="flex items-center py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <system.icon className="h-4 w-4 text-blue-600 mr-3" />
                          <div>
                            <div className="font-medium">{system.name}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-500">{system.description}</div>
                          </div>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <main id="main-content">
        <section id="home" className="px-4 sm:px-6 lg:px-8 pt-20 pb-16" role="banner">
          <ResponsiveLayout>
            <div className="max-w-7xl mx-auto text-center">
              <div className="flex items-center justify-center space-x-2 mb-8">
                <IconBadge 
                  icon={Blocks} 
                  color="blue" 
                  size="lg"
                  className="animate-pulse"
                />
                <ResponsiveText size="xl" className="font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Bloqz Technologies
                </ResponsiveText>
                <ScreenReaderOnly>
                  - Industry-leading blockchain technology company
                </ScreenReaderOnly>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Innovating Industries with{" "}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Blockchain Technology
                </span>
              </h1>
              
              <ResponsiveText size="lg" className="text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                We develop cutting-edge blockchain solutions that transform how industries operate, 
                bringing transparency, security, and efficiency to businesses worldwide.
              </ResponsiveText>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <SmoothScroll 
                  to="#products-section" 
                  offset={80}
                  className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-3 rounded-lg text-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Explore Solutions
                  <ArrowRight className="ml-2 h-5 w-5 inline" />
                </SmoothScroll>
                <SmoothScroll 
                  to="#contact-section"
                  offset={80}
                  className="border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-lg text-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Contact Us
                </SmoothScroll>
              </div>
            </div>
          </ResponsiveLayout>
        </section>

      {/* Industries We Serve */}
      <section id="learn-more" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Industries We Transform
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our blockchain solutions span across multiple industries, bringing innovation and efficiency to diverse sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* Healthcare */}
            <Card className="text-center group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Stethoscope className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-blue-700 dark:text-blue-300">Healthcare</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-600 dark:text-blue-400">
                  Secure prescription management, patient data protection, and healthcare communication
                </p>
              </CardContent>
            </Card>

            {/* Cannabis */}
            <Card className="text-center group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Cpu className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-emerald-700 dark:text-emerald-300">Cannabis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-emerald-600 dark:text-emerald-400">
                  Compliance tracking, seed-to-sale verification, and regulated supply chain management
                </p>
              </CardContent>
            </Card>

            {/* Finance */}
            <Card className="text-center group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <DollarSign className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-purple-700 dark:text-purple-300">Finance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-purple-600 dark:text-purple-400">
                  Digital payments, smart contracts, and decentralized financial services
                </p>
              </CardContent>
            </Card>

            {/* Real Estate */}
            <Card className="text-center group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Home className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-orange-700 dark:text-orange-300">Real Estate</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-orange-600 dark:text-orange-400">
                  Property tokenization, smart contracts, and transparent transactions
                </p>
              </CardContent>
            </Card>

            {/* Energy */}
            <Card className="text-center group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-yellow-700 dark:text-yellow-300">Energy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-yellow-600 dark:text-yellow-400">
                  Green energy tracking, carbon credit management, and sustainable resource optimization
                </p>
              </CardContent>
            </Card>

            {/* Retail */}
            <Card className="text-center group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Retail</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Inventory management, payments, and supply verification
                </p>
              </CardContent>
            </Card>

            {/* Restaurants */}
            <Card className="text-center group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Briefcase className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Restaurants</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Supplier chains, health inspections, and transaction management
                </p>
              </CardContent>
            </Card>

            {/* Supply Chain */}
            <Card className="text-center group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Truck className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Supply Chain</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  End-to-end visibility for logistics, warehousing, and provenance
                </p>
              </CardContent>
            </Card>

            {/* Government */}
            <Card className="text-center group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-slate-600 to-gray-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Government</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Digital identity, licensing, and public services with accountability
                </p>
              </CardContent>
            </Card>

            {/* Insurance */}
            <Card className="text-center group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <CreditCard className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Insurance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Policy validation, claims automation, and fraud prevention
                </p>
              </CardContent>
            </Card>

            {/* Telecommunications */}
            <Card className="text-center group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-violet-600 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Network className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Telecommunications</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Provider settlements, infrastructure sharing, and identity management
                </p>
              </CardContent>
            </Card>

            {/* Education */}
            <Card className="text-center group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Credential verification, transcripts, and funding with integrity
                </p>
              </CardContent>
            </Card>

            {/* Logistics */}
            <Card className="text-center group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-600 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Factory className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Logistics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Smart tracking, customs data, and delivery authentication
                </p>
              </CardContent>
            </Card>

            {/* Custom */}
            <Card className="text-center group hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Cpu className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Custom Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Tailored blockchain systems designed for your specific industry needs
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products-section" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our flagship blockchain solutions designed to revolutionize specific industries
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 justify-center">
            {/* Bloqz Product */}
            <Card className="relative overflow-hidden group hover:shadow-2xl transition-all duration-300 lg:col-span-2">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardHeader className="relative text-center">
                <div className="flex flex-col items-center mb-4">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                    <Network className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-3xl">Bloqz</CardTitle>
                  <CardDescription className="text-xl">The Ultimate Multi-Industry Blockchain Ecosystem</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="relative">
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
                  A unified blockchain ecosystem enabling secure, permissioned communication 
                  across diverse industries including cannabis, finance, healthcare, real estate, and more.
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Cross-Chain Protocol</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Industry-Specific Chains</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Smart Contract Gateways</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Governance DAO</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">AI-Powered Analytics</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-sm">Enterprise Security</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6 justify-center">
                  <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                    Multi-Industry
                  </Badge>
                  <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
                    Cross-Chain
                  </Badge>
                  <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                    Enterprise Ready
                  </Badge>
                </div>

                <Button 
                  variant="default"
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600"
                  onClick={() => window.location.href = '/bloqz'}
                >
                  Explore Platform
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Bloqz Individual Blockchains */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Bloqz Ecosystem - Individual Blockchains
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Industry-specific blockchain solutions that integrate with the Bloqz core ecosystem
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* RxBridge */}
              <Card className="text-center group hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Pill className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">RxBridge</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                    Connects patients, doctors, pharmacies, and insurance through secure blockchain technology
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full"
                    onClick={() => window.location.href = '/rxbridge'}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              {/* CannaLink */}
              <Card className="text-center group hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-700 to-green-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Cpu className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">CannaLink</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                    Links growers, retailers, regulators, and banks in a compliant framework
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full"
                    onClick={() => window.location.href = '/cannalink'}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              {/* VaultNet */}
              <Card className="text-center group hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-violet-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <DollarSign className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">VaultNet</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                    Secure, immutable ledger for financial operations, lending, and transfers
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full"
                    onClick={() => window.location.href = '/vaultnet'}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              {/* MetaEstate */}
              <Card className="text-center group hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-600 to-red-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Home className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">MetaEstate</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                    Anchors property records, zoning compliance, and leasing onto the blockchain
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full"
                    onClick={() => window.location.href = '/terrachain'}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              {/* GridFlux */}
              <Card className="text-center group hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-600 to-orange-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">GridFlux</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                    Tracks usage, credits, and renewable energy swaps across the grid
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full"
                    onClick={() => window.location.href = '/gridflux'}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              {/* ShopChain */}
              <Card className="text-center group hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Building2 className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">ShopChain</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                    Manages inventory, payments, and supply verification transparently
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full"
                    onClick={() => window.location.href = '/shopchain'}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              {/* DineSync */}
              <Card className="text-center group hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Briefcase className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">DineSync</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                    Synchronizes supplier chains, health inspections, and transactions
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full"
                    onClick={() => window.location.href = '/dinesync'}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              {/* FreightFlow */}
              <Card className="text-center group hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Truck className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">FreightFlow</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                    Provides end-to-end visibility for logistics, warehousing, and provenance
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full"
                    onClick={() => window.location.href = '/freightflow'}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              {/* CivicCore */}
              <Card className="text-center group hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-slate-600 to-gray-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">CivicCore</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                    Facilitates ID, licensing, and public services with accountability
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full"
                    onClick={() => window.location.href = '/civiccore'}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              {/* PolicyNet */}
              <Card className="text-center group hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <CreditCard className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">PolicyNet</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                    Handles policy validation, claims automation, and fraud prevention
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full"
                    onClick={() => window.location.href = '/policynet'}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              {/* SignalMesh */}
              <Card className="text-center group hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-violet-600 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Network className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">SignalMesh</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                    Interconnects provider settlements, infrastructure sharing, and identity
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full"
                    onClick={() => window.location.href = '/signalmesh'}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              {/* LearnLedger */}
              <Card className="text-center group hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-teal-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">LearnLedger</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                    Verifies credentials, transcripts, and funding with long-term integrity
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full"
                    onClick={() => window.location.href = '/learnledger'}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              {/* TrackPort */}
              <Card className="text-center group hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-600 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Factory className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">TrackPort</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                    A smart logistics ledger serving as a "port" for tracking, customs data, and delivery authentication
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full"
                    onClick={() => window.location.href = '/trackport'}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Core Technologies */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Technology Stack
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Built on cutting-edge blockchain infrastructure with enterprise-grade security and scalability
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Enterprise Security</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Military-grade encryption, multi-signature protocols, and advanced threat detection
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-violet-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <CardTitle>High Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Lightning-fast transactions, scalable architecture, and optimized smart contracts
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <CardTitle>Global Interoperability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Cross-chain compatibility, international standards compliance, and seamless integration
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-section" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Transform Your Industry?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Contact us to discuss how Bloqz Technologies can revolutionize your business with blockchain innovation
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-0">
                <div className="rounded-lg overflow-hidden relative" style={{ height: '900px' }}>
                  <iframe 
                    width="100%" 
                    height="1100px" 
                    src="https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAMAAY_C049UMlRBSUpVWjBDSzVCOURUUFhFUzNCTlI1Si4u&embed=true" 
                    frameBorder={0} 
                    marginWidth={0} 
                    marginHeight={0} 
                    style={{ border: 'none', maxWidth: '100%', position: 'absolute', top: 0, left: 0 }}
                    allowFullScreen
                  />
                  {/* Overlay to hide Microsoft branding */}
                  <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white via-white dark:from-slate-900 dark:via-slate-900 to-transparent pointer-events-none z-10" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white dark:bg-slate-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Blocks className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Bloqz Technologies
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Leading the blockchain revolution across industries with innovative, 
                secure, and scalable solutions that transform how businesses operate.
              </p>
            </div>

            {/* Compliance & Certifications */}
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Compliance & Certifications</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/certifications-compliance" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors">
                    Certifications & Compliance
                  </a>
                </li>
                <li>
                  <a href="/compliance-standards" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors">
                    Compliance Standards
                  </a>
                </li>
                <li>
                  <a href="/regulatory-resources" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors">
                    Regulatory Resources
                  </a>
                </li>
              </ul>
            </div>

            {/* Corporate & Security */}
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Corporate & Security</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/investor-relations" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors">
                    Investor Relations
                  </a>
                </li>
                <li>
                  <a href="/current-status" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors">
                    Current Status
                  </a>
                </li>
                <li>
                  <a href="/security-alerts" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors">
                    Security Alerts
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t pt-8 text-center">
            <p className="text-gray-600 dark:text-gray-300">
              © 2025 Bloqz Technologies. All rights reserved.<br />
              Innovating Industries with the strength of Blockchain.
            </p>
          </div>
        </div>
      </footer>
      </main>
    </div>
  );
}