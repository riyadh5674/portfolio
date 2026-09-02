import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <p className="text-5xl font-semibold text-[var(--color-accent)] mb-4">
          404
        </p>
        <h1 className="text-xl font-semibold text-[var(--color-text)] mb-2">
          Page not found
        </h1>
        <p className="text-[var(--color-text-secondary)] mb-8">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--color-accent)] text-white font-medium text-sm hover:bg-[var(--color-accent-hover)] transition-colors"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
