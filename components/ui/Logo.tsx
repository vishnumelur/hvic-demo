import { IconLeaf } from "@/components/ui/Icons";

// Eco mark: rounded green tile with leaf glyph (matches reference).
export default function Logo({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <span className={`${className} grid place-items-center rounded-xl bg-primary text-white shadow-[0_6px_18px_-6px_rgba(0,109,64,0.7)]`}>
      <IconLeaf className="h-[58%] w-[58%]" />
    </span>
  );
}
