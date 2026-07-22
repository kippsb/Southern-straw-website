import type { LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";

export type ValueProp = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export default function ValueProps({
  heading,
  subheading,
  items,
}: {
  heading: string;
  subheading?: string;
  items: ValueProp[];
}) {
  return (
    <section className="py-20">
      <Container>
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold text-canopy-900 md:text-4xl">
            {heading}
          </h2>
          {subheading ? (
            <p className="mt-4 text-lg text-canopy-700">{subheading}</p>
          ) : null}
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {items.map((item) => (
            <div key={item.title} className="flex gap-4">
              <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-canopy-900 text-fog-50">
                <item.icon className="h-5 w-5" aria-hidden />
              </div>
              <div>
                <h3 className="font-semibold text-canopy-900">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-canopy-700">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
