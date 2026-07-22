import { MapPinned, Truck, HardHat } from "lucide-react";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";

const ITEMS = [
  { icon: MapPinned, label: "Locally Owned & Operated" },
  { icon: Truck, label: "Serving the Low Country" },
  { icon: HardHat, label: "Delivery + Professional Install" },
];

export default function TrustBar() {
  return (
    <div className="border-y border-canopy-900/10 bg-fog-50/60 py-6">
      <Container className="flex flex-wrap items-center justify-center gap-3">
        {ITEMS.map((item) => (
          <Badge key={item.label} icon={item.icon}>
            {item.label}
          </Badge>
        ))}
      </Container>
    </div>
  );
}
