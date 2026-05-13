'use client';

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Division4() {
    const { t } = useLanguage();

    return (
        <div className="bg-black flex items-center justify-center py-16 md:py-20 lg:py-26 px-6 sm:px-10 md:px-20 w-full border border-t-0 border-[#2A2A2E]">
            <div className="max-w-[1500px] mx-auto">

                <div className="flex flex-col lg:flex-row items-center gap-20">

                    {/* LEFT */}
                    <div className="flex flex-col justify-center gap-6 lg:w-[40%] border border-[#E5E5E5] px-9 py-10">

                        <div className="flex flex-col gap-4">
                            <div className="uppercase text-xs text-[#FF6B00] tracking-[0.3em] font-semibold">
                                Division 04
                            </div>

                            <div className="uppercase text-2xl sm:text-3xl lg:text-4xl text-white font-extrabold tracking-tighter">
                                <h1 className="m-0 leading-none">
                                    {t("products.division4.title")}
                                </h1>
                            </div>
                        </div>

                        <p className="font-light leading-relaxed text-[#6B7280]">
                            {t("products.division4.description")}
                        </p>

                        <Link
                            href="/contact-us#hear-from-you"
                            className="w-fit px-6 md:px-9 py-3 md:py-4 bg-[#121213] text-white uppercase tracking-[0.2em] text-xs font-bold flex items-center justify-center hover:bg-[#111111]"
                        >
                            {t("products.division4.button")}
                        </Link>

                    </div>

                    {/* RIGHT */}
                    <div className="flex flex-col gap-8 lg:w-[60%]">
                        <Image
                            src="/Division4.svg"
                            alt="Diaphragm Walls"
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-full h-auto object-contain opacity-0 animate-fadeInUp transition-all duration-700 hover:scale-105"
                        />
                    </div>

                </div>
            </div>
        </div>
    );
}