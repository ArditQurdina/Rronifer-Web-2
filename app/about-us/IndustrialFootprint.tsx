'use client';

import { useLanguage } from "@/context/LanguageContext";
import { useEffect, useRef, useState } from "react";
import { useCountUp } from "../hooks/SetCountUp";

export default function IndustrialFootprint() {
    const { t } = useLanguage();

    const sectionRef = useRef(null);
    const [start, setStart] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStart(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.4 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const wireMeshProduction = useCountUp(14000, start);
    const cuttingBending = useCountUp(15000, start);
    const mediumCarbonSteel = useCountUp(7500, start);
    const metricTonsAnnually = useCountUp(160, start);
    const integratedTechFacility = useCountUp(50000, start);
    return (
        <div ref={sectionRef} id="footprint" className="bg-[#09090B] py-16 md:py-20 lg:py-26 px-6 sm:px-10 md:px-20 w-full flex flex-col uppercase">
            <div className="max-w-[1500px] mx-auto ">

                <div className="flex flex-col lg:flex-row gap-6 lg:gap-0">

                    {/* LEFT BOX */}
                    <div className="flex-1 w-full p-6 md:p-8 bg-black border border-t-0 border-[#2A2A2E] flex flex-col gap-10">

                        <div className="text-lg sm:text-xl md:text-2xl font-extrabold uppercase">
                            {t('about.footprint')}
                        </div>

                        <table className="w-full text-xs">
                            <tbody>

                                <tr>
                                    <td>{t('about.wireMeshProduction')}</td>
                                    <td className="text-right text-[#F97316] text-base md:text-lg font-semibold tracking-wide">
                                        {wireMeshProduction.toLocaleString()}
                                        <span className="ml-1 normal-case">m²</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={2} className="pb-10">
                                        <div className="w-full h-0.5 bg-[#18181B]">
                                            <div className="h-full bg-[#F97316]" style={{ width: "37%" }} />
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>{t('about.cuttingBending')}</td>
                                    <td className="text-right text-[#F97316] text-base md:text-lg font-semibold tracking-wide">
                                        {cuttingBending.toLocaleString()}
                                        <span className="ml-1 normal-case">m²</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={2} className="pb-10">
                                        <div className="w-full h-0.5 bg-[#18181B]">
                                            <div className="h-full bg-[#A1A1AA]" style={{ width: "40%" }} />
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>{t('about.mediumCarbonSteel')}</td>
                                    <td className="text-right text-[#F97316] text-base md:text-lg font-semibold tracking-wide">
                                        {mediumCarbonSteel.toLocaleString()}
                                        <span className="ml-1 normal-case">m²</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>
                                        <div className="w-full h-0.5 bg-[#18181B]">
                                            <div className="h-full bg-[#3F3F46]" style={{ width: "18%" }} />
                                        </div>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>

                    {/* RIGHT BOX 1 */}
                    <div className="flex-1 w-full border border-t-0 border-[#2A2A2E] p-8 md:p-10 flex flex-col justify-center gap-6">

                        <div className="flex flex-col gap-3">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-[#F97316]">
                                {metricTonsAnnually.toLocaleString()}k+
                            </h2>
                            <h3 className="text-[10px] md:text-xs text-[#71717A] tracking-[0.2em]">
                                {t('about.metricTonsAnnually')}
                            </h3>
                        </div>

                        <p className="text-[10px] md:text-xs text-[#71717A] font-semibold leading-relaxed">
                            {t('about.regionalExpansionDesc')}
                        </p>

                    </div>

                    {/* RIGHT BOX 2 */}
                    <div className="flex-1 w-full border border-t-0 border-[#2A2A2E] p-8 md:p-10 flex flex-col justify-center gap-6">

                        <div className="flex flex-col gap-3">
                            <h2 className="text-3xl md:text-4xl font-extrabold">
                                {integratedTechFacility.toLocaleString()}m
                            </h2>
                            <h3 className="text-[10px] md:text-xs text-[#F97316] tracking-[0.2em]">
                                {t('about.integratedTechFacility')}
                            </h3>
                        </div>

                        <p className="text-[10px] md:text-xs text-[#71717A] font-semibold leading-relaxed">
                            {t('about.criticalConstructionTimelines')}
                        </p>

                    </div>

                </div>
            </div>
        </div >
    );
}