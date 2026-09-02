import Link from "next/link";

export default function ResearchPage() {
  return (
    <>
      {/* ============ PAGE HEADER ============ */}
      <section className="py-16 md:py-24">
        <div className="container-narrow max-w-3xl">
          <span className="inline-block text-xs font-medium tracking-[0.15em] uppercase text-[var(--color-accent)] mb-4">
            Research
          </span>
          <h1 className="text-3xl md:text-4xl font-semibold text-[var(--color-text)] mb-6">
            Investigating how domain knowledge can shape machine learning
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
            I&apos;m interested in machine learning viewed from its mathematical
            and conceptual foundations — not only as a tool that produces
            numbers, but as a way of reasoning about models, constraints, and
            the systems they describe.
          </p>
        </div>
      </section>

      {/* ============ RESEARCH OVERVIEW ============ */}
      <section className="py-16 border-t border-[var(--color-border)]">
        <div className="container-narrow">
          <h2 className="text-xl md:text-2xl font-semibold text-[var(--color-text)] mb-2">
            Bangladesh Flood Predictor
          </h2>
          <p className="text-[var(--color-accent)] text-sm font-medium mb-4">
            Ongoing Research
          </p>

          {/* Research methodology grid */}
          <div className="grid gap-px md:grid-cols-2 lg:grid-cols-3 bg-[var(--color-border)] rounded-xl overflow-hidden border border-[var(--color-border)]">
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
                text: "Building baseline LightGBM and CatBoost models, then comparing them against physics-guided variants that encode domain knowledge through physically meaningful features and monotonic constraints.",
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
            ].map((item) => (
              <div
                key={item.title}
                className="bg-[var(--color-bg-card)] p-6"
              >
                <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--color-accent)] mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ DETAILED SECTIONS ============ */}
      <section className="py-16 bg-[var(--color-bg-warm)] border-t border-[var(--color-border)]">
        <div className="container-narrow max-w-3xl">
          <h2 className="text-xl md:text-2xl font-semibold text-[var(--color-text)] mb-6">
            Research question
          </h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed mb-8">
            <span className="font-medium text-[var(--color-text)]">
              Can machine learning models for flood prediction be made more
              trustworthy — not just more accurate — by embedding physical
              knowledge about how flooding works?
            </span>
          </p>

          <h2 className="text-xl md:text-2xl font-semibold text-[var(--color-text)] mb-6">
            Why it matters
          </h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed mb-8">
            Bangladesh&apos;s rivers, low elevation, and coastal exposure make it
            exceptionally vulnerable to flooding. Accurate prediction supports
            early warning, preparedness, and mitigation. But a model that
            performs well on historical data is only useful if it generalizes —
            and if its reasoning is consistent with what hydrologists and
            domain experts know about flood dynamics.
          </p>

          <h2 className="text-xl md:text-2xl font-semibold text-[var(--color-text)] mb-6">
            Data and features
          </h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
            The study builds on historical weather observations across multiple
            stations in Bangladesh, combining:
          </p>
          <ul className="space-y-2 mb-8">
            {[
              "Environmental features — rainfall, temperature, relative humidity, cloud coverage, bright sunshine",
              "Geographic features — elevation, latitude, longitude",
              "Spatial risk — river proximity, coastal proximity",
              "Seasonal effects — month and period encoding",
              "Engineered risk features — river proximity risk, coastal risk, seasonal risk",
            ].map((item) => (
              <li
                key={item}
                className="flex gap-2 text-[var(--color-text-secondary)] leading-relaxed"
              >
                <span className="text-[var(--color-accent)] mt-1">•</span>
                {item}
              </li>
            ))}
          </ul>

          <h2 className="text-xl md:text-2xl font-semibold text-[var(--color-text)] mb-6">
            Feature engineering with GeoPandas
          </h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed mb-8">
            Geospatial analysis with GeoPandas was used to derive spatial
            features — computing proximity to rivers and coastlines, and
            combining these with elevation and geographic coordinates to build
            physically motivated risk indicators. The goal was not simply to
            add more columns, but to encode the structure of the problem into
            the data.
          </p>

          <h2 className="text-xl md:text-2xl font-semibold text-[var(--color-text)] mb-6">
            Physics-guided reasoning
          </h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed mb-8">
            Beyond engineered features, the research investigates{" "}
            <span className="text-[var(--color-text)] font-medium">
              monotonic constraints
            </span>{" "}
            — encoding relationships that are physically expected. For
            example, intuitively, higher rainfall should be associated with
            higher flood risk (a positive relationship), while higher elevation
            should reduce risk (a negative relationship). Constraining the model
            to respect such directional relationships is one way to keep it
            consistent with domain knowledge.
          </p>

          <h2 className="text-xl md:text-2xl font-semibold text-[var(--color-text)] mb-6">
            Model experiments
          </h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
            Four configurations were explored:
          </p>
          <div className="space-y-3 mb-8">
            {[
              {
                name: "Unconstrained LightGBM",
                description:
                  "A baseline gradient boosting model without physics-guided constraints.",
              },
              {
                name: "Physics-guided LightGBM",
                description:
                  "The same model family with physically motivated monotonic constraints applied.",
              },
              {
                name: "Unconstrained CatBoost",
                description:
                  "A baseline CatBoost model.",
              },
              {
                name: "Physics-guided CatBoost",
                description:
                  "CatBoost with physical monotonic constraints.",
              },
            ].map((model) => (
              <div
                key={model.name}
                className="p-4 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)]"
              >
                <h4 className="text-sm font-medium text-[var(--color-text)] mb-1">
                  {model.name}
                </h4>
                <p className="text-sm text-[var(--color-text-secondary)]">
                  {model.description}
                </p>
              </div>
            ))}
          </div>

          {/* Results section with the "Why the first result wasn't the final answer" */}
          <h2 className="text-xl md:text-2xl font-semibold text-[var(--color-text)] mb-6">
            Results and interpretation
          </h2>

          <div className="p-6 rounded-lg bg-[var(--color-accent-light)]/60 border border-[var(--color-accent)]/20 mb-8">
            <h3 className="text-sm font-semibold text-[var(--color-accent)] uppercase tracking-wide mb-3">
              Why the first result wasn&apos;t the final answer
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              An unconstrained LightGBM model produced an extremely high AUC
              (approximately 0.996) under a random train/test split. On the
              surface, that looks like a strong result. But such an extreme
              score deserves scrutiny: with spatiotemporal and seasonal
              structure in the data, a random split can let the model exploit
              near-duplicate observations, inflating its apparent performance
              while offering little evidence of genuine generalization.
            </p>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mt-3">
              This prompted a shift in approach: instead of chasing the highest
              number, the research moved toward evaluating whether strong
              predictive performance can be preserved{" "}
              <span className="text-[var(--color-text)] font-medium">
                while the model respects physical constraints
              </span>
              . Physics-guided LightGBM produced a substantially lower AUC
              (approximately 0.889) — an honest reminder that constraining a
              model changes the optimization landscape and that interpretive
              consistency may come at a cost to raw performance.
            </p>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mt-3">
              Physics-guided CatBoost, however, produced approximately 0.985
              AUC — suggesting that with the right model family, physical
              constraints can be incorporated without sacrificing the bulk of
              predictive performance. This comparison is the core of the
              research: understanding the{" "}
              <span className="text-[var(--color-text)] font-medium">
                trade-offs between performance and domain consistency
              </span>
              , rather than simply reporting whichever number is highest.
            </p>
          </div>

          <h2 className="text-xl md:text-2xl font-semibold text-[var(--color-text)] mb-6">
            What I&apos;m learning
          </h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed mb-8">
            The investigation has reinforced that{" "}
            <span className="text-[var(--color-text)] font-medium">
              evaluation methodology matters as much as model design
            </span>
            . An impressive number under one experimental setup may be
            misleading. Thoughtful evaluation — including how data is split,
            how results generalize, and whether model behavior is consistent
            with domain knowledge — is what separates useful modeling from
            pattern-matching.
          </p>

          <h2 className="text-xl md:text-2xl font-semibold text-[var(--color-text)] mb-6">
            Status and future direction
          </h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
            This is ongoing research. Current experiments are being developed
            with the intention of eventually producing publication-quality
            work. Immediate directions include:
          </p>
          <ul className="space-y-2 mb-8">
            {[
              "More rigorous validation — time-based splits and cross-validation that respect temporal structure",
              "Deeper analysis of how constraints affect model predictions and error modes",
              "Exploring additional physically motivated features and constraint formulations",
              "Developing clear, reproducible documentation of the experiments",
              "Refining the research into a format suitable for academic communication",
            ].map((item) => (
              <li
                key={item}
                className="flex gap-2 text-[var(--color-text-secondary)] leading-relaxed"
              >
                <span className="text-[var(--color-accent)] mt-1">→</span>
                {item}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/riyadh5674/Bangladesh-Flood-Predictor"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--color-accent)] text-white font-medium text-sm hover:bg-[var(--color-accent-hover)] transition-colors"
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
            <Link
              href="/projects/bangladesh-flood-predictor"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[var(--color-border)] text-[var(--color-text)] font-medium text-sm hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
            >
              Full project page
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
