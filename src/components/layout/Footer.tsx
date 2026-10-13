export default function Footer() {
    return (
        <footer className="border-t border-slate-200 bg-white">
            <div className="mx-auto flex max-w-[1440px] flex-col gap-3 px-4 py-7 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
                <div className="flex items-center gap-5">
                    <span className="text-xl font-extrabold tracking-tight text-[#234477]">
                        checkalt
                    </span>

                    <span className="text-sm text-slate-500">
                        Business services, simplified.
                    </span>
                </div>

                <p className="text-xs leading-5 text-slate-500 md:text-right">
                    Demonstration only · No payments or orders are placed · No real tax rates represented
                </p>
            </div>
        </footer>
    );
}