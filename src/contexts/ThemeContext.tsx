import React, { createContext, useContext, useState, useEffect } from 'react';

export type ThemeMode = 'light' | 'dark';

export type IndustryTheme = 
  | 'default'
  | 'healthcare' 
  | 'cannabis'
  | 'realestate'
  | 'cybersecurity'
  | 'energy'
  | 'retail'
  | 'hospitality'
  | 'logistics'
  | 'government'
  | 'insurance'
  | 'telecommunications'
  | 'education'
  | 'transportation'
  | 'ecosystem';

interface ThemeContextType {
  mode: ThemeMode;
  industryTheme: IndustryTheme;
  setMode: (mode: ThemeMode) => void;
  setIndustryTheme: (theme: IndustryTheme) => void;
  toggleMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const industryThemes = {
  default: {
    name: 'Bloqz Default',
    primary: 'from-blue-600 to-cyan-500',
    secondary: 'from-slate-600 to-gray-500',
    accent: 'blue-600',
    light: {
      bg: 'from-slate-50 via-blue-50 to-cyan-50',
      card: 'bg-white',
      text: 'text-gray-900',
      muted: 'text-gray-600'
    },
    dark: {
      bg: 'from-slate-900 via-blue-900 to-cyan-900',
      card: 'bg-slate-800',
      text: 'text-white',
      muted: 'text-gray-300'
    }
  },
  healthcare: {
    name: 'RxBridge Healthcare',
    primary: 'from-green-600 to-emerald-500',
    secondary: 'from-teal-600 to-cyan-500',
    accent: 'green-600',
    light: {
      bg: 'from-green-50 via-emerald-50 to-teal-50',
      card: 'bg-white',
      text: 'text-gray-900',
      muted: 'text-gray-600'
    },
    dark: {
      bg: 'from-green-900 via-emerald-900 to-teal-900',
      card: 'bg-green-800',
      text: 'text-white',
      muted: 'text-green-100'
    }
  },
  cannabis: {
    name: 'CannaLink Cannabis',
    primary: 'from-green-600 to-lime-500',
    secondary: 'from-emerald-600 to-green-500',
    accent: 'green-600',
    light: {
      bg: 'from-green-50 via-lime-50 to-emerald-50',
      card: 'bg-white',
      text: 'text-gray-900',
      muted: 'text-gray-600'
    },
    dark: {
      bg: 'from-green-900 via-lime-900 to-emerald-900',
      card: 'bg-green-800',
      text: 'text-white',
      muted: 'text-green-100'
    }
  },
  realestate: {
    name: 'MetaEstate Real Estate',
    primary: 'from-orange-600 to-red-500',
    secondary: 'from-amber-600 to-orange-500',
    accent: 'orange-600',
    light: {
      bg: 'from-slate-50 via-orange-50 to-red-50',
      card: 'bg-white',
      text: 'text-gray-900',
      muted: 'text-gray-600'
    },
    dark: {
      bg: 'from-slate-900 via-orange-900 to-red-900',
      card: 'bg-orange-800',
      text: 'text-white',
      muted: 'text-orange-100'
    }
  },
  cybersecurity: {
    name: 'VaultNet Security',
    primary: 'from-red-600 to-pink-500',
    secondary: 'from-purple-600 to-red-500',
    accent: 'red-600',
    light: {
      bg: 'from-red-50 via-pink-50 to-rose-50',
      card: 'bg-white',
      text: 'text-gray-900',
      muted: 'text-gray-600'
    },
    dark: {
      bg: 'from-red-900 via-pink-900 to-rose-900',
      card: 'bg-red-800',
      text: 'text-white',
      muted: 'text-red-100'
    }
  },
  energy: {
    name: 'GridFlux Energy',
    primary: 'from-yellow-600 to-orange-500',
    secondary: 'from-amber-600 to-yellow-500',
    accent: 'yellow-600',
    light: {
      bg: 'from-yellow-50 via-amber-50 to-orange-50',
      card: 'bg-white',
      text: 'text-gray-900',
      muted: 'text-gray-600'
    },
    dark: {
      bg: 'from-yellow-900 via-amber-900 to-orange-900',
      card: 'bg-yellow-800',
      text: 'text-white',
      muted: 'text-yellow-100'
    }
  },
  retail: {
    name: 'ShopChain Retail',
    primary: 'from-purple-600 to-pink-500',
    secondary: 'from-violet-600 to-purple-500',
    accent: 'purple-600',
    light: {
      bg: 'from-purple-50 via-violet-50 to-pink-50',
      card: 'bg-white',
      text: 'text-gray-900',
      muted: 'text-gray-600'
    },
    dark: {
      bg: 'from-purple-900 via-violet-900 to-pink-900',
      card: 'bg-purple-800',
      text: 'text-white',
      muted: 'text-purple-100'
    }
  },
  hospitality: {
    name: 'DineSync Hospitality',
    primary: 'from-rose-600 to-pink-500',
    secondary: 'from-red-600 to-rose-500',
    accent: 'rose-600',
    light: {
      bg: 'from-rose-50 via-pink-50 to-red-50',
      card: 'bg-white',
      text: 'text-gray-900',
      muted: 'text-gray-600'
    },
    dark: {
      bg: 'from-rose-900 via-pink-900 to-red-900',
      card: 'bg-rose-800',
      text: 'text-white',
      muted: 'text-rose-100'
    }
  },
  logistics: {
    name: 'FreightFlow Logistics',
    primary: 'from-indigo-600 to-blue-500',
    secondary: 'from-blue-600 to-indigo-500',
    accent: 'indigo-600',
    light: {
      bg: 'from-indigo-50 via-blue-50 to-sky-50',
      card: 'bg-white',
      text: 'text-gray-900',
      muted: 'text-gray-600'
    },
    dark: {
      bg: 'from-indigo-900 via-blue-900 to-sky-900',
      card: 'bg-indigo-800',
      text: 'text-white',
      muted: 'text-indigo-100'
    }
  },
  government: {
    name: 'CivicCore Government',
    primary: 'from-blue-600 to-indigo-500',
    secondary: 'from-slate-600 to-blue-500',
    accent: 'blue-600',
    light: {
      bg: 'from-blue-50 via-indigo-50 to-slate-50',
      card: 'bg-white',
      text: 'text-gray-900',
      muted: 'text-gray-600'
    },
    dark: {
      bg: 'from-blue-900 via-indigo-900 to-slate-900',
      card: 'bg-blue-800',
      text: 'text-white',
      muted: 'text-blue-100'
    }
  },
  insurance: {
    name: 'PolicyNet Insurance',
    primary: 'from-teal-600 to-cyan-500',
    secondary: 'from-blue-600 to-teal-500',
    accent: 'teal-600',
    light: {
      bg: 'from-teal-50 via-cyan-50 to-blue-50',
      card: 'bg-white',
      text: 'text-gray-900',
      muted: 'text-gray-600'
    },
    dark: {
      bg: 'from-teal-900 via-cyan-900 to-blue-900',
      card: 'bg-teal-800',
      text: 'text-white',
      muted: 'text-teal-100'
    }
  },
  telecommunications: {
    name: 'SignalMesh Telecom',
    primary: 'from-violet-600 to-purple-500',
    secondary: 'from-indigo-600 to-violet-500',
    accent: 'violet-600',
    light: {
      bg: 'from-violet-50 via-purple-50 to-indigo-50',
      card: 'bg-white',
      text: 'text-gray-900',
      muted: 'text-gray-600'
    },
    dark: {
      bg: 'from-violet-900 via-purple-900 to-indigo-900',
      card: 'bg-violet-800',
      text: 'text-white',
      muted: 'text-violet-100'
    }
  },
  education: {
    name: 'LearnLedger Education',
    primary: 'from-emerald-600 to-teal-500',
    secondary: 'from-green-600 to-emerald-500',
    accent: 'emerald-600',
    light: {
      bg: 'from-emerald-50 via-teal-50 to-green-50',
      card: 'bg-white',
      text: 'text-gray-900',
      muted: 'text-gray-600'
    },
    dark: {
      bg: 'from-emerald-900 via-teal-900 to-green-900',
      card: 'bg-emerald-800',
      text: 'text-white',
      muted: 'text-emerald-100'
    }
  },
  transportation: {
    name: 'TrackPort Transportation',
    primary: 'from-slate-600 to-gray-500',
    secondary: 'from-gray-600 to-slate-500',
    accent: 'slate-600',
    light: {
      bg: 'from-slate-50 via-gray-50 to-zinc-50',
      card: 'bg-white',
      text: 'text-gray-900',
      muted: 'text-gray-600'
    },
    dark: {
      bg: 'from-slate-900 via-gray-900 to-zinc-900',
      card: 'bg-slate-800',
      text: 'text-white',
      muted: 'text-slate-100'
    }
  },
  ecosystem: {
    name: 'ArrowChain Ecosystem',
    primary: 'from-cyan-600 to-blue-500',
    secondary: 'from-teal-600 to-cyan-500',
    accent: 'cyan-600',
    light: {
      bg: 'from-cyan-50 via-blue-50 to-teal-50',
      card: 'bg-white',
      text: 'text-gray-900',
      muted: 'text-gray-600'
    },
    dark: {
      bg: 'from-cyan-900 via-blue-900 to-teal-900',
      card: 'bg-cyan-800',
      text: 'text-white',
      muted: 'text-cyan-100'
    }
  }
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>('light');
  const [industryTheme, setIndustryTheme] = useState<IndustryTheme>('default');

  useEffect(() => {
    const savedMode = localStorage.getItem('theme-mode') as ThemeMode;
    const savedIndustryTheme = localStorage.getItem('industry-theme') as IndustryTheme;
    
    if (savedMode) {
      setMode(savedMode);
    }
    if (savedIndustryTheme) {
      setIndustryTheme(savedIndustryTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme-mode', mode);
    
    if (mode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [mode]);

  useEffect(() => {
    localStorage.setItem('industry-theme', industryTheme);
  }, [industryTheme]);

  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{
      mode,
      industryTheme,
      setMode,
      setIndustryTheme,
      toggleMode
    }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export function useIndustryTheme() {
  const { industryTheme } = useTheme();
  return industryThemes[industryTheme];
}

// Helper function to get theme based on current page
export function getThemeForPage(pathname: string): IndustryTheme {
  const pageToThemeMap: Record<string, IndustryTheme> = {
    '/rxbridge': 'healthcare',
    '/cannalink': 'cannabis', 
    '/terrachain': 'realestate',
    '/vaultnet': 'cybersecurity',
    '/gridflux': 'energy',
    '/shopchain': 'retail',
    '/dinesync': 'hospitality',
    '/freightflow': 'logistics',
    '/civiccore': 'government',
    '/policynet': 'insurance',
    '/signalmesh': 'telecommunications',
    '/learnledger': 'education',
    '/trackport': 'transportation',
    '/arrowchain': 'ecosystem'
  };

  return pageToThemeMap[pathname] || 'default';
}