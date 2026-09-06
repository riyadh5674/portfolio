import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section className="py-20 md:py-28">
        <div className="container-narrow max-w-4xl">
          <Reveal>
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="font-mono text-sm text-[var(--color-accent)]">05</span>
              <span className="h-px w-10 bg-gradient-to-r from-[var(--color-accent)] to-transparent" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-text-secondary)]">
                <span className="text-[var(--color-accent)]">&gt;</span> About
              </span>
            </div>
            <h1 className="display-font text-4xl md:text-5xl font-bold text-[var(--color-text)] mb-6">
              Understanding difficult problems, building things, investigating{" "}
              <span className="text-gradient">intelligent systems</span>
            </h1>
            <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed">
              I&apos;m a Computer Science and Engineering student. My interests
              converge on machine learning — not only as a practical tool, but
              from its mathematical and conceptual foundations.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Core narrative */}
      <section className="py-16 border-t border-[var(--color-border)]">
        <div className="container-narrow max-w-3xl prose">
          <Reveal>
          <h2 className="display-font text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-4">
            Who I am
          </h2>
          <p>
            I&apos;m a 4th-semester Computer Science & Engineering student at
            the State University of Bangladesh with a current CGPA of 3.99/4.00.
            I&apos;m drawn to machine learning because it sits at the
            intersection of mathematics, computation, and the real world — a
            space where abstract ideas become models, and models become tools
            that help people make better decisions.
          </p>
          <p>
            My work tends to move across boundaries. I research a real-world
            problem (flood prediction in Bangladesh), reason about models and
            constraints mathematically, build the systems that make ideas
            concrete, and care about explaining ideas clearly so that others
            can understand, question, and build on them.
          </p>
          </Reveal>
        </div>
      </section>

      {/* Moves between */}
      <section className="py-16 bg-[var(--color-bg-soft)] border-t border-[var(--color-border)]">
        <div className="container-narrow">
          <h2 className="display-font text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-10">
            What I move between
          </h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Research",
                text: "Understanding real problems deeply, starting with flood prediction in Bangladesh.",
              },
              {
                title: "Mathematics",
                text: "Reasoning about models, constraints, and why methods work — or don't.",
              },
              {
                title: "Engineering",
                text: "Building working systems, from software platforms to physical robots.",
              },
              {
                title: "Problem Solving",
                text: "Practicing data structures and algorithms on competitive programming platforms.",
              },
              {
                title: "Creativity",
                text: "Designing unusual technical experiences — like an e-commerce fantasy world.",
              },
              {
                title: "Communication",
                text: "Explaining technical ideas through writing, presentation, and collaboration.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="card card-glow p-6"
              >
                <h3 className="text-sm font-bold uppercase tracking-wide text-[var(--color-accent)] mb-3">
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

      {/* Technical background */}
      <section className="py-16 border-t border-[var(--color-border)]">
        <div className="container-narrow max-w-3xl">
          <h2 className="display-font text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-8">
            Technical background
          </h2>

          <div className="mb-8">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--color-accent)] mb-3">
              Programming languages
            </h3>
            <div className="flex flex-wrap gap-2">
              {["Python", "C++", "Java"].map((lang) => (
                <span
                  key={lang}
                  className="px-3 py-1.5 rounded-lg border border-[var(--color-border-light)] bg-[var(--color-bg-soft)] text-sm text-[var(--color-text)] font-mono"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--color-accent)] mb-3">
              Areas of interest
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Machine Learning",
                "AI",
                "Mathematical Foundations of ML",
                "Data Analysis",
                "Algorithms",
                "Robotics",
                "Software Engineering",
                "Research",
              ].map((area) => (
                <span
                  key={area}
                  className="px-3 py-1.5 rounded-lg border border-[var(--color-border-light)] bg-[var(--color-bg-soft)] text-sm text-[var(--color-text-secondary)]"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--color-accent)] mb-3">
              Core expertise
            </h3>
            <div className="space-y-4">
              {[
                { name: "Machine Learning & Data Science", pct: 88 },
                { name: "Python & Scientific Computing", pct: 92 },
                { name: "Algorithmic Problem Solving", pct: 86 },
                { name: "Software Engineering", pct: 82 },
                { name: "Mathematics & Statistics", pct: 84 },
                { name: "Robotics & Control", pct: 78 },
              ].map((skill) => (
                <Reveal key={skill.name} delay={60}>
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm text-[var(--color-text)] font-medium">
                        {skill.name}
                      </span>
                      <span className="font-mono text-xs text-[var(--color-text-tertiary)]">
                        {skill.pct}%
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-[var(--color-bg-soft)] border border-[var(--color-border-light)] overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-2)] animate-fill-bar"
                        style={{ width: `${skill.pct}%` }}
                      />
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--color-accent)] mb-3">
              Algorithmic practice
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              I regularly practice algorithmic problem solving on competitive
              programming platforms to strengthen my data structures and
              algorithm fundamentals. For many technical problems, this
              practice builds a foundation of computational thinking that
              carries into research and engineering work.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--color-accent)] mb-3">
              Development workflow
            </h3>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              I work with modern development and research tools, including
              AI-assisted workflows as part of a broader technical process.
              These tools augment — but never replace — the core work of
              understanding problems, designing models, writing code, and
              evaluating results.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-[var(--color-bg-soft)] border-t border-[var(--color-border)]">
        <div className="container-narrow max-w-3xl">
          <h2 className="display-font text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-5">
            Leadership — Class Representative
          </h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6">
            I serve as the Class Representative for my cohort. The role is
            rooted in listening and coordination: managing schedules,
            communicating important information, representing the perspectives
            of my classmates, and helping the class grow together. It has
            taught me to communicate clearly, to consider many viewpoints at
            once, and to work toward a collective goal.
          </p>
          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            This experience connects directly to my interest in contributing to
            innovation communities — where communication, coordination, and
            representing diverse perspectives are as important as technical
            skill.
          </p>
        </div>
      </section>

      {/* Currently */}
      <section className="py-16 border-t border-[var(--color-border)]">
        <div className="container-narrow max-w-3xl">
          <h2 className="display-font text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-10">
            Currently
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="card p-6">
              <h3 className="text-sm font-bold uppercase tracking-wide text-[var(--color-accent)] mb-4">
                Exploring
              </h3>
              <ul className="space-y-2.5 text-sm text-[var(--color-text-secondary)]">
                <li>Physics-guided machine learning</li>
                <li>Mathematical foundations of ML</li>
                <li>Research methodology</li>
                <li>Software systems</li>
                <li>Algorithmic problem solving</li>
              </ul>
            </div>
            <div className="card p-6">
              <h3 className="text-sm font-bold uppercase tracking-wide text-[var(--color-accent)] mb-4">
                Building
              </h3>
              <ul className="space-y-2.5 text-sm text-[var(--color-text-secondary)]">
                <li>
                  <Link
                    href="/projects/bangladesh-flood-predictor"
                    className="hover:text-[var(--color-accent)] transition-colors"
                  >
                    Bangladesh Flood Predictor
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects/teaquest"
                    className="hover:text-[var(--color-accent)] transition-colors"
                  >
                    TeaQuest
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects/innovation-club-website"
                    className="hover:text-[var(--color-accent)] transition-colors"
                  >
                    SUB Innovation Club Website
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects/ames-housing-price-prediction"
                    className="hover:text-[var(--color-accent)] transition-colors"
                  >
                    Ames Housing Price Prediction
                  </Link>
                </li>
              </ul>
            </div>
            <div className="card p-6">
              <h3 className="text-sm font-bold uppercase tracking-wide text-[var(--color-accent)] mb-4">
                Aiming toward
              </h3>
              <ul className="space-y-2.5 text-sm text-[var(--color-text-secondary)]">
                <li>Deeper ML research</li>
                <li>Publication-quality work</li>
                <li>Meaningful technical collaboration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-[var(--color-bg-soft)] border-t border-[var(--color-border)]">
        <div className="container-narrow max-w-3xl text-center">
          <h2 className="display-font text-3xl font-bold text-[var(--color-text)] mb-4">
            Let&apos;s <span className="text-gradient">connect</span>
          </h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed mb-8">
            If you&apos;re interested in research, technical collaboration, or
            exchanging ideas, I&apos;d be glad to connect.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="mailto:riyadhmia999@gmail.com" className="btn-primary sheen">
              Email Me
            </a>
            <a
              href="https://github.com/riyadh5674"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
