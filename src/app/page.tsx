import Link from "next/link";
import Image from "next/image";
import { getFeaturedProjects } from "@/data/projects";
import { asset } from "@/lib/paths";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import Tilt from "@/components/Tilt";
import Typewriter from "@/components/Typewriter";
import Counter from "@/components/Counter";
import Marquee from "@/components/Marquee";
import Spotlight from "@/components/Spotlight";

export default function HomePage() {
  const featured = getFeaturedProjects();

  return (
    <>
      {/* ==================== HERO ==================== */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        <div className="container-narrow relative z-10">
          <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] items-center py-16">
            {/* Left — copy */}
            <div className="stagger-children">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--color-accent)]/25 bg-[var(--color-accent-soft)] text-[var(--color-accent)] text-xs font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
                Computer Science &amp; Engineering
              </div>

              <h1 className="display-font text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[var(--color-text)] leading-[1.02] mb-6">
                MD&nbsp;
                <span className="text-gradient-animate">Riyad</span>
              </h1>

              <div className="flex items-center gap-2 text-xl md:text-2xl text-[var(--color-text-secondary)] font-medium mb-3">
                <span className="animate-wave text-2xl" aria-hidden="true">👋</span>
                <span>I&apos;m a</span>
                <Typewriter
                  words={[
                    "researcher",
                    "machine learning enthusiast",
                    "software builder",
                    "problem solver",
                  ]}
                  className="text-[var(--color-accent)]"
                />
              </div>

              <p className="text-base text-[var(--color-text-tertiary)] leading-relaxed mb-9 max-w-xl">
                My work sits where physics-guided machine learning, mathematics,
                engineering, and creative software design converge.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <Link href="/research" className="btn-primary sheen">
                  Research &amp; Projects
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
                <a
                  href="https://github.com/riyadh5674"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
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
              </div>

              {/* Animated stats strip */}
              <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
                <div className="border-l-2 border-[var(--color-accent)] pl-3">
                  <div className="display-font text-3xl font-bold text-[var(--color-text)]">
                    <Counter end={3.99} suffix="/4" />
                  </div>
                  <div className="text-xs text-[var(--color-text-tertiary)] mt-1">
                    CGPA
                  </div>
                </div>
                <div className="border-l-2 border-[var(--color-accent)] pl-3">
                  <div className="display-font text-3xl font-bold text-[var(--color-text)]">
                    <Counter end={4} suffix="th" />
                  </div>
                  <div className="text-xs text-[var(--color-text-tertiary)] mt-1">
                    Semester
                  </div>
                </div>
                <div className="border-l-2 border-[var(--color-accent)] pl-3">
                  <div className="display-font text-3xl font-bold text-[var(--color-text)]">
                    CR
                  </div>
                  <div className="text-xs text-[var(--color-text-tertiary)] mt-1">
                    Class Rep
                  </div>
                </div>
              </div>
            </div>

            {/* Right — animated avatar card */}
            <div className="hidden lg:block relative">
              <div
                className="absolute inset-0 m-auto h-72 w-72 rounded-full bg-gradient-to-br from-[var(--color-accent)] via-[var(--color-accent-2)] to-[var(--color-accent-3)] opacity-30 blur-3xl animate-glow-pulse"
                aria-hidden="true"
              />
              <Tilt className="relative animate-scale-in">
                <div className="card card-glow p-8 flex flex-col items-center text-center overflow-hidden">
                  {/* rotating conic ring behind avatar */}
                  <div className="relative mb-6">
                    <div
                      className="absolute -inset-1 rounded-full opacity-40 blur-xl animate-spin-slow"
                      style={{
                        background:
                          "conic-gradient(from 0deg, transparent 0deg, var(--color-accent) 90deg, transparent 180deg)",
                      }}
                      aria-hidden="true"
                    />
                    <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-2)] shadow-[0_0_40px_rgb(45_212_191/0.4)]">
                      <span className="display-font text-4xl font-bold text-[#04110d]">
                        MR
                      </span>
                    </div>
                    <span className="absolute bottom-1 right-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-[var(--color-bg-card)] bg-[var(--color-success)]" />
                  </div>
                  <div className="font-mono text-xs text-[var(--color-text-tertiary)] tracking-widest uppercase mb-1">
                    State University of Bangladesh
                  </div>
                  <div className="text-sm text-[var(--color-text-secondary)]">
                    Research · Engineering · Robotics
                  </div>

                  <div className="mt-6 w-full border-t border-[var(--color-border)] pt-5 flex items-center justify-center gap-4 text-xs text-[var(--color-text-tertiary)]">
                    <span className="inline-flex items-center gap-1.5">
                      <span className="text-[var(--color-success)]">●</span> Available
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <span className="text-[var(--color-accent)]">●</span> Research
                    </span>
                  </div>
                </div>
              </Tilt>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-6 flex flex-col items-center gap-2 left-0 right-0 z-10">
          <span className="text-xs text-[var(--color-text-muted)] tracking-wider uppercase font-mono">
            Scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-[var(--color-accent)] to-transparent animate-pulse" />
        </div>
      </section>

      {/* ==================== TECH MARQUEE ==================== */}
      <section className="border-y border-[var(--color-border)] py-6 bg-[var(--color-bg-soft)]/50">
        <div className="container-narrow">
          <Marquee
            items={[
              "Python",
              "Machine Learning",
              "LightGBM",
              "CatBoost",
              "GeoPandas",
              "scikit-learn",
              "C++",
              "Java",
              "JavaScript",
              "Supabase",
              "PostgreSQL",
              "Arduino",
              "Control Systems",
              "Algorithms",
            ]}
          />
        </div>
      </section>

      {/* ==================== THREAD / INTRO ==================== */}
      <section className="py-20 md:py-28 border-t border-[var(--color-border)]">
        <div className="container-narrow">
          <Reveal>
            <p className="display-font text-2xl md:text-4xl leading-snug text-[var(--color-text)] max-w-4xl font-medium">
              I move between{" "}
              <span className="text-gradient-animate font-bold">research</span>,{" "}
              <span className="text-gradient-animate font-bold">mathematics</span>,{" "}
              <span className="text-gradient-animate font-bold">engineering</span>, and{" "}
              <span className="text-gradient-animate font-bold">creativity</span> —
              understanding difficult problems, reasoning about models, and
              building systems that turn ideas into working reality.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ==================== SELECTED WORK ==================== */}
      <section className="py-16 md:py-24">
        <div className="container-narrow">
          <Reveal>
            <SectionHeading
              index="01"
              label="Selected Work"
              title="Things I'm investigating and building"
              description="Five projects that reflect the range of my interests — from physics-guided research and reproducible ML pipelines to interactive software, club-scale web builds, and control-based robotics."
            />
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((project, i) => (
              <Reveal key={project.id} delay={i * 90}>
                <Spotlight className="h-full rounded-xl">
                  <ProjectCard project={project} />
                </Spotlight>
              </Reveal>
            ))}
          </div>
          <Reveal delay={150}>
            <div className="mt-12 text-center">
              <Link href="/projects" className="btn-ghost">
                View all projects
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
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ==================== RESEARCH ==================== */}
      <section className="py-20 md:py-28 bg-[var(--color-bg-soft)] border-y border-[var(--color-border)]">
        <div className="container-narrow">
          <Reveal>
            <SectionHeading
              index="02"
              label="Research"
              title="Physics-guided ML for flood prediction"
              description="An ongoing investigation into how domain knowledge can be embedded in machine learning models through physically meaningful features and constraints."
            />
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="card card-glow p-7 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-2)] text-[#04110d]">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                    </svg>
                  </span>
                  <h3 className="display-font text-xl font-bold text-[var(--color-text)]">
                    Bangladesh Flood Predictor
                  </h3>
                </div>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-6 flex-1">
                  Bangladesh&apos;s geography makes it among the most flood-prone
                  regions on Earth. This research explores whether machine
                  learning with physically meaningful features can produce
                  flood-risk predictions that are both accurate and consistent
                  with domain knowledge.
                </p>
                <Link
                  href="/projects/bangladesh-flood-predictor"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-accent)] hover:text-[var(--color-accent-2)] transition-colors group"
                >
                  Read the investigation
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform group-hover:translate-x-1"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="card card-glow p-7 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-3)] text-[#04110d]">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 3v3m6-3v3M9 3a2 2 0 1 0 0 6m6-6a2 2 0 1 0 0 6m-9 3h12M9 12v6m6-6v6m2 3H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2z" />
                    </svg>
                  </span>
                  <h3 className="display-font text-xl font-bold text-[var(--color-text)]">
                    The Investigation
                  </h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Environmental, geographic & seasonal feature engineering",
                    "Geospatial risk features with GeoPandas",
                    "LightGBM & CatBoost baselines vs. physics-guided variants",
                    "Evaluating predictive performance alongside physical consistency",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm text-[var(--color-text-secondary)]"
                    >
                      <span className="mt-0.5 text-[var(--color-accent)] font-mono">
                        →
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ==================== ENGINEERING ==================== */}
      <section className="py-16 md:py-24">
        <div className="container-narrow">
          <Reveal>
            <SectionHeading
              index="03"
              label="Build"
              title="Systems that are experiments in experience"
              description="Beyond research, I build software that combines engineering rigor with creative interaction design."
            />
          </Reveal>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Innovation Club website highlight */}
            <Reveal>
              <Spotlight className="h-full rounded-xl">
              <div className="group card card-glow overflow-hidden">
                <div className="relative aspect-[16/9] overflow-hidden bg-[var(--color-bg-elevated)]">
                  {/* Browser-frame visual */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                    <div className="w-40 rounded-lg border border-[var(--color-border-light)] bg-[var(--color-bg-card)] shadow-md overflow-hidden">
                      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-[var(--color-border)]">
                        <span className="w-2 h-2 rounded-full bg-[#f87171]" />
                        <span className="w-2 h-2 rounded-full bg-[#fbbf24]" />
                        <span className="w-2 h-2 rounded-full bg-[#34d399]" />
                      </div>
                      <div className="p-3 space-y-1.5">
                        <div className="h-1.5 w-3/4 rounded-full bg-[var(--color-accent)]/70" />
                        <div className="h-1.5 w-1/2 rounded-full bg-[var(--color-border-light)]" />
                        <div className="h-1.5 w-2/3 rounded-full bg-[var(--color-border-light)]" />
                        <div className="h-1.5 w-1/3 rounded-full bg-[var(--color-accent)]/40" />
                      </div>
                    </div>
                    <span className="font-mono text-xs tracking-widest text-[var(--color-text-tertiary)]">
                      Bootstrap&nbsp;5&nbsp;·&nbsp;SCSS&nbsp;·&nbsp;Vite
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-card)] to-transparent" />
                  <span className="absolute bottom-3 left-4 text-xs font-medium px-2.5 py-1 rounded-md bg-black/50 text-white backdrop-blur">
                    SUB Innovation Club — full website redesign
                  </span>
                </div>
                <div className="p-7">
                  <h3 className="display-font text-xl font-bold text-[var(--color-text)] mb-3">
                    SUB Innovation Club Website
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-5">
                    A production-ready redesign proposal for the club&apos;s web
                    presence — 15+ sections, an online membership system with
                    payment, and automated deployment, ready for the university
                    IT team to adopt.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Vite", "Bootstrap 5", "SCSS", "Formspree"].map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-xs rounded-md border border-[var(--color-border-light)] bg-[var(--color-bg-soft)] text-[var(--color-text-tertiary)] font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 pt-5 border-t border-[var(--color-border)]">
                    <Link
                      href="/projects/innovation-club-website"
                      className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-accent)] transition-colors group/link"
                    >
                      View project
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-transform group-hover/link:translate-x-1"
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              </Spotlight>
            </Reveal>

            {/* TeaQuest highlight */}
            <Reveal delay={100}>
              <Spotlight className="h-full rounded-xl">
              <div className="group card card-glow overflow-hidden">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={asset("/projects/home.png")}
                    alt="TeaQuest pixel-art fantasy home screen"
                    width={1200}
                    height={750}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-card)] via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-4 text-xs font-medium px-2.5 py-1 rounded-md bg-black/50 text-white backdrop-blur">
                    TeaQuest — pixel-art fantasy storefront
                  </span>
                </div>
                <div className="p-7">
                  <h3 className="display-font text-xl font-bold text-[var(--color-text)] mb-3">
                    TeaQuest
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-5">
                    An original pixel-art fantasy e-commerce platform that wraps a
                    complete shopping experience in a world of exploration,
                    progression, and social interaction.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {["HTML5", "JS", "Supabase", "PostgreSQL"].map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 text-xs rounded-md border border-[var(--color-border-light)] bg-[var(--color-bg-soft)] text-[var(--color-text-tertiary)] font-mono"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-6 pt-5 border-t border-[var(--color-border)]">
                    <Link
                      href="/projects/teaquest"
                      className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-info)] transition-colors group/link"
                    >
                      View project
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-transform group-hover/link:translate-x-1"
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              </Spotlight>
            </Reveal>

            {/* Robotics highlight */}
            <Reveal delay={100}>
              <Spotlight className="h-full rounded-xl">
              <div className="group card card-glow overflow-hidden">
                <div className="relative aspect-[16/9] overflow-hidden bg-[var(--color-bg-elevated)]">
                  {/* Robotics visual */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                    <svg
                      width="140"
                      height="68"
                      viewBox="0 0 140 68"
                      fill="none"
                      className="text-[var(--color-accent)]/80"
                    >
                      <path
                        d="M12 46 L34 34 L56 40 L78 22 L100 34 L128 28"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        fill="none"
                      />
                      <circle cx="12" cy="46" r="4" fill="currentColor" />
                      <circle cx="34" cy="34" r="4" fill="currentColor" />
                      <circle cx="56" cy="40" r="4" fill="currentColor" />
                      <circle cx="78" cy="22" r="4" fill="currentColor" />
                      <circle cx="100" cy="34" r="4" fill="currentColor" />
                      <circle cx="128" cy="28" r="4" fill="currentColor" />
                    </svg>
                    <span className="font-mono text-xs tracking-widest text-[var(--color-text-tertiary)]">
                      P·D·I·control
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-card)] to-transparent" />
                  <span className="absolute bottom-3 left-4 text-xs font-medium px-2.5 py-1 rounded-md bg-black/50 text-white backdrop-blur">
                    PDI Line Follower — feedback control
                  </span>
                </div>
                <div className="p-7">
                  <h3 className="display-font text-xl font-bold text-[var(--color-text)] mb-3">
                    PDI-Based Line Follower
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-5">
                    A robotics project applying Proportional-Derivative-Integral
                    feedback control to autonomous navigation — control theory in
                    a practical, physical system.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["Arduino", "C", "Control Systems"].map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-xs rounded-md border border-[var(--color-border-light)] bg-[var(--color-bg-soft)] text-[var(--color-text-tertiary)] font-mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 pt-5 border-t border-[var(--color-border)]">
                    <Link
                      href="/projects/line-follower-robot"
                      className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-warning)] transition-colors group/link"
                    >
                      View project
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-transform group-hover/link:translate-x-1"
                      >
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
              </Spotlight>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ==================== PROBLEM SOLVING ==================== */}
      <section className="py-20 md:py-28 bg-[var(--color-bg-soft)] border-y border-[var(--color-border)]">
        <div className="container-narrow">
          <Reveal>
            <SectionHeading
              index="04"
              label="Practice"
              title="Algorithmic problem solving"
              description="I regularly practice data structures and algorithms on competitive programming platforms."
            />
          </Reveal>
          <Reveal delay={100}>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://leetcode.com/u/riyadh5674/"
                target="_blank"
                rel="noopener noreferrer"
                className="card card-glow inline-flex items-center gap-4 px-6 py-4"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--color-warning)] to-[var(--color-accent)] font-mono font-bold text-[#201200]">
                  LF
                </span>
                <span className="flex flex-col">
                  <span className="text-sm font-semibold text-[var(--color-text)]">
                    LeetCode
                  </span>
                  <span className="text-xs text-[var(--color-text-tertiary)]">
                    Algorithms &amp; data structures
                  </span>
                </span>
              </a>
              <a
                href="https://codeforces.com/profile/riyadh5674"
                target="_blank"
                rel="noopener noreferrer"
                className="card card-glow inline-flex items-center gap-4 px-6 py-4"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--color-info)] to-[var(--color-accent-3)] font-mono font-bold text-[#04121e]">
                  CF
                </span>
                <span className="flex flex-col">
                  <span className="text-sm font-semibold text-[var(--color-text)]">
                    Codeforces
                  </span>
                  <span className="text-xs text-[var(--color-text-tertiary)]">
                    Competitive problem solving
                  </span>
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ==================== ABOUT SNIPPET ==================== */}
      <section className="py-16 md:py-24">
        <div className="container-narrow">
          <Reveal>
            <SectionHeading
              index="05"
              label="About"
              title="A student of computer science, machine learning, and ideas"
            />
          </Reveal>
          <Reveal delay={80}>
            <div className="grid gap-10 md:grid-cols-3 items-start">
              <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed md:col-span-2">
                I&apos;m a 4th-semester Computer Science &amp; Engineering student at
                the State University of Bangladesh with a CGPA of 3.99/4.00. My
                interests span machine learning, its mathematical foundations,
                and the engineering required to build systems that work in the
                real world.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 self-start text-sm font-medium text-[var(--color-accent)] hover:text-[var(--color-accent-2)] transition-colors group"
              >
                More about me
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform group-hover:translate-x-1"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ==================== LEADERSHIP ==================== */}
      <section className="py-20 md:py-28 bg-[var(--color-bg-soft)] border-y border-[var(--color-border)]">
        <div className="container-narrow">
          <Reveal>
            <SectionHeading
              index="06"
              label="Leadership"
              title="Class Representative"
              description="Serving as Class Representative for my cohort — coordinating schedules, communicating information, and helping students and faculty work together toward collective progress."
            />
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Manages and communicates class schedules",
              "Coordinates examination-related information",
              "Represents multiple perspectives to faculty",
              "Helps students coordinate and communicate",
              "Works toward collective academic progress",
              "Helps the class grow together",
            ].map((item, i) => (
              <Reveal key={item} delay={i * 60}>
                <div className="card p-5 flex items-start gap-3 h-full">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </span>
                  <span className="text-sm text-[var(--color-text-secondary)]">
                    {item}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CONTACT ==================== */}
      <section className="py-20 md:py-28">
        <div className="container-narrow">
          <Reveal>
            <div className="card card-glow p-10 md:p-16 text-center max-w-3xl mx-auto overflow-hidden">
              <h2 className="display-font text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-4">
                Let&apos;s <span className="text-gradient">connect</span>
              </h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-9 max-w-lg mx-auto">
                If you&apos;re interested in research, technical collaboration, or
                exchanging ideas, I&apos;d be glad to connect.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="mailto:riyadhmia999@gmail.com"
                  className="btn-primary sheen"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  Email Me
                </a>
                <a
                  href="https://github.com/riyadh5674"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
