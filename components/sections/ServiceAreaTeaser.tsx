import { MapPin } from "lucide-react";
import Container from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { SERVICE_AREAS } from "@/lib/constants";

export default function ServiceAreaTeaser() {
  return (
    <section className="bg-lawn-900 py-20 text-sand-100">
      <Container className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-semibold text-sand-50 md:text-4xl">
            Proudly Serving the Low Country
          </h2>
          <p className="mt-4 text-lg text-sand-200/90">
            From the Bluffton backroads to the Hilton Head shoreline and into
            Savannah — we know this land, and we treat every yard like
            it&apos;s our own.
          </p>
          <div className="mt-8">
            <LinkButton href="/service-area" variant="primary">
              See Our Service Area
            </LinkButton>
          </div>
        </div>
        <ul className="space-y-4">
          {SERVICE_AREAS.map((area) => (
            <li
              key={area.name}
              className="flex items-start gap-3 rounded-xl bg-sand-50/5 p-4 ring-1 ring-sand-50/10"
            >
              <MapPin className="mt-0.5 h-5 w-5 flex-none text-wheat-400" aria-hidden />
              <span className="text-sm text-sand-100/90">{area.name}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
