'use client';

import { useLanguage } from "@/context/LanguageContext";

export default function DiameterVarianceMatrix() {
    const { t } = useLanguage();

    return (
        <div className="bg-black w-full py-16 md:py-20 lg:py-26 px-6 sm:px-10 md:px-20 text-white">
            <div className="max-w-[1500px] mx-auto xl:px-30 lg:px-20 px-5">

                <div className="flex flex-col lg:items-end gap-30">

                    <div>

                        <h2 className="text-white uppercase text-xl lg:text-2xl font-extrabold tracking-wider mb-12">
                            {t("products.diameter.title")}
                        </h2>

                        <div className="flex flex-col lg:flex-row gap-16 lg:gap-30">

                            {/* TABLE */}
                            <div className="w-full lg:w-3/4 overflow-x-auto">
                                <div className="min-w-[600px]">
                                    <div className="grid grid-cols-5 text-[11px] text-[#4B5563] uppercase tracking-[0.2em] border-b border-white/10 pb-4 font-extrabold">
                                        <div>{t("products.diameter.header.diameter")}</div>
                                        <div>{t("products.diameter.header.tolerance")}</div>
                                        <div>{t("products.diameter.header.tensile")}</div>
                                        <div>{t("products.diameter.header.carbon")}</div>
                                        <div className="text-right">{t("products.diameter.header.torsion")}</div>
                                    </div>

                                    {/* ROWS (unchanged values) */}
                                    <div className="grid grid-cols-5 py-6 border-b border-white/5 items-center">
                                        <div className="font-bold">1.20 mm</div>
                                        <div className="text-sm text-[#9CA3AF]">0.02 mm</div>
                                        <div className="text-sm">1870 – 2100 N/mm²</div>
                                        <div className="text-sm">0.65</div>
                                        <div className="text-right text-[#FF6B00] font-semibold">25%</div>
                                    </div>

                                    <div className="grid grid-cols-5 py-6 border-b border-white/5 items-center">
                                        <div className="font-bold text-[#FF6B00]">1.30 mm</div>
                                        <div className="text-sm text-[#9CA3AF]">0.02 mm</div>
                                        <div className="text-sm">1870 – 2130 N/mm²</div>
                                        <div className="text-xs text-[#9CA3AF]">0.45 – 0.65</div>
                                        <div className="text-right font-semibold">25%</div>
                                    </div>

                                    <div className="grid grid-cols-5 py-6 border-b border-white/5 items-center">
                                        <div className="font-bold">1.70 mm</div>
                                        <div className="text-sm text-[#9CA3AF]">0.025 mm</div>
                                        <div className="text-sm">1790 – 2010 N/mm²</div>
                                        <div className="text-sm">0.72</div>
                                        <div className="text-right">22%</div>
                                    </div>

                                    <div className="grid grid-cols-5 py-6 border-b border-white/5 items-center">
                                        <div className="font-bold">2.10 mm</div>
                                        <div className="text-sm text-[#9CA3AF]">0.025 mm</div>
                                        <div className="text-sm">1720 – 1990 N/mm²</div>
                                        <div className="text-sm">0.65</div>
                                        <div className="text-right">22%</div>
                                    </div>

                                    <div className="grid grid-cols-5 py-6 border-b border-white/5 items-center">
                                        <div className="font-bold">3.80 mm</div>
                                        <div className="text-sm text-[#9CA3AF]">0.025 mm</div>
                                        <div className="text-sm">1270 – 1370 N/mm²</div>
                                        <div className="text-xs text-[#9CA3AF]">0.68</div>
                                        <div className="text-right text-[#6B7280]">18%</div>
                                    </div>
                                </div>
                            </div>

                            {/* RIGHT */}
                            <div className="w-full lg:w-1/4">
                                <div className="bg-[#111113] border border-white/10 p-10 flex flex-col gap-8">

                                    <div className="flex flex-col gap-6">
                                        <h3 className="text-sm font-bold uppercase">
                                            {t("products.diameter.performanceTitle")}
                                        </h3>

                                        <div className="flex flex-col gap-8">

                                            <div className="flex flex-col gap-2">
                                                <div className="text-[#FF6B00] font-semibold uppercase text-sm">
                                                    {t("products.diameter.trait1Title")}
                                                </div>
                                                <p className="text-[#9CA3AF]">
                                                    {t("products.diameter.trait1Desc")}
                                                </p>
                                            </div>

                                            <div className="flex flex-col gap-2">
                                                <div className="font-semibold uppercase text-sm">
                                                    {t("products.diameter.trait2Title")}
                                                </div>
                                                <p className="text-[#9CA3AF]">
                                                    {t("products.diameter.trait2Desc")}
                                                </p>
                                            </div>

                                            <div className="border border-white/10 mt-4"></div>

                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-6">
                                        <h3 className="uppercase text-lg font-bold">
                                            {t("products.diameter.usageTitle")}
                                        </h3>

                                        <ul className="text-xs space-y-4 text-[#9CA3AF] uppercase font-bold">
                                            <li>— {t("products.diameter.use1")}</li>
                                            <li>— {t("products.diameter.use2")}</li>
                                            <li>— {t("products.diameter.use3")}</li>
                                            <li>— {t("products.diameter.use4")}</li>
                                        </ul>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="text-[11px] uppercase text-[#FF6B00] tracking-[0.4em]">
                        {t("products.diameter.footer")}
                    </div>

                </div>
            </div>
        </div>

    );
}