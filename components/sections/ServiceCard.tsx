import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  href,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
}) {
  const content = (
    <div className="group flex h-full flex-col rounded-2xl border border-lawn-900/10 bg-sand-50 p-8 shadow-sm transition-shadow hover:shadow-md">
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-wheat-100 text-wheat-700">
        <Icon className="h-6 w-6" aria-hidden />
      </div>
      <h3 className="font-display text-xl font-semibold text-lawn-900">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal-700">
        {description}
      </p>
      {href ? (
        <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-clay-600 group-hover:gap-2">
          Learn more <ArrowRight className="h-4 w-4 transition-all" aria-hidden />
        </span>
      ) : null}
    </div>
  );

  if (!href) return content;

  return (
    <Link href={href} className="block h-full">
      {content}
    </Link>
  );
}
