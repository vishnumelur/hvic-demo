// HVIC mark: an H2 atom / droplet hybrid with aurora gradient.
export default function Logo({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden>
      <defs>
        <linearGradient id="hvic-grad" x1="6" y1="6" x2="42" y2="42" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7CF5C0" />
          <stop offset="0.5" stopColor="#00E08A" />
          <stop offset="1" stopColor="#00C2FF" />
        </linearGradient>
      </defs>
      <circle cx="24" cy="24" r="22" stroke="url(#hvic-grad)" strokeOpacity="0.35" strokeWidth="1.5" />
      <ellipse cx="24" cy="24" rx="21" ry="8" stroke="url(#hvic-grad)" strokeWidth="1.5" />
      <ellipse cx="24" cy="24" rx="21" ry="8" stroke="url(#hvic-grad)" strokeWidth="1.5" transform="rotate(60 24 24)" />
      <ellipse cx="24" cy="24" rx="21" ry="8" stroke="url(#hvic-grad)" strokeWidth="1.5" transform="rotate(120 24 24)" />
      <circle cx="24" cy="24" r="4.5" fill="url(#hvic-grad)" />
    </svg>
  );
}
