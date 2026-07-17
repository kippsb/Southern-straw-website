import { Leaf } from "lucide-react";

type Tone = "wheat" | "lawn" | "clay";

const TONE_CLASSES: Record<Tone, string> = {
  wheat: "from-wheat-200 via-wheat-100 to-sand-100 text-wheat-800",
  lawn: "from-lawn-200 via-lawn-100 to-sand-100 text-lawn-800",
  clay: "from-clay-400/40 via-sand-200 to-sand-100 text-clay-600",
};

export default function PlaceholderTile({
  label,
  tone = "wheat",
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
        className="aspect-[4/3] w-full rounded-2xl object-cover"
      />
    );
  }

  return (
    <div
      className={`flex aspect-[4/3] flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-lawn-900/15 bg-gradient-to-br p-6 text-center ${TONE_CLASSES[tone]}`}
    >
      <Leaf className="h-6 w-6" aria-hidden />
      <span className="text-sm font-semibold">{label}</span>
      <span className="text-xs uppercase tracking-wide opacity-70">
        Photo coming soon
      </span>
    </div>
  );
}
