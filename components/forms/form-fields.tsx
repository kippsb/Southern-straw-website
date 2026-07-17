export const inputClasses =
  "mt-1.5 w-full rounded-lg border border-lawn-900/15 bg-sand-50 px-4 py-2.5 text-sm text-charcoal-900 placeholder:text-charcoal-700/40 focus:border-lawn-700 focus:outline-none focus:ring-2 focus:ring-lawn-700/20";

export function FieldWrapper({
  label,
  htmlFor,
  error,
  hint,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="block text-sm font-medium text-charcoal-800">
        {label}
      </label>
      {children}
      {hint ? <p className="mt-1.5 text-xs text-charcoal-700/70">{hint}</p> : null}
      {error ? <p className="mt-1.5 text-xs font-medium text-clay-600">{error}</p> : null}
    </div>
  );
}
