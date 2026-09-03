import { ReactNode } from "react";

interface SectionHeadingProps {
  label?: string;
  index?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  children?: ReactNode;
  id?: string;
}

export default function SectionHeading({
  label,
  index,
  title,
  description,
  align = "left",
  children,
  id,
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div
      id={id}
      className={`reveal mb-12 md:mb-16 ${centered ? "text-center mx-auto max-w-2xl" : ""}`}
    >
      {(label || index) && (
        <div
          className={`inline-flex items-center gap-3 mb-5 ${
            centered ? "justify-center" : ""
          }`}
        >
          {index && (
            <span className="font-mono text-sm text-[var(--color-accent)]">
              {index}
            </span>
          )}
          {label && (
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-text-secondary)]">
              <span className="text-[var(--color-accent)]">&gt;</span> {label}
            </span>
          )}
          <span className="h-px w-10 bg-gradient-to-r from-[var(--color-accent)] to-transparent" />
        </div>
      )}
      <h2
        className={`display-font text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-[var(--color-text)] ${
          centered ? "mx-auto" : "max-w-3xl"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed ${
            centered ? "mx-auto" : "max-w-2xl"
          }`}
        >
          {description}
        </p>
      )}
      {children}
    </div>
  );
}
