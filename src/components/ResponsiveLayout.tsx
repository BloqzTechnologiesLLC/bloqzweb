import { useEffect, useState } from "react";

interface ResponsiveLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function ResponsiveLayout({ children, className = "" }: ResponsiveLayoutProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div className={`
      ${isMobile ? 'px-4 py-2' : isTablet ? 'px-6 py-4' : 'px-8 py-6'}
      ${className}
    `}>
      {children}
    </div>
  );
}

interface ResponsiveGridProps {
  children: React.ReactNode;
  columns?: {
    mobile: number;
    tablet: number;
    desktop: number;
  };
  gap?: string;
  className?: string;
}

export function ResponsiveGrid({ 
  children, 
  columns = { mobile: 1, tablet: 2, desktop: 3 },
  gap = "gap-6",
  className = ""
}: ResponsiveGridProps) {
  return (
    <div className={`
      grid 
      grid-cols-${columns.mobile}
      md:grid-cols-${columns.tablet}
      lg:grid-cols-${columns.desktop}
      ${gap}
      ${className}
    `}>
      {children}
    </div>
  );
}

interface ResponsiveTextProps {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export function ResponsiveText({ children, size = "md", className = "" }: ResponsiveTextProps) {
  const sizeClasses = {
    sm: "text-sm md:text-base",
    md: "text-base md:text-lg",
    lg: "text-lg md:text-xl lg:text-2xl",
    xl: "text-xl md:text-2xl lg:text-3xl xl:text-4xl"
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      {children}
    </div>
  );
}