import { useIndustryTheme } from "@/contexts/ThemeContext";

interface GradientCardProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "accent";
  className?: string;
}

export function GradientCard({ children, variant = "primary", className = "" }: GradientCardProps) {
  const currentTheme = useIndustryTheme();
  
  const variants = {
    primary: `bg-gradient-to-br ${currentTheme.light.bg} dark:${currentTheme.dark.bg}`,
    secondary: `bg-gradient-to-br ${currentTheme.secondary}`,
    accent: `bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-700`
  };

  return (
    <div className={`
      ${variants[variant]}
      rounded-xl border border-gray-200 dark:border-gray-700
      shadow-lg hover:shadow-xl transition-all duration-300
      ${className}
    `}>
      {children}
    </div>
  );
}

interface IconBadgeProps {
  icon: React.ComponentType<any>;
  color?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function IconBadge({ icon: Icon, color = "blue", size = "md", className = "" }: IconBadgeProps) {
  const sizeClasses = {
    sm: "w-8 h-8 p-1.5",
    md: "w-12 h-12 p-2.5",
    lg: "w-16 h-16 p-3.5"
  };

  const iconSizes = {
    sm: "h-4 w-4",
    md: "h-6 w-6", 
    lg: "h-8 w-8"
  };

  return (
    <div className={`
      ${sizeClasses[size]}
      bg-gradient-to-r from-${color}-500 to-${color}-600
      rounded-full flex items-center justify-center
      shadow-lg transform transition-all duration-300
      hover:scale-110 hover:shadow-xl
      ${className}
    `}>
      <Icon className={`${iconSizes[size]} text-white`} />
    </div>
  );
}

interface FeatureHighlightProps {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  color?: string;
  className?: string;
}

export function FeatureHighlight({ title, description, icon, color = "blue", className = "" }: FeatureHighlightProps) {
  return (
    <div className={`group p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:shadow-lg transition-all duration-300 ${className}`}>
      <div className="flex items-start space-x-4">
        <IconBadge icon={icon} color={color} size="md" />
        <div className="flex-1">
          <h3 className={`text-lg font-semibold text-${color}-700 dark:text-${color}-300 mb-2 group-hover:text-${color}-600 transition-colors`}>
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

interface StatsCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  trend?: "up" | "down" | "neutral";
  trendValue?: string;
  color?: string;
  className?: string;
}

export function StatsCard({ 
  title, 
  value, 
  subtitle, 
  trend = "neutral", 
  trendValue, 
  color = "blue",
  className = "" 
}: StatsCardProps) {
  const trendColors = {
    up: "text-green-600",
    down: "text-red-600", 
    neutral: "text-gray-600"
  };

  return (
    <div className={`p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 ${className}`}>
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wide">
          {title}
        </h3>
        {trendValue && (
          <span className={`text-sm font-medium ${trendColors[trend]}`}>
            {trend === "up" ? "↗" : trend === "down" ? "↘" : ""} {trendValue}
          </span>
        )}
      </div>
      <div className={`text-3xl font-bold text-${color}-600 dark:text-${color}-400 mb-1`}>
        {value}
      </div>
      {subtitle && (
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({ title, subtitle, centered = false, className = "" }: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}