import PlaceholderTile from "@/components/sections/PlaceholderTile";

export type GalleryItem = {
  label: string;
  tone?: "wheat" | "lawn" | "clay";
  imageUrl?: string;
};

const DEFAULT_ITEMS: GalleryItem[] = [
  { label: "Fresh Pine Straw Install", tone: "wheat" },
  { label: "Bed Edging & Cleanup", tone: "lawn" },
  { label: "Wheat Straw Delivery", tone: "clay" },
  { label: "Sloped Yard Install", tone: "wheat" },
  { label: "HOA Common Area Refresh", tone: "lawn" },
  { label: "Full-Yard Transformation", tone: "clay" },
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
