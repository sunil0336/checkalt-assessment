import { ChevronRight } from "lucide-react";
import ProductGallery from "../components/product/ProductGallery";
import ProductInfo from "../components/product/ProductInfo";
import PricingCard from "../components/product/PricingCard";
import Specifications from "../components/product/Specifications";
import BundleContents from "../components/product/BundleContents";
import AddOnServices from "../components/product/AddOnServices";
import BeforeYouOrder from "../components/product/BeforeYouOrder";

export default function ProductDetails() {
    return (
        <main className="min-h-screen bg-[#f4f7fb]">
            <div className="mx-auto max-w-[1440px] px-4 py-6 sm:px-6 lg:px-8">
                <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-slate-500">
                    <a href="#" className="hover:text-blue-700">
                        Services
                    </a>
                    <ChevronRight size={15} />

                    <a href="#" className="hover:text-blue-700">
                        Bundles
                    </a>
                    <ChevronRight size={15} />

                    <span className="text-slate-700">
                        LLC Starter Bundle
                    </span>
                </nav>

                <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[280px_minmax(0,1fr)] xl:grid-cols-[300px_minmax(0,1fr)_320px]">
                    <ProductGallery />
                    <ProductInfo />
                    <PricingCard />
                </div>

                <div className="mt-6 w-full space-y-6 lg:w-[75%]">
                    <Specifications />
                    <BundleContents />
                    <AddOnServices />
                    <BeforeYouOrder />
                </div>

                <p className="mt-6 pb-20 text-xs leading-5 text-slate-500">
                    Prices and subscription terms shown are prototype data
                    (except sample California/Alaska LLC filing prices from
                    the prior workbook analysis). Tax percentages are
                    deliberately fictional. No real orders are submitted.
                </p>
            </div>
        </main>
    );
}