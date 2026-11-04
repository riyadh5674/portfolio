"use client";

import { useEffect, useRef, useState } from "react";

interface TiltProps {
  children: React.ReactNode;
  className?: string;
  max?: number;
  scale?: number;
  shine?: boolean;
}

export default function Tilt({ children, className = "", max = 8, scale = 1.02, shine = false }: TiltProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});
  const [shineStyle, setShineStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width;
      const py = (e.clientY - rect.top) / rect.height;
      const rx = (0.5 - py) * max;
      const ry = (px - 0.5) * max;
      setStyle({
        transform: `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) scale(${scale})`,
        transition: "transform 0.08s ease-out",
      });

      if (shine) {
        const shineX = px * 100;
        const shineY = py * 100;
        setShineStyle({
          background: `radial-gradient(ellipse at ${shineX}% ${shineY}%, rgba(45, 212, 191, 0.15) 0%, transparent 60%)`,
          opacity: 1,
        });
      }
    };

    const onLeave = () => {
      setStyle({
        transform: "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)",
        transition: "transform 0.5s cubic-bezier(0.16,1,0.3,1)",
      });
      if (shine) {
        setShineStyle({ opacity: 0, transition: "opacity 0.5s ease" });
      }
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [max, scale, shine]);

  return (
    <div ref={ref} className={`tilt-card relative overflow-hidden ${className}`} style={style}>
      {shine && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={shineStyle}
        />
      )}
      {children}
    </div>
  );
}