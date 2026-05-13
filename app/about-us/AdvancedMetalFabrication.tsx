"use client";

import Image from "next/image";
import TechCard from "./TechCard";
import { useLanguage } from "@/context/LanguageContext";

export default function AdvancedMetalFabrication() {
    const { t } = useLanguage();
    return (
        <div id="advanced-metal-fabrication" className="bg-black w-full border border-t-0 border-[#2A2A2E] py-16 md:py-20 lg:py-26 px-6 sm:px-10 md:px-20">
            <div className="max-w-[1500px] mx-auto ">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">

                    {/* LEFT */}
                    <div className="flex items-center justify-center">
                        <Image
                            src="/imp.svg"
                            alt="IMP"
                            width={700}
                            height={700}
                            className="w-full h-auto object-contain opacity-0 animate-fadeInUp transition-all duration-700 hover:scale-105"
                        />
                    </div>

                    {/* RIGHT */}
                    <div className="flex flex-col gap-10">

                        <h2 className="uppercase text-xl sm:text-2xl lg:text-3xl text-white font-extrabold">
                            {t('about.advancedMetalFabrication')}
                        </h2>

                        <p className="text-sm md:text-base text-[#A1A1AA] leading-relaxed">
                            {t('about.advancedMetalDesc')}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <TechCard
                                title1={t('about.techStack')}
                                title2="Haas CNC"
                                description={t('about.precision')}
                            />
                            <TechCard
                                title1={t('about.capability')}
                                title2={t('about.vertical')}
                                description={t('about.fullControl')}
                            />
                        </div>

                        <p className="italic text-xs md:text-sm text-[#71717A]">
                            {t('about.expertise')}
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
}