import Link from "next/link";
import Image from "next/image";
import { getFeaturedProjects } from "@/data/projects";
import { asset } from "@/lib/paths";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";

export default function HomePage() {
  const featured = getFeaturedProjects();

  return (
    <>
      {/* ==================== HERO ==================== */}
      <section className="min-h-screen flex flex-col justify-center relative">
        <div className="container-narrow">
          <div className="max-w-3xl stagger-children">
            {/* Name */}
            <div className="mb-4">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium tracking-wide bg-[var(--color-accent-light)] text-[var(--color-accent)] mb-8">
                Computer Science & Engineering
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-[var(--color-text)] tracking-tight mb-6">
              MD RIYAD
            </h1>

            <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed mb-8 max-w-2xl">
              Researching intelligent systems. Building thoughtful software.
              Exploring how mathematics, algorithms, and engineering come
              together to solve real problems.
            </p>

            <p className="text-base text-[var(--color-text-tertiary)] leading-relaxed mb-10 max-w-2xl">
              My work sits at the intersection of research, mathematics, and
              building — investigating physics-guided machine learning, designing
              interactive software, and applying control theory in robotics.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/research"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--color-accent)] text-white font-medium text-sm hover:bg-[var(--color-accent-hover)] transition-colors"
              >
                Research & Projects
                <svg
                  width="14"
                  height="14"
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
              <a
                href="https://github.com/riyadh5674"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[var(--color-border)] text-[var(--color-text)] font-medium text-sm hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
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

            {/* Info strip */}
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-[var(--color-text-tertiary)]">
              <span className="inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
                State University of Bangladesh
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
                4th semester · 3.99 / 4.00
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
                Class Representative
              </span>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs text-[var(--color-text-muted)] tracking-wider uppercase">
              Scroll
            </span>
            <div className="w-px h-12 bg-[var(--color-border)] animate-pulse" />
          </div>
        </div>
      </section>

      {/* ==================== THREAD ==================== */}
      <section className="py-16 md:py-20 border-t border-[var(--color-border)]">
        <div className="container-narrow">
          <p className="text-sm md:text-base text-[var(--color-text-secondary)] leading-relaxed max-w-3xl">
            I move between{" "}
            <span className="text-[var(--color-text)] font-medium">
              research
            </span>
            ,{" "}
            <span className="text-[var(--color-text)] font-medium">
              mathematics
            </span>
            ,{" "}
            <span className="text-[var(--color-text)] font-medium">
              engineering
            </span>
            , and{" "}
            <span className="text-[var(--color-text)] font-medium">
              creativity
            </span>{" "}
            — understanding difficult problems, reasoning about models, and
            building systems that turn ideas into working reality.
          </p>
        </div>
      </section>

      {/* ==================== SELECTED WORK ==================== */}
      <section className="py-16 md:py-24">
        <div className="container-narrow">
          <SectionHeading
            label="Selected Work"
            title="Things I'm investigating and building"
            description="Three projects that reflect the range of my interests — from physics-guided research to interactive software and control-based robotics."
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors"
            >
              View all projects
              <svg
                width="14"
                height="14"
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
        </div>
      </section>

      {/* ==================== RESEARCH ==================== */}
      <section className="py-16 md:py-24 bg-[var(--color-bg-warm)] border-y border-[var(--color-border)]">
        <div className="container-narrow">
          <SectionHeading
            label="Research"
            title="Physics-guided machine learning for flood prediction"
            description="An ongoing investigation into how domain knowledge can be embedded in machine learning models through physically meaningful features and constraints — balancing predictive performance with consistency to what we know about the world."
          />

          <div className="grid gap-6 md:grid-cols-2">
            {/* Research overview card */}
            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-lg bg-[var(--color-accent-light)] flex items-center justify-center">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--color-accent)"
                    strokeWidth="2"
                  >
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                  </svg>
                </span>
                <h3 className="font-semibold text-[var(--color-text)]">
                  Bangladesh Flood Predictor
                </h3>
              </div>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-6">
                Bangladesh&apos;s geography makes it among the most
                flood-prone regions on Earth. This research explores whether
                machine learning with physically meaningful features and
                monotonic constraints can produce flood-risk predictions that
                are both accurate and consistent with domain knowledge.
              </p>
              <div className="flex items-center justify-between">
                <Link
                  href="/projects/bangladesh-flood-predictor"
                  className="text-sm font-medium text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] inline-flex items-center gap-1.5"
                >
                  Read the investigation
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Research approach card */}
            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-8 rounded-lg bg-[var(--color-accent-light)] flex items-center justify-center">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--color-accent)"
                    strokeWidth="2"
                  >
                    <path d="M9 3v3m6-3v3M9 3a2 2 0 1 0 0 6m6-6a2 2 0 1 0 0 6m-9 3h12M9 12v6m6-6v6m2 3H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2z" />
                  </svg>
                </span>
                <h3 className="font-semibold text-[var(--color-text)]">
                  The Investigation
                </h3>
              </div>
              <ul className="text-sm text-[var(--color-text-secondary)] space-y-2.5">
                <li className="flex gap-2">
                  <span className="text-[var(--color-accent)]">→</span>
                  Environmental, geographic & seasonal feature engineering
                </li>
                <li className="flex gap-2">
                  <span className="text-[var(--color-accent)]">→</span>
                  Geospatial risk features with GeoPandas
                </li>
                <li className="flex gap-2">
                  <span className="text-[var(--color-accent)]">→</span>
                  LightGBM & CatBoost baselines vs. physics-guided variants
                </li>
                <li className="flex gap-2">
                  <span className="text-[var(--color-accent)]">→</span>
                  Evaluating predictive performance alongside physical
                  consistency
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== ENGINEERING ==================== */}
      <section className="py-16 md:py-24">
        <div className="container-narrow">
          <SectionHeading
            label="Build"
            title="Systems that are experiments in experience"
            description="Beyond research, I build software that combines engineering rigor with creative interaction design — treating the user experience itself as the problem to be solved."
          />
          <div className="grid gap-8 md:grid-cols-2">
            {/* TeaQuest highlight */}
            <div className="group rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] overflow-hidden card-hover">
              <div className="relative aspect-[16/9] overflow-hidden bg-[var(--color-bg-warm)]">
                <Image
                  src={asset("/projects/home.png")}
                  alt="TeaQuest pixel-art fantasy home screen"
                  width={1200}
                  height={750}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-card)]/80 to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <span className="text-xs text-[var(--color-bg)] bg-[var(--color-text)]/70 px-2 py-0.5 rounded-md">
                    TeaQuest — pixel-art fantasy storefront
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg text-[var(--color-text)] mb-2">
                  TeaQuest
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
                  An original pixel-art fantasy e-commerce platform that wraps
                  a complete shopping experience in a world of exploration,
                  progression, and social interaction.
                </p>
                <Link
                  href="/projects/teaquest"
                  className="text-sm font-medium text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] inline-flex items-center gap-1.5"
                >
                  View project
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Robotics highlight */}
            <div className="group rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] overflow-hidden card-hover">
              <div className="relative aspect-[16/9] overflow-hidden bg-[var(--color-bg-warm)]">
                {/* Robotics schematic-style visual */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                  <svg
                    width="120"
                    height="60"
                    viewBox="0 0 120 60"
                    fill="none"
                    className="text-[var(--color-accent)]/70"
                  >
                    <path
                      d="M10 40 L30 30 L50 35 L70 20 L90 30 L110 25"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      fill="none"
                    />
                    <circle cx="10" cy="40" r="4" fill="currentColor" />
                    <circle cx="30" cy="30" r="4" fill="currentColor" />
                    <circle cx="50" cy="35" r="4" fill="currentColor" />
                    <circle cx="70" cy="20" r="4" fill="currentColor" />
                    <circle cx="90" cy="30" r="4" fill="currentColor" />
                    <circle cx="110" cy="25" r="4" fill="currentColor" />
                  </svg>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-[var(--color-text-tertiary)]">
                      P·D·I·control
                    </span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-card)] to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <span className="text-xs text-[var(--color-text-secondary)]">
                    PDI Line Follower — feedback control
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg text-[var(--color-text)] mb-2">
                  PDI-Based Line Follower
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
                  A robotics project applying Proportional-Derivative-Integral
                  feedback control to autonomous navigation, demonstrating
                  control theory in a practical, physical system.
                </p>
                <Link
                  href="/projects/line-follower-robot"
                  className="text-sm font-medium text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] inline-flex items-center gap-1.5"
                >
                  View project
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PROBLEM SOLVING ==================== */}
      <section className="py-16 md:py-24 bg-[var(--color-bg-warm)] border-y border-[var(--color-border)]">
        <div className="container-narrow">
          <SectionHeading
            label="Practice"
            title="Algorithmic problem solving"
            description="I regularly practice data structures and algorithms on competitive programming platforms."
          />
          <div className="flex flex-wrap gap-4">
            <a
              href="https://leetcode.com/u/riyadh5674/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-5 py-3.5 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] hover:border-[var(--color-accent)] transition-all"
            >
              <span className="font-mono text-[var(--color-accent)] text-sm font-bold">
                LF
              </span>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-[var(--color-text)]">
                  LeetCode
                </span>
                <span className="text-xs text-[var(--color-text-tertiary)]">
                  Algorithms & data structures
                </span>
              </div>
            </a>
            <a
              href="https://codeforces.com/profile/riyadh5674"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-5 py-3.5 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] hover:border-[var(--color-accent)] transition-all"
            >
              <span className="font-mono text-[var(--color-accent)] text-sm font-bold">
                CF
              </span>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-[var(--color-text)]">
                  Codeforces
                </span>
                <span className="text-xs text-[var(--color-text-tertiary)]">
                  Competitive problem solving
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ==================== ABOUT SNIPPET ==================== */}
      <section className="py-16 md:py-24">
        <div className="container-narrow">
          <SectionHeading
            label="About"
            title="A student of computer science, machine learning, and ideas"
          />
          <div className="grid gap-10 md:grid-cols-3">
            <p className="text-[var(--color-text-secondary)] leading-relaxed md:col-span-2">
              I&apos;m a 4th-semester Computer Science & Engineering student at
              the State University of Bangladesh with a CGPA of 3.99/4.00. My
              interests span machine learning, its mathematical foundations,
              and the engineering required to build systems that work in the
              real world.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 self-start text-sm font-medium text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors"
            >
              More about me
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== LEADERSHIP ==================== */}
      <section className="py-16 md:py-24 bg-[var(--color-bg-warm)] border-y border-[var(--color-border)]">
        <div className="container-narrow">
          <SectionHeading
            label="Leadership"
            title="Class Representative"
            description="Serving as Class Representative for my cohort — coordinating schedules, communicating examination information, and helping students and faculty work together toward collective academic progress."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Manages and communicates class schedules",
              "Coordinates examination-related information",
              "Represents multiple perspectives to faculty",
              "Helps students coordinate and communicate",
              "Works toward collective academic progress",
              "Helps the class grow together",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 p-4 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)]"
              >
                <span className="mt-1 text-[var(--color-accent)]">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </span>
                <span className="text-sm text-[var(--color-text-secondary)]">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CONTACT ==================== */}
      <section className="py-16 md:py-24">
        <div className="container-narrow">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color-text)] mb-4">
              Let&apos;s connect
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed mb-8">
              If you&apos;re interested in research, technical collaboration,
              or exchanging ideas, I&apos;d be glad to connect.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="mailto:riyadhmia999@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[var(--color-accent)] text-white font-medium text-sm hover:bg-[var(--color-accent-hover)] transition-colors"
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
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-[var(--color-border)] text-[var(--color-text)] font-medium text-sm hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
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
        </div>
      </section>
    </>
  );
}
