'use client';

import { useLanguage } from "@/context/LanguageContext";

export default function GlobalCompliance() {
    const { t } = useLanguage();
    return (
        <div id="certificates" className="bg-black px-6 sm:px-10 md:px-20 py-16 md:py-20 lg:py-26 w-full border border-t-0 border-[#2A2A2E]">
            <div className="max-w-[1500px] mx-auto">
                <div className="flex flex-col items-center gap-12">
                    <div className="flex flex-col items-center gap-6 text-center">
                        <div className="uppercase text-[10px] text-[#F97316] tracking-[0.5em]">
                            {t('products.globalCompliance')}
                        </div>

                        <div className="uppercase text-3xl sm:text-4xl lg:text-5xl text-white font-extrabold tracking-tighter leading-tight">
                            <h1>{t('products.qualityThatInspires')}.</h1>
                            <h1 className="italic">{t('products.achievements')}.</h1>
                        </div>

                        <p className="font-light text-xs md:text-sm text-[#71717A] leading-relaxed max-w-2xl">
                            {t('products.certificates')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 w-full">

                        {[
                            [t('products.dakAccreditation'), t('products.isoiek17025')],
                            [t('products.highPerformance'), t('products.constancyRating')],
                            [t('products.wqrCertification'), t('products.iso90012015')],
                            [t('products.tmsEngineering'), t('products.productionStandard')],
                            [t('products.aeoOperator'), t('products.customsSecurity')],
                        ].map((item, i) => (
                            <div key={i} className="bg-[#0A0A0B] border border-[#3F3F46] p-4 flex flex-col items-center justify-center gap-2 text-center">
                                <div className="text-[#F97316] tracking-[0.2em] text-[10px] uppercase">
                                    {item[0]}
                                </div>
                                <div className="text-[#71717A] text-xs tracking-wider uppercase">
                                    {item[1]}
                                </div>
                            </div>
                        ))}

                    </div>

                    <div className="w-full flex justify-center">
                        <a
                            href="/certificates/rronifer-certificates_com.pdf"
                            download
                            className="bg-[#F97316] text-black px-6 py-3 text-xs uppercase tracking-[0.3em] font-extrabold w-full sm:w-auto inline-block text-center"
                        >
                            {t('products.downloadCertificates')}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}