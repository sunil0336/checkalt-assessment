import { Copy, FileText } from "lucide-react";

const items = [
  {
    title: "Articles of Organization – LLC",
    sku: "FORM-ARTORG-LLC",
    quantity: "× 1",
    type: "filing",
  },
  {
    title: "Certified Copy",
    sku: "DOC-CERT-COPY",
    quantity: "× 3 + 2",
    type: "copy",
  },
];

export default function BundleContents() {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
      <h2 className="text-xl font-bold text-slate-900">
        What's in this bundle
      </h2>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        Includes multiple services and supports extra quantity of the same
        component SKU at a bundle-specific rate.
      </p>

      <div className="mt-5">
        {items.map((item) => (
          <div
            key={item.sku}
            className="flex items-center gap-4 border-b border-slate-100 py-4 last:border-0"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#234477]">
              {item.type === "filing" ? (
                <FileText size={22} />
              ) : (
                <Copy size={22} />
              )}
            </div>

            <div className="min-w-0 flex-1">
              <h3 className="text-sm font-semibold text-slate-800">
                {item.title}
              </h3>
              <p className="mt-1 text-xs text-slate-500">
                SKU · {item.sku}
                {item.type === "copy" && " · 2 additional at $18 per copy"}
              </p>
            </div>

            <span className="shrink-0 text-sm font-semibold text-slate-800">
              {item.quantity}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}