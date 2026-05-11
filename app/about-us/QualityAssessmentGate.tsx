"use client";

import TechCard from "./TechCard";
import { useLanguage } from "@/context/LanguageContext";

export default function QualityAssessmentGate() {
    const { t } = useLanguage();
    return (
        <div id="quality-process" className="bg-black w-full border border-t-0 border-[#2A2A2E] py-16 md:py-20 lg:py-26 px-6 sm:px-10 md:px-20">
            <div className="max-w-[1500px] mx-auto">

                <div className="flex flex-col gap-14">
                    {/* HEADER */}
                    <div className="flex flex-col gap-3">

                        <h2 className="uppercase text-lg sm:text-xl lg:text-2xl text-white font-extrabold">
                            {t('about.qualityGate')}
                        </h2>

                        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">

                            <p className="font-light text-sm md:text-base text-[#71717A] max-w-xl leading-relaxed">
                                {t('about.qualityGateDesc')}
                            </p>

                            <div className="flex flex-col gap-2 w-fit">
                                <div className="uppercase text-[10px] text-[#F97316] tracking-[0.4em]">
                                    {t('about.certified')}
                                </div>
                                <div className="bg-[#F97316] w-full h-[1px]" />
                            </div>

                        </div>
                    </div>

                    {/* CARDS */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        <TechCard
                            title1={t('about.phase1')}
                            title2={t('about.phase1Title')}
                            description={t('about.phase1Desc')}
                        />

                        <TechCard
                            title1={t('about.phase2')}
                            title2={t('about.phase2Title')}
                            description={t('about.phase2Desc')}
                        />

                        <TechCard
                            title1={t('about.phase3')}
                            title2={t('about.phase3Title')}
                            description={t('about.phase3Desc')}
                        />

                    </div>
                </div>
            </div>
        </div>
    );
}