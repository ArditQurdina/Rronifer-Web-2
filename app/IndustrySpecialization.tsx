"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function IndustrySpecialization() {
    const { t } = useLanguage();

    return (
        <div className="bg-black text-white py-16 md:py-20 lg:py-26 px-6 sm:px-10 md:px-20 border border-t-0 border-[#2A2A2E] w-full">
            <div className="max-w-[1500px] mx-auto">
                <div className="flex flex-col gap-10">

                    <div className="flex flex-col gap-6">
                        <div className="uppercase max-w-[400px] text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
                            {t('home.coreSpecialization')}
                        </div>

                        <div className="font-extralight max-w-[470px] text-[#71717A] text-sm md:text-base">
                            {t('home.specializationDesc')}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">

                        {/* CARD */}
                        <div className="flex flex-col h-full">

                            <Image
                                src="/image 1.svg"
                                alt={t('home.wiremeshes')}
                                width={0}
                                height={0}
                                className="w-full h-[280px] object-cover opacity-0 animate-fadeInUp transition-all duration-700 hover:scale-105"
                            />

                            <div className="flex flex-col flex-1">

                                <div className="mt-5 flex-1">
                                    <h3 className="font-bold text-lg uppercase">
                                        {t('home.wiremeshes')}
                                    </h3>

                                    <p className="text-[#71717A] text-sm mt-2 w-full line-clamp-3">
                                        {t('home.wireMeshesDesc')}
                                    </p>
                                </div>

                                <Link
                                    href="/products/wire-mesh"
                                    className="mt-6 px-6 md:px-9 py-3 md:py-4 border border-[#3F3F46] text-white uppercase tracking-[0.2em] text-xs font-extrabold flex items-center justify-center transition-colors hover:bg-[#111111]"
                                >
                                    {t('home.moreInfo')}
                                </Link>

                            </div>
                        </div>

                        {/* CARD 2 */}
                        <div className="flex flex-col h-full">

                            <Image
                                src="/image 2.svg"
                                alt={t('home.cuttingBending')}
                                width={0}
                                height={0}
                                className="w-full h-[280px] object-cover opacity-0 animate-fadeInUp transition-all duration-700 hover:scale-105"
                            />

                            <div className="flex flex-col flex-1">

                                <div className="mt-5 flex-1">
                                    <h3 className="font-bold text-lg uppercase">
                                        {t('home.cuttingBending')}
                                    </h3>

                                    <p className="text-[#71717A] text-sm mt-2 w-full line-clamp-3">
                                        {t('home.cuttingBendingDesc')}
                                    </p>
                                </div>

                                <Link
                                    href="/products/cutting-bending"
                                    className="mt-6 px-6 md:px-9 py-3 md:py-4 border border-[#3F3F46] text-white uppercase tracking-[0.2em] text-xs font-extrabold flex items-center justify-center transition-colors hover:bg-[#111111]"
                                >
                                    {t('home.moreInfo')}
                                </Link>                            
                            </div>
                        </div>

                        {/* CARD 3 */}
                        <div className="flex flex-col h-full">

                            <Image
                                src="/image 3.svg"
                                alt={t('home.mediumCarbon')}
                                width={0}
                                height={0}
                                className="w-full h-[280px] object-cover opacity-0 animate-fadeInUp transition-all duration-700 hover:scale-105"
                            />

                            <div className="flex flex-col flex-1">

                                <div className="mt-5 flex-1">
                                    <h3 className="font-bold text-lg uppercase">
                                        {t('home.mediumCarbon')}
                                    </h3>

                                    <p className="text-[#71717A] text-sm mt-2 w-full line-clamp-3">
                                        {t('home.mediumCarbonDesc')}
                                    </p>
                                </div>

                                <Link
                                    href="/products/medium-carbon"
                                    className="mt-6 px-6 md:px-9 py-3 md:py-4 border border-[#3F3F46] text-white uppercase tracking-[0.2em] text-xs font-extrabold flex items-center justify-center transition-colors hover:bg-[#111111]"
                                >
                                    {t('home.moreInfo')}
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}