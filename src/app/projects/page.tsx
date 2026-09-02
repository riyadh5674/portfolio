import { projects } from "@/data/projects";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  const research = projects.filter((p) => p.category === "research");
  const engineering = projects.filter((p) => p.category === "engineering");
  const robotics = projects.filter((p) => p.category === "robotics");

  return (
    <>
      {/* Page header */}
      <section className="py-16 md:py-24">
        <div className="container-narrow max-w-3xl">
          <span className="inline-block text-xs font-medium tracking-[0.15em] uppercase text-[var(--color-accent)] mb-4">
            Projects
          </span>
          <h1 className="text-3xl md:text-4xl font-semibold text-[var(--color-text)] mb-6">
            Selected work across research, engineering, and robotics
          </h1>
          <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
            Each project represents a different part of how I think — from
            investigating physical systems with machine learning, to designing
            interactive software experiences, to applying control theory in
            physical robotics.
          </p>
        </div>
      </section>

      {/* Research projects */}
      <section className="py-12 border-t border-[var(--color-border)]">
        <div className="container-narrow">
          <SectionHeading
            label="Research"
            title="Investigations"
            description="Machine learning as a way of understanding the world."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {research.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Engineering projects */}
      <section className="py-12 border-t border-[var(--color-border)]">
        <div className="container-narrow">
          <SectionHeading
            label="Engineering"
            title="Systems that are experiments in experience"
            description="Software projects that combine engineering rigor with creative interaction design."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {engineering.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Robotics projects */}
      <section className="py-12 border-t border-[var(--color-border)]">
        <div className="container-narrow">
          <SectionHeading
            label="Robotics"
            title="Physical systems"
            description="Bringing concepts into the physical world."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {robotics.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
