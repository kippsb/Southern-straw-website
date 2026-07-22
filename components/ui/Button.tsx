import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type Variant = "primary" | "secondary" | "outline";

const VARIANT_CLASSES: Record<Variant, string> = {
  primary:
    "bg-straw-500 text-canopy-900 hover:bg-straw-600 focus-visible:outline-straw-600",
  secondary:
    "bg-canopy-900 text-fog-50 hover:bg-canopy-800 focus-visible:outline-canopy-900",
  outline:
    "border-[1.5px] border-canopy-900 bg-transparent text-canopy-900 hover:bg-loam-200 focus-visible:outline-canopy-900",
};

const BASE_CLASSES =
  "inline-flex items-center justify-center gap-2 rounded px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

export function Button({
  variant = "primary",
  className = "",
  ...props
}: ComponentPropsWithoutRef<"button"> & { variant?: Variant }) {
  return (
    <button
      className={`${BASE_CLASSES} ${VARIANT_CLASSES[variant]} ${className}`}
      {...props}
    />
  );
}

export function LinkButton({
  variant = "primary",
  className = "",
  href,
  children,
}: {
  variant?: Variant;
  className?: string;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`${BASE_CLASSES} ${VARIANT_CLASSES[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
