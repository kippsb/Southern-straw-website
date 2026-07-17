import type { QuoteRequest } from "@/lib/validation";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const QUOTE_TO_EMAIL = process.env.QUOTE_TO_EMAIL ?? "owner@southernstraw.com";
const QUOTE_FROM_EMAIL = process.env.QUOTE_FROM_EMAIL ?? "quotes@southernstraw.com";

export async function sendQuoteEmail(data: QuoteRequest): Promise<void> {
  if (!RESEND_API_KEY) {
    console.log(
      "[quote] RESEND_API_KEY not set — logging submission instead of sending email:"
    );
    console.log(JSON.stringify(data, null, 2));
    return;
  }

  const { Resend } = await import("resend");
  const resend = new Resend(RESEND_API_KEY);

  const { error } = await resend.emails.send({
    from: QUOTE_FROM_EMAIL,
    to: QUOTE_TO_EMAIL,
    replyTo: data.email,
    subject: `New quote request — ${data.firstName} ${data.lastName}`,
    text: [
      `Name: ${data.firstName} ${data.lastName}`,
      `Phone: ${data.phone}`,
      `Email: ${data.email}`,
      `Address: ${data.address}`,
      `Service needed: ${data.serviceNeeded}`,
      `Approx size: ${data.approxSize}`,
      `Slopes/hard-to-access: ${data.hasSlopeOrHardAccess}`,
      `Preferred timing: ${data.timing}`,
      `Notes: ${data.notes || "(none)"}`,
    ].join("\n"),
  });

  if (error) {
    throw new Error(error.message);
  }
}
