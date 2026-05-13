"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function EnterpriseLegacy() {
    const { t } = useLanguage();
    return (
        <div id="history" className="bg-black w-full border border-t-0 border-[#2A2A2E] border-t-0 py-16 md:py-20 lg:py-26 px-6 sm:px-10 md:px-20">
            <div className="max-w-[1500px] mx-auto ">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
                    {/* LEFT */}
                    <div className="flex flex-col gap-10">

                        <div className="flex flex-col gap-6">

                            <div className="flex items-center gap-4">
                                <div className="bg-[#F97316] w-10 h-[0.8px]" />
                                <span className="uppercase text-xs text-[#F97316] tracking-[0.5em] font-semibold">
                                    {t('about.enterpriseLegacy')}
                                </span>
                            </div>
                            <h1
                                className="
        uppercase
        text-4xl
        sm:text-5xl
        md:text-6xl
        lg:text-[72px]
        text-white
        font-extrabold
        tracking-tighter
        leading-[1.1]
        break-words
        max-w-[650px]
    "
                            >
                                {t('about.legacyYears')}
                            </h1>
                        </div>

                        <div className="flex flex-col gap-6 max-w-xl">
                            <p className="font-light text-base md:text-lg text-[#A1A1AA] leading-relaxed">
                                {t('about.legacyDesc')}
                            </p>

                            <p className="font-light text-xs md:text-sm text-[#71717A] leading-relaxed">
                                {t('about.managementDesc')}
                            </p>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="flex items-center justify-center w-full">
                        <Image
                            src="/Rronifer Object.png"
                            alt="Rronifer Object"
                            width={700}
                            height={700}
                            className="w-full h-auto object-contain transition-all duration-500"
                        />                    
                    </div>
                </div>
            </div>
        </div>
    );
}