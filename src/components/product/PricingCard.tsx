import { useState } from "react";
import { Building2, Minus, Plus, ShoppingCart } from "lucide-react";

export default function PricingCard() {
    const [copies, setCopies] = useState(2);
    const [quantity, setQuantity] = useState(1);
    const [county, setCounty] = useState("");

    const basePrice = 299;
    const extraCopyPrice = 18;
    const taxRate = 0.011;

    const subtotal = (basePrice + copies * extraCopyPrice) * quantity;
    const tax = subtotal * taxRate;
    const total = subtotal + tax;

    const updateCopies = (value: number) => {
        setCopies(Math.max(0, Math.min(10, value)));
    };

    const updateQuantity = (value: number) => {
        setQuantity(Math.max(1, Math.min(99, value)));
    };

    return (
        <aside className="h-fit rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-700">
                Service price
            </p>

            <div className="flex items-start">
                <span className="mt-1 text-xl font-bold">$</span>
                <span className="text-5xl font-extrabold leading-none tracking-tight">
                    299
                </span>
            </div>
            <p className="mt-1 text-sm text-slate-500">one-time bundle price</p>

            <div className="my-5 border-t border-slate-200" />

            <div className="flex items-start gap-3">
                <Building2 size={19} className="mt-1 shrink-0 text-slate-500" />
                <div>
                    <p className="text-sm font-medium text-slate-700">
                        California · LLC
                    </p>
                    <p className="text-xs text-slate-500">
                        Change jurisdiction from the marketplace
                    </p>
                </div>
            </div>

            <label htmlFor="county" className="mt-5 block text-sm font-semibold text-slate-700">
                County (optional)
            </label>

            <select
                id="county"
                value={county}
                onChange={(event) => setCounty(event.target.value)}
                className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3 py-3 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            >
                <option value="">Not selected</option>
                <option value="Los Angeles">Los Angeles</option>
                <option value="San Diego">San Diego</option>
                <option value="Orange">Orange</option>
                <option value="San Francisco">San Francisco</option>
            </select>

            <p className="mt-2 text-xs leading-5 text-slate-500">
                County can update applicable price or tax estimate.
            </p>

            <div className="mt-5">
                <h3 className="text-sm font-semibold text-slate-800">
                    Certified copies included
                </h3>
                <div className="mt-2 flex justify-between text-sm text-slate-600">
                    <span>Included copies</span>
                    <span className="font-semibold text-slate-800">3</span>
                </div>
            </div>

            <div className="mt-5">
                <h3 className="text-sm font-semibold text-slate-800">
                    Additional certified copies
                </h3>

                <div className="mt-2 inline-flex items-center rounded-lg border border-slate-200">
                    <button
                        type="button"
                        aria-label="Remove one additional copy"
                        disabled={copies === 0}
                        onClick={() => updateCopies(copies - 1)}
                        className="p-3 text-[#23477f] hover:bg-slate-50 disabled:opacity-30"
                    >
                        <Minus size={16} />
                    </button>

                    <span className="min-w-10 text-center text-sm font-semibold">
                        {copies}
                    </span>

                    <button
                        type="button"
                        aria-label="Add one additional copy"
                        disabled={copies === 10}
                        onClick={() => updateCopies(copies + 1)}
                        className="p-3 text-[#23477f] hover:bg-slate-50 disabled:opacity-30"
                    >
                        <Plus size={16} />
                    </button>
                </div>

                <p className="mt-2 text-xs text-slate-500">
                    $18 per additional copy · up to 10
                </p>
            </div>

            <div className="mt-5">
                <h3 className="text-sm font-semibold text-slate-800">Quantity</h3>

                <div className="mt-2 inline-flex items-center rounded-lg border border-slate-200">
                    <button
                        type="button"
                        aria-label="Decrease bundle quantity"
                        disabled={quantity === 1}
                        onClick={() => updateQuantity(quantity - 1)}
                        className="p-3 text-[#23477f] hover:bg-slate-50 disabled:opacity-30"
                    >
                        <Minus size={16} />
                    </button>

                    <span className="min-w-10 text-center text-sm font-semibold">
                        {quantity}
                    </span>

                    <button
                        type="button"
                        aria-label="Increase bundle quantity"
                        disabled={quantity === 99}
                        onClick={() => updateQuantity(quantity + 1)}
                        className="p-3 text-[#23477f] hover:bg-slate-50 disabled:opacity-30"
                    >
                        <Plus size={16} />
                    </button>
                </div>
            </div>

            <div className="mt-5 space-y-3 rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm">
                <div className="flex justify-between gap-3">
                    <span className="text-slate-600">Bundle base</span>
                    <span className="font-bold">${basePrice * quantity}</span>
                </div>

                <div className="flex justify-between gap-3">
                    <span className="text-slate-600">
                        Extra copies × {quantity} bundle(s)
                    </span>
                    <span className="font-bold">${copies * extraCopyPrice * quantity}</span>
                </div>

                <div className="flex justify-between gap-3">
                    <span className="text-slate-600">Estimated tax (demo)</span>
                    <span className="font-bold">${tax.toFixed(2)}</span>
                </div>

                <div className="border-t border-slate-200 pt-3">
                    <div className="flex items-center justify-between gap-3 font-bold">
                        <span>Estimated due now</span>
                        <span className="text-lg">${total.toFixed(2)}</span>
                    </div>
                </div>
            </div>

            <button
                type="button"
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-[#23477f] px-4 py-3.5 font-semibold text-white transition hover:bg-[#193660]"
            >
                <ShoppingCart size={18} />
                Add to cart
            </button>

            <p className="mt-3 text-center text-xs text-slate-500">
                Demonstration pricing only.
            </p>
        </aside>
    );
}