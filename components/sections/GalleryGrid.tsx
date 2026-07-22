import PlaceholderTile from "@/components/sections/PlaceholderTile";

export type GalleryItem = {
  label: string;
  tone?: "straw" | "canopy" | "bark";
  imageUrl?: string;
};

const DEFAULT_ITEMS: GalleryItem[] = [
  { label: "Fresh Pine Straw Install", tone: "straw" },
  { label: "Bed Edging & Cleanup", tone: "canopy" },
  { label: "Wheat Straw Delivery", tone: "bark" },
  { label: "Sloped Yard Install", tone: "straw" },
  { label: "HOA Common Area Refresh", tone: "canopy" },
  { label: "Full-Yard Transformation", tone: "bark" },
];

export default function GalleryGrid({ items = DEFAULT_ITEMS }: { items?: GalleryItem[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <PlaceholderTile
          key={item.label}
          label={item.label}
          tone={item.tone}
          imageUrl={item.imageUrl}
        />
      ))}
    </div>
  );
}
