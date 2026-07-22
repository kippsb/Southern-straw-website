import { Leaf } from "lucide-react";

type Tone = "straw" | "canopy" | "bark";

const TONE_CLASSES: Record<Tone, string> = {
  straw: "from-straw-200 via-straw-100 to-loam-100 text-straw-800",
  canopy: "from-canopy-200 via-canopy-100 to-loam-100 text-canopy-800",
  bark: "from-bark-400/40 via-loam-200 to-loam-100 text-bark-600",
};

export default function PlaceholderTile({
  label,
  tone = "straw",
  imageUrl,
}: {
  label: string;
  tone?: Tone;
  imageUrl?: string;
}) {
  if (imageUrl) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={imageUrl}
        alt={label}
        className="aspect-[4/3] w-full rounded object-cover"
      />
    );
  }

  return (
    <div
      className={`flex aspect-[4/3] flex-col items-center justify-center gap-3 rounded border-2 border-dashed border-canopy-900/15 bg-gradient-to-br p-6 text-center ${TONE_CLASSES[tone]}`}
    >
      <Leaf className="h-6 w-6" aria-hidden />
      <span className="text-sm font-semibold">{label}</span>
      <span className="text-xs uppercase tracking-wide opacity-70">
        Photo coming soon
      </span>
    </div>
  );
}
