const specifications = [
  {
    label: "Bundle type",
    value: "One-time package",
  },
  {
    label: "Included filing",
    value: "1 Articles of Organization",
  },
  {
    label: "Included copies",
    value: "3 certified copies",
  },
  {
    label: "Additional copies",
    value: "$18 each (demo)",
  },
  {
    label: "SKU",
    value: "BUNDLE-LLC-STARTER",
  },
  {
    label: "Available in",
    value: "California for LLC",
  },
];

export default function Specifications() {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
      <h2 className="text-xl font-bold text-slate-900">
        Service details &amp; specifications
      </h2>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        Service details come from the SKU's short description, detailed
        specification and structured attributes.
      </p>

      <div className="mt-6">
        {specifications.map((item) => (
          <div
            key={item.label}
            className="grid grid-cols-1 gap-2 border-b border-slate-200 py-4 last:border-b-0 sm:grid-cols-2"
          >
            <span className="text-sm text-slate-500">
              {item.label}
            </span>

            <span className="text-sm font-semibold text-slate-800">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}