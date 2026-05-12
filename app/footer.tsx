"use client";
import Link from 'next/link';
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
    const { t } = useLanguage();
    return (
        <div className="bg-black text-white py-16 md:py-20 lg:py-26 px-6 sm:px-10 md:px-20 border border-t-0 border-[#2A2A2E] w-full">
            <div className="flex flex-col gap-10 md:gap-12 items-center justify-center text-center">

                <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 text-[#3F3F46] text-[10px] md:text-xs uppercase tracking-[0.3em] md:tracking-[0.5em]">
                    <span>RRONIFER GROUP</span>
                    <span>{ '//' }</span>
                    <span>EST_1989</span>
                    <span>{ '//' }</span>
                    <span>Gjakove</span>
                </div>

                <div>
                    <h2 className="uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
                        {t('footer.buildingSuccess')} <span className="text-[#F97316]">{t('footer.success')}</span> {t('footer.together')}
                    </h2>
                </div>

                <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-xs text-[#71717A] uppercase tracking-wide font-bold">
                    <Link href="/career" className="cursor-pointer hover:text-white transition">{t('footer.career')}</Link>
                    <Link href="/products#certificates" className="cursor-pointer hover:text-white transition">{t('footer.certifications')}</Link>
                </div>
            </div>
        </div>
    );
}