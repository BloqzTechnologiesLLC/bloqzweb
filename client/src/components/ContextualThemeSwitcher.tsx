import { useEffect } from "react";
import { useLocation } from "wouter";
import { useTheme, getThemeForPage, useIndustryTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Palette,
  ChevronDown,
  Check,
  Sparkles
} from "lucide-react";
import { useState } from "react";

export function ContextualThemeSwitcher() {
  const [location] = useLocation();
  const { industryTheme, setIndustryTheme, mode, toggleMode } = useTheme();
  const currentTheme = useIndustryTheme();
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
  const [isAutoMode, setIsAutoMode] = useState(true);

  // Auto-switch theme based on current page
  useEffect(() => {
    if (isAutoMode) {
      const suggestedTheme = getThemeForPage(location);
      if (suggestedTheme !== industryTheme) {
        setIndustryTheme(suggestedTheme);
      }
    }
  }, [location, isAutoMode, industryTheme, setIndustryTheme]);

  const industryThemes = [
    { key: 'default', name: 'Bloqz Default', color: 'from-blue-600 to-cyan-500' },
    { key: 'healthcare', name: 'RxBridge Healthcare', color: 'from-green-600 to-emerald-500' },
    { key: 'cannabis', name: 'CannaLink Cannabis', color: 'from-green-600 to-lime-500' },
    { key: 'realestate', name: 'MetaEstate Real Estate', color: 'from-orange-600 to-red-500' },
    { key: 'cybersecurity', name: 'VaultNet Security', color: 'from-red-600 to-pink-500' },
    { key: 'energy', name: 'GridFlux Energy', color: 'from-yellow-600 to-orange-500' },
    { key: 'retail', name: 'ShopChain Retail', color: 'from-purple-600 to-pink-500' },
    { key: 'hospitality', name: 'DineSync Hospitality', color: 'from-rose-600 to-pink-500' },
    { key: 'logistics', name: 'FreightFlow Logistics', color: 'from-indigo-600 to-blue-500' },
    { key: 'government', name: 'CivicCore Government', color: 'from-blue-600 to-indigo-500' },
    { key: 'insurance', name: 'PolicyNet Insurance', color: 'from-teal-600 to-cyan-500' },
    { key: 'telecommunications', name: 'SignalMesh Telecom', color: 'from-violet-600 to-purple-500' },
    { key: 'education', name: 'LearnLedger Education', color: 'from-emerald-600 to-teal-500' },
    { key: 'transportation', name: 'TrackPort Transportation', color: 'from-slate-600 to-gray-500' },
    { key: 'ecosystem', name: 'Bloqz Ecosystem', color: 'from-cyan-600 to-blue-500' }
  ];

  const handleManualThemeChange = (themeKey: string) => {
    setIsAutoMode(false);
    setIndustryTheme(themeKey as any);
    setIsThemeMenuOpen(false);
  };

  const toggleAutoMode = () => {
    setIsAutoMode(!isAutoMode);
    if (!isAutoMode) {
      // Re-enable auto mode and apply current page theme
      const suggestedTheme = getThemeForPage(location);
      setIndustryTheme(suggestedTheme);
    }
  };

  return (
    <div className="flex items-center space-x-2">
      {/* Current Theme Indicator */}
      <div className="hidden lg:flex items-center space-x-2">
        <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${currentTheme.primary}`} />
        <Badge 
          variant="secondary" 
          className={`bg-gradient-to-r ${currentTheme.primary} text-white text-xs`}
        >
          {currentTheme.name}
        </Badge>
      </div>

      {/* Auto/Manual Mode Toggle */}
      <Button
        variant="ghost"
        size="sm"
        onClick={toggleAutoMode}
        className={`p-2 transition-colors ${
          isAutoMode 
            ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300' 
            : 'hover:bg-gray-100 dark:hover:bg-gray-700'
        }`}
        title={isAutoMode ? 'Auto mode enabled - theme changes with page' : 'Manual mode - choose theme manually'}
      >
        <Sparkles className={`h-4 w-4 ${isAutoMode ? 'text-blue-600' : 'text-gray-500'}`} />
      </Button>

      {/* Theme Selector Dropdown */}
      <div className="relative">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
          className="flex items-center space-x-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          disabled={isAutoMode}
        >
          <Palette className="h-4 w-4 text-gray-600 dark:text-gray-300" />
          <span className="hidden sm:inline text-sm text-gray-600 dark:text-gray-300">
            {isAutoMode ? 'Auto' : 'Manual'}
          </span>
          <ChevronDown className={`h-3 w-3 text-gray-600 dark:text-gray-300 transition-transform ${isThemeMenuOpen ? 'rotate-180' : ''}`} />
        </Button>

        {/* Theme Dropdown Menu */}
        {isThemeMenuOpen && !isAutoMode && (
          <div className="absolute top-full right-0 mt-2 w-72 max-h-96 overflow-y-auto bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-50">
            <div className="p-2">
              <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider px-3 py-2">
                Industry Themes
              </div>
              
              {industryThemes.map((theme) => (
                <button
                  key={theme.key}
                  onClick={() => handleManualThemeChange(theme.key)}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-md hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors group"
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${theme.color}`} />
                    <div className="text-left">
                      <div className="font-medium text-gray-900 dark:text-white text-sm">
                        {theme.name}
                      </div>
                    </div>
                  </div>
                  
                  {industryTheme === theme.key && (
                    <Check className="h-4 w-4 text-green-600" />
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Auto Mode Info */}
      {isAutoMode && (
        <div className="hidden xl:flex items-center text-xs text-gray-500 dark:text-gray-400">
          <span>Auto-adapting to page</span>
        </div>
      )}
    </div>
  );
}