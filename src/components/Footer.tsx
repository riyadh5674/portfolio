import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-auto border-t border-[var(--color-border)] bg-[var(--color-bg-soft)]/60 backdrop-blur">
      <div className="container-narrow py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          {/* Branding */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-2)] font-mono font-bold text-xs text-[#04110d]">
                MR
              </span>
              <span className="font-semibold text-sm tracking-[0.18em] uppercase text-[var(--color-text)]">
                MD Riyad
              </span>
            </div>
            <p className="text-sm text-[var(--color-text-tertiary)] max-w-sm leading-relaxed">
              Computer Science &amp; Engineering student researching machine
              learning, building thoughtful software, and exploring robotics.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-secondary)]">
              Explore
            </span>
            {[
              { href: "/", label: "Home" },
              { href: "/research", label: "Research" },
              { href: "/projects", label: "Projects" },
              { href: "/about", label: "About" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Connect */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-secondary)]">
              Connect
            </span>
            <a
              href="https://github.com/riyadh5674"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://leetcode.com/u/riyadh5674/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors"
            >
              LeetCode
            </a>
            <a
              href="https://codeforces.com/profile/riyadh5674"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors"
            >
              Codeforces
            </a>
            <a
              href="mailto:riyadhmia999@gmail.com"
              className="text-sm text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors"
            >
              riyadhmia999@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-12 pt-6 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[var(--color-text-muted)]">
            © {year} MD Riyad. All project work is original.
          </p>
          <p className="text-xs text-[var(--color-text-muted)] font-mono">
            built with Next.js · TypeScript · Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
