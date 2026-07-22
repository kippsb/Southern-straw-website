export default function HeroPattern({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`absolute inset-0 h-full w-full ${className}`}
      viewBox="0 0 800 600"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <linearGradient id="heroFade" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--color-straw-200)" stopOpacity="0.9" />
          <stop offset="55%" stopColor="var(--color-loam-200)" stopOpacity="0.85" />
          <stop offset="100%" stopColor="var(--color-loam-100)" stopOpacity="0.95" />
        </linearGradient>
        <pattern
          id="strawStrokes"
          width="26"
          height="26"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(28)"
        >
          <line x1="0" y1="0" x2="0" y2="26" stroke="var(--color-straw-500)" strokeWidth="1.5" strokeOpacity="0.25" />
        </pattern>
      </defs>
      <rect width="800" height="600" fill="url(#heroFade)" />
      <rect width="800" height="600" fill="url(#strawStrokes)" />
    </svg>
  );
}
