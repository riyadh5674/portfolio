import { notFound } from "next/navigation";
import { projects, getProjectById, type Project } from "@/data/projects";
import { asset } from "@/lib/paths";
import StatusBadge from "@/components/StatusBadge";
import Link from "next/link";
import Image from "next/image";
import { ResearchTimeline } from "@/components/ResearchTimeline";
import { ModelComparisonChart } from "@/components/ModelComparisonChart";
import { MetricCard } from "@/components/MetricCard";
import { ParticleField } from "@/components/ParticleField";

interface Props {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: Props) {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) return {};
  return {
    title: `${project.title} — MD RIYAD`,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  return (
    <>
      {/* Breadcrumb */}
      <nav className="container-narrow pt-8" aria-label="Breadcrumb">
        <Link
          href="/projects"
          className="text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] inline-flex items-center gap-1.5 transition-colors"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
          All projects
        </Link>
      </nav>

      {/* Project header */}
      <section className="py-10 md:py-16">
        <div className="container-narrow max-w-4xl">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-accent)]">
              {project.category === "research"
                ? "Research"
                : project.category === "engineering"
                ? "Engineering"
                : "Robotics"}
            </span>
            <span className="h-px w-8 bg-gradient-to-r from-[var(--color-accent)] to-transparent" />
            <StatusBadge status={project.status} />
          </div>

          <h1 className="display-font text-4xl md:text-6xl font-bold text-[var(--color-text)] mb-4">
            {project.title}
          </h1>
          <p className="text-lg md:text-xl text-[var(--color-text-secondary)] mb-8">
            {project.subtitle}
          </p>

          {/* Technology */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-lg border border-[var(--color-border-light)] bg-[var(--color-bg-soft)] text-xs text-[var(--color-text-secondary)] font-mono"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-4">
            {project.links.github && (
              <a
                href={project.links.github}
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
                GitHub
              </a>
            )}
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                Live Demo
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Project-specific content */}
      <ProjectSpecificContent project={project} />
    </>
  );
}

function ProjectSpecificContent({ project }: { project: Project }) {
  switch (project.id) {
    case "bangladesh-flood-predictor":
      return <FloodPredictorContent />;
    case "teaquest":
      return <TeaQuestContent />;
    case "line-follower-robot":
      return <LineFollowerContent />;
    case "innovation-club-website":
      return <InnovationClubContent />;
    case "ames-housing-price-prediction":
      return <AmesHousingContent />;
    default:
      return (
        <section className="py-12 border-t border-[var(--color-border)]">
          <div className="container-narrow max-w-3xl">
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              {project.description}
            </p>
          </div>
        </section>
      );
  }
}

/* ============================================
   FLOOD PREDICTOR CONTENT
   ============================================ */
function FloodPredictorContent() {
  return (
    <>
      <ParticleField className="fixed inset-0 -z-10" count={25} color="var(--color-accent)" />

      {/* Research Evolution Timeline */}
      <section className="py-16 border-t border-[var(--color-border)] relative">
        <div className="container-narrow max-w-6xl">
          <h2 className="display-font text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-10 text-center">
            Research Evolution: v1 → v2 → v3 → v4
          </h2>
          <ResearchTimeline />
        </div>
      </section>

      {/* Model Comparison Chart */}
      <section className="py-16 border-t border-[var(--color-border)]">
        <div className="container-narrow max-w-5xl">
          <h2 className="display-font text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-10 text-center">
            Model Comparison — Performance vs. Physical Consistency
          </h2>
          <ModelComparisonChart />
        </div>
      </section>

      {/* Overview */}
      <section className="py-12 border-t border-[var(--color-border)]">
        <div className="container-narrow max-w-3xl">
          <h2 className="display-font text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-6">
            Overview
          </h2>
          <div className="prose">
            <p>
              Bangladesh is among the most flood-prone regions in the world.
              Its river systems, low elevation, and coastal exposure mean that
              large-scale flooding recurs with devastating consequences. This
              research asks whether machine learning can produce reliable
              flood-risk predictions — and more importantly, whether those
              predictions can be made <strong>trustworthy</strong> by embedding
              domain knowledge about how flooding actually works.
            </p>
          </div>
        </div>
      </section>

      {/* Research Question */}
      <section className="py-12 bg-[var(--color-bg-warm)] border-y border-[var(--color-border)]">
        <div className="container-narrow max-w-3xl">
          <h2 className="display-font text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-6">
            Research question
          </h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            <span className="font-medium text-[var(--color-text)]">
              Can machine learning models for flood prediction be made more
              scientifically trustworthy — not just more accurate — by
              incorporating physical knowledge about flood dynamics?
            </span>
          </p>
        </div>
      </section>

      {/* Data & Features */}
      <section className="py-12 border-t border-[var(--color-border)]">
        <div className="container-narrow max-w-3xl prose">
          <h2 className="display-font text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-6">
            Data & features
          </h2>
          <p>
            The study works with historical environmental observations across
            stations in Bangladesh. Features include rainfall, temperature,
            relative humidity, cloud coverage, and bright sunshine — combined
            with elevation, geographic coordinates, and engineered spatial
            features such as river proximity, coastal proximity, and seasonal
            risk indicators.
          </p>
          <p className="mt-4">
            Geospatial feature engineering with <strong>GeoPandas</strong> was
            used to derive proximity-based and spatial risk features, encoding
            the geographic structure of the problem into the data.
          </p>
        </div>
      </section>

      {/* Physics-Guided Reasoning */}
      <section className="py-12 bg-[var(--color-bg-warm)] border-y border-[var(--color-border)]">
        <div className="container-narrow max-w-3xl prose">
          <h2 className="display-font text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-6">
            Physics-guided reasoning
          </h2>
          <p>
            Beyond engineered features, the core methodological idea is{" "}
            <strong>monotonic constraints</strong>. These encode directional
            relationships that are physically expected:
          </p>
          <ul className="mt-4 space-y-2">
            <li>
              Higher rainfall → <strong>higher</strong> flood risk
            </li>
            <li>
              Higher elevation → <strong>lower</strong> flood risk
            </li>
            <li>
              Closer to river → <strong>higher</strong> risk from river
              proximity
            </li>
            <li>
              Coastal proximity → <strong>higher</strong> coastal risk
            </li>
            <li>
              Seasonal effects → <strong>higher</strong> seasonal risk during
              peak seasons
            </li>
          </ul>
          <p className="mt-4">
            Constraining the model to respect these directions is one way to
            keep its behavior consistent with domain knowledge.
          </p>
        </div>
      </section>

      {/* Metrics Dashboard */}
      <section className="py-12 border-t border-[var(--color-border)]">
        <div className="container-narrow max-w-5xl">
          <h2 className="display-font text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-10 text-center">
            v3 Key Metrics
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <MetricCard
              label="Physics-Guided CatBoost AUC"
              value="0.9848"
              subtitle="vs 0.9962 baseline (gap 0.0114)"
              trend="up"
              icon="🎯"
            />
            <MetricCard
              label="Physics-Guided LightGBM AUC"
              value="0.8889"
              subtitle="vs 0.9965 baseline (gap 0.1076)"
              trend="down"
              icon="📉"
            />
            <MetricCard
              label="Physics-Guided XGBoost AUC"
              value="0.9847"
              subtitle="vs 0.9962 baseline (gap 0.0115)"
              trend="up"
              icon="📈"
            />
            <MetricCard
              label="WorldClim Correlation"
              value="0.989"
              subtitle="External validation of spatial features"
              trend="up"
              icon="🌍"
            />
            <MetricCard
              label="Temporal Split"
              value="Train ≤2000"
              subtitle="Test 2001–2013 · No leakage"
              trend="neutral"
              icon="📅"
            />
            <MetricCard
              label="Station-Out CV"
              value="k-fold"
              subtitle="Spatial generalization test"
              trend="neutral"
              icon="🗺️"
            />
            <MetricCard
              label="Monotonic Constraints"
              value="11 / 11"
              subtitle="100% physical consistency"
              trend="up"
              icon="⚖️"
            />
            <MetricCard
              label="Conformal Coverage"
              value="90%"
              subtitle="Marginal coverage intervals"
              trend="neutral"
              icon="📊"
            />
          </div>
        </div>
      </section>

      {/* Model Experiments Table */}
      <section className="py-12 bg-[var(--color-bg-warm)] border-y border-[var(--color-border)]">
        <div className="container-narrow max-w-3xl prose">
          <h2 className="display-font text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-6">
            Model experiments (v3)
          </h2>
          <p>Six configurations investigated across three model families:</p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-[var(--color-border)] text-left">
                  <th className="py-2 pr-4 text-[var(--color-text)] font-medium">
                    Model
                  </th>
                  <th className="py-2 pr-4 text-[var(--color-text)] font-medium">
                    Configuration
                  </th>
                  <th className="py-2 pr-4 text-[var(--color-text)] font-medium">
                    AUC (v3 temporal split)
                  </th>
                  <th className="py-2 pr-4 text-[var(--color-text)] font-medium">
                    Constraints
                  </th>
                </tr>
              </thead>
              <tbody className="text-[var(--color-text-secondary)]">
                <tr className="border-b border-[var(--color-border-light)]">
                  <td className="py-3 pr-4">LightGBM</td>
                  <td className="py-3">Unconstrained baseline</td>
                  <td className="py-3 font-mono">~0.996 (overfitted)</td>
                  <td className="py-3">0/11</td>
                </tr>
                <tr className="border-b border-[var(--color-border-light)]">
                  <td className="py-3 pr-4">Physics-guided LightGBM</td>
                  <td className="py-3">With monotonic constraints</td>
                  <td className="py-3 font-mono">0.8889</td>
                  <td className="py-3 text-[var(--color-success)]">11/11 ✓</td>
                </tr>
                <tr className="border-b border-[var(--color-border-light)]">
                  <td className="py-3 pr-4">CatBoost</td>
                  <td className="py-3">Unconstrained baseline</td>
                  <td className="py-3 font-mono">0.9962</td>
                  <td className="py-3">0/11</td>
                </tr>
                <tr className="border-b border-[var(--color-border-light)]">
                  <td className="py-3 pr-4">Physics-guided CatBoost</td>
                  <td className="py-3">With monotonic constraints</td>
                  <td className="py-3 font-mono text-[var(--color-success)]">0.9848</td>
                  <td className="py-3 text-[var(--color-success)]">11/11 ✓</td>
                </tr>
                <tr className="border-b border-[var(--color-border-light)]">
                  <td className="py-3 pr-4">XGBoost</td>
                  <td className="py-3">Unconstrained baseline</td>
                  <td className="py-3 font-mono">0.9962</td>
                  <td className="py-3">0/11</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">Physics-guided XGBoost</td>
                  <td className="py-3">With monotonic constraints</td>
                  <td className="py-3 font-mono">0.9847</td>
                  <td className="py-3 text-[var(--color-success)]">11/11 ✓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Results & Interpretation */}
      <section className="py-12 border-t border-[var(--color-border)]">
        <div className="container-narrow max-w-3xl">
          <h2 className="display-font text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-6">
            Results & interpretation
          </h2>

          <div className="p-6 rounded-lg bg-[var(--color-accent-light)]/60 border border-[var(--color-accent)]/20 mb-6">
            <h3 className="text-sm font-semibold text-[var(--color-accent)] uppercase tracking-wide mb-3">
              Why the first result wasn&apos;t the final answer
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              An unconstrained LightGBM model reached an extremely high AUC
              (approximately 0.996) under a random split. On the surface this
              looks like an outstanding result. But an AUC that high, on data
              with strong temporal and spatial structure, warrants suspicion.
              With a random split, the model can exploit near-duplicate
              observations between train and test, inflating its apparent
              performance while telling us little about genuine
              generalization.
            </p>
          </div>

          <div className="space-y-6">
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              This observation reframed the research. The goal became not to
              maximize AUC, but to understand the{" "}
              <span className="text-[var(--color-text)] font-medium">
                trade-off between predictive performance and domain consistency
              </span>
              — and whether physically-constrained models can retain strong
              predictive power while behaving consistently with known physics.
            </p>

            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              Physics-guided LightGBM produced a substantially lower AUC
              (approximately 0.889). This is an honest result: constraining a
              model changes its optimization landscape, and interpretive
              consistency can come at a real cost to raw performance.
            </p>

            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              Physics-guided CatBoost reached approximately 0.985 AUC —
              suggesting that with the right model family, physical constraints
              can be incorporated with minimal loss of predictive performance.
              This comparison is at the heart of the research.
            </p>
          </div>

          <div className="mt-6 p-4 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)]">
            <p className="text-xs text-[var(--color-text-tertiary)] leading-relaxed">
              Note: These are experimental observations from the current
              research, not universally validated scientific claims. They
              represent work in progress and require further validation,
              particularly with respect to temporal generalization.
            </p>
          </div>
        </div>
      </section>

      {/* v3 Methodology Deep Dive */}
      <section className="py-16 bg-[var(--color-bg-soft)] border-t border-[var(--color-border)]">
        <div className="container-narrow max-w-4xl">
          <h2 className="display-font text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-10">
            v3 Methodology — The Honest Evaluation Stack
          </h2>

          <div className="space-y-8">
            {[
              {
                title: "1. Leakage Audit → Temporal Split",
                text: "The original dataset has strong temporal autocorrelation. A random 80/20 split lets the model see near-future observations during training. v3 enforces a strict temporal boundary: all data from years ≤ 2000 for training, 2001–2013 for testing. This is the single most impactful change — it separates memorization from generalization.",
                details: [
                  "Train: 1980–2000 (21 years)",
                  "Test: 2001–2013 (13 years)",
                  "No station appears in both train and test with temporal overlap",
                  "Eliminates the 0.996 → 0.88–0.98 AUC drop",
                ],
              },
              {
                title: "2. Station-Out Spatial Evaluation",
                text: "Temporal splits test time generalization; station-out splits test space generalization. We hold out entire stations (all years) to test whether the model learns transferable flood physics or station-specific idiosyncrasies. This is critical for early-warning systems deployed at new locations.",
                details: [
                  "k-fold station-out cross-validation",
                  "Tests spatial transferability",
                  "Reveals whether river_proximity_risk generalizes",
                ],
              },
              {
                title: "3. Five-Model Ablation (M1–M5)",
                text: "Systematic feature removal to quantify each feature group&apos;s contribution. M1 = environmental only; M2 = +geographic; M3 = +spatial risk; M4 = +seasonal; M5 = full. Run on LightGBM, CatBoost, XGBoost — all with and without monotonic constraints. This reveals which features are signal vs. noise under honest evaluation.",
                details: [
                  "M1: Environmental (rainfall, temp, humidity, cloud, sunshine)",
                  "M2: + Geographic (elevation, lat, lon)",
                  "M3: + Spatial risk (river/coast proximity, interaction terms)",
                  "M4: + Seasonal (month, period, seasonal_risk)",
                  "M5: Full feature set",
                ],
              },
              {
                title: "4. Monotonic Constraints — Physical Consistency",
                text: "Domain knowledge encoded as directional constraints: rainfall↑ → risk↑, elevation↑ → risk↓, river_proximity↑ → risk↑, etc. LightGBM struggles (0.8889 AUC); CatBoost excels (0.9848 AUC). The gap (0.0115 vs unconstrained CatBoost) is the cost of physical honesty — and it&apos;s remarkably small.",
                details: [
                  "11 monotonic constraints from hydrological first principles",
                  "LightGBM: constraints degrade optimization landscape",
                  "CatBoost: native constraint handling preserves performance",
                  "XGBoost: intermediate (0.9847 AUC)",
                ],
              },
              {
                title: "5. Calibration & Uncertainty Quantification",
                text: "A model can discriminate well (high AUC) but be poorly calibrated (predicted probabilities don&apos;t match observed frequencies). v3 adds: Brier score decomposition, Expected Calibration Error (ECE), reliability diagrams, conformal prediction intervals (distribution-free), and label-flip sensitivity analysis.",
                details: [
                  "Brier score + decomposition (reliability + resolution + uncertainty)",
                  "ECE with 10-bin reliability diagram",
                  "Conformal prediction: 90% marginal coverage intervals",
                  "Label-flip sensitivity: how many labels must change to flip prediction?",
                ],
              },
              {
                title: "6. Statistical Rigor & Attribution",
                text: "DeLong tests with 10,000 bootstrap iterations for AUC comparison CIs. SHAP (TreeSHAP) for feature attribution — global importance + local explanations. Moran&apos;s I on residuals tests spatial autocorrelation (are errors clustered?). WorldClim reanalysis correlation (r ≈ 0.989) validates spatial risk features against independent data.",
                details: [
                  "DeLong test: physics-guided CatBoost vs. baselines (p < 0.001)",
                  "SHAP: river_proximity_risk and rainfall dominate",
                  "Moran&apos;s I: residuals show no spatial clustering (good)",
                  "WorldClim: spatial_flood_risk correlates 0.989 with independent reanalysis",
                ],
              },
            ].map((item) => (
              <div key={item.title} className="card card-glow p-6 md:p-8">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--color-accent)] mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
                  {item.text}
                </p>
                <ul className="space-y-2 text-sm text-[var(--color-text-tertiary)]">
                  {item.details.map((d) => (
                    <li key={d} className="flex gap-2">
                      <span className="text-[var(--color-accent)]">→</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What I'm Learning */}
      <section className="py-12 border-t border-[var(--color-border)]">
        <div className="container-narrow max-w-3xl prose">
          <h2 className="display-font text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-6">
            What I&apos;m learning
          </h2>
          <p>
            The most important takeaway is methodological:{" "}
            <strong>evaluation design is part of the research</strong>. How you
            split your data, how you validate, and whether your model&apos;s
            behavior is consistent with what you know about the world — these
            determine whether a result tells you something real or just looks
            impressive.
          </p>
          <p className="mt-4">
            The research also highlighted that{" "}
            <strong>constraints and performance are not always in conflict</strong>
            . The physics-guided CatBoost result suggests that thoughtful model
            design can preserve predictive performance while keeping behavior
            aligned with domain knowledge.
          </p>
        </div>
      </section>

      {/* Status & Future Work */}
      <section className="py-12 bg-[var(--color-bg-warm)] border-y border-[var(--color-border)]">
        <div className="container-narrow max-w-3xl">
          <h2 className="display-font text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-6">
            Status & future work
          </h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6">
            This is ongoing research, intended for further development and
            eventual publication. Key directions:
          </p>
          <ul className="space-y-3 mb-8">
            {[
              "Package v3 as a reproducible repository: `src/floodml` with tests, `requirements.txt`, one-command reproduction script",
              "Post preprint to arXiv with Zenodo DOI for citable research output",
              "Sentinel-1 flood segmentation mini-project (Sylhet 2022) — closes satellite/remote sensing gap",
              "Time-series transformer / FNO comparison against LSTM baseline",
              "Theory note: 5 proof-based problems + 1 SGD experiment (for mathematical ML pathway)",
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

          <h3 className="display-font text-xl font-bold text-[var(--color-text)] mb-4">
            The research question, refined
          </h3>
          <p className="!text-lg !text-[var(--color-text)] font-medium !mb-8 border-l-4 border-[var(--color-accent)] pl-5 italic">
            "Leakage-free reanalysis and conformal uncertainty quantification for station-based flood prediction in data-scarce monsoon basins."
          </p>
          <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
            This framing is specific, 80% complete, and gives a supervisor a concrete project rather than a generic expression of interest. It positions the work at the intersection of climate-AI, scientific-ML, and trustworthy-ML — exactly where the field needs contributors who can evaluate models honestly.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://github.com/riyadh5674/Bangladesh-Flood-Predictor"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary sheen"
            >
              View on GitHub (v3 in progress)
            </a>
            <Link
              href="/research"
              className="btn-ghost"
            >
              Research overview
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

/* ============================================
   TEAQUEST CONTENT
   ============================================ */
function TeaQuestContent() {
  return (
    <>
      {/* Screenshots / overview */}
      <section className="py-12 border-t border-[var(--color-border)]">
        <div className="container-narrow">
          <h2 className="text-xl md:text-2xl font-semibold text-[var(--color-text)] mb-8">
            The experience
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                src: "/projects/home.png",
                alt: "TeaQuest home screen with pixel-art tea house",
                caption: "Home — the fantasy storefront",
              },
              {
                src: "/projects/shop.png",
                alt: "TeaQuest shop interface with tea products",
                caption: "Shop — browsing the catalog",
              },
              {
                src: "/projects/codex.png",
                alt: "TeaQuest codex collection screen",
                caption: "Codex — the tea collection log",
              },
              {
                src: "/projects/lore.png",
                alt: "TeaQuest lore or story screen",
                caption: "Lore — the world behind the store",
              },
            ].map((img) => (
              <figure
                key={img.src}
                className="rounded-xl border border-[var(--color-border)] overflow-hidden card-hover bg-[var(--color-bg-card)]"
              >
                <Image
                  src={asset(img.src)}
                  alt={img.alt}
                  width={1200}
                  height={750}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
                <figcaption className="px-4 py-3 text-xs text-[var(--color-text-tertiary)]">
                  {img.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-[var(--color-bg-warm)] border-y border-[var(--color-border)]">
        <div className="container-narrow max-w-3xl">
          <h2 className="display-font text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-6">
            The thesis
          </h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            TeaQuest is an experiment in combining{" "}
            <span className="text-[var(--color-text)] font-medium">
              commerce with interaction design, gamification, storytelling, and
              social systems
            </span>
            . The core idea: make buying tea easy while making the experience
            memorable. It challenges the convention that e-commerce must be
            visually generic by framing the entire journey as an original
            fantasy world.
          </p>
        </div>
      </section>

      {/* Architecture / feature modules */}
      <section className="py-12 border-t border-[var(--color-border)]">
        <div className="container-narrow">
          <h2 className="text-xl md:text-2xl font-semibold text-[var(--color-text)] mb-8">
            Key systems
          </h2>
          <div className="grid gap-px md:grid-cols-2 lg:grid-cols-3 bg-[var(--color-border)] rounded-xl overflow-hidden border border-[var(--color-border)]">
            {[
              {
                title: "E-Commerce",
                items: [
                  "Product browsing & search",
                  "Category filtering",
                  "Product details",
                  "Favorites & shopping cart",
                  "Quantity management",
                  "Checkout flow & order history",
                ],
              },
              {
                title: "Gamification",
                items: [
                  "Tea Roulette with weighted rarity",
                  "Tea Oracle recommendations",
                  "Tea Codex collection",
                  "XP, levels & progression",
                  "Quests & achievements",
                  "Tea discovery system",
                ],
              },
              {
                title: "The Tea Arcade",
                items: [
                  "Perfect Brew — timing game",
                  "Leaf Catch — catch & dodge",
                  "Tea Memory — pair matching",
                  "Persistent high scores",
                  "Synthesized chiptune audio",
                  "XP rewards & achievements",
                ],
              },
              {
                title: "The Tavern (Social)",
                items: [
                  "Global live chat (realtime)",
                  "Brew Buddies — friend requests",
                  "Private messages",
                  "Media messages (images, video, audio, docs)",
                  "Online presence & player avatars",
                  "Unread message indicators",
                ],
              },
              {
                title: "Backend",
                items: [
                  "Supabase authentication",
                  "PostgreSQL with Row Level Security",
                  "Cloud storage for media",
                  "Realtime presence & chat",
                  "Local-first fallback with localStorage",
                  "Offline sync when reconnected",
                ],
              },
              {
                title: "Admin",
                items: [
                  "Guild Master dashboard",
                  "Product management",
                  "Order management",
                  "Order status updates",
                  "Customer management",
                  "Analytics overview",
                ],
              },
            ].map((module) => (
              <div key={module.title} className="bg-[var(--color-bg-card)] p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--color-accent)] mb-4">
                  {module.title}
                </h3>
                <ul className="space-y-2">
                  {module.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-[var(--color-text-secondary)] leading-relaxed flex gap-2"
                    >
                      <span className="text-[var(--color-accent)] mt-0.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-[var(--color-bg-warm)] border-y border-[var(--color-border)]">
        <div className="container-narrow max-w-3xl">
          <h2 className="display-font text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-6">
            Architecture
          </h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
            TeaQuest follows a local-first, cloud-enhanced architecture. All
            features work fully offline against localStorage; when the Supabase
            SDK is reachable, accounts and profiles synchronize to the cloud.
          </p>
          <div className="p-6 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] font-mono text-xs overflow-x-auto">
            <pre className="text-[var(--color-text-secondary)] leading-relaxed">
{`+--------------------------+
|  BROWSER (SPA)          |
|  - index.html           |
|  - java.js  (engine)    |
|  - style.css (design)   |
|  - arcade.js (games)    |
|  - social.js (tavern)   |
|  - fx.js (sound/juice)  |
|                         |
|  localStorage ←→ state |
+------------+-------------+
             |
             | sync (profiles, auth)
             v
+--------------------------+
|  SUPABASE               |
|  - Auth (email/pass)    |
|  - PostgreSQL + RLS     |
|  - Storage (media)      |
|  - Realtime (chat)      |
+--------------------------+`}
            </pre>
          </div>
        </div>
      </section>

      <section className="py-12 border-t border-[var(--color-border)]">
        <div className="container-narrow max-w-3xl">
          <h2 className="display-font text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-6">
            Design decisions
          </h2>
          <div className="space-y-6">
            {[
              {
                decision: "Vanilla JavaScript, no frameworks",
                why: "Demonstrates that rich interactive experiences can be built with foundation-level web technologies, keeping the project lightweight, fast, and dependency-free.",
              },
              {
                decision: "Local-first with cloud enhancement",
                why: "The experience remains instant and resilient even without network access, while cloud sync provides persistence, authentication, and real-time multiplayer features.",
              },
              {
                decision: "Security enforced in the database",
                why: "Row Level Security policies in PostgreSQL ensure authorization is enforced server-side, not merely in client code.",
              },
              {
                decision: "Web Audio API for synthesized sound",
                why: "Chip-style audio generated in code — no audio files, keeping the project dependency-free and adding an original, hand-crafted feel.",
              },
            ].map((item) => (
              <div
                key={item.decision}
                className="p-5 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)]"
              >
                <h3 className="text-sm font-semibold text-[var(--color-text)] mb-2">
                  {item.decision}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {item.why}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-[var(--color-bg-warm)] border-y border-[var(--color-border)]">
        <div className="container-narrow max-w-3xl">
          <h2 className="display-font text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-6">
            Current status & honest limitations
          </h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
            TeaQuest is an ongoing project — a functional prototype being
            developed with care, not a production-ready commercial platform.
          </p>
          <ul className="space-y-3">
            {[
              "Payments are simulated; no real payment gateway is integrated",
              "No automated test suite; verification is manual",
              "The main JavaScript engine is monolithic and would benefit from modular refactoring",
              "Images and icons use emoji placeholders rather than authored pixel art",
              "First Guild Master promotion is configured once via the SQL editor",
            ].map((item) => (
              <li
                key={item}
                className="flex gap-2 text-[var(--color-text-secondary)] leading-relaxed text-sm"
              >
                <span className="text-[var(--color-warning)] mt-1">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-12 border-t border-[var(--color-border)]">
        <div className="container-narrow max-w-3xl">
          <h2 className="display-font text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-6">
            What I&apos;m learning
          </h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            TeaQuest has been a practical education in full-stack development
            and systems design — managing complex state, designing real-time
            communication, reasoning about database security, and thinking
            carefully about how gamification affects user behavior. It
            demonstrates an approach to engineering that treats the{" "}
            <span className="text-[var(--color-text)] font-medium">
              user experience itself as the problem to be solved
            </span>
            .
          </p>
        </div>
      </section>

      <section className="py-12 bg-[var(--color-bg-warm)] border-y border-[var(--color-border)]">
        <div className="container-narrow max-w-3xl">
          <h2 className="display-font text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-6">
            Future work
          </h2>
          <ul className="space-y-3">
            {[
              "Real payment integration (Stripe or similar)",
              "Global leaderboards",
              "Daily quests & streaks",
              "Message reactions & typing indicators",
              "Modularity and automated testing",
              "Authoring original pixel-art assets",
              "Order confirmation emails",
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
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://riyadh5674.github.io/TeaQuest/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary sheen"
            >
              Try the Live Demo
            </a>
            <a
              href="https://github.com/riyadh5674/TeaQuest"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

/* ============================================
   LINE FOLLOWER ROBOT CONTENT
   ============================================ */
function LineFollowerContent() {
  return (
    <>
      <section className="py-12 border-t border-[var(--color-border)]">
        <div className="container-narrow max-w-3xl prose">
          <h2 className="display-font text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-6">
            Overview
          </h2>
          <p>
            This was a team-built{" "}
            <strong>
              PDI-Based Intelligent Line Tracking Robot
            </strong>{" "}
            — an autonomous robot that detects a black line on a white surface
            and follows it using feedback control. Built around an Arduino Nano,
            the robot applies a PDI (Proportional–Derivative–Integral) control
            approach: it reads sensor input and adjusts motor actuation in real
            time to track the line.
          </p>
          <p className="mt-4">
            The project brings software, electronics, and mechanics together in
            a physical system — demonstrating sensor integration, control
            algorithms, and hardware assembly. It reflects a hands-on interest
            in{" "}
            <span className="text-[var(--color-text)] font-medium">
              robotics and control
            </span>{" "}
            alongside machine learning and software engineering.
          </p>
          <p className="mt-4 text-sm text-[var(--color-text-tertiary)]">
            Built collaboratively as a student team project and presented as
            part of coursework.
          </p>
        </div>
      </section>

      <section className="py-12 bg-[var(--color-bg-warm)] border-y border-[var(--color-border)]">
        <div className="container-narrow max-w-3xl">
          <h2 className="display-font text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-6">
            The problem
          </h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            A line-following robot must react continuously to sensor input,
            adjusting its motors to stay on the line. The difficulty is that
            corrections must be smooth and proportional — too little correction
            and the robot drifts off course; too much and it oscillates.
            Feedback control (proportional + derivative + integral terms)
            provides the framework for tuning this balance.
          </p>
        </div>
      </section>

      <section className="py-12 border-t border-[var(--color-border)]">
        <div className="container-narrow max-w-3xl">
          <h2 className="display-font text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-6">
            The control approach
          </h2>
          <div className="space-y-4">
            {[
              {
                term: "Proportional (P)",
                desc: "Correction proportional to current error — how far the robot is from the line center.",
              },
              {
                term: "Derivative (D)",
                desc: "Correction based on the rate of error change — damping oscillations and smoothing response.",
              },
              {
                term: "Integral (I)",
                desc: "Correction based on accumulated error — compensating for steady-state offset or drift.",
              },
            ].map((item) => (
              <div
                key={item.term}
                className="p-5 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)]"
              >
                <h3 className="text-sm font-semibold text-[var(--color-text)] mb-2">
                  {item.term}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-[var(--color-bg-warm)] border-y border-[var(--color-border)]">
        <div className="container-narrow max-w-3xl">
          <h2 className="display-font text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-6">
            Implementation
          </h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
            The robot is built on an{" "}
            <span className="text-[var(--color-text)] font-medium">
              Arduino Nano
            </span>
            , reading sensor values and computing motor commands based on the
            PDI error equation. The control logic was developed step by step
            and tuned through iterative debugging. The hardware was assembled
            and verified on a vero board, with careful attention to component
            placement, soldering, and continuity.
          </p>
          <ul className="space-y-3">
            {[
              "Sensor-based black-line detection on a white surface",
              "Motor actuation and real-time course correction",
              "Vero board assembly with planned component placement",
              "Iterative debugging and tuning of robot movement",
              "PDI feedback control logic implemented on the microcontroller",
            ].map((item) => (
              <li
                key={item}
                className="flex gap-2 text-sm text-[var(--color-text-secondary)] leading-relaxed"
              >
                <span className="text-[var(--color-accent)] mt-1">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-12 border-t border-[var(--color-border)]">
        <div className="container-narrow max-w-3xl">
          <h2 className="display-font text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-6">
            What I&apos;m learning
          </h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            The key lesson is that{" "}
            <span className="text-[var(--color-text)] font-medium">
              theory and practice inform each other
            </span>
            . Understanding feedback control on paper and seeing a physical
            system respond to tuning parameters are different experiences —
            both are necessary. The project also reinforces an appreciation for
            real-time, resource-constrained engineering, and for how
            mathematical models (like the PDI equation) become physical
            behavior.
          </p>
        </div>
      </section>

      <section className="py-12 bg-[var(--color-bg-warm)] border-y border-[var(--color-border)]">
        <div className="container-narrow max-w-3xl">
          <h2 className="display-font text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-6">
            Connect
          </h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
            Additional materials and related work can be found on my GitHub.
          </p>
          <a
            href="https://github.com/riyadh5674"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--color-accent)] text-white font-medium text-sm hover:bg-[var(--color-accent-hover)] transition-colors"
          >
            GitHub Profile
          </a>
        </div>
      </section>
    </>
  );
}

/* ============================================
   SUB INNOVATION CLUB WEBSITE CONTENT
   ============================================ */
function InnovationClubContent() {
  const features = [
    {
      title: "Hero + stats strip",
      desc: "Animated tagline with a key-stats strip that counts up on scroll.",
    },
    {
      title: "About / Mission / Vision",
      desc: "The club's story and purpose, written as real editorial content.",
    },
    {
      title: "All 8 flagship activities",
      desc: "Competitions and challenges presented as visual, content-rich cards.",
    },
    {
      title: "Events timeline",
      desc: "A highlights timeline rebuilt from the club's official Facebook page.",
    },
    {
      title: "Executive committee + advisors",
      desc: "Data-driven member cards for the committee, convenor and advisors.",
    },
    {
      title: "Photo gallery",
      desc: "A lightbox gallery of workshops and events.",
    },
    {
      title: "FAQ + testimonials",
      desc: "An 8-question accordion and member testimonials to build trust.",
    },
    {
      title: "Partners + news",
      desc: "Affiliations section and blog-style announcement cards.",
    },
  ];

  return (
    <>
      <section className="py-12 border-t border-[var(--color-border)]">
        <div className="container-narrow max-w-3xl prose">
          <h2 className="display-font text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-6">
            Overview
          </h2>
          <p>
            The official{" "}
            <strong>
              SUB Innovation Club
            </strong>{" "}
            page for the State University of Bangladesh consisted of little more
            than a one-line objective and a list of activity names. On my own
            initiative, I conceived and built a{" "}
            <span className="text-[var(--color-text)] font-medium">
              complete, production-ready redesign
            </span>{" "}
            as a proposal for the club&apos;s 2026&ndash;27 relaunch.
          </p>
          <p className="mt-4">
            The result is a rich, content-driven platform built with{" "}
            <strong>Vite, SCSS and Bootstrap 5</strong> — deliberately matching
            the university&apos;s existing Bootstrap-based stack so the club&apos;s
            page can merge cleanly into sub.ac.bd. Real club information
            (convenor, recent workshops, flagship activities) was incorporated
            from the official site and the club&apos;s Facebook page.
          </p>
        </div>
      </section>

      <section className="py-12 bg-[var(--color-bg-warm)] border-y border-[var(--color-border)]">
        <div className="container-narrow max-w-3xl">
          <h2 className="display-font text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-6">
            What I built
          </h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6">
            15+ designed content sections across the page, all on a responsive
            Bootstrap 5 foundation:
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((f) => (
              <div
                key={f.title}
                className="p-5 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)]"
              >
                <h3 className="text-sm font-semibold text-[var(--color-text)] mb-1.5">
                  {f.title}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 border-t border-[var(--color-border)]">
        <div className="container-narrow max-w-3xl">
          <h2 className="display-font text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-6">
            The membership system
          </h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
            A complete online membership application flow with a{" "}
            <span className="text-[var(--color-text)] font-medium">
              6-step validated form
            </span>
            :
          </p>
          <ul className="space-y-3">
            {[
              "Personal — name, student ID, photo, DOB, gender, blood group",
              "Academic — department, batch, semester, session",
              "Contact — email, phone, WhatsApp, address, emergency contact",
              "Skills & interests — checkboxes, motivation, experience",
              "Payment — bKash / Nagad / Rocket / bank (৳300) with transaction proof",
              "Review & submit — full summary, terms acceptance, confirmation with reference number",
            ].map((item) => (
              <li
                key={item}
                className="flex gap-2 text-sm text-[var(--color-text-secondary)] leading-relaxed"
              >
                <span className="text-[var(--color-accent)] mt-1">•</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-[var(--color-text-secondary)] leading-relaxed">
            The form validates fields in real time (student-id pattern, email,
            phone) and delivers every submission straight to the club by email
            via Formspree — so the committee receives applications without any
            server maintenance.
          </p>
        </div>
      </section>

      <section className="py-12 bg-[var(--color-bg-warm)] border-y border-[var(--color-border)]">
        <div className="container-narrow max-w-3xl">
          <h2 className="display-font text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-6">
            Engineering decisions
          </h2>
          <ul className="space-y-4">
            {[
              {
                title: "Stack that matches the university",
                desc: "Bootstrap 5 + SCSS + vanilla JavaScript, the same foundation the university uses — no new framework to learn or maintain.",
              },
              {
                title: "Content edit by anyone",
                desc: "Every word on the site lives in a single data file (src/data/club-data.js). Future committee members update content, not code.",
              },
              {
                title: "Automated deployment",
                desc: "A GitHub Actions workflow builds with Vite and publishes to GitHub Pages on every push to main.",
              },
              {
                title: "Adoption path to sub.ac.bd",
                desc: "The compiled static output swaps directly into the university CMS — replace the header/footer, keep <main>, add the CSS/JS.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-5 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)]"
              >
                <h3 className="text-sm font-semibold text-[var(--color-text)] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-12 border-t border-[var(--color-border)]">
        <div className="container-narrow max-w-3xl">
          <h2 className="display-font text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-4">
            Status &amp; adoption
          </h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
            The proposal is live on GitHub Pages and fully documented for the
            committee — including how the university IT team merges it into the
            official site. It is licensed MIT so the club can adopt, extend, and
            own it freely.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://riyadh5674.github.io/sub-innovation-club"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary sheen"
            >
              Visit Live Site
            </a>
            <a
              href="https://github.com/riyadh5674/sub-innovation-club"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

/* ============================================
   AMES HOUSING PRICE PREDICTION CONTENT
   ============================================ */
function AmesHousingContent() {
  const metrics = [
    { metric: "Testing R²", value: "0.885", note: "88.5% of price variance explained on unseen data" },
    { metric: "Testing RMSE", value: "≈ $22k", note: "Typical magnitude of prediction errors" },
    { metric: "Testing MAE", value: "≈ $16.4k", note: "Within ~8.2% of actual sale price" },
    { metric: "5-Fold CV R²", value: "0.88 ± 0.02", note: "Stable across data subsets" },
  ];

  return (
    <>
      <section className="py-12 border-t border-[var(--color-border)]">
        <div className="container-narrow max-w-3xl prose">
          <h2 className="display-font text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-6">
            Overview
          </h2>
          <p>
            A comprehensive case study in{" "}
            <strong>supervised machine learning</strong>: predict the final sale
            price of residential homes in Ames, Iowa, from{" "}
            <span className="text-[var(--color-text)] font-medium">
              81 descriptive features
            </span>{" "}
            — zoning, quality ratings, square footage, neighborhood, and more.
          </p>
          <p className="mt-4">
            Where typical tutorials stop at a fitted model, this project follows
            the MLOps discipline of{" "}
            <strong>no data leakage</strong> — every encoding and scaling step
            is fitted on the training data only and composed into a single
            scikit-learn <code>Pipeline</code>, the same structure used for
            production deployment.
          </p>
        </div>
      </section>

      <section className="py-12 bg-[var(--color-bg-warm)] border-y border-[var(--color-border)]">
        <div className="container-narrow max-w-3xl">
          <h2 className="display-font text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-6">
            Data &amp; preprocessing
          </h2>
          <ul className="space-y-3">
            {[
              "Missing values handled via imputation",
              "Engineered features: House_Age, Total_SF",
              "Log-transformation of the target to correct skewness",
              "Numerical features standardized (StandardScaler)",
              "Categorical features one-hot encoded (first category dropped to avoid multicollinearity)",
              "80/20 train-test split performed before any transformations",
            ].map((item) => (
              <li
                key={item}
                className="flex gap-2 text-sm text-[var(--color-text-secondary)] leading-relaxed"
              >
                <span className="text-[var(--color-accent)] mt-1">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-12 border-t border-[var(--color-border)]">
        <div className="container-narrow max-w-3xl">
          <h2 className="display-font text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-6">
            Exploratory analysis
          </h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6">
            EDA drove the preprocessing decisions — how the target is
            distributed, which features correlate most strongly, and which
            plots exposed the transformations worth making.
          </p>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                src: asset("/projects/ames-correlation.png"),
                alt: "Correlation heatmap of Ames features",
                cap: "Correlation structure across features",
              },
              {
                src: asset("/projects/ames-log-distribution.png"),
                alt: "Distribution of log-transformed sale price",
                cap: "Log-transformed target distribution",
              },
              {
                src: asset("/projects/ames-top-features.png"),
                alt: "Top 15 correlated features with sale price",
                cap: "Top features by correlation",
              },
            ].map((img) => (
              <figure
                key={img.src}
                className="rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] overflow-hidden"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={1200}
                  height={750}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
                <figcaption className="px-3 py-2.5 text-xs text-[var(--color-text-tertiary)]">
                  {img.cap}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-[var(--color-bg-warm)] border-y border-[var(--color-border)]">
        <div className="container-narrow max-w-3xl">
          <h2 className="display-font text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-6">
            Results
          </h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6">
            Ordinary Least Squares linear regression via the normal equation
            (Scikit-Learn&apos;s <code>LinearRegression</code>), capturing 317
            features after encoding:
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {metrics.map((m) => (
              <div
                key={m.metric}
                className="p-5 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)]"
              >
                <div className="display-font text-xl font-bold text-[var(--color-accent)] mb-1">
                  {m.value}
                </div>
                <div className="text-sm font-medium text-[var(--color-text)]">
                  {m.metric}
                </div>
                <div className="mt-1 text-xs text-[var(--color-text-tertiary)] leading-relaxed">
                  {m.note}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 p-5 rounded-lg border border-[var(--color-border-light)] bg-[var(--color-bg-soft)]">
            <h3 className="text-sm font-semibold text-[var(--color-text)] mb-2">
              Interpretation
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              Standardized coefficients identify the strongest price drivers —
              <span className="text-[var(--color-text)]"> Overall_Qual</span>{" "}
              and
              <span className="text-[var(--color-text)]"> Gr_Liv_Area</span> —
              as well as the strongest detractors. Residual analysis (Q-Q
              plots, histograms, actual-vs-predicted scatter) confirmed
              homoscedasticity and near-normal errors.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 border-t border-[var(--color-border)]">
        <div className="container-narrow max-w-3xl">
          <h2 className="display-font text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-6">
            The production pipeline
          </h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
            The preprocessor and regressor are bundled into a single{" "}
            <code>Pipeline</code> and serialized as{" "}
            <code>ames_housing_pipeline.pkl</code> — capable of predicting on
            new raw data in a single line of code, which is the point of the
            no-leakage discipline.
          </p>
          <pre className="p-4 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-soft)] text-xs font-mono text-[var(--color-text-secondary)] overflow-x-auto leading-relaxed">
{`# predict on brand-new, raw data
import joblib
pipe = joblib.load("ames_housing_pipeline.pkl")
pred = pipe.predict(raw_records)`}
          </pre>
        </div>
      </section>

      <section className="py-12 bg-[var(--color-bg-warm)] border-y border-[var(--color-border)]">
        <div className="container-narrow max-w-3xl">
          <h2 className="display-font text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-6">
            What I took away
          </h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            Beyond the score, this case study sharpened the habits that matter
            in applied ML:{" "}
            <span className="text-[var(--color-text)] font-medium">
              splitting before transforming, diagnosing rather than assuming,
              and interpreting models rather than just fitting them
            </span>
            . It also demonstrated that a method as classical as linear
            regression still rewards a professional, reproducible pipeline.
          </p>
        </div>
      </section>
    </>
  );
}
