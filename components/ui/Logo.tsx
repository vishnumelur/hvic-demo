// Official Kerala HVIC emblem (sun · lightning · waves) on a clean white tile.
// Rendered through one component so it appears identically everywhere
// (navbar, footer, dashboard, login) at the size passed via className.
export default function Logo({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <span className={`${className} block shrink-0 overflow-hidden rounded-xl bg-white ring-1 ring-line`}>
      <img
        src="/logo.png"
        alt="Kerala HVIC Foundation"
        className="h-full w-full object-contain"
      />
    </span>
  );
}
