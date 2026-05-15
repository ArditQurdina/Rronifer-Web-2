'use client';

import { useLanguage } from "@/context/LanguageContext";

export default function LatticeGirders() {
    const { t } = useLanguage();

    return (
        <div className="bg-black py-16 md:py-20 lg:py-26 px-6 sm:px-10 md:px-20 w-full border border-t-0 border-[#2A2A2E] overflow-x-hidden">
            <div className="max-w-[1500px] mx-auto">

                <div className="flex flex-col lg:flex-row items-end gap-10 lg:gap-16">

                    {/* LEFT */}
                    <div className="flex flex-col gap-12 w-full lg:w-1/2">

                        <div className="flex flex-col gap-4">

                            <div className="w-fit uppercase text-xs bg-[#FF6B00] tracking-[0.3em] font-semibold px-5 py-2">
                                {t("products.lattice.series")}
                            </div>

                            <h1 className="uppercase text-4xl sm:text-6xl lg:text-8xl text-white font-extrabold tracking-tighter leading-none">
                                <span className="block">
                                    {t("products.lattice.titleLine1")}
                                </span>
                                <span className="block -mt-1 md:-mt-3">
                                    {t("products.lattice.titleLine2")}
                                </span>
                            </h1>

                        </div>

                        <p className="text-[#6B7280]">
                            {t("products.lattice.description")}
                        </p>

                    </div>

                    {/* RIGHT */}
                    <div className="flex flex-col justify-center gap-6 border border-white/10 px-6 md:px-7 py-8 w-full lg:w-1/2">

                        <div className="flex flex-col gap-4 uppercase">

                            <div className="text-[10px] text-[#FF6B00] tracking-[0.1em] font-semibold">
                                {t("products.lattice.coreTitle")}
                            </div>

                            <div className="flex flex-col gap-2">

                                <div className="flex items-center justify-between">
                                    <div className="text-2xl sm:text-3xl lg:text-4xl text-white font-extrabold">
                                        90 MM
                                    </div>

                                    <div className="text-[11px] text-white/70">
                                        {t("products.lattice.girderHeight")}
                                    </div>
                                </div>

                                <div className="h-[1px] w-full bg-white/20"></div>

                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}