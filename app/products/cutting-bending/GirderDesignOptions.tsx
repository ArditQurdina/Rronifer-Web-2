'use client';

import { useLanguage } from "@/context/LanguageContext";

export default function GirderDesignOptions() {
    const { t } = useLanguage();

    return (
        <div className="bg-black flex items-center justify-center py-16 md:py-20 lg:py-26 w-full border border-t-0 border-[#2A2A2E]">
            <div className="max-w-[1500px] w-full mx-auto">
                <div className="flex flex-col gap-30 w-full">

                    <h2 className="text-white uppercase text-xl md:text-2xl font-extrabold tracking-wider mb-12">
                        {t("products.girderOptions.title")}
                    </h2>

                    <div className="flex flex-col gap-16 w-full">

                        <div className="w-full">

                            {/* HEADER */}
                            <div className="grid grid-cols-5 text-[11px] text-[#4B5563] uppercase tracking-[0.2em] border-b border-white/10 pb-4 font-extrabold">
                                <div>{t("products.girderOptions.header.type")}</div>
                                <div>{t("products.girderOptions.header.lower")}</div>
                                <div>{t("products.girderOptions.header.diagonal")}</div>
                                <div>{t("products.girderOptions.header.upper")}</div>
                                <div className="text-right text-[#FF6B00]">
                                    {t("products.girderOptions.header.mass")}
                                </div>
                            </div>

                            {/* ROW 1 */}
                            <div className="grid grid-cols-5 py-6 border-b border-white/5 items-center uppercase">
                                <div className="font-bold">Girder 01</div>
                                <div className="text-sm font-extralight">5 mm</div>
                                <div className="text-sm font-extralight">4 mm</div>
                                <div className="text-sm font-extralight">5 mm</div>
                                <div className="text-right font-semibold">
                                    0.727 <span className="text-[#6B7280] text-[11px]">kg/m</span>
                                </div>
                            </div>

                            {/* ROW 2 */}
                            <div className="grid grid-cols-5 py-6 border-b border-white/5 items-center uppercase">
                                <div className="font-bold">Girder 02</div>
                                <div className="text-sm font-extralight">6 mm</div>
                                <div className="text-sm font-extralight">5 mm</div>
                                <div className="text-sm font-extralight">6 mm</div>
                                <div className="text-right font-semibold">
                                    1.08 <span className="text-[#6B7280] text-[11px]">kg/m</span>
                                </div>
                            </div>

                            {/* ROW 3 */}
                            <div className="grid grid-cols-5 py-6 items-center uppercase">
                                <div className="font-bold">Girder 03</div>
                                <div className="text-sm font-extralight">6 mm</div>
                                <div className="text-sm font-extralight">5 mm</div>
                                <div className="text-sm font-extralight">7 mm</div>
                                <div className="text-right font-semibold">
                                    1.24 <span className="text-[#6B7280] text-[11px]">kg/m</span>
                                </div>
                            </div>

                        </div>

                        {/* FOOTNOTE */}
                        <div className="flex flex-wrap gap-10 text-[11px] text-[#9CA3AF] uppercase tracking-[0.15em]">
                            <span>{t("products.girderOptions.footer.height")}</span>
                            <span>{t("products.girderOptions.footer.width")}</span>
                            <span>{t("products.girderOptions.footer.welding")}</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}