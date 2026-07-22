export const inputClasses =
  "mt-1.5 w-full rounded border border-moss-500 bg-fog-50 px-4 py-2.5 text-sm text-canopy-900 placeholder:text-canopy-700/40 focus:border-straw-500 focus:outline-none focus:ring-2 focus:ring-straw-500";

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
      <label htmlFor={htmlFor} className="block text-sm font-medium text-canopy-800">
        {label}
      </label>
      {children}
      {hint ? <p className="mt-1.5 text-xs text-moss-600">{hint}</p> : null}
      {error ? <p className="mt-1.5 text-xs font-medium text-bark-600">{error}</p> : null}
    </div>
  );
}
