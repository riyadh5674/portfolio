"use client";

import { useRef, useEffect, useState } from "react";

interface TimelineEvent {
  version: string;
  date: string;
  title: string;
  description: string;
  metrics: { label: string; value: string }[];
  status: "completed" | "current" | "planned";
  color: string;
}

const timelineData: TimelineEvent[] = [
  {
    version: "v1",
    date: "Early 2026",
    title: "Initial Exploration — Random Split",
    description: "Baseline LightGBM on random 80/20 split. Achieved 0.9965 AUC — looked impressive but was fundamentally flawed.",
    metrics: [
      { label: "Split", value: "Random 80/20" },
      { label: "LightGBM AUC", value: "0.9965" },
      { label: "Physics-Guided", value: "No" },
      { label: "Status", value: "Overfitted" },
    ],
    status: "completed",
    color: "#ef4444",
  },
  {
    version: "v2",
    date: "Mid 2026",
    title: "Physics-Guided Constraints",
    description: "Added monotonic constraints encoding hydrological knowledge. LightGBM dropped to 0.8889; CatBoost reached 0.9848 with 100% physical consistency.",
    metrics: [
      { label: "Split", value: "Random (still)" },
      { label: "LightGBM (guided)", value: "0.8889" },
      { label: "CatBoost (guided)", value: "0.9848" },
      { label: "Constraints", value: "11/11 satisfied" },
    ],
    status: "completed",
    color: "#f97316",
  },
  {
    version: "v3",
    date: "Nov 2026",
    title: "Leakage Audit + Honest Evaluation",
    description: "Full leakage autopsy, temporal splits (train ≤2000), station-out spatial CV, 5-model ablation, calibration, DeLong tests, SHAP, conformal prediction, WorldClim validation.",
    metrics: [
      { label: "Temporal Split", value: "Train ≤2000 / Test 2001–13" },
      { label: "Spatial CV", value: "Station-Out k-fold" },
      { label: "Models", value: "LightGBM/CatBoost/XGBoost ±constraints" },
      { label: "Calibration", value: "Brier / ECE / Conformal" },
      { label: "Stats", value: "DeLong + Bootstrap CI" },
      { label: "Attribution", value: "SHAP / Moran's I" },
      { label: "External Val.", value: "WorldClim r≈0.989" },
    ],
    status: "current",
    color: "#22c55e",
  },
  {
    version: "v4",
    date: "Q1 2027",
    title: "Publication + Satellite Extension",
    description: "Preprint submission, Zenodo DOI, reproducible repo (src/floodml). Sentinel-1 flood segmentation (Sylhet 2022). Transformer/FNO vs LSTM. Theory note for mathematical ML pathway.",
    metrics: [
      { label: "Target", value: "arXiv preprint + Zenodo DOI" },
      { label: "Satellite", value: "Sentinel-1 segmentation" },
      { label: "Architecture", value: "Transformer / FNO comparison" },
      { label: "Theory", value: "Proof-based note + SGD experiment" },
    ],
    status: "planned",
    color: "#38bdf8",
  },
];

export function ResearchTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleIndices, setVisibleIndices] = useState<Set<number>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            const index = parseInt(target.dataset.index || "0");
            setVisibleIndices((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    containerRef.current?.querySelectorAll(".timeline-item").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="relative">
      {/* Central timeline line */}
      <div className="absolute left-8 md:left-[calc(50%-1px)] top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--color-accent)] via-[var(--color-accent-2)] to-[var(--color-accent-3)]" />

      <div className="space-y-12">
        {timelineData.map((event, index) => (
          <div
            key={event.version}
            className="timeline-item relative"
            data-index={index}
            style={{
              opacity: visibleIndices.has(index) ? 1 : 0,
              transform: visibleIndices.has(index) ? "translateX(0)" : index % 2 === 0 ? "translateX(-40px)" : "translateX(40px)",
              transition: "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            {/* Timeline dot */}
            <div
              className="absolute left-8 md:left-[calc(50%-10px)] top-4 w-4 h-4 rounded-full border-4 border-[var(--color-bg)] z-10"
              style={{
                backgroundColor: event.color,
                boxShadow: `0 0 0 2px ${event.color}, 0 0 20px ${event.color}60`,
              }}
            />

            {/* Content card */}
            <div
              className={`md:w-[45%] card card-glow p-6 ${
                index % 2 === 0 ? "md:ml-20" : "md:ml-auto md:mr-20"
              }`}
              style={{
                borderLeft: `3px solid ${event.color}`,
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="font-mono text-lg font-bold"
                  style={{ color: event.color }}
                >
                  {event.version}
                </span>
                <span className="text-xs font-mono text-[var(--color-text-tertiary)]">
                  {event.date}
                </span>
                <span
                  className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                    event.status === "current"
                      ? "bg-[var(--color-accent-soft)] text-[var(--color-accent)] animate-pulse"
                      : event.status === "completed"
                      ? "bg-[var(--color-success)]/20 text-[var(--color-success)]"
                      : "bg-[var(--color-info)]/20 text-[var(--color-info)]"
                  }`}
                >
                  {event.status.toUpperCase()}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-[var(--color-text)] mb-3">
                {event.title}
              </h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
                {event.description}
              </p>

              {/* Metrics grid */}
              <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                {event.metrics.map((metric, mi) => (
                  <div
                    key={mi}
                    className="p-3 bg-[var(--color-bg-soft)] rounded-lg border border-[var(--color-border-light)]"
                  >
                    <div className="text-xs font-mono text-[var(--color-text-tertiary)] mb-1">
                      {metric.label}
                    </div>
                    <div className="font-mono text-sm text-[var(--color-text)]">
                      {metric.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}