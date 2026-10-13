import { Check, ShieldCheck } from "lucide-react";

const features = [
  "Includes 1 Articles of Organization filing",
  "Includes 3 certified copies",
  "Add up to 10 more copies for $18 each",
];

export default function ProductInfo() {
  return (
    <section className="min-w-0">
      <div className="mb-4 flex flex-wrap gap-2">
        <span className="rounded bg-blue-50 px-3 py-1 text-xs font-semibold text-[#23477f]">
          Bundles
        </span>
        <span className="rounded bg-blue-50 px-3 py-1 text-xs font-semibold text-[#23477f]">
          Bundle deal
        </span>
      </div>

      <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
        LLC Starter Bundle
      </h1>

      <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-xs text-slate-500 sm:text-sm">
        <span>
          SKU: <strong>BUNDLE-LLC-STARTER</strong>
        </span>
        <span>•</span>
        <span>Price book: RETAIL_USD</span>
      </div>

      <p className="mt-6 text-sm leading-7 text-slate-600 sm:text-base">
        A bundled one-time purchase featuring one Articles of Organization
        filing and three certified copies, with the option to add more copies
        at a bundle-specific rate.
      </p>

      <ul className="mt-5 space-y-4">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm text-slate-800">
            <Check size={18} className="mt-0.5 shrink-0 text-emerald-700" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 border-t border-slate-200 pt-5">
        <div className="flex items-start gap-3">
          <ShieldCheck size={19} className="shrink-0 text-slate-500" />
          <div>
            <p className="text-sm font-semibold text-slate-700">
              Configured for California · LLC
            </p>
            <p className="mt-1 text-sm text-slate-500">
              Only sellable prices from the selected state and entity type are displayed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}