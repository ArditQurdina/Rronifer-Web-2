'use client';
import Link from 'next/link';
import { useLanguage } from "@/context/LanguageContext";

export default function PrecisionMetricTable() {
    const { t } = useLanguage();

    return (
        <div className="bg-black w-full py-16 md:py-20 lg:py-26 px-6 sm:px-10 md:px-20">

            <div className="max-w-[1500px] mx-auto xl:px-30 lg:px-20 px-5">

                <h2 className="text-[#FF6B00] uppercase text-lg sm:text-xl lg:text-2xl font-extrabold mb-10 tracking-wide">
                    {t("products.precision.title")}
                </h2>

                <div className="flex flex-col lg:flex-row gap-16 lg:gap-30">

                    {/* TABLE */}
                    <div className="w-full lg:w-3/4 overflow-x-auto">
                        <div className='min-w-[600px]'>

                            {/* HEADER */}
                            <div className="grid grid-cols-4 text-[11px] text-[#6B7280] uppercase border-b border-[#1F1F23] pb-4">
                                <div className="tracking-[0.2em]">{t("products.precision.header.profile")}</div>
                                <div className="tracking-[0.2em]">{t("products.precision.header.dimension")}</div>
                                <div className="tracking-[0.2em]">{t("products.precision.header.tolerance")}</div>
                                <div className="tracking-[0.2em] text-[#FF6B00]">
                                    {t("products.precision.header.tensile")}
                                </div>
                            </div>

                            {/* ROW 1 */}
                            <div className="grid grid-cols-4 py-6 border-b border-[#1F1F23] items-center">
                                <div className="font-bold">SERIES_3X</div>
                                <div className="text-sm">3.0 × 14 mm</div>
                                <div className="text-[#9CA3AF] text-sm">± 0.02 mm</div>
                                <div className="font-semibold">1500 – 1550</div>
                            </div>

                            {/* ROW 2 */}
                            <div className="grid grid-cols-4 py-6 border-b border-[#1F1F23] items-center">
                                <div className="font-bold">SERIES_8X</div>
                                <div className="text-sm">8.0 × 14 mm</div>
                                <div className="text-[#9CA3AF] text-sm">± 0.02 mm</div>
                                <div className="font-semibold">1500 – 1600</div>
                            </div>

                            {/* ROW 3 */}
                            <div className="grid grid-cols-4 py-6 border-b border-[#1F1F23] items-center">
                                <div className="font-bold">SERIES_10X</div>
                                <div className="text-sm">10.0 × 14 mm</div>
                                <div className="text-[#9CA3AF] text-sm">± 0.02 mm</div>
                                <div className="font-semibold text-[#FF6B00]">
                                    1600 – 1650
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="w-full lg:w-1/4 flex flex-col gap-10">

                        <div className="flex flex-col gap-8">

                            <div className="flex flex-col gap-4">

                                <h3 className="uppercase text-lg font-bold">
                                    {t("products.precision.utilityTitle")}
                                </h3>

                                <p className="text-[#9CA3AF] text-sm leading-relaxed">
                                    {t("products.precision.utilityDescription")}
                                </p>

                            </div>

                            <Link href="/contact-us#hear-from-you" className="w-fit border-2 border-[#FF6B00] text-[#FF6B00] uppercase font-semibold text-xs tracking-widest py-4 px-8 hover:bg-[#FF6B00] hover:text-black transition">
                                {t("products.precision.button")}
                            </Link>

                        </div>

                        <div className="border border-white/10 mt-4"></div>

                        <div className="text-[11px] uppercase space-y-2">
                            <div className="text-[#6B7280] italic font-semibold">
                                {t("products.precision.compatibilityTitle")}
                            </div>
                            <div>— {t("products.precision.compatibility1")}</div>
                            <div>— {t("products.precision.compatibility2")}</div>
                            <div>— {t("products.precision.compatibility3")}</div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
}