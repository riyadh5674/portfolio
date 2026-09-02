import { notFound } from "next/navigation";
import { projects, getProjectById, type Project } from "@/data/projects";
import { asset } from "@/lib/paths";
import StatusBadge from "@/components/StatusBadge";
import Link from "next/link";
import Image from "next/image";

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
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-medium tracking-wide uppercase text-[var(--color-accent)]">
              {project.category === "research"
                ? "Research"
                : project.category === "engineering"
                ? "Engineering"
                : "Robotics"}
            </span>
            <StatusBadge status={project.status} />
          </div>

          <h1 className="text-3xl md:text-4xl font-semibold text-[var(--color-text)] mb-3">
            {project.title}
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)] mb-6">
            {project.subtitle}
          </p>

          {/* Technology */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] text-xs text-[var(--color-text-secondary)]"
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
                GitHub
              </a>
            )}
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[var(--color-border)] text-[var(--color-text)] font-medium text-sm hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
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
      <section className="py-12 border-t border-[var(--color-border)]">
        <div className="container-narrow max-w-3xl">
          <h2 className="text-xl md:text-2xl font-semibold text-[var(--color-text)] mb-6">
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

      <section className="py-12 bg-[var(--color-bg-warm)] border-y border-[var(--color-border)]">
        <div className="container-narrow max-w-3xl">
          <h2 className="text-xl md:text-2xl font-semibold text-[var(--color-text)] mb-6">
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

      <section className="py-12 border-t border-[var(--color-border)]">
        <div className="container-narrow max-w-3xl prose">
          <h2 className="text-xl md:text-2xl font-semibold text-[var(--color-text)] mb-6">
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

      <section className="py-12 bg-[var(--color-bg-warm)] border-y border-[var(--color-border)]">
        <div className="container-narrow max-w-3xl prose">
          <h2 className="text-xl md:text-2xl font-semibold text-[var(--color-text)] mb-6">
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

      <section className="py-12 border-t border-[var(--color-border)]">
        <div className="container-narrow max-w-3xl prose">
          <h2 className="text-xl md:text-2xl font-semibold text-[var(--color-text)] mb-6">
            Model experiments
          </h2>
          <p>Four configurations were investigated:</p>
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
                </tr>
              </thead>
              <tbody className="text-[var(--color-text-secondary)]">
                <tr className="border-b border-[var(--color-border-light)]">
                  <td className="py-3 pr-4">LightGBM</td>
                  <td className="py-3">Unconstrained baseline</td>
                </tr>
                <tr className="border-b border-[var(--color-border-light)]">
                  <td className="py-3 pr-4">Physics-guided LightGBM</td>
                  <td className="py-3">With physical monotonic constraints</td>
                </tr>
                <tr className="border-b border-[var(--color-border-light)]">
                  <td className="py-3 pr-4">CatBoost</td>
                  <td className="py-3">Unconstrained baseline</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4">Physics-guided CatBoost</td>
                  <td className="py-3">With physical monotonic constraints</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-12 bg-[var(--color-bg-warm)] border-y border-[var(--color-border)]">
        <div className="container-narrow max-w-3xl">
          <h2 className="text-xl md:text-2xl font-semibold text-[var(--color-text)] mb-6">
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

      <section className="py-12 border-t border-[var(--color-border)]">
        <div className="container-narrow max-w-3xl prose">
          <h2 className="text-xl md:text-2xl font-semibold text-[var(--color-text)] mb-6">
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

      <section className="py-12 bg-[var(--color-bg-warm)] border-y border-[var(--color-border)]">
        <div className="container-narrow max-w-3xl">
          <h2 className="text-xl md:text-2xl font-semibold text-[var(--color-text)] mb-6">
            Status & future work
          </h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6">
            This is ongoing research, intended for further development and
            eventual publication. Key directions:
          </p>
          <ul className="space-y-3">
            {[
              "Time-aware validation that respects temporal structure",
              "Deeper analysis of constraint effects on model behavior",
              "Further feature engineering informed by hydrological domain knowledge",
              "Reproducible, well-documented experiments",
              "Development toward academic writing and publication",
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
              href="https://github.com/riyadh5674/Bangladesh-Flood-Predictor"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--color-accent)] text-white font-medium text-sm hover:bg-[var(--color-accent-hover)] transition-colors"
            >
              View on GitHub
            </a>
            <Link
              href="/research"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[var(--color-border)] text-[var(--color-text)] font-medium text-sm hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
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
          <h2 className="text-xl md:text-2xl font-semibold text-[var(--color-text)] mb-6">
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
          <h2 className="text-xl md:text-2xl font-semibold text-[var(--color-text)] mb-6">
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
          <h2 className="text-xl md:text-2xl font-semibold text-[var(--color-text)] mb-6">
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
          <h2 className="text-xl md:text-2xl font-semibold text-[var(--color-text)] mb-6">
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
          <h2 className="text-xl md:text-2xl font-semibold text-[var(--color-text)] mb-6">
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
          <h2 className="text-xl md:text-2xl font-semibold text-[var(--color-text)] mb-6">
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
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--color-accent)] text-white font-medium text-sm hover:bg-[var(--color-accent-hover)] transition-colors"
            >
              Try the Live Demo
            </a>
            <a
              href="https://github.com/riyadh5674/TeaQuest"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[var(--color-border)] text-[var(--color-text)] font-medium text-sm hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
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
          <h2 className="text-xl md:text-2xl font-semibold text-[var(--color-text)] mb-6">
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
          <h2 className="text-xl md:text-2xl font-semibold text-[var(--color-text)] mb-6">
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
          <h2 className="text-xl md:text-2xl font-semibold text-[var(--color-text)] mb-6">
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
          <h2 className="text-xl md:text-2xl font-semibold text-[var(--color-text)] mb-6">
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
          <h2 className="text-xl md:text-2xl font-semibold text-[var(--color-text)] mb-6">
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
          <h2 className="text-xl md:text-2xl font-semibold text-[var(--color-text)] mb-6">
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
