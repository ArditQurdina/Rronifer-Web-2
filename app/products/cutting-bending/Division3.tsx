'use client';

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Division3() {
    const { t } = useLanguage();

    return (
        <div className="bg-black flex items-center justify-center py-16 md:py-20 lg:py-26 px-6 sm:px-10 md:px-20 w-full border border-t-0 border-[#2A2A2E]">
            <div className="max-w-[1500px] mx-auto">

                <div className="flex flex-col lg:flex-row gap-20">

                    {/* LEFT */}
                    <div className="flex flex-col gap-8 lg:w-[60%]">
                        <Image
                            src="/Division3.svg"
                            alt="Pile Cages"
                            width={0}
                            height={0}
                            className="w-full h-auto object-contain"
                        />
                    </div>

                    {/* RIGHT */}
                    <div className="flex flex-col justify-center gap-6 lg:w-[40%]">

                        <div className="flex flex-col gap-4">
                            <div className="uppercase text-xs text-[#FF6B00] tracking-[0.3em] font-semibold">
                                Division 03
                            </div>

                            <div className="uppercase text-2xl sm:text-3xl lg:text-4xl text-white font-extrabold tracking-tighter">
                                <h1 className="m-0 leading-none">
                                    {t("products.division3.title")}
                                </h1>
                            </div>
                        </div>

                        <p className="font-light leading-relaxed text-[#9CA3AF]">
                            {t("products.division3.description")}
                        </p>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">

                            <div className="flex flex-col w-full">
                                <div className="h-[2px] w-full bg-[#E5E5E5] mb-3"></div>
                                <div className="uppercase text-xs font-semibold">
                                    {t("products.division3.feature1Title")}
                                </div>
                                <div className="text-[#9CA3AF]">
                                    {t("products.division3.feature1Subtitle")}
                                </div>
                            </div>

                            <div className="flex flex-col w-full">
                                <div className="h-[2px] w-full bg-[#E5E5E5] mb-3"></div>
                                <div className="uppercase text-xs font-semibold">
                                    {t("products.division3.feature2Title")}
                                </div>
                                <div className="text-[#9CA3AF]">
                                    {t("products.division3.feature2Subtitle")}
                                </div>
                            </div>

                        </div>

                        <Link
                            href="/contact-us#hear-from-you"
                            className="w-fit px-6 md:px-9 py-3 md:py-4 bg-[#121213] text-white uppercase tracking-[0.2em] text-xs font-bold flex items-center justify-center bg-[#3F3F46]"
                        >
                            {t("products.division3.button")}
                        </Link>

                    </div>

                </div>
            </div>
        </div>
    );
}