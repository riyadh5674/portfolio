import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section className="py-16 md:py-24">
        <div className="container-narrow max-w-3xl">
          <span className="inline-block text-xs font-medium tracking-[0.15em] uppercase text-[var(--color-accent)] mb-4">
            About
          </span>
          <h1 className="text-3xl md:text-4xl font-semibold text-[var(--color-text)] mb-6">
            Understanding difficult problems, building things, investigating
            how intelligent systems work
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
            I&apos;m a Computer Science and Engineering student. My interests
            converge on machine learning — not only as a practical tool, but
            from its mathematical and conceptual foundations.
          </p>
        </div>
      </section>

      {/* Core narrative */}
      <section className="py-12 border-t border-[var(--color-border)]">
        <div className="container-narrow max-w-3xl prose">
          <h2 className="text-xl md:text-2xl font-semibold text-[var(--color-text)] mb-4">
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
        </div>
      </section>

      {/* Moves between */}
      <section className="py-12 bg-[var(--color-bg-warm)] border-t border-[var(--color-border)]">
        <div className="container-narrow">
          <h2 className="text-xl md:text-2xl font-semibold text-[var(--color-text)] mb-8">
            What I move between
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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
                className="p-5 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)]"
              >
                <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--color-accent)] mb-2">
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
      <section className="py-12 border-t border-[var(--color-border)]">
        <div className="container-narrow max-w-3xl">
          <h2 className="text-xl md:text-2xl font-semibold text-[var(--color-text)] mb-6">
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
                  className="px-3 py-1.5 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-card)] text-sm text-[var(--color-text)]"
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
                  className="px-3 py-1.5 rounded-lg border border-[var(--color-border)] bg-[var(--color-bg-warm)] text-sm text-[var(--color-text-secondary)]"
                >
                  {area}
                </span>
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
      <section className="py-12 bg-[var(--color-bg-warm)] border-t border-[var(--color-border)]">
        <div className="container-narrow max-w-3xl">
          <h2 className="text-xl md:text-2xl font-semibold text-[var(--color-text)] mb-4">
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
      <section className="py-12 border-t border-[var(--color-border)]">
        <div className="container-narrow max-w-3xl">
          <h2 className="text-xl md:text-2xl font-semibold text-[var(--color-text)] mb-8">
            Currently
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--color-accent)] mb-3">
                Exploring
              </h3>
              <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                <li>Physics-guided machine learning</li>
                <li>Mathematical foundations of ML</li>
                <li>Research methodology</li>
                <li>Software systems</li>
                <li>Algorithmic problem solving</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--color-accent)] mb-3">
                Building
              </h3>
              <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
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
                <li>More coming</li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--color-accent)] mb-3">
                Aiming toward
              </h3>
              <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                <li>Deeper ML research</li>
                <li>Publication-quality work</li>
                <li>Meaningful technical collaboration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-12 bg-[var(--color-bg-warm)] border-t border-[var(--color-border)]">
        <div className="container-narrow max-w-3xl text-center">
          <h2 className="text-2xl font-semibold text-[var(--color-text)] mb-4">
            Let&apos;s connect
          </h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed mb-8">
            If you&apos;re interested in research, technical collaboration, or
            exchanging ideas, I&apos;d be glad to connect.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="mailto:riyadhmia999@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[var(--color-accent)] text-white font-medium text-sm hover:bg-[var(--color-accent-hover)] transition-colors"
            >
              Email Me
            </a>
            <a
              href="https://github.com/riyadh5674"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-[var(--color-border)] text-[var(--color-text)] font-medium text-sm hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
