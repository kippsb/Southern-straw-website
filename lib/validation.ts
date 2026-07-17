import { z } from "zod";

export const quoteSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  phone: z.string().min(7, "Enter a valid phone number"),
  email: z.email("Enter a valid email address"),
  address: z.string().min(5, "Street address is required"),
  serviceNeeded: z.enum(["delivery", "installation", "both"], {
    error: "Let us know what service you need",
  }),
  approxSize: z.string().min(1, "Give us an approximate size"),
  hasSlopeOrHardAccess: z.enum(["yes", "no"], {
    error: "Let us know about slopes or hard-to-access areas",
  }),
  timing: z.enum(["asap", "two_weeks", "one_month"], {
    error: "Let us know your preferred timing",
  }),
  notes: z.string().optional(),
});

export type QuoteRequest = z.infer<typeof quoteSchema>;

export const SERVICE_NEEDED_OPTIONS = [
  { value: "delivery", label: "Delivery only" },
  { value: "installation", label: "Installation only" },
  { value: "both", label: "Delivery + Installation" },
] as const;

export const TIMING_OPTIONS = [
  { value: "asap", label: "As soon as possible" },
  { value: "two_weeks", label: "Within 2 weeks" },
  { value: "one_month", label: "Within a month" },
] as const;
