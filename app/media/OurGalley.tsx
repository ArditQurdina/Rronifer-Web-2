"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function OurGallery() {
    const { t } = useLanguage();

    return (
        <div className="bg-black py-16 md:py-20 lg:py-26 px-6 sm:px-10 md:px-20 w-full border border-t-0 border-[#2A2A2E]">
            <div className="max-w-[1500px] mx-auto">
                <div className="w-full flex flex-col gap-10">

                    <div className="flex flex-col gap-4 uppercase">
                        <div className="text-[#F97316] tracking-[0.3em] text-xs">
                            #{t('media.gallery')}
                        </div>

                        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">
                            <h1>{t('media.title')}</h1>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}