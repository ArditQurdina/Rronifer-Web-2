"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import EngineersCard from "./EngineersCard";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const engineers = [
    ["Gent Lajqi", "Gent Lajqi2.png", "about.firstEngineerTitle", "about.firstEngineerRole"],
    ["Albana Skivjani", "Albana Skivjani2.png", "about.secondEngineerTitle", "about.secondEngineerRole"],
    ["Armir Avdyli", "Armir Avdyli2.png", "about.thirdEngineerTitle", "about.thirdEngineerRole"],
    ["Drilon Dina", "Drilon Dina2.png", "about.fourthEngineerTitle", "about.fourthEngineerRole"],
    ["Alban Bunjaku", "Alban Bunjaku2.png", "about.fifthEngineerTitle", "about.fifthEngineerRole"],
    ["Valon Lila", "Valon Lila2.png", "about.sixthEngineerTitle", "about.sixthEngineerRole"],
];

export default function QualifiedEngineers() {
    const { t } = useLanguage();
    const [index, setIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(3);

    // RESPONSIVE DETECTION
    useEffect(() => {
        const update = () => {
            if (window.innerWidth < 1024) {
                setVisibleCount(1);
            } else {
                setVisibleCount(3);
            }
        };

        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    const maxIndex = engineers.length - visibleCount;

    const canPrev = index > 0;
    const canNext = index < maxIndex;

    return (
        <div id="team" className="bg-black w-full border border-t-0 border-[#2A2A2E] py-16 md:py-20 lg:py-26 px-6 sm:px-10 md:px-20">
            <div className="max-w-[1500px] mx-auto flex flex-col lg:gap-10">

                {/* HEADER */}
                <div className="flex flex-col md:flex-row md:justify-between gap-6 uppercase">
                    <div className="flex flex-col gap-4">
                        <div className="bg-[#F97316] w-20 h-1.5" />
                        <div className="text-[10px] text-[#71717A] font-semibold">
                            {t('about.engineerTagline')}
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <Image
                            src="/200+.svg"
                            alt="Engineers"
                            width={120}
                            height={60}
                            className="w-auto h-auto opacity-0 animate-fadeInUp transition-all duration-700 hover:scale-105"
                        />
                        <div className="text-[10px] text-[#71717A] font-semibold">
                            {t('about.qualifiedEng')}
                        </div>
                    </div>
                </div>

                {/* SLIDER */}
                <div className="overflow-hidden">
                    <div
                        className="flex transition-transform duration-500 ease-out"
                        style={{
                            transform: `translateX(-${index * (100 / visibleCount)}%)`
                        }}
                    >
                        {engineers.map((p, i) => (
                            <div
                                key={p[0] + i}
                                className="flex-shrink-0 px-5"
                                style={{
                                    width: `${100 / visibleCount}%`
                                }}
                            >
                                <div className="flex flex-col gap-4 items-center">

                                    <Image
                                        src={`/${p[1]}`}
                                        alt={p[0]}
                                        width={500}
                                        height={500}
                                        className="w-full lg:h-[500px] h-auto object-cover mx-auto opacity-0 animate-fadeInUp transition-all duration-700 hover:scale-105"
                                    />

                                    <EngineersCard
                                        title1={p[0]}
                                        title2={t(p[2])}
                                        description={t(p[3])}
                                    />

                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CONTROLS */}
                <div className="flex items-center justify-center gap-6">

                    <button
                        onClick={() => setIndex((i) => Math.max(0, i - 1))}
                        disabled={!canPrev}
                        className={`w-12 h-12 rounded-full bg-[#111] border border-[#3F3F46] flex items-center justify-center transition
                        ${canPrev ? "hover:border-white" : "opacity-40 cursor-not-allowed"}`}
                    >
                        <ChevronLeft className="size-5 text-white" />
                    </button>

                    <button
                        onClick={() => setIndex((i) => Math.min(maxIndex, i + 1))}
                        disabled={!canNext}
                        className={`w-12 h-12 rounded-full bg-[#111] border border-[#3F3F46] flex items-center justify-center transition
                        ${canNext ? "hover:border-white" : "opacity-40 cursor-not-allowed"}`}
                    >
                        <ChevronRight className="size-5 text-white" />
                    </button>

                </div>

            </div>
        </div>
    );
}