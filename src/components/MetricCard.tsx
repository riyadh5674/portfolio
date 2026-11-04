"use client";

import { useEffect, useRef, useState } from "react";

interface MetricCardProps {
  label: string;
  value: string;
  subtitle: string;
  trend: "up" | "down" | "neutral";
  icon: string;
  className?: string;
}

export function MetricCard({
  label,
  value,
  subtitle,
  trend,
  icon,
  className = "",
}: MetricCardProps) {
  const [animatedValue, setAnimatedValue] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const numValue = parseFloat(value);
    if (isNaN(numValue)) {
      setAnimatedValue(value);
      return;
    }
    const duration = 1200;
    const start = Date.now();
    const animate = () => {
      const elapsed = Math.min((Date.now() - start) / duration, 1);
      const eased = 1 - Math.pow(1 - elapsed, 3);
      const current = numValue * eased;
      setAnimatedValue(current.toFixed(value.includes(".") ? value.split(".")[1].length : 0));
      if (elapsed < 1) requestAnimationFrame(animate);
    };
    animate();
  }, [isVisible, value]);

  const trendColors = {
    up: "text-[var(--color-success)]",
    down: "text-[var(--color-warning)]",
    neutral: "text-[var(--color-info)]",
  };

  const trendIcons = {
    up: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="18 15 12 9 6 15" />
      </svg>
    ),
    down: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6 9 12 15 18 9" />
      </svg>
    ),
    neutral: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="5" y1="12" x2="19" y2="12" />
      </svg>
    ),
  };

  return (
    <div
      ref={ref}
      className={`card card-glow p-6 group ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      <div className="flex items-start justify-between mb-3">
        <span className="text-2xl" aria-hidden="true">{icon}</span>
        <span className={`${trendColors[trend]} text-xs font-medium flex items-center gap-1`}>
          {trendIcons[trend]}
        </span>
      </div>
      <div className="display-font text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-1">
        {animatedValue || value}
      </div>
      <div className="text-sm font-semibold text-[var(--color-text-secondary)] mb-1">
        {label}
      </div>
      <div className="text-xs text-[var(--color-text-tertiary)] leading-relaxed">
        {subtitle}
      </div>

      {/* Bottom accent bar */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity"
        style={{
          background: `linear-gradient(90deg, transparent, ${trend === "up" ? "var(--color-success)" : trend === "down" ? "var(--color-warning)" : "var(--color-info)"}, transparent)`,
        }}
      />
    </div>
  );
}