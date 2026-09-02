import { ReactNode } from "react";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  children?: ReactNode;
}

export default function SectionHeading({
  label,
  title,
  description,
  align = "left",
  children,
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-10 md:mb-14 ${
        align === "center" ? "text-center" : ""
      }`}
    >
      {label && (
        <span className="inline-block text-xs font-medium tracking-[0.15em] uppercase text-[var(--color-accent)] mb-3">
          {label}
        </span>
      )}
      <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color-text)]">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-[var(--color-text-secondary)] max-w-2xl text-base leading-relaxed">
          {description}
        </p>
      )}
      {children}
    </div>
  );
}
