import { Search, ShoppingCart, Info } from "lucide-react";

export default function Header() {
    return (
        <>
            {/* White separator */}
            <div className="h-9 border-b border-slate-200 bg-white" />

            {/* Main navy navigation */}
            <header className="border-b-4 border-white bg-[#234477] text-white">
                <div className="mx-auto flex min-h-[88px] max-w-[1600px] items-center gap-5 px-4 py-4 sm:px-8 lg:gap-8">
                    {/* Logo */}
                    <a href="/" className="flex shrink-0 items-center gap-3">
                        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-2xl font-bold text-[#234477]">
                            C
                        </span>

                        <span>
                            <span className="block text-xl font-bold leading-tight">
                                checkalt
                            </span>
                            <span className="text-[10px] font-semibold tracking-wider text-blue-100">
                                SERVICE MARKETPLACE
                            </span>
                        </span>
                    </a>

                    {/* Search */}
                    <form
                        onSubmit={(event) => event.preventDefault()}
                        className="mx-auto hidden h-12 max-w-3xl flex-1 items-center overflow-hidden rounded-xl bg-white text-slate-700 md:flex"
                    >
                        <Search className="ml-4 shrink-0 text-slate-500" size={20} />

                        <input
                            type="search"
                            placeholder="Search for formation, certified copies, compliance..."
                            className="h-full min-w-0 flex-1 px-4 text-sm outline-none"
                        />

                        <button
                            type="submit"
                            className="h-full bg-blue-50 px-6 font-semibold text-[#234477] hover:bg-blue-100"
                        >
                            Search
                        </button>
                    </form>

                    {/* Navigation */}
                    <nav className="ml-auto flex shrink-0 items-center gap-5 lg:gap-7">
                        <a
                            href="#how-it-works"
                            className="hidden items-center gap-2 text-sm hover:text-blue-200 lg:flex"
                        >
                            <Info size={19} />
                            How it works
                        </a>

                        <a
                            href="#cart"
                            className="flex items-center gap-2 font-semibold hover:text-blue-200"
                        >
                            <span className="relative">
                                <ShoppingCart size={25} />

                                <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-white px-1 text-xs font-bold text-[#234477]">
                                    1
                                </span>
                            </span>

                            <span className="hidden sm:inline">Cart</span>
                        </a>
                    </nav>
                </div>

                {/* Mobile search */}
                <div className="px-4 pb-4 md:hidden">
                    <div className="flex h-11 items-center rounded-lg bg-white text-slate-600">
                        <Search size={18} className="ml-3 shrink-0" />
                        <input
                            type="search"
                            placeholder="Search services..."
                            className="w-full px-3 text-sm outline-none"
                        />
                    </div>
                </div>
            </header>

            {/* <div className="border-[1px]" /> */}
        </>
    );
}