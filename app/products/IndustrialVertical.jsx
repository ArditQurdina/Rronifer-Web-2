'use client';

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function IndustrialVertical() {
    const { t } = useLanguage();
    return (
        <div className="bg-black px-6 sm:px-10 md:px-20 w-full border border-t-0 border-[#2A2A2E]">
            <div className="max-w-[1500px] mx-auto ">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
                    {/* LEFT */}
                    <div className="flex flex-col gap-6 py-14 md:py-20">
                        <div className="flex flex-col gap-4">

                            <div className="flex items-center gap-2">
                                <div className="bg-[#F97316] w-10 h-[1px]" />
                                <span className="uppercase text-xs text-[#F97316] tracking-[0.5em] font-semibold">
                                    {t('products.industrialVertical')}
                                </span>
                            </div>

                            <div className="uppercase text-3xl sm:text-4xl lg:text-5xl text-white font-extrabold tracking-tighter leading-tight">
                                <h1>{t('products.precisionProcessing')}</h1>
                                <h1>{t('products.structuralExperience')}</h1>
                            </div>
                        </div>

                        <p className="font-light text-xs md:text-sm text-[#71717A] leading-relaxed">
                            {t('products.industrialVerticalDesc')}
                        </p>
                    </div>

                    {/* RIGHT */}
                    <div className="w-full flex items-center justify-center">
                        <Image
                            src="/industrial vertical.png"
                            alt="Industrial Vertical"
                            width={800}
                            height={800}
                            className="w-full h-auto object-contain opacity-0 animate-fadeInUp transition-all duration-700 hover:scale-105"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}