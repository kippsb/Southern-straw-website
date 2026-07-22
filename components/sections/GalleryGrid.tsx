import PlaceholderTile from "@/components/sections/PlaceholderTile";
import { GALLERY_PHOTOS } from "@/lib/gallery";

export type GalleryItem = {
  label: string;
  tone?: "straw" | "canopy" | "bark";
  imageUrl?: string;
};

const DEFAULT_ITEMS: GalleryItem[] = GALLERY_PHOTOS;

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
