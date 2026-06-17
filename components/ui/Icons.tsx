// Inline icon set — lucide-style, stroke = currentColor, no icon-font dependency.
type P = { className?: string };
const base = "h-5 w-5";
const S = ({ className = base, children }: P & { children: React.ReactNode }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    {children}
  </svg>
);

export const IconLeaf = ({ className = base }: P) => (
  <S className={className}><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" /><path d="M2 21c0-3 1.85-5.36 5.08-6" /></S>
);
export const IconArrowRight = ({ className = base }: P) => (
  <S className={className}><path d="M5 12h14M13 6l6 6-6 6" /></S>
);
export const IconBolt = ({ className = base }: P) => (
  <S className={className}><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" /></S>
);
export const IconCylinder = ({ className = base }: P) => (
  <S className={className}><ellipse cx="12" cy="5" rx="7" ry="3" /><path d="M5 5v14a7 3 0 0 0 14 0V5" /></S>
);
export const IconRoute = ({ className = base }: P) => (
  <S className={className}><circle cx="6" cy="19" r="2.5" /><circle cx="18" cy="5" r="2.5" /><path d="M8.5 19H15a3.5 3.5 0 0 0 0-7H9a3.5 3.5 0 0 1 0-7h6.5" /></S>
);
export const IconSpark = ({ className = base }: P) => (
  <S className={className}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" /><circle cx="12" cy="12" r="2.5" /></S>
);
export const IconAtom = ({ className = base }: P) => (
  <S className={className}><circle cx="12" cy="12" r="1.6" /><ellipse cx="12" cy="12" rx="10" ry="4.5" /><ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" /><ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" /></S>
);
export const IconSensor = ({ className = base }: P) => (
  <S className={className}><path d="M5 12a7 7 0 0 1 14 0M8.5 12a3.5 3.5 0 0 1 7 0" /><circle cx="12" cy="12" r="1" /></S>
);
export const IconBell = ({ className = base }: P) => (
  <S className={className}><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9M10.3 21a1.94 1.94 0 0 0 3.4 0" /></S>
);
export const IconMapPin = ({ className = base }: P) => (
  <S className={className}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></S>
);
export const IconMail = ({ className = base }: P) => (
  <S className={className}><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m2 7 10 6 10-6" /></S>
);
export const IconPhone = ({ className = base }: P) => (
  <S className={className}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" /></S>
);
export const IconChevronRight = ({ className = base }: P) => (
  <S className={className}><path d="m9 6 6 6-6 6" /></S>
);
export const IconDownload = ({ className = base }: P) => (
  <S className={className}><path d="M12 3v12m0 0 4-4m-4 4-4-4M4 21h16" /></S>
);
export const IconArrowUpRight = ({ className = base }: P) => (
  <S className={className}><path d="M7 17 17 7M8 7h9v9" /></S>
);
export const IconTruck = ({ className = base }: P) => (
  <S className={className}><path d="M3 6h11v9H3zM14 9h4l3 3v3h-7z" /><circle cx="7" cy="18" r="1.6" /><circle cx="17" cy="18" r="1.6" /></S>
);

export const ICONS: Record<string, (p: P) => React.ReactElement> = {
  bolt: IconBolt,
  cylinder: IconCylinder,
  route: IconRoute,
  spark: IconSpark,
  atom: IconAtom,
  sensor: IconSensor,
  truck: IconTruck,
};
