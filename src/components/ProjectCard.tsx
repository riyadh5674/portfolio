import Link from "next/link";
import type { Project } from "@/data/projects";
import StatusBadge from "@/components/StatusBadge";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const accentColor =
    project.category === "research"
      ? "text-[var(--color-accent)]"
      : project.category === "engineering"
      ? "text-[var(--color-info)]"
      : "text-[var(--color-warning)]";

  return (
    <Link
      href={`/projects/${project.id}`}
      className="group block card-hover rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-card)] overflow-hidden"
    >
      {/* Top colored marker strip */}
      <div className="h-1.5 w-full bg-gradient-to-r from-transparent via-[var(--color-accent)]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="p-6 md:p-8">
        {/* Category + Status */}
        <div className="flex items-center justify-between mb-4">
          <span
            className={`text-xs font-medium tracking-wide uppercase ${accentColor}`}
          >
            {project.category === "research"
              ? "Research"
              : project.category === "engineering"
              ? "Engineering"
              : "Robotics"}
          </span>
          <StatusBadge status={project.status} />
        </div>

        {/* Title */}
        <h3 className="text-lg md:text-xl font-semibold text-[var(--color-text)] mb-2 group-hover:text-[var(--color-accent)] transition-colors">
          {project.title}
        </h3>

        {/* Summary */}
        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-5 line-clamp-3">
          {project.summary}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 text-xs rounded-md bg-[var(--color-bg-warm)] border border-[var(--color-border-light)] text-[var(--color-text-secondary)]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4">
          {project.links.github && (
            <span className="text-sm text-[var(--color-text-tertiary)] inline-flex items-center gap-1.5 group-hover:text-[var(--color-accent)] transition-colors">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </span>
          )}
          {project.links.live && (
            <span className="text-sm text-[var(--color-text-tertiary)] inline-flex items-center gap-1.5 group-hover:text-[var(--color-accent)] transition-colors">
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
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              Live Demo
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
