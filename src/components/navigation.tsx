import { useState, useEffect } from "react";
import { 
  Blocks,
  Menu,
  X,
  ChevronDown,
  Sun,
  Moon,
  ArrowUpRight,
  Stethoscope,
  Factory,
  CreditCard,
  Building2,
  Zap,
  DollarSign,
  MapPin,
  Truck,
  Shield,
  FileText,
  Network,
  Users,
  Globe
} from "lucide-react";
import { ContextualThemeSwitcher } from "./ContextualThemeSwitcher";
import { useIndustryTheme } from "@/contexts/ThemeContext";
import { AnimatedIcon, AnimatedButton } from "./AnimatedElements";

interface NavigationProps {
  currentPage?: string;
}

export function Navigation({ currentPage }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSystemsOpen, setIsSystemsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const currentTheme = useIndustryTheme();

  // Initialize theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme-mode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    
    setIsDarkMode(shouldBeDark);
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const handleThemeToggle = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme-mode', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme-mode', 'light');
    }
  };

  const blockchainSystems = [
    { name: "ArrowChain", description: "Unified Multi-Industry Blockchain Ecosystem", icon: ArrowUpRight, link: "/arrowchain" },
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
    { name: "TrackPort", description: "Logistics & Customs Data", icon: Globe, link: "/trackport" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <AnimatedIcon hoverRotate={12} hoverScale={1.1}>
              <div className={`w-8 h-8 bg-gradient-to-r ${currentTheme.primary} rounded-lg flex items-center justify-center transition-all duration-300 hover:shadow-lg`}>
                <Blocks className="h-5 w-5 text-white" />
              </div>
            </AnimatedIcon>
            <a href="/" className={`text-xl font-bold bg-gradient-to-r ${currentTheme.primary} bg-clip-text text-transparent hover:scale-105 transition-transform duration-200`}>
              Bloqz Technologies
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="/" className={`text-gray-700 dark:text-gray-300 hover:text-${currentTheme.accent} dark:hover:text-${currentTheme.accent} transition-colors`}>
              Home
            </a>
            <a href="/about" className={`text-gray-700 dark:text-gray-300 hover:text-${currentTheme.accent} dark:hover:text-${currentTheme.accent} transition-colors`}>
              About
            </a>
            
            {/* Blockchain Systems Dropdown */}
            <div className="relative group">
              <button className={`flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-${currentTheme.accent} dark:hover:text-${currentTheme.accent} transition-all duration-200 hover:scale-105`}>
                <span>Blockchain Systems</span>
                <AnimatedIcon hoverRotate={180}>
                  <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                </AnimatedIcon>
              </button>
              
              <div className="absolute top-full left-0 mt-1 w-80 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-600 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 max-h-96 overflow-y-auto animate-fade-in-up">
                <div className="p-2">
                  {blockchainSystems.map((system, index) => (
                    <a
                      key={system.name}
                      href={system.link}
                      className="flex items-center px-3 py-2 rounded-md hover:bg-gray-50 dark:hover:bg-slate-700 transition-all duration-200 hover:scale-105 hover:shadow-md transform"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <AnimatedIcon hoverScale={1.2} className="mr-3">
                        <system.icon className={`h-5 w-5 text-${currentTheme.accent} dark:text-${currentTheme.accent} transition-colors duration-200`} />
                      </AnimatedIcon>
                      <div>
                        <div className="font-medium text-gray-900 dark:text-white text-sm transition-colors duration-200">{system.name}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-300 transition-colors duration-200">{system.description}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Contextual Theme Switcher */}
            <ContextualThemeSwitcher />
            
            {/* Light/Dark Mode Toggle */}
            <AnimatedButton
              onClick={handleThemeToggle}
              variant="outline"
              size="sm"
              className="p-2 rounded-md text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 border border-gray-300 dark:border-gray-600 hover:scale-105"
              aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
            >
              <AnimatedIcon hoverScale={1.2} hoverRotate={isDarkMode ? 180 : -180}>
                {isDarkMode ? (
                  <Sun className="h-5 w-5 text-yellow-400 transition-all duration-300" />
                ) : (
                  <Moon className="h-5 w-5 text-gray-600 transition-all duration-300" />
                )}
              </AnimatedIcon>
            </AnimatedButton>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Theme Toggle */}
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
            
            {/* Mobile Menu Toggle */}
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
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
            <div className="space-y-4">
              <a href="/" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Home
              </a>
              <a href="/about" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                About
              </a>
              
              <div>
                <button
                  onClick={() => setIsSystemsOpen(!isSystemsOpen)}
                  className="flex items-center justify-between w-full text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <span>Blockchain Systems</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${isSystemsOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isSystemsOpen && (
                  <div className="mt-2 ml-4 max-h-60 overflow-y-auto bg-gray-50 dark:bg-gray-800 rounded-lg p-2">
                    {blockchainSystems.map((system) => (
                      <a
                        key={system.name}
                        href={system.link}
                        className="flex items-center p-2 rounded-md text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white dark:hover:bg-gray-700 transition-colors"
                      >
                        <system.icon className="h-4 w-4 text-blue-600 mr-3" />
                        <div>
                          <div className="font-medium text-sm">{system.name}</div>
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
  );
}