'use client';
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Division2() {
    const { t } = useLanguage();

    return (
        <div id="lattice-girders" className="bg-black flex items-center justify-center py-16 md:py-20 lg:py-26 px-6 sm:px-10 md:px-20 w-full border border-t-0 border-[#2A2A2E]">
            <div className="max-w-[1500px] mx-auto">

                <div className="flex flex-col lg:flex-row gap-20">

                    {/* LEFT */}
                    <div className="flex flex-col gap-8 lg:w-[60%]">
                        <Image
                            src="/Lattice Girders.svg"
                            alt="Lattice Girders"
                            width={0}
                            height={0}
                            className="w-full h-auto object-contain"
                        />
                    </div>

                    {/* RIGHT */}
                    <div className="flex flex-col justify-center gap-6 lg:w-[40%]">

                        <div className="flex flex-col gap-4">
                            <div className="uppercase text-xs text-[#FF6B00] tracking-[0.3em] font-semibold">
                                Division 02
                            </div>

                            <div className="uppercase text-2xl sm:text-3xl lg:text-4xl text-white font-extrabold tracking-tighter">
                                <h1 className="m-0 leading-none">
                                    {t("products.division2.title")}
                                </h1>
                            </div>
                        </div>

                        <p className="font-light leading-relaxed text-[#9CA3AF]">
                            {t("products.division2.description")}
                        </p>

                    </div>

                </div>
            </div>
        </div>
    );
}