'use client';

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function MaterialEngineering() {
    const { t } = useLanguage();

    return (
        <div className="bg-black flex items-center justify-center py-16 md:py-20 lg:py-26 px-6 sm:px-10 md:px-20 w-full border border-t-0 border-[#2A2A2E]">
            <div className="max-w-[1500px] w-full">
                <div className="flex flex-col lg:flex-row gap-20">

                    {/* LEFT */}
                    <div className="flex flex-col gap-12 w-full lg:w-[40%]">

                        <div className="flex flex-col gap-8">

                            <div className="flex flex-col gap-2">

                                <div className="uppercase text-3xl sm:text-5xl lg:text-7xl text-white font-bold tracking-wider">
                                    <h1 className="m-0 leading-none">
                                        {t("products.b500a.title")}
                                    </h1>
                                </div>

                                <div className="uppercase text-xl sm:text-2xl lg:text-3xl text-white font-bold tracking-tighter">
                                    {t("products.b500a.subtitle")}
                                </div>

                            </div>

                            <p className="text-[#6B7280] w-[400px]">
                                {t("products.b500a.description")}
                            </p>

                        </div>

                        <div className="flex items-center gap-8 w-full">

                            {/* Yield Strength */}
                            <div className="flex flex-col gap-5 w-full">
                                <div className="h-[2px] w-full bg-[#FF6B00]"></div>

                                <div className="flex flex-col gap-1.5">
                                    <div className="text-xl sm:text-2xl lg:text-3xl text-white font-bold tracking-tighter">
                                        500 MPa
                                    </div>
                                    <div className="text-[#9CA3AF] uppercase text-[11px]">
                                        {t("products.b500a.yieldStrength")}
                                    </div>
                                </div>

                            </div>

                            {/* Elongation */}
                            <div className="flex flex-col gap-5 w-full">

                                <div className="h-[2px] w-full bg-[#121213]"></div>

                                <div className="flex flex-col gap-1.5">
                                    <div className="text-xl sm:text-2xl lg:text-3xl text-white font-bold tracking-tighter">
                                        2.5%
                                    </div>
                                    <div className="text-[#9CA3AF] text-[11px]">
                                        {t("products.b500a.elongation")}
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                    {/* RIGHT */}
                    <div className="flex flex-col gap-2 lg:w-[60%]">

                        <Image
                            src="/B500A.png"
                            alt="B500A Steel"
                            width={800}
                            height={600}
                            className="w-full h-auto object-contain opacity-0 animate-fadeInUp transition-all duration-700 hover:scale-105"
                        />

                        <div className="flex items-center justify-between gap-8 bg-[#121213] uppercase w-full text-xs tracking-[0.2em] p-6">

                            <div>
                                {t("products.b500a.surface")}
                            </div>

                            <div className="text-[#FF6B00]">
                                {t("products.b500a.verified")}
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}