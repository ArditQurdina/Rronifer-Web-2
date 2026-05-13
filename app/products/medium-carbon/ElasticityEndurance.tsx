'use client';

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function ElasticityEndurance() {
    const { t } = useLanguage();

    return (
        <div className="bg-black flex items-center justify-center py-16 md:py-20 lg:py-26 px-6 sm:px-10 md:px-20 w-full border border-t-0 border-[#2A2A2E]">
            <div className="max-w-[1500px] w-full mx-auto">

                <div className="flex flex-col lg:flex-row lg:gap-40 gap-20 w-full">

                    {/* LEFT */}
                    <div className="flex flex-col gap-6 w-full lg:w-[55%]">

                        <div className="flex flex-col gap-4">

                            <div className="uppercase text-xs text-[#FF6B00] tracking-[0.3em] font-semibold">
                                {t("products.elasticity.label")}
                            </div>

                            <div className="uppercase text-4xl sm:text-6xl lg:text-8xl text-white font-extrabold tracking-tighter">
                                <h1 className="m-0 leading-none">
                                    {t("products.elasticity.titleLine1")}
                                </h1>
                                <h1 className="m-0 leading-none -mt-1 md:-mt-5">
                                    {t("products.elasticity.titleLine2")}
                                </h1>
                            </div>

                        </div>

                        <div className="flex items-center gap-4 max-w-xl">

                            <div className="w-[3px] h-20 bg-[#FF6B00] shrink-0"></div>

                            <p className="text-[#6B7280] lg:mr-6">
                                {t("products.elasticity.description")}
                            </p>

                        </div>

                    </div>

                    {/* RIGHT */}
                    <div className="w-full lg:w-[45%] flex items-center justify-center relative">

                        <Image
                            src="/image2.png"
                            alt="Spring Steel"
                            width={800}
                            height={600}
                            className="w-full h-auto object-contain opacity-0 animate-fadeInUp transition-all duration-700 hover:scale-105"
                        />

                        <div className="absolute lg:-bottom-10 lg:-left-40 md:-bottom-10 md:-left-10 -bottom-3 -left-3 flex flex-col gap-4 2xl:gap-4 xl:gap-3 lg:gap-2 2xl:w-[300px] xl:w-[250px] uppercase">

                            {/* Compliance */}
                            <div className="flex flex-col gap-2 px-4 py-6 2xl:px-4 xl:px-3 lg:px-2 2xl:py-6 xl:py-5 lg:py-4 bg-[#121213] z-50">
                                <div className="text-[#9CA3AF] text-[11px]">
                                    {t("products.elasticity.compliance")}
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="text-[#FF6B00] text-lg font-bold">DIN 10132</div>
                                    <div className="text-lg font-bold">/</div>
                                    <div className="text-[#FF6B00] text-lg font-bold">EN 40140</div>
                                </div>
                            </div>

                            {/* Carbon */}
                            <div className="flex items-center justify-between px-4 py-6 bg-[#121213] z-50 shadow-lg">
                                <div className="text-[11px]">
                                    {t("products.elasticity.carbon")}
                                </div>
                                <div className="text-lg font-bold">0.55%</div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}