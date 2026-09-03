import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center">
        <p className="display-font text-7xl md:text-8xl font-bold text-gradient mb-4">
          404
        </p>
        <h1 className="display-font text-2xl font-bold text-[var(--color-text)] mb-3">
          Page not found
        </h1>
        <p className="text-[var(--color-text-secondary)] mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <Link href="/" className="btn-primary">
          Back to home
        </Link>
      </div>
    </div>
  );
}
