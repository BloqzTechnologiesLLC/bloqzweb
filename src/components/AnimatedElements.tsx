import { useState } from "react";
import { useIndustryTheme } from "@/contexts/ThemeContext";

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  hoverScale?: number;
  delay?: number;
}

export function AnimatedCard({ children, className = "", hoverScale = 1.02, delay = 0 }: AnimatedCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`
        transform transition-all duration-300 ease-out
        ${isHovered ? `scale-${hoverScale * 100}` : 'scale-100'}
        hover:shadow-xl hover:-translate-y-1
        ${className}
      `}
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </div>
  );
}

interface AnimatedButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  onClick?: () => void;
}

export function AnimatedButton({ 
  children, 
  className = "", 
  variant = "primary", 
  size = "md",
  loading = false,
  onClick
}: AnimatedButtonProps) {
  const currentTheme = useIndustryTheme();
  const [isPressed, setIsPressed] = useState(false);

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base", 
    lg: "px-8 py-4 text-lg"
  };

  const baseClasses = `
    ${sizeClasses[size]}
    rounded-lg font-medium
    transform transition-all duration-200 ease-out
    hover:scale-105 hover:shadow-lg
    active:scale-95
    focus:outline-none focus:ring-4 focus:ring-opacity-50
    relative overflow-hidden
    ${isPressed ? 'scale-95' : ''}
    ${loading ? 'cursor-not-allowed' : 'cursor-pointer'}
  `;

  const variantClasses = {
    primary: `bg-gradient-to-r ${currentTheme.primary} text-white hover:shadow-${currentTheme.accent}/25 focus:ring-${currentTheme.accent}`,
    secondary: `bg-gradient-to-r ${currentTheme.secondary} text-white hover:shadow-${currentTheme.accent}/25 focus:ring-${currentTheme.accent}`,
    outline: `border-2 border-current text-${currentTheme.accent} hover:bg-gradient-to-r hover:${currentTheme.primary} hover:text-white hover:border-transparent`
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      onClick={onClick}
      disabled={loading}
    >
      <span className={`inline-flex items-center ${loading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-200`}>
        {children}
      </span>
      
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      
      {/* Ripple effect */}
      <div className="absolute inset-0 overflow-hidden rounded-lg">
        <div className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
      </div>
    </button>
  );
}

interface AnimatedIconProps {
  children: React.ReactNode;
  className?: string;
  hoverRotate?: number;
  hoverScale?: number;
}

export function AnimatedIcon({ 
  children, 
  className = "", 
  hoverRotate = 0, 
  hoverScale = 1.1 
}: AnimatedIconProps) {
  return (
    <div className={`
      transform transition-all duration-300 ease-out
      hover:scale-${hoverScale * 100} hover:rotate-${hoverRotate}
      ${className}
    `}>
      {children}
    </div>
  );
}

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
}

export function FadeIn({ 
  children, 
  className = "", 
  delay = 0, 
  direction = "up", 
  distance = 20 
}: FadeInProps) {
  const directionClasses = {
    up: `translate-y-${distance}`,
    down: `-translate-y-${distance}`,
    left: `translate-x-${distance}`,
    right: `-translate-x-${distance}`
  };

  return (
    <div 
      className={`
        opacity-0 ${directionClasses[direction]}
        animate-fade-in-up
        ${className}
      `}
      style={{ 
        animationDelay: `${delay}ms`,
        animationFillMode: 'forwards'
      }}
    >
      {children}
    </div>
  );
}

interface PulseProps {
  children: React.ReactNode;
  className?: string;
  intensity?: "light" | "medium" | "strong";
}

export function Pulse({ children, className = "", intensity = "medium" }: PulseProps) {
  const intensityClasses = {
    light: "animate-pulse-light",
    medium: "animate-pulse",
    strong: "animate-pulse-strong"
  };

  return (
    <div className={`${intensityClasses[intensity]} ${className}`}>
      {children}
    </div>
  );
}

interface FloatingProps {
  children: React.ReactNode;
  className?: string;
  amplitude?: number;
  duration?: number;
}

export function Floating({ 
  children, 
  className = "", 
  amplitude = 10, 
  duration = 3 
}: FloatingProps) {
  return (
    <div 
      className={`animate-float ${className}`}
      style={{
        animationDuration: `${duration}s`,
        '--float-amplitude': `${amplitude}px`
      } as React.CSSProperties & { '--float-amplitude': string }}
    >
      {children}
    </div>
  );
}

interface GlowProps {
  children: React.ReactNode;
  className?: string;
  color?: string;
  intensity?: "light" | "medium" | "strong";
}

export function Glow({ children, className = "", color = "blue", intensity = "medium" }: GlowProps) {
  const currentTheme = useIndustryTheme();
  
  const intensityClasses = {
    light: `shadow-lg shadow-${color}-200/20`,
    medium: `shadow-xl shadow-${color}-300/30`,
    strong: `shadow-2xl shadow-${color}-400/40`
  };

  return (
    <div className={`
      transition-shadow duration-300
      hover:${intensityClasses[intensity]}
      ${className}
    `}>
      {children}
    </div>
  );
}