import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Sun, 
  Moon, 
  Palette,
  ChevronDown,
  Check
} from "lucide-react";
import { useTheme, useIndustryTheme, industryThemes, type IndustryTheme } from "@/contexts/ThemeContext";
import { useState } from "react";

export function ThemeSwitcher() {
  const { mode, industryTheme, toggleMode, setIndustryTheme } = useTheme();
  const currentTheme = useIndustryTheme();
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);

  const handleIndustryChange = (theme: IndustryTheme) => {
    setIndustryTheme(theme);
    setIsThemeMenuOpen(false);
  };

  return (
    <div className="flex items-center space-x-2">
      {/* Dark/Light Mode Toggle */}
      <Button
        variant="ghost"
        size="sm"
        onClick={toggleMode}
        className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        title={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}
      >
        {mode === 'light' ? (
          <Moon className="h-4 w-4 text-gray-600 dark:text-gray-300" />
        ) : (
          <Sun className="h-4 w-4 text-yellow-500" />
        )}
      </Button>

      {/* Industry Theme Selector */}
      <div className="relative">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
          className="flex items-center space-x-2 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          title="Change industry theme"
        >
          <Palette className="h-4 w-4 text-gray-600 dark:text-gray-300" />
          <span className="hidden sm:inline text-sm text-gray-600 dark:text-gray-300">
            {currentTheme.name}
          </span>
          <ChevronDown className={`h-3 w-3 text-gray-600 dark:text-gray-300 transition-transform ${isThemeMenuOpen ? 'rotate-180' : ''}`} />
        </Button>

        {/* Theme Dropdown */}
        {isThemeMenuOpen && (
          <div className="absolute top-full right-0 mt-2 w-72 max-h-96 overflow-y-auto bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 z-50">
            <div className="p-2">
              <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider px-3 py-2">
                Industry Themes
              </div>
              
              {Object.entries(industryThemes).map(([key, theme]) => (
                <button
                  key={key}
                  onClick={() => handleIndustryChange(key as IndustryTheme)}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-md hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors group"
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${theme.primary}`} />
                    <div className="text-left">
                      <div className="font-medium text-gray-900 dark:text-white text-sm">
                        {theme.name}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {key === 'default' && 'Standard Bloqz branding'}
                        {key === 'healthcare' && 'RxBridge medical theme'}
                        {key === 'cannabis' && 'CannaLink industry theme'}
                        {key === 'realestate' && 'MetaEstate property theme'}
                        {key === 'cybersecurity' && 'VaultNet security theme'}
                        {key === 'energy' && 'GridFlux energy theme'}
                        {key === 'retail' && 'ShopChain commerce theme'}
                        {key === 'hospitality' && 'DineSync restaurant theme'}
                        {key === 'logistics' && 'FreightFlow shipping theme'}
                        {key === 'government' && 'CivicCore public sector'}
                        {key === 'insurance' && 'PolicyNet coverage theme'}
                        {key === 'telecommunications' && 'SignalMesh network theme'}
                        {key === 'education' && 'LearnLedger academic theme'}
                        {key === 'transportation' && 'TrackPort transit theme'}
                        {key === 'ecosystem' && 'Bloqz unified platform'}
                      </div>
                    </div>
                  </div>
                  
                  {industryTheme === key && (
                    <Check className="h-4 w-4 text-green-600" />
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Current Theme Badge */}
      <Badge 
        variant="secondary" 
        className={`hidden lg:inline-flex bg-gradient-to-r ${currentTheme.primary} text-white text-xs`}
      >
        {currentTheme.name}
      </Badge>
    </div>
  );
}