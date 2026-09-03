import { projects } from "@/data/projects";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";

export default function ProjectsPage() {
  const research = projects.filter((p) => p.category === "research");
  const engineering = projects.filter((p) => p.category === "engineering");
  const robotics = projects.filter((p) => p.category === "robotics");

  return (
    <>
      {/* Page header */}
      <section className="py-20 md:py-28">
        <div className="container-narrow max-w-4xl">
          <Reveal>
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="font-mono text-sm text-[var(--color-accent)]">01</span>
              <span className="h-px w-10 bg-gradient-to-r from-[var(--color-accent)] to-transparent" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-text-secondary)]">
                <span className="text-[var(--color-accent)]">&gt;</span> Projects
              </span>
            </div>
            <h1 className="display-font text-4xl md:text-5xl font-bold text-[var(--color-text)] mb-6">
              Work across research, engineering,{" "}
              <span className="text-gradient">and robotics</span>
            </h1>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
              Each project represents a different part of how I think — from
              investigating physical systems with machine learning, to designing
              interactive software experiences, to applying control theory in
              physical robotics.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Research projects */}
      <section className="py-12 border-t border-[var(--color-border)]">
        <div className="container-narrow">
          <Reveal>
            <SectionHeading
              index="03"
              label="Research"
              title="Investigations"
              description="Machine learning as a way of understanding the world."
            />
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {research.map((project, i) => (
              <Reveal key={project.id} delay={i * 80}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering projects */}
      <section className="py-12 border-t border-[var(--color-border)]">
        <div className="container-narrow">
          <Reveal>
            <SectionHeading
              index="04"
              label="Engineering"
              title="Systems that are experiments in experience"
              description="Software projects that combine engineering rigor with creative interaction design."
            />
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {engineering.map((project, i) => (
              <Reveal key={project.id} delay={i * 80}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Robotics projects */}
      <section className="py-12 border-t border-[var(--color-border)]">
        <div className="container-narrow">
          <Reveal>
            <SectionHeading
              index="05"
              label="Robotics"
              title="Physical systems"
              description="Bringing concepts into the physical world."
            />
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2">
            {robotics.map((project, i) => (
              <Reveal key={project.id} delay={i * 80}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
