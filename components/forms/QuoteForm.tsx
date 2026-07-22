"use client";

import { useState } from "react";
import { quoteSchema, SERVICE_NEEDED_OPTIONS, TIMING_OPTIONS } from "@/lib/validation";
import { BUSINESS_PHONE_DISPLAY, BUSINESS_PHONE_HREF, BUSINESS_EMAIL } from "@/lib/constants";
import { FieldWrapper, inputClasses } from "@/components/forms/form-fields";
import { Button } from "@/components/ui/Button";

type FormState = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
  serviceNeeded: string;
  approxSize: string;
  hasSlopeOrHardAccess: string;
  timing: string;
  notes: string;
};

const INITIAL_STATE: FormState = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  address: "",
  serviceNeeded: "",
  approxSize: "",
  hasSlopeOrHardAccess: "",
  timing: "",
  notes: "",
};

type Status = "idle" | "submitting" | "success" | "error";

export default function QuoteForm() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<Status>("idle");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const parsed = quoteSchema.safeParse(form);
    if (!parsed.success) {
      const fieldErrors = parsed.error.flatten().fieldErrors;
      const nextErrors: Partial<Record<keyof FormState, string>> = {};
      for (const key in fieldErrors) {
        const messages = fieldErrors[key as keyof typeof fieldErrors];
        if (messages?.[0]) nextErrors[key as keyof FormState] = messages[0];
      }
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setStatus("submitting");

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded border border-canopy-900/10 bg-fog-50 p-10 text-center">
        <h3 className="font-display text-2xl font-semibold text-canopy-900">
          Thanks — we&apos;ve got your request.
        </h3>
        <p className="mt-3 text-canopy-700">
          We&apos;ll follow up within one business day to talk through your project.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-10">
      {status === "error" ? (
        <div className="rounded bg-bark-400/10 p-4 text-sm text-bark-600">
          Something went wrong sending your request. Please call or email us
          directly at{" "}
          <a href={`tel:${BUSINESS_PHONE_HREF}`} className="font-semibold underline">
            {BUSINESS_PHONE_DISPLAY}
          </a>{" "}
          or{" "}
          <a href={`mailto:${BUSINESS_EMAIL}`} className="font-semibold underline">
            {BUSINESS_EMAIL}
          </a>
          .
        </div>
      ) : null}

      <section>
        <h3 className="font-display text-lg font-semibold text-canopy-900">About You</h3>
        <div className="mt-4 grid gap-5 sm:grid-cols-2">
          <FieldWrapper label="First name" htmlFor="firstName" error={errors.firstName}>
            <input
              id="firstName"
              className={inputClasses}
              value={form.firstName}
              onChange={(e) => update("firstName", e.target.value)}
            />
          </FieldWrapper>
          <FieldWrapper label="Last name" htmlFor="lastName" error={errors.lastName}>
            <input
              id="lastName"
              className={inputClasses}
              value={form.lastName}
              onChange={(e) => update("lastName", e.target.value)}
            />
          </FieldWrapper>
          <FieldWrapper label="Phone number" htmlFor="phone" error={errors.phone}>
            <input
              id="phone"
              type="tel"
              className={inputClasses}
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
            />
          </FieldWrapper>
          <FieldWrapper label="Email address" htmlFor="email" error={errors.email}>
            <input
              id="email"
              type="email"
              className={inputClasses}
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
            />
          </FieldWrapper>
          <div className="sm:col-span-2">
            <FieldWrapper
              label="Street address"
              htmlFor="address"
              error={errors.address}
              hint="So we can confirm you're in our service area."
            >
              <input
                id="address"
                className={inputClasses}
                value={form.address}
                onChange={(e) => update("address", e.target.value)}
              />
            </FieldWrapper>
          </div>
        </div>
      </section>

      <section>
        <h3 className="font-display text-lg font-semibold text-canopy-900">About the Job</h3>
        <div className="mt-4 grid gap-5 sm:grid-cols-2">
          <FieldWrapper
            label="Service needed"
            htmlFor="serviceNeeded"
            error={errors.serviceNeeded}
          >
            <select
              id="serviceNeeded"
              className={inputClasses}
              value={form.serviceNeeded}
              onChange={(e) => update("serviceNeeded", e.target.value)}
            >
              <option value="" disabled>
                Select one
              </option>
              {SERVICE_NEEDED_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </FieldWrapper>

          <FieldWrapper
            label="Approximate size"
            htmlFor="approxSize"
            error={errors.approxSize}
            hint="e.g., 2,000 sq ft or 8 beds"
          >
            <input
              id="approxSize"
              className={inputClasses}
              value={form.approxSize}
              onChange={(e) => update("approxSize", e.target.value)}
            />
          </FieldWrapper>

          <FieldWrapper
            label="Any slopes, hills, or hard-to-access areas?"
            htmlFor="hasSlopeOrHardAccess-yes"
            error={errors.hasSlopeOrHardAccess}
          >
            <div className="mt-1.5 flex gap-6">
              {(["yes", "no"] as const).map((val) => (
                <label
                  key={val}
                  htmlFor={`hasSlopeOrHardAccess-${val}`}
                  className="flex items-center gap-2 text-sm text-canopy-800"
                >
                  <input
                    id={`hasSlopeOrHardAccess-${val}`}
                    type="radio"
                    name="hasSlopeOrHardAccess"
                    value={val}
                    checked={form.hasSlopeOrHardAccess === val}
                    onChange={(e) => update("hasSlopeOrHardAccess", e.target.value)}
                    className="h-4 w-4 accent-canopy-700"
                  />
                  {val === "yes" ? "Yes" : "No"}
                </label>
              ))}
            </div>
          </FieldWrapper>

          <FieldWrapper label="Preferred timing" htmlFor="timing" error={errors.timing}>
            <select
              id="timing"
              className={inputClasses}
              value={form.timing}
              onChange={(e) => update("timing", e.target.value)}
            >
              <option value="" disabled>
                Select one
              </option>
              {TIMING_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </FieldWrapper>

          <div className="sm:col-span-2">
            <FieldWrapper label="Anything else we should know?" htmlFor="notes">
              <textarea
                id="notes"
                rows={4}
                className={inputClasses}
                value={form.notes}
                onChange={(e) => update("notes", e.target.value)}
              />
            </FieldWrapper>
          </div>
        </div>
      </section>

      <Button type="submit" disabled={status === "submitting"} className="w-full sm:w-auto">
        {status === "submitting" ? "Sending..." : "Request My Quote"}
      </Button>
    </form>
  );
}
