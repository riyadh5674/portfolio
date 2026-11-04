"use client";

import { useEffect, useRef, useState } from "react";

interface ModelComparisonChartProps {
  className?: string;
}

export function ModelComparisonChart({ className = "" }: ModelComparisonChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (canvasRef.current) observer.observe(canvasRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    const width = rect.width;
    const height = 360;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.scale(dpr, dpr);

    // Data: [modelName, AUC, constraintsSatisfied, isPhysicsGuided, color]
    const models = [
      { name: "LightGBM\n(Unconstrained)", auc: 0.996, constraints: 0, guided: false, color: "#ef4444" },
      { name: "CatBoost\n(Unconstrained)", auc: 0.9962, constraints: 0, guided: false, color: "#f97316" },
      { name: "XGBoost\n(Unconstrained)", auc: 0.9962, constraints: 0, guided: false, color: "#eab308" },
      { name: "LightGBM\n(Physics-Guided)", auc: 0.8889, constraints: 11, guided: true, color: "#22c55e" },
      { name: "XGBoost\n(Physics-Guided)", auc: 0.9847, constraints: 11, guided: true, color: "#16a34a" },
      { name: "CatBoost\n(Physics-Guided)", auc: 0.9848, constraints: 11, guided: true, color: "#15803d" },
    ];

    const padding = { top: 40, right: 30, bottom: 60, left: 70 };
    const plotWidth = width - padding.left - padding.right;
    const plotHeight = height - padding.top - padding.bottom;

    // Scales
    const aucMin = 0.85;
    const aucMax = 1.0;
    const constraintMax = 11;

    const xScale = (auc: number) => padding.left + ((auc - aucMin) / (aucMax - aucMin)) * plotWidth;
    const yScale = (constraints: number) => padding.top + plotHeight - (constraints / constraintMax) * plotHeight;

    // Clear
    ctx.clearRect(0, 0, width, height);

    // Grid lines
    ctx.strokeStyle = "rgba(45, 212, 191, 0.08)";
    ctx.lineWidth = 1;

    // Vertical grid (AUC)
    for (let i = 0; i <= 6; i++) {
      const auc = aucMin + (i / 6) * (aucMax - aucMin);
      const x = xScale(auc);
      ctx.beginPath();
      ctx.moveTo(x, padding.top);
      ctx.lineTo(x, padding.top + plotHeight);
      ctx.stroke();

      // Label
      ctx.fillStyle = "rgba(124, 139, 153, 0.7)";
      ctx.font = "11px Geist Mono, monospace";
      ctx.textAlign = "center";
      ctx.fillText(auc.toFixed(2), x, height - padding.bottom + 20);
    }

    // Horizontal grid (constraints)
    for (let i = 0; i <= 4; i++) {
      const c = (i / 4) * constraintMax;
      const y = yScale(c);
      ctx.beginPath();
      ctx.moveTo(padding.left, y);
      ctx.lineTo(padding.left + plotWidth, y);
      ctx.stroke();

      ctx.fillStyle = "rgba(124, 139, 153, 0.7)";
      ctx.font = "11px Geist Mono, monospace";
      ctx.textAlign = "right";
      ctx.fillText(c === 0 ? "0%" : c === 11 ? "100%" : `${Math.round((c / 11) * 100)}%`, padding.left - 10, y + 4);
    }

    // Axes
    ctx.strokeStyle = "rgba(45, 212, 191, 0.3)";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(padding.left, padding.top);
    ctx.lineTo(padding.left, padding.top + plotHeight);
    ctx.lineTo(padding.left + plotWidth, padding.top + plotHeight);
    ctx.stroke();

    // Axis labels
    ctx.fillStyle = "rgba(167, 182, 196, 0.8)";
    ctx.font = "12px Geist, sans-serif";
    ctx.textAlign = "center";

    // Y-axis label (rotated)
    ctx.save();
    ctx.translate(25, height / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText("Physical Consistency (Monotonic Constraints Satisfied)", 0, 0);
    ctx.restore();

    // X-axis label
    ctx.fillText("AUC (Discriminative Performance)", width / 2, height - 10);

    // Ideal zone annotation
    ctx.fillStyle = "rgba(45, 212, 191, 0.1)";
    ctx.fillRect(xScale(0.95), padding.top, width - xScale(0.95) - padding.right, plotHeight);
    ctx.fillStyle = "rgba(45, 212, 191, 0.4)";
    ctx.font = "11px Geist Mono, monospace";
    ctx.textAlign = "left";
    ctx.fillText("IDEAL ZONE", xScale(0.955), padding.top + 20);

    // Draw points with animation
    const startTime = Date.now();
    const animate = () => {
      if (!canvasRef.current) return;
      const elapsed = Math.min((Date.now() - startTime) / 1500, 1);
      const eased = 1 - Math.pow(1 - elapsed, 3);

      ctx.clearRect(0, 0, width, height);

      // Redraw grid and axes
      ctx.strokeStyle = "rgba(45, 212, 191, 0.08)";
      ctx.lineWidth = 1;
      for (let i = 0; i <= 6; i++) {
        const auc = aucMin + (i / 6) * (aucMax - aucMin);
        const x = xScale(auc);
        ctx.beginPath();
        ctx.moveTo(x, padding.top);
        ctx.lineTo(x, padding.top + plotHeight);
        ctx.stroke();
      }
      for (let i = 0; i <= 4; i++) {
        const c = (i / 4) * constraintMax;
        const y = yScale(c);
        ctx.beginPath();
        ctx.moveTo(padding.left, y);
        ctx.lineTo(padding.left + plotWidth, y);
        ctx.stroke();
      }
      ctx.strokeStyle = "rgba(45, 212, 191, 0.3)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(padding.left, padding.top);
      ctx.lineTo(padding.left, padding.top + plotHeight);
      ctx.lineTo(padding.left + plotWidth, padding.top + plotHeight);
      ctx.stroke();

      // Ideal zone
      ctx.fillStyle = "rgba(45, 212, 191, 0.1)";
      ctx.fillRect(xScale(0.95), padding.top, width - xScale(0.95) - padding.right, plotHeight);

      // Draw models
      models.forEach((model, idx) => {
        const x = xScale(model.auc);
        const y = yScale(model.constraints * eased);

        // Connection line from unconstrained to guided (same family)
        const family = model.name.split("\n")[0];
        const unconstrained = models.find(m => m.name.startsWith(family) && !m.guided);
        const guided = models.find(m => m.name.startsWith(family) && m.guided);
        if (unconstrained && guided && model === guided) {
          const x1 = xScale(unconstrained.auc);
          const y1 = yScale(unconstrained.constraints);
          const x2 = xScale(guided.auc);
          const y2 = yScale(guided.constraints * eased);
          ctx.strokeStyle = model.color + "60";
          ctx.lineWidth = 2;
          ctx.setLineDash([5, 5]);
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.stroke();
          ctx.setLineDash([]);
        }

        // Point
        const radius = 8 + 4 * Math.sin(Date.now() / 500 + idx);
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        gradient.addColorStop(0, model.color);
        gradient.addColorStop(1, model.color + "00");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();

        // Core point
        ctx.fillStyle = model.color;
        ctx.beginPath();
        ctx.arc(x, y, 6, 0, Math.PI * 2);
        ctx.fill();

        // White center for guided models
        if (model.guided) {
          ctx.fillStyle = "#04110d";
          ctx.beginPath();
          ctx.arc(x, y, 3, 0, Math.PI * 2);
          ctx.fill();
        }

        // Label
        ctx.fillStyle = "#eaf2f8";
        ctx.font = "11px Geist, sans-serif";
        ctx.textAlign = "center";
        const lines = model.name.split("\n");
        lines.forEach((line, li) => {
          ctx.fillText(line, x, y - radius - 8 - li * 14);
        });

        // AUC label
        ctx.fillStyle = model.color;
        ctx.font = "bold 12px Geist Mono, monospace";
        ctx.fillText(model.auc.toFixed(4), x, y + radius + 20);
      });

      if (elapsed < 1) requestAnimationFrame(animate);
    };

    animate();
  }, [isVisible]);

  return (
    <div className={`w-full ${className}`}>
      <canvas
        ref={canvasRef}
        className="w-full"
        style={{ height: 360 }}
        aria-label="Model comparison chart: AUC vs Physical Consistency"
      />
    </div>
  );
}