interface MarqueeProps {
  items: string[];
  className?: string;
}

export default function Marquee({ items, className = "" }: MarqueeProps) {
  // Duplicate items so the -50% translate creates a seamless loop
  const doubled = [...items, ...items];
  return (
    <div className={`marquee-pause overflow-hidden whitespace-nowrap ${className}`}>
      <div className="inline-flex animate-marquee items-center gap-3">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--color-border-light)] bg-[var(--color-bg-card)] text-sm text-[var(--color-text-secondary)] font-mono"
          >
            <span className="text-[var(--color-accent)]">#</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
