import { useState } from "react";
import { ShieldCheck, ShoppingCart } from "lucide-react";

export default function AddOnServices() {
  const [selected, setSelected] = useState(false);

  const mainServicePrice = 335;
  const addOnPrice = 25;
  const total = mainServicePrice + (selected ? addOnPrice : 0);

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
      <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
        Complete your order
      </p>

      <h2 className="mt-2 text-xl font-bold text-slate-900">
        Frequently bought together
      </h2>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        These recommendations are curated for the current service, state and
        entity type. Select an add-on to include it with your purchase.
      </p>

      <label className="mt-5 flex cursor-pointer items-center gap-4 rounded-xl border border-slate-200 p-4 transition hover:bg-slate-50">
        <input
          type="checkbox"
          checked={selected}
          onChange={(event) => setSelected(event.target.checked)}
          className="h-5 w-5 accent-blue-800"
        />

        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#234477]">
          <ShieldCheck size={23} />
        </span>

        <span className="min-w-0 flex-1">
          <span className="block text-sm font-semibold text-slate-800">
            Registered Agent – Monthly
          </span>
          <span className="mt-1 block text-sm text-slate-500">
            Recurring · month
          </span>
        </span>

        <span className="text-sm font-bold text-slate-900">$25</span>
      </label>

      <div className="mt-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="text-sm text-slate-500">
            Main service + selected add-ons
          </p>
          <p className="mt-1 text-2xl font-bold text-slate-900">
            ${total.toFixed(2)}
            <span className="ml-2 text-sm font-normal text-slate-500">
              before estimated tax
            </span>
          </p>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#234477] px-5 py-3 text-sm font-semibold text-[#234477] transition hover:bg-blue-50"
        >
          <ShoppingCart size={18} />
          Add selected together
        </button>
      </div>
    </section>
  );
}
