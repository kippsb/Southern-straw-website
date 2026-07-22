import type { LucideIcon } from "lucide-react";

export default function Badge({
  icon: Icon,
  children,
}: {
  icon?: LucideIcon;
  children: React.ReactNode;
}) {
  return (
    <span className="inline-flex items-center gap-2 rounded bg-fog-50 px-4 py-2 text-sm font-medium text-canopy-800 ring-1 ring-canopy-800/10">
      {Icon ? <Icon className="h-4 w-4 text-straw-600" aria-hidden /> : null}
      {children}
    </span>
  );
}
