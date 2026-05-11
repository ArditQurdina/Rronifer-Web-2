"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function GetInTouch() {
    const { t } = useLanguage();
    return (
        <div className="bg-black flex justify-center items-center py-16 md:py-20 lg:py-26 px-6 sm:px-10 md:px-20 w-full">
            <div className="max-w-[1500px] mx-auto">
                <div className="flex flex-col gap-4">
                    <div className="uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold tracking-tighter">
                        <h1>{t('contact.subHeading')}</h1>
                        <h1>{t('contact.subHeading2')}</h1>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
                        <div className="flex flex-col gap-3 border border-[#F3F4F6] p-10">
                            <div className="text-[#FF6B00] text-[11px] tracking-[0.1em] uppercase">/ {t('contact.visitHQ')}</div>
                            <div className="flex flex-col gap-4">
                                <h1 className="text-xl tracking-tighter font-bold uppercase">{t('contact.facility')}</h1>
                                <div className="flex items-center text-[#9CA3AF]">
                                    <p className="text-xs">
                                        {t('contact.facilityAddress')}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 border border-[#F3F4F6] p-10 uppercase">
                            <div className="text-[11px] tracking-[0.1em]">/ {t('contact.email')}</div>
                            <div className="flex flex-col gap-4">
                                <h1 className="text-xl tracking-tighter font-bold">{t('contact.supportDesk')}</h1>
                                <div className="flex flex-col gap-2">
                                    <div className="text-xs font-semibold">
                                        {t('contact.infoEmail')}
                                    </div>
                                    <div className="text-xs font-semibold">{t('contact.supportEmail')}</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 border border-[#F3F4F6] p-10 uppercase">
                            <div className="text-[11px] tracking-[0.1em]">/ {t('contact.directLines')}</div>
                            <div className="flex flex-col gap-4">
                                <h1 className="text-xl tracking-tighter font-bold">{t('contact.switchboard')}</h1>
                                <div className="flex flex-col gap-2">
                                    <div className="text-xs font-semibold">{t('contact.phone1')}</div>
                                    <div className="text-xs font-semibold">{t('contact.phone2')}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}