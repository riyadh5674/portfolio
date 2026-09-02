import type { ProjectStatus } from "@/data/projects";

const statusConfig: Record<
  ProjectStatus,
  { label: string; className: string; dot: string }
> = {
  research: {
    label: "Ongoing Research",
    className:
      "bg-[var(--color-accent-light)] text-[var(--color-accent)] border-[var(--color-accent)]/20",
    dot: "bg-[var(--color-accent)]",
  },
  ongoing: {
    label: "In Development",
    className:
      "bg-[#faf3e0] text-[var(--color-warning)] border-[var(--color-warning)]/20 dark:bg-[#2e2815]",
    dot: "bg-[var(--color-warning)]",
  },
  completed: {
    label: "Completed",
    className:
      "bg-[#eaf5ee] text-[var(--color-success)] border-[var(--color-success)]/20 dark:bg-[#16291d]",
    dot: "bg-[var(--color-success)]",
  },
};

export default function StatusBadge({ status }: { status: ProjectStatus }) {
  const config = statusConfig[status];
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${config.className}`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${config.dot} animate-pulse`}
        aria-hidden="true"
      />
      {config.label}
    </span>
  );
}
