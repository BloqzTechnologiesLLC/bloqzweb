import { useIndustryTheme } from "@/contexts/ThemeContext";

interface DynamicBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

export function DynamicBackground({ children, className = "" }: DynamicBackgroundProps) {
  const currentTheme = useIndustryTheme();

  return (
    <div className={`min-h-screen bg-gradient-to-br ${currentTheme.light.bg} dark:${currentTheme.dark.bg} transition-all duration-500 ${className}`}>
      {children}
    </div>
  );
}

export function DynamicCard({ children, className = "" }: DynamicBackgroundProps) {
  const currentTheme = useIndustryTheme();

  return (
    <div className={`${currentTheme.light.card} dark:${currentTheme.dark.card} transition-all duration-300 ${className}`}>
      {children}
    </div>
  );
}

interface DynamicButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
  [key: string]: any;
}

export function DynamicButton({ children, className = "", variant = "primary", ...props }: DynamicButtonProps) {
  const currentTheme = useIndustryTheme();

  const baseStyles = "px-6 py-3 rounded-lg font-medium transition-all duration-200 transform hover:scale-105";
  
  const variantStyles: Record<string, string> = {
    primary: `bg-gradient-to-r ${currentTheme.primary} text-white hover:shadow-lg`,
    secondary: `bg-gradient-to-r ${currentTheme.secondary} text-white hover:shadow-lg`,
    outline: `border-2 border-current bg-transparent hover:bg-gradient-to-r hover:${currentTheme.primary} hover:text-white hover:border-transparent`
  };

  return (
    <button 
      className={`${baseStyles} ${variantStyles[variant] || variantStyles.primary} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
}