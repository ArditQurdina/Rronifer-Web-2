'use client'

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
export default function ForceBehindLandmarks() {
    const { t } = useLanguage();
    return (

        <div id="landmarks" className="bg-black md:place-items-center py-16 md:py-20 lg:py-26 px-6 sm:px-10 md:px-20 w-full border border-t-0 border-[#2A2A2E]">
            <div className="max-w-[1500px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
                    {/* LEFT SIDE */}
                    <div className="relative w-full h-full">
                        <Image
                            src="/Steel Fabrication Site.svg"
                            alt="Steel Fabrication Site"
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-auto h-auto"
                        />
                    </div>
                    {/* RIGHT SIDE */}
                    <div className="flex flex-col gap-10">
                        <div className="uppercase w-[470px] text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-extrabold tracking-tight">
                            {t('about.force')}
                        </div>
                        <div className="bg-[#F97316] w-[75px] h-1.5"></div>
                        <p className="italic text-sm md:text-base font-extralight">
                            {t('about.forceDesc1')}
                        </p>
                        {/* DESCRIPTION */}
                        <p className="font-light text-sm md:text-base leading-relaxed">
                            {t('about.forceDesc2')}
                        </p>
                        <Link
                            href="/contact-us#hear-from-you"
                            className="w-fit px-6 md:px-9 py-3 md:py-4 border border-[#3F3F46] text-white uppercase tracking-[0.3em] text-[11px] font-extrabold flex items-center justify-center hover:bg-[#111111]"
                        >
                            {t('about.requestDetail')}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
};