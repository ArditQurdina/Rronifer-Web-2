"use client";

import Image from "next/image";
import { MoveRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function HearFromYou() {
    const { t } = useLanguage();
    return (

        <div id="hear-from-you" className="bg-black flex items-center justify-center py-16 md:py-25 lg:py-30 px-6 sm:px-10 md:px-20 w-full border border-t-0 border-[#2A2A2E]">
            <div className="max-w-[1500px] mx-auto w-full">
                <div className="flex flex-col gap-4 uppercase">
                    <div className="flex flex-col xl:flex-row gap-20">
                        <div className="flex flex-col gap-12 w-full">
                            <div className="flex flex-col gap-6">
                                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
                                    <h1>{t('contact.weWantTo')}</h1>
                                    <h1>{t('contact.hearFromYou')}</h1>
                                </div>
                                <div
                                    className="text-xs text-[#6B7280] max-w-[470px] uppercase"
                                >
                                    {t('contact.description')}
                                </div>
                            </div>
                            <form method="POST" action="https://formsubmit.co/info@rronifer.com">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                    <div className="flex flex-col gap-1">
                                        <label className="pl-1 uppercase text-[11px] tracking-[0.1em]" htmlFor="fullName">{t('career.fullName')}</label>
                                        <input
                                            type="text"
                                            id="fullName"
                                            name="fullName"
                                            placeholder={t('career.fullNamePlaceholder')}
                                            className="bg-[#18181B] rounded-lg border border-[#27272A] py-3 px-4 text-white placeholder:text-[#9CA3AF] border border-[#3F3F46] focus:outline-none focus:ring-2 focus:ring-gray-400"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <label className="pl-1 uppercase text-[11px] tracking-[0.1em]" htmlFor="phoneNumber">{t('career.phone')}</label>
                                        <input
                                            type="tel"
                                            id="phoneNumber"
                                            name="phoneNumber"
                                            placeholder="+383 4X XXX XXX"
                                            className="bg-[#18181B] rounded-lg border border-[#27272A] py-3 px-4 text-white placeholder:text-[#9CA3AF] border border-[#3F3F46] focus:outline-none focus:ring-2 focus:ring-gray-400"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-1 col-span-2">
                                        <label className="pl-1 uppercase text-[11px] tracking-[0.1em]" htmlFor="email">{t('career.email')}</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder={t('career.emailPlaceholder')}
                                            className="bg-[#18181B] rounded-lg border border-[#27272A] py-3 px-4 text-white placeholder:text-[#9CA3AF] border border-[#3F3F46] focus:outline-none focus:ring-2 focus:ring-gray-400"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-1 col-span-2">
                                        <label className="pl-1 uppercase text-[11px] tracking-[0.1em]" htmlFor="message">{t('career.message')}</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            placeholder={t('career.messagePlaceholder')}
                                            className="bg-[#18181B] rounded-lg border border-[#27272A] py-3 px-4 text-white placeholder:text-[#9CA3AF] border border-[#3F3F46] focus:outline-none focus:ring-2 focus:ring-gray-400 w-full h-32 resize-none"
                                        />
                                    </div>
                                </div>
                                <button type="submit"
                                    className="bg-[#F97316] tracking-wide cursor-pointer w-fit mt-8 px-6 md:px-9 py-3 md:py-4 border border-[#3F3F46] text-white uppercase text-xs font-extrabold flex items-center justify-center hover:bg-orange-500"
                                >
                                    {t('career.sendDispatch')}
                                    <MoveRight className="ml-3 size-5" />
                                </button>
                            </form>
                        </div>
                        <div className="flex flex-col gap-8 shrink-0 px-6 pt-6 pb-14 bg-[#121213] h-fit">
                            <div className="shrink-0">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d55258.25891380723!2d20.440163!3d42.382864!3m2!1i1024!2i768!4f13.1!2m1!1sRroni%20Fer%20LLC!5e1!3m2!1sen!2sus!4v1778052881802!5m2!1sen!2sus"
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="xl:w-[650px] xl:h-[400px] w-full h-[300px] rounded-lg animate-fadeInUp transition-transform duration-700 hover:scale-105"                                ></iframe>
                            </div>
                            <div className="flex items-center gap-24">
                                <div className="text-xs font-semibold tracking-widest">
                                    {t("career.sectorLabel")}: {t("career.sectorValue")}
                                </div>

                                <div className="text-[#FF6B00] italic text-xs font-semibold tracking-widest break-words max-w-full">
                                    {t("career.sectorSite")}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};