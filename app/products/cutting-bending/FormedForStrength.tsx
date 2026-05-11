'use client';

import { useLanguage } from "@/context/LanguageContext";

export default function FormedForStrength() {
    const { t } = useLanguage();

    return (
        <div className="bg-black py-16 md:py-20 lg:py-26 px-6 sm:px-10 md:px-20 w-full border border-t-0 border-[#2A2A2E]">
            <div className="max-w-[1500px] mx-auto">
                <div className="flex flex-col gap-6 w-full">

                    <div className="uppercase text-4xl sm:text-6xl lg:text-8xl text-white font-extrabold tracking-tighter">
                        <h1 className="m-0 leading-none">
                            {t("products.formed.titleLine1")}
                        </h1>
                        <h1 className="m-0 leading-none -mt-1 md:-mt-3">
                            {t("products.formed.titleLine2")}
                        </h1>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="w-[3px] h-20 bg-[#FF6B00]"></div>

                        <p className="text-[#6B7280] w-[400px]">
                            {t("products.formed.description")}
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}