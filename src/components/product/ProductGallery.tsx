import { FileText, Layers } from "lucide-react";

export default function ProductGallery() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex aspect-[4/5] items-center justify-center overflow-hidden rounded-lg bg-[#f0f5fd]">
        <div className="flex h-64 w-48 -rotate-3 flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white shadow-xl">
          <Layers size={64} strokeWidth={1.8} className="text-[#23477f]" />
          <div className="mt-8 h-2 w-20 rounded bg-slate-200" />
          <div className="mt-2 h-2 w-14 rounded bg-slate-100" />
        </div>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2">
        <button className="flex items-center justify-center gap-2 rounded-lg border border-[#23477f] bg-blue-50 px-2 py-3 text-sm font-semibold text-[#23477f]">
          <FileText size={18} />
          Service overview
        </button>

        <button className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-2 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50">
          <Layers size={18} />
          Specifications
        </button>
      </div>
    </div>
  );
}