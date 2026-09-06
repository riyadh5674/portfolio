import Link from "next/link";
import Reveal from "@/components/Reveal";
import Spotlight from "@/components/Spotlight";

export default function ResearchPage() {
  return (
    <>
      {/* ============ PAGE HEADER ============ */}
      <section className="py-20 md:py-28">
        <div className="container-narrow max-w-4xl">
          <Reveal>
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="font-mono text-sm text-[var(--color-accent)]">02</span>
              <span className="h-px w-10 bg-gradient-to-r from-[var(--color-accent)] to-transparent" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-text-secondary)]">
                <span className="text-[var(--color-accent)]">&gt;</span> Research
              </span>
            </div>
            <h1 className="display-font text-4xl md:text-5xl font-bold text-[var(--color-text)] mb-6">
              Investigating how domain knowledge can shape{" "}
              <span className="text-gradient">machine learning</span>
            </h1>
            <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed">
              I&apos;m interested in machine learning viewed from its mathematical
              and conceptual foundations — not only as a tool that produces
              numbers, but as a way of reasoning about models, constraints, and
              the systems they describe.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ RESEARCH OVERVIEW ============ */}
      <section className="py-16 border-t border-[var(--color-border)]">
        <div className="container-narrow">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
              <h2 className="display-font text-2xl md:text-3xl font-bold text-[var(--color-text)]">
                Bangladesh Flood Predictor
              </h2>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-accent)]">
                <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
                Ongoing Research
              </span>
            </div>
          </Reveal>

          {/* Research methodology grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Problem",
                text: "Flood prediction in Bangladesh — a country whose geography makes large-scale flooding a recurring, devastating event. Can machine learning produce reliable flood-risk predictions from environmental and geographic observations?",
              },
              {
                title: "Approach",
                text: "Feature engineering combining environmental measurements (rainfall, temperature, humidity, cloud cover, sunshine) with geospatial features (elevation, coordinates, river and coastal proximity) and seasonal effects.",
              },
              {
                title: "Investigation",
                text: "Building baseline LightGBM and CatBoost models, then comparing them against physics-guided variants that encode domain knowledge through meaningful features and monotonic constraints.",
              },
              {
                title: "Lesson",
                text: "Predictive performance must be evaluated alongside domain consistency and generalization. An extremely high score under a random split can signal overfitting rather than genuine understanding.",
              },
              {
                title: "Status",
                text: "Ongoing research. Experiments are being developed further with the intention of producing publication-quality work.",
              },
              {
                title: "Direction",
                text: "Deepening the investigation into how physical constraints interact with model capacity, and how results generalize to unseen conditions and regions.",
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 60}>
                <Spotlight className="h-full rounded-xl">
                <div className="card card-glow p-6 h-full">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--color-accent)] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    {item.text}
                  </p>
                </div>
                </Spotlight>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ DETAILED SECTIONS ============ */}
      <section className="py-20 bg-[var(--color-bg-soft)] border-t border-[var(--color-border)]">
        <div className="container-narrow max-w-3xl">
          <Reveal>
            <div className="prose">
              <div className="flex items-start gap-4 mb-6">
                <h2 className="!mb-0 text-xl md:text-2xl font-bold text-[var(--color-text)]">
                  The research question
                </h2>
              </div>
              <p className="!text-lg !text-[var(--color-text)] font-medium !mb-8 border-l-4 border-[var(--color-accent)] pl-5">
                Can machine learning models for flood prediction be made more
                trustworthy — not just more accurate — by embedding physical
                knowledge about how flooding works?
              </p>

              <h2>Why it matters</h2>
              <p>
                Bangladesh&apos;s rivers, low elevation, and coastal exposure make it
                exceptionally vulnerable to flooding. Accurate prediction supports
                early warning, preparedness, and mitigation. But a model that
                performs well on historical data is only useful if it generalizes —
                and if its reasoning is consistent with what hydrologists and
                domain experts know about flood dynamics.
              </p>

              <h2>Data and features</h2>
              <p>
                The study builds on historical weather observations across multiple
                stations in Bangladesh, combining:
              </p>
            </div>
          </Reveal>

          <Reveal>
            <ul className="space-y-3 mb-8">
              {[
                "Environmental features — rainfall, temperature, relative humidity, cloud coverage, bright sunshine",
                "Geographic features — elevation, latitude, longitude",
                "Spatial risk — river proximity, coastal proximity",
                "Seasonal effects — month and period encoding",
                "Engineered risk features — river proximity risk, coastal risk, seasonal risk",
              ].map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm text-[var(--color-text-secondary)] leading-relaxed"
                >
                  <span className="mt-0.5 text-[var(--color-accent)]">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal>
            <div className="prose">
              <h2>Feature engineering with GeoPandas</h2>
              <p>
                Geospatial analysis with GeoPandas was used to derive spatial
                features — computing proximity to rivers and coastlines, and
                combining these with elevation and geographic coordinates to build
                physically motivated risk indicators. The goal was not simply to
                add more columns, but to encode the structure of the problem into
                the data.
              </p>

              <h2>Physics-guided reasoning</h2>
              <p>
                Beyond engineered features, the research investigates{" "}
                <strong>monotonic constraints</strong> — encoding relationships that
                are physically expected. For example, intuitively, higher rainfall
                should be associated with higher flood risk (a positive
                relationship), while higher elevation should reduce risk (a negative
                relationship). Constraining the model to respect such directional
                relationships is one way to keep it consistent with domain
                knowledge.
              </p>

              <h2>Model experiments</h2>
              <p>Four configurations were explored:</p>
            </div>
          </Reveal>

          <Reveal>
            <div className="grid gap-3 sm:grid-cols-2 mb-8">
              {[
                {
                  name: "Unconstrained LightGBM",
                  description: "A baseline gradient boosting model without physics-guided constraints.",
                },
                {
                  name: "Physics-guided LightGBM",
                  description: "The same model family with physically motivated monotonic constraints applied.",
                },
                {
                  name: "Unconstrained CatBoost",
                  description: "A baseline CatBoost model.",
                },
                {
                  name: "Physics-guided CatBoost",
                  description: "CatBoost with physical monotonic constraints.",
                },
              ].map((model) => (
                <div
                  key={model.name}
                  className="card p-5"
                >
                  <h4 className="text-sm font-semibold text-[var(--color-text)] mb-1">
                    {model.name}
                  </h4>
                  <p className="text-sm text-[var(--color-text-secondary)]">
                    {model.description}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <div className="card card-glow p-7 md:p-8 mb-10 overflow-hidden">
              <h3 className="text-sm font-semibold text-[var(--color-accent)] uppercase tracking-widest mb-4">
                Why the first result wasn&apos;t the final answer
              </h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
                An unconstrained LightGBM model produced an extremely high AUC
                (approximately 0.996) under a random train/test split. On the
                surface, that looks like a strong result. But such an extreme
                score deserves scrutiny: with spatiotemporal and seasonal
                structure in the data, a random split can let the model exploit
                near-duplicate observations, inflating its apparent performance
                while offering little evidence of genuine generalization.
              </p>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
                This prompted a shift in approach: instead of chasing the highest
                number, the research moved toward evaluating whether strong
                predictive performance can be preserved{" "}
                <strong className="text-[var(--color-text)]">
                  while the model respects physical constraints
                </strong>
                . Physics-guided LightGBM produced a substantially lower AUC
                (approximately 0.889) — an honest reminder that constraining a
                model changes the optimization landscape and that interpretive
                consistency may come at a cost to raw performance.
              </p>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                Physics-guided CatBoost, however, produced approximately 0.985
                AUC — suggesting that with the right model family, physical
                constraints can be incorporated without sacrificing the bulk of
                predictive performance. This comparison is the core of the
                research: understanding the{" "}
                <strong className="text-[var(--color-text)]">
                  trade-offs between performance and domain consistency
                </strong>
                , rather than simply reporting whichever number is highest.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="prose">
              <h2>What I&apos;m learning</h2>
              <p>
                The investigation has reinforced that{" "}
                <strong>evaluation methodology matters as much as model design</strong>
                . An impressive number under one experimental setup may be
                misleading. Thoughtful evaluation — including how data is split,
                how results generalize, and whether model behavior is consistent
                with domain knowledge — is what separates useful modeling from
                pattern-matching.
              </p>

              <h2>Status and future direction</h2>
              <p>
                This is ongoing research. Current experiments are being developed
                with the intention of eventually producing publication-quality
                work. Immediate directions include:
              </p>
            </div>
          </Reveal>

          <Reveal>
            <ul className="space-y-3 mb-10">
              {[
                "More rigorous validation — time-based splits and cross-validation that respect temporal structure",
                "Deeper analysis of how constraints affect model predictions and error modes",
                "Exploring additional physically motivated features and constraint formulations",
                "Developing clear, reproducible documentation of the experiments",
                "Refining the research into a format suitable for academic communication",
              ].map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm text-[var(--color-text-secondary)] leading-relaxed"
                >
                  <span className="mt-0.5 text-[var(--color-accent)] font-mono">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/riyadh5674/Bangladesh-Flood-Predictor"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary sheen"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub Repository
              </a>
              <Link href="/projects/bangladesh-flood-predictor" className="btn-ghost">
                Full project page
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
