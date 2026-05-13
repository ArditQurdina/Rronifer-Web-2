'use client'


import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Division1() {
    const { t } = useLanguage();

    return (
        <div id="cutting-bending" className="bg-black py-16 md:py-20 lg:py-26 px-6 sm:px-10 md:px-20 w-full border border-t-0 border-[#2A2A2E]">
            <div className="max-w-[1500px] mx-auto">
                <div className="flex flex-col lg:flex-row gap-20">

                    {/* LEFT */}
                    <div className="flex flex-col gap-3 lg:w-[40%]">

                        <div className="flex flex-col gap-4">
                            <div className="uppercase text-xs text-[#FF6B00] tracking-[0.3em] font-semibold">
                                Division 01
                            </div>

                            <div className="uppercase text-2xl sm:text-3xl lg:text-4xl text-white font-extrabold tracking-tighter">
                                <h1 className="m-0 leading-none">
                                    {t("products.division1.titleLine1")}
                                </h1>
                                <h1 className="m-0 leading-none">
                                    {t("products.division1.titleLine2")}
                                </h1>
                            </div>
                        </div>

                        <div className="flex flex-col gap-6 border border-[#E5E5E5] px-9 py-10">

                            <p className="font-light leading-relaxed text-[#F9F9F9]">
                                {t("products.division1.description")}
                            </p>

                            <p className="italic font-semibold">
                                {t("products.division1.quote")}
                            </p>

                            <div className="border border-[#E5E5E5]"></div>

                            <div className="flex items-center gap-6 uppercase">

                                <div>
                                    <div className="text-xl">230T</div>
                                    <div className="text-[#9CA3AF] text-[11px]">
                                        {t("products.division1.dailyProcessing")}
                                    </div>
                                </div>

                                <div>
                                    <div className="text-xl">CNC</div>
                                    <div className="text-[#9CA3AF] text-[11px]">
                                        {t("products.division1.precisionBend")}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="flex flex-col gap-8 lg:w-[60%]">
                        <Image
                            src="/Bending Process.png"
                            alt="Bending Process"
                            width={800}
                            height={600}
                            className="w-full h-auto object-contain opacity-0 animate-fadeInUp transition-all duration-700 hover:scale-105"
                        />
                    </div>

                </div>
            </div>
        </div>
    );
}