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

interface NavigationProps {
  currentPage?: string;
}

export function Navigation({ currentPage }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSystemsOpen, setIsSystemsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Theme initialization
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const isDarkMode = saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setIsDark(isDarkMode);
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, []);

  const toggleTheme = () => {
    const newMode = !isDark;
    setIsDark(newMode);
    document.documentElement.classList.toggle('dark', newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };

  const systems = [
    { name: "Bloqz", desc: "Unified Multi-Industry Blockchain Ecosystem", icon: ArrowUpRight, url: "/bloqz" },
    { name: "RxBridge", desc: "Healthcare & Prescription Management", icon: Stethoscope, url: "/rxbridge" },
    { name: "CannaLink", desc: "Cannabis Compliance & Supply Chain", icon: Factory, url: "/cannalink" },
    { name: "VaultNet", desc: "Finance & Banking Operations", icon: CreditCard, url: "/vaultnet" },
    { name: "TerraChain", desc: "Real Estate & Property Records", icon: Building2, url: "/terrachain" },
    { name: "GridFlux", desc: "Energy & Utilities Management", icon: Zap, url: "/gridflux" },
    { name: "ShopChain", desc: "Retail & Inventory Management", icon: DollarSign, url: "/shopchain" },
    { name: "DineSync", desc: "Restaurant Supply & Operations", icon: MapPin, url: "/dinesync" },
    { name: "FreightFlow", desc: "Supply Chain & Logistics", icon: Truck, url: "/freightflow" },
    { name: "CivicCore", desc: "Government & Public Services", icon: Shield, url: "/civiccore" },
    { name: "PolicyNet", desc: "Insurance & Claims Processing", icon: FileText, url: "/policynet" },
    { name: "SignalMesh", desc: "Telecommunications Infrastructure", icon: Network, url: "/signalmesh" },
    { name: "LearnLedger", desc: "Education & Credentials", icon: Users, url: "/learnledger" },
    { name: "TrackPort", desc: "Logistics & Customs Data", icon: Globe, url: "/trackport" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
              <Blocks className="h-5 w-5 text-white" />
            </div>
            <a href="/" className="text-xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Bloqz Technologies
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors">
              Home
            </a>
            <a href="/about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors">
              About
            </a>
            
            {/* Blockchain Systems Dropdown */}
            <div className="relative">
              <button 
                onMouseEnter={() => setIsSystemsOpen(true)}
                onMouseLeave={() => setIsSystemsOpen(false)}
                className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors"
              >
                <span>Blockchain Systems</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              
              {isSystemsOpen && (
                <div 
                  onMouseEnter={() => setIsSystemsOpen(true)}
                  onMouseLeave={() => setIsSystemsOpen(false)}
                  className="absolute top-full left-0 mt-1 w-80 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-50 max-h-96 overflow-y-auto"
                >
                  <div className="p-2">
                    {systems.map((system) => (
                      <a
                        key={system.name}
                        href={system.url}
                        className="flex items-center px-3 py-2 rounded-md hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
                      >
                        <system.icon className="h-5 w-5 text-blue-600 mr-3" />
                        <div>
                          <div className="font-medium text-gray-900 dark:text-white text-sm">{system.name}</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">{system.desc}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            >
              {isDark ? <Sun className="h-5 w-5 text-yellow-500" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              {isDark ? <Sun className="h-5 w-5 text-yellow-500" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700">
            <div className="space-y-4">
              <a href="/" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors">
                Home
              </a>
              <a href="/about" className="block text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors">
                About
              </a>
              
              <div>
                <button
                  onClick={() => setIsSystemsOpen(!isSystemsOpen)}
                  className="flex items-center justify-between w-full text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors"
                >
                  <span>Blockchain Systems</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${isSystemsOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isSystemsOpen && (
                  <div className="mt-2 ml-4 max-h-60 overflow-y-auto bg-gray-50 dark:bg-gray-800 rounded-lg p-2">
                    {systems.map((system) => (
                      <a
                        key={system.name}
                        href={system.url}
                        className="flex items-center p-2 rounded-md text-gray-600 dark:text-gray-400 hover:text-blue-600 hover:bg-white dark:hover:bg-gray-700 transition-colors"
                      >
                        <system.icon className="h-4 w-4 text-blue-600 mr-3" />
                        <div>
                          <div className="font-medium text-sm">{system.name}</div>
                          <div className="text-xs text-gray-500">{system.desc}</div>
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