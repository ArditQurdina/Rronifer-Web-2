"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function ExploreProducts() {
    const { t } = useLanguage();

    return (
        <div className="relative w-full">
            <div className="relative w-full h-[500px] md:h-[650px] lg:h-[750px]">

                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src="/explore-products-video.mp4" type="video/mp4" />
                </video>

                <div className="absolute inset-0 bg-black/57"></div>

            </div>

            <div className="absolute flex items-center inset-0 py-16 md:py-20 lg:py-26 px-6 sm:px-10 md:px-20 border border-t-0 border-[#2A2A2E] w-full">
                <div className="max-w-[1500px] w-full mx-auto flex flex-col items-start">

                    <div className="flex flex-col gap-4">

                        {/* Tagline */}
                        <div className="flex items-center gap-3 md:gap-4">
                            <div className="bg-[#F97316] w-8 md:w-10 h-[0.8px] mb-[1px]"></div>

                            <div className="uppercase text-xs text-[#F97316] tracking-[0.5em] font-bold">
                                {t("home.tagline")}
                            </div>
                        </div>

                        {/* Title */}
                        <div className="flex flex-col">

                            <div className="uppercase text-4xl sm:text-5xl md:text-6xl lg:text-[90px] text-white font-extrabold leading-none tracking-tight">
                                {t("home.makesYou")}
                            </div>

                            <div className="relative overflow-hidden h-[2.25rem] sm:h-[3rem] md:h-[3.75rem] lg:h-[5.4rem]">
                                <div className="flex flex-col animate-wordSlider">

                                    <span className="uppercase text-4xl sm:text-5xl md:text-6xl lg:text-[90px] text-[#F97316] font-extrabold leading-none tracking-tight">
                                        {t("home.stronger")}
                                    </span>

                                    <span className="uppercase text-4xl sm:text-5xl md:text-6xl lg:text-[90px] text-[#F97316] font-extrabold leading-none tracking-tight">
                                        {t("home.better")}
                                    </span>

                                    {/* duplicate first word for seamless loop */}
                                    <span className="uppercase text-4xl sm:text-5xl md:text-6xl lg:text-[90px] text-[#F97316] font-extrabold leading-none tracking-tight">
                                        {t("home.stronger")}
                                    </span>

                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Description + Buttons */}
                    <div className="flex flex-col gap-8 md:gap-10 mt-8">

                        <div className="font-extralight text-sm md:text-base max-w-full md:max-w-[470px]">
                            {t("home.description")}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">

                            <Link
                                href="/products"
                                className="px-6 md:px-9 py-3 md:py-4 bg-[#F97316] text-black uppercase tracking-widest text-xs font-extrabold flex items-center justify-center transition-colors duration-300 hover:bg-orange-500"
                            >
                                {t("home.exploreProducts")}
                            </Link>

                            <Link
                                href="/contact-us"
                                className="px-6 md:px-9 py-3 md:py-4 border border-[#3F3F46] text-white uppercase tracking-widest text-xs font-extrabold flex items-center justify-center transition-colors duration-300 hover:bg-[#3F3F46] hover:text-white"
                            >
                                {t("nav.getInTouch")}
                            </Link>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}