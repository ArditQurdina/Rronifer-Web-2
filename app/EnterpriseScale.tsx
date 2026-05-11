'use client';

import { useLanguage } from "@/context/LanguageContext";
import { useEffect, useRef, useState } from "react";
import { useCountUp } from "./hooks/SetCountUp";

export default function EnterpriseScale() {
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

    const ourFacilities = useCountUp(60000, start);
    const tonsPerDay = useCountUp(800, start);
    const specialists = useCountUp(200, start);
    const activeClients = useCountUp(800, start);
    const total = ourFacilities;
    const distribution = [
        { label: t("products.wireMesh"), value: 14000, color: "#F97316" },
        { label: t("products.cuttingBending"), value: 15000, color: "#9CA3AF" },
        { label: t("products.mediumCarbon"), value: 7500, color: "#9CA3AF" },
    ];

    return (
        <div
            ref={sectionRef}
            className="bg-black text-white py-16 md:py-20 lg:py-26 px-6 sm:px-10 md:px-20 border border-t-0 border-[#2A2A2E] w-full"
        >
            <div className="flex justify-center">
                <div className="flex flex-col w-full max-w-[1500px]">

                    <div className="flex flex-col gap-12 md:gap-16 lg:gap-20">

                        {/* Header */}
                        <div className="flex items-center gap-3 md:gap-4">
                            <div className="bg-[#F97316] w-8 md:w-10 h-[0.8px] mb-[1px]"></div>
                            <div className="uppercase text-[9px] md:text-[10px] text-[#8F8F8F] tracking-[0.3em] md:tracking-[0.5em]">
                                {t("home.enterprise.title")}
                            </div>
                        </div>

                        {/* Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">

                            {/* Our Facilities */}
                            <div className="p-6 md:p-8 w-full border border-[#2A2A2E] flex flex-col gap-6 md:gap-8">
                                <h3 className="text-[#F97316] uppercase text-[10px] tracking-[0.3em]">
                                    {t("home.enterprise.ourFacilities")}
                                </h3>

                                <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
                                    {ourFacilities.toLocaleString()}
                                    <span className="text-[#52525B] text-sm md:text-lg font-light ml-1">m²</span>
                                </div>

                                {/* Distribution Bars */}
                                <div className="flex flex-col gap-5">
                                    <div className="flex justify-between items-center mb-2 text-[#71717A]">
                                        <h3 className=" uppercase text-xs tracking-[0.1em]">
                                            {t("home.enterprise.distribution")}
                                        </h3>

                                        <h3 className="uppercase text-xs tracking-[0.1em]">
                                            {t("home.enterprise.areaMap")}
                                        </h3>
                                    </div>

                                    {/* Wire Mesh */}
                                    {distribution.map((item, i) => (
                                        <div key={i}>
                                            <div className="flex justify-between text-sm text-white mb-2">
                                                <span className="text-[#A1A1AA]">{item.label}</span>
                                                <span>{item.value / 1000}k</span>
                                            </div>

                                            <div className="w-full h-0.5 bg-[#2A2A2E] rounded-full overflow-hidden">
                                                <div
                                                    className="h-full"
                                                    style={{
                                                        width: `${(item.value / total) * 100}%`,
                                                        backgroundColor: item.color,
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* Tons Per Day */}
                            <div className="p-6 md:p-8 w-full border border-[#2A2A2E] flex flex-col gap-6 md:gap-8 uppercase">
                                <h3 className="text-[#F97316] text-[10px] tracking-[0.3em]">
                                    {t("home.enterprise.tonsPerDay")}
                                </h3>

                                <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
                                    {tonsPerDay.toLocaleString()}
                                    <span className="text-[#F97316] text-xl md:text-3xl font-light">+</span>
                                </div>

                                <div className="flex flex-col gap-2 text-[#71717A]">
                                    <div className="text-[10px] md:text-[11px] tracking-[0.1em]">
                                        {t("home.enterprise.metricTons")}
                                    </div>
                                    <p className="text-xs font-semibold tracking-[0.1em] leading-[18px] md:leading-[20px]">
                                        {t("home.enterprise.tonsPerDayDesc")}
                                    </p>
                                </div>
                            </div>

                            {/* Engineers */}
                            <div className="p-6 md:p-8 w-full border border-[#2A2A2E] flex flex-col gap-6 md:gap-8 uppercase">
                                <h3 className="text-[#F97316] text-[10px] tracking-[0.3em]">
                                    {t("home.enterprise.engineeredBy")}
                                </h3>

                                <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
                                    {specialists.toLocaleString()}
                                    <span className="text-[#F97316] text-xl md:text-3xl font-light">+</span>
                                </div>

                                <div className="flex flex-col gap-2 text-[#71717A]">
                                    <div className="text-[10px] md:text-[11px] tracking-[0.1em]">
                                        {t("home.enterprise.specialists")}
                                    </div>
                                    <p className="text-xs font-semibold tracking-[0.1em] leading-[18px] md:leading-[20px]">
                                        {t("home.enterprise.employeesDesc")}
                                    </p>
                                </div>
                            </div>

                            {/* Network */}
                            <div className="p-6 md:p-8 w-full border border-[#2A2A2E] flex flex-col gap-6 md:gap-8 uppercase">
                                <h3 className="text-[#F97316] text-[10px] tracking-[0.3em]">
                                    {t("home.enterprise.partnership")}
                                </h3>

                                <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
                                    {activeClients.toLocaleString()}
                                    <span className="text-[#F97316] text-xl md:text-3xl font-light">+</span>
                                </div>

                                <div className="flex flex-col gap-2 text-[#71717A]">
                                    <div className="text-[10px] md:text-[11px] tracking-[0.1em]">
                                        {t("home.enterprise.activeClients")}
                                    </div>
                                    <p className="text-xs tracking-[0.1em] font-semibold leading-[18px] md:leading-[20px]">
                                        {t("home.enterprise.activeClientsDesc")}
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Footer */}
                    <div className="flex justify-between gap-4 mt-10 md:mt-12 items-start sm:items-center text-[#8F8F8F] uppercase text-[8px] md:text-[9px] tracking-[0.3em] md:tracking-[0.5em]">
                        <div>Rronifer_Group</div>
                        <div>{t("home.enterprise.footer")}</div>
                    </div>

                </div>
            </div>
        </div>
    );
}