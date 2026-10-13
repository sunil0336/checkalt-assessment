
import { Building2, Info, ShieldCheck } from "lucide-react";

const notices = [
  {
    title: "Jurisdiction matters",
    description:
      "Your state and entity selections control which services and prices are available.",
    Icon: Building2,
  },
  {
    title: "Requirements vary by service",
    description:
      "Detailed intake forms are provided separately by your CMS-based form management system.",
    Icon: Info,
  },
  {
    title: "Taxes are indicative",
    description:
      "Actual applicable taxes, fees and purchase terms require checkout confirmation.",
    Icon: ShieldCheck,
  },
];

export default function BeforeYouOrder() {
  return (
    <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
      <h2 className="text-xl font-bold text-slate-900">
        Before you order
      </h2>

      <div className="mt-4">
        {notices.map(({ title, description, Icon }) => (
          <div
            key={title}
            className="flex items-start gap-4 border-b border-slate-100 py-4 last:border-0"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#234477]">
              <Icon size={22} />
            </span>

            <div>
              <h3 className="text-sm font-semibold text-slate-800">
                {title}
              </h3>
              <p className="mt-1 text-sm leading-5 text-slate-500">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
