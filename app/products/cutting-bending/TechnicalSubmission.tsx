'use client';

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function TechnicalSubmission() {
    const { t } = useLanguage();

    return (
        <div className="bg-black flex items-center justify-center py-16 md:py-20 lg:py-26 px-6 sm:px-10 md:px-20 w-full border border-t-0 border-[#2A2A2E]">

            <div className="flex flex-col justify-center items-center gap-6 max-w-2xl">

                <div className="flex flex-col gap-4">

                    <div className="uppercase text-2xl sm:text-3xl lg:text-4xl text-white font-extrabold tracking-tighter">
                        <h1 className="m-0 leading-none">
                            {t("products.technical.title")}
                        </h1>
                    </div>

                </div>

                <p className="font-light leading-relaxed text-[#9CA3AF] text-center">
                    {t("products.technical.description")}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">

                    <Link
                        href="/contact-us"
                        className="px-6 md:px-9 py-3 md:py-4 bg-[#F97316] uppercase tracking-widest text-xs font-extrabold flex items-center justify-center"
                    >
                        {t("products.technical.button1")}
                    </Link>

                    <Link
                        href="/contact-us#hear-from-you"
                        className="px-6 md:px-9 py-3 md:py-4 border border-[#3F3F46] text-white uppercase tracking-widest text-xs font-extrabold flex items-center justify-center"
                    >
                        {t("products.technical.button2")}
                    </Link>

                </div>

            </div>
        </div>
    );
}