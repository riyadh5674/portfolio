"use client";

import { useEffect, useRef, useState } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  color: string;
  phase: number;
}

interface ParticleFieldProps {
  count?: number;
  className?: string;
  color?: string;
}

export function ParticleField({
  count = 30,
  className = "",
  color = "var(--color-accent)",
}: ParticleFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => setIsVisible(entries[0].isIntersecting),
      { threshold: 0.01 }
    );
    const canvas = canvasRef.current;
    if (canvas) observer.observe(canvas);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || initialized || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    let width = canvas.offsetWidth;
    let height = canvas.offsetHeight;

    const resize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
      initParticles();
    };

    const initParticles = () => {
      particlesRef.current = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.4 + 0.1,
        color: color,
        phase: Math.random() * Math.PI * 2,
      }));
    };

    const getColor = (colorStr: string) => {
      if (colorStr.startsWith("var(")) {
        const computed = getComputedStyle(document.documentElement).getPropertyValue(colorStr.slice(4, -1)).trim();
        return computed || "#2dd4bf";
      }
      return colorStr;
    };

    const particleColor = getColor(color);

    const animate = () => {
      if (!canvasRef.current) return;

      ctx.clearRect(0, 0, width, height);

      // Update and draw particles
      particlesRef.current.forEach((p) => {
        // Update position
        p.x += p.vx;
        p.y += p.vy;
        p.phase += 0.01;

        // Wrap around edges
        if (p.x < -p.radius) p.x = width + p.radius;
        if (p.x > width + p.radius) p.x = -p.radius;
        if (p.y < -p.radius) p.y = height + p.radius;
        if (p.y > height + p.radius) p.y = -p.radius;

        // Subtle oscillation
        const oscillateX = Math.sin(p.phase) * 0.5;
        const oscillateY = Math.cos(p.phase * 0.7) * 0.5;

        // Draw particle
        const alpha = p.opacity * (0.7 + 0.3 * Math.sin(p.phase));
        ctx.globalAlpha = alpha;
        ctx.fillStyle = particleColor;
        ctx.beginPath();
        ctx.arc(p.x + oscillateX, p.y + oscillateY, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw connections
      ctx.globalAlpha = 0.08;
      ctx.strokeStyle = particleColor;
      ctx.lineWidth = 0.5;

      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const p1 = particlesRef.current[i];
          const p2 = particlesRef.current[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1;

      animationRef.current = requestAnimationFrame(animate);
    };

    initParticles();
    animate();

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationRef.current!);
      window.removeEventListener("resize", resize);
    };
  }, [isVisible, count, color, initialized]);

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full ${className}`}
      aria-hidden="true"
      style={{ display: "block" }}
    />
  );
}