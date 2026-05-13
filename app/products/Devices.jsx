'use client';

import EngineersCard from "../about-us/EngineersCard";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
export default function Devices() {
    const { t } = useLanguage();
    return (
        <div className="bg-black flex flex-col gap-16 py-16 md:py-20 lg:py-26 px-6 sm:px-10 md:px-20 w-full border border-t-0 border-[#2A2A2E]">
            <div className="max-w-[1500px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-cols-3 gap-12">

                    {[
                        {
                            img: "Wire Meshes.png",
                            title: t('products.wireMeshTitle'),
                            desc: t('products.wireMeshDesc'),
                            specs: [
                                ["Standard", "B500A (Din 488)"],
                                [t('products.wireDiameters'), `Ø5 — Ø10 (${t('products.customAvailable')})`]
                            ],
                            link: "/products/wire-mesh",
                        },
                        {
                            img: "Rebar Bending.png",
                            title: t('products.rebarBendingTitle'),
                            desc: t('products.rebarBendingDesc'),
                            specs: [
                                [t('products.processingCapacity'), t('products.metricTonsPerDay')],
                                [t('products.machinery'), t('products.highPrecisionCNC')]
                            ],
                            link: "/products/cutting-bending",
                        },
                        {
                            img: "Carbon Steel.png",
                            title: t('products.carbonSteelTitle'),
                            desc: t('products.carbonSteelDesc'),
                            specs: [
                                [t('products.durability'), t('products.highVersatility')],
                                [t('products.application'), t('products.industrialSolutions')]
                            ],
                            link: "/products/medium-carbon",
                        }
                    ].map((item, i) => (
                        <div key={i} className="flex flex-col h-full">

                            <Image
                                src={`/${item.img}`}
                                alt={item.title}
                                width={600}
                                height={400}
                                className="w-full h-auto object-contain opacity-0 animate-fadeInUp transition-all duration-700 hover:scale-105"
                            />

                            <div className="flex flex-col flex-1">

                                <EngineersCard
                                    title1={item.title}
                                    title2=""
                                    description={item.desc}
                                    descriptionStyle
                                />

                                <div className="flex flex-col gap-3 mt-4 flex-1">
                                    {item.specs.map((s, idx) => (
                                        <div key={idx} className="flex items-center gap-3 w-full bg-[#F97316]/5">
                                            <div className="h-14 w-0.5 bg-[#F97316]" />
                                            <div className="flex flex-col gap-1 py-3">
                                                <div className="text-[#71717A] uppercase tracking-widest text-xs">
                                                    {s[0]}
                                                </div>
                                                <div className="text-sm text-white">
                                                    {s[1]}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <Link
                                    href={item.link}
                                    className="mt-6 px-6 md:px-9 py-3 md:py-4 border border-[#3F3F46] text-white uppercase tracking-[0.2em] text-xs font-extrabold flex items-center justify-center transition-colors hover:bg-[#111111]"
                                >
                                    {t('home.moreInfo')}
                                </Link>

                            </div>
                        </div>
                    ))}
                </div>           
            </div>
        </div>
    );
}