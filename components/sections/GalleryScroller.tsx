import Image from "next/image";
import { GALLERY_PHOTOS, type GalleryPhoto } from "@/lib/gallery";

export default function GalleryScroller({
  items = GALLERY_PHOTOS,
}: {
  items?: GalleryPhoto[];
}) {
  return (
    <div className="relative">
      <div className="scrollbar-hide flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2">
        {items.map((item) => (
          <div
            key={item.label}
            className="relative aspect-[4/3] w-[78vw] flex-none snap-start overflow-hidden rounded shadow-sm sm:w-80"
          >
            <Image
              src={item.imageUrl}
              alt={item.label}
              fill
              sizes="(min-width: 640px) 320px, 78vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-16 bg-gradient-to-l from-loam-200 to-transparent sm:block"
      />
    </div>
  );
}
