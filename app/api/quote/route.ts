import { NextResponse } from "next/server";
import { quoteSchema } from "@/lib/validation";
import { sendQuoteEmail } from "@/lib/email";

export async function POST(request: Request) {
  const json = await request.json().catch(() => null);
  if (!json) {
    return NextResponse.json(
      { ok: false, error: "Invalid request body" },
      { status: 400 }
    );
  }

  const parsed = quoteSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Validation failed", issues: parsed.error.flatten() },
      { status: 422 }
    );
  }

  try {
    await sendQuoteEmail(parsed.data);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[quote] failed to send quote email", err);
    return NextResponse.json(
      { ok: false, error: "Failed to process request" },
      { status: 500 }
    );
  }
}
