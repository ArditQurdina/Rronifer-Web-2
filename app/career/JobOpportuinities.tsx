"use client";

import Image from "next/image";
import FileInput from "./FileInput";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function JobOpportunities() {
    const { t } = useLanguage();

    const [startDate, setStartDate] = useState<Date | null>(null);
    return (
        <div className="bg-black flex items-center justify-center py-16 md:py-20 lg:py-26 px-6 sm:px-10 md:px-20 w-full border border-t-0 border-[#2A2A2E]">

            <div className="max-w-[1500px] w-full mx-auto">

                <div className="flex flex-col gap-20">

                    <div className="flex flex-col gap-4 uppercase">
                        <div className="text-[#F97316] tracking-[0.3em] text-xs">
                            #{t('career.subtitle')}
                        </div>

                        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                            <h1>{t('career.heading')}</h1>
                            <h1>{t('career.headingOpp')}</h1>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-20">

                        <div className="lg:w-[40%] !text-white text-black px-12 py-12 h-fit">
                            <div className="flex flex-col gap-6">
                                <h1 className="text-2xl md:text-4xl font-extrabold uppercase">
                                    {t("career.buildYourFutureTitle")}
                                </h1>
                                <div className="border border-w-full border-[#E5E5E5]"></div>
                            </div>
                            <p className="mt-10 leading-relaxed text-sm md:text-base">
                                {t("career.description")}
                            </p>

                            <h2 className="mt-10 text-sm font-bold uppercase tracking-widest">
                                {t("career.whyWorkWithUs")}
                            </h2>

                            <div className="mt-6 space-y-6">

                                <div className="flex gap-4">
                                    <span className="text-[#F97316] font-bold text-xl">/</span>
                                    <p>
                                        <span className="font-bold">{t("career.innovation.title")}:</span>{" "}
                                        {t("career.innovation.text")}
                                    </p>
                                </div>

                                <div className="flex gap-4">
                                    <span className="text-[#F97316] font-bold text-xl">/</span>
                                    <p>
                                        <span className="font-bold">{t("career.growth.title")}:</span>{" "}
                                        {t("career.growth.text")}
                                    </p>
                                </div>

                                <div className="flex gap-4">
                                    <span className="text-[#F97316] font-bold text-xl">/</span>
                                    <p>
                                        <span className="font-bold">{t("career.culture.title")}:</span>{" "}
                                        {t("career.culture.text")}
                                    </p>
                                </div>

                                <div className="flex gap-4">
                                    <span className="text-[#F97316] font-bold text-xl">/</span>
                                    <p>
                                        <span className="font-bold">{t("career.safety.title")}:</span>{" "}
                                        {t("career.safety.text")}
                                    </p>
                                </div>

                            </div>

                            <p className="mt-10 text-[#F97316] font-bold uppercase tracking-wide text-sm">
                                {t("career.footer")}
                            </p>

                        </div>
                        {/* FORM */}
                        <div className="flex-1 min-w-0 lg:w-[60%]">
                            <form
                                className="w-full"
                                target="_blank"
                                action="https://formsubmit.co/info@rronifer.com"
                                method="POST"
                                encType="multipart/form-data"
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">

                                    {/* FULL NAME */}
                                    <div className="flex flex-col gap-1">
                                        <label className="pl-1 uppercase text-[11px] tracking-[0.1em]" htmlFor="fullName">
                                            {t('career.fullName')}
                                        </label>
                                        <input
                                            type="text"
                                            id="fullName"
                                            name="fullName"
                                            required
                                            placeholder={t('career.fullNamePlaceholder')}
                                            className="bg-[#18181B] rounded-lg border border-[#3F3F46] py-3 px-4 text-white placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-gray-400"
                                        />
                                    </div>

                                    {/* EMAIL */}
                                    <div className="flex flex-col gap-1">
                                        <label className="pl-1 uppercase text-[11px] tracking-[0.1em]" htmlFor="email">
                                            {t('career.email')}
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            placeholder={t('career.emailPlaceholder')}
                                            className="bg-[#18181B] rounded-lg border border-[#3F3F46] py-3 px-4 text-white placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-gray-400"
                                        />
                                    </div>

                                    {/* GENDER */}
                                    <div className="flex flex-col gap-1">
                                        <label className="pl-1 uppercase text-[11px] tracking-[0.1em]" htmlFor="gender">
                                            {t('career.gender')}
                                        </label>
                                        <select
                                            name="gender"
                                            id="gender"
                                            required
                                            className="bg-[#18181B] rounded-lg border border-[#3F3F46] py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-gray-400"
                                        >
                                            <option value="male">{t('career.male')}</option>
                                            <option value="female">{t('career.female')}</option>
                                        </select>
                                    </div>

                                    {/* BIRTHDAY */}
                                    <div className="flex flex-col gap-1">
                                        <label
                                            className="pl-1 uppercase text-[11px] tracking-[0.1em]"
                                            htmlFor="birthdayDate"
                                        >
                                            Birthday
                                        </label>

                                        <DatePicker
                                            selected={startDate}
                                            onChange={(date: Date | null) => setStartDate(date)}
                                            dateFormat="dd/MM/yyyy"
                                            placeholderText="dd.mm.yyyy"
                                            showYearDropdown
                                            showMonthDropdown
                                            adjustDateOnChange
                                            dropdownMode="select"
                                            className="bg-[#18181B] rounded-lg border border-[#3F3F46] py-3 px-4 text-white placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-gray-400 w-full"
                                        />
                                    </div>

                                    {/* PHONE */}
                                    <div className="flex flex-col gap-1 col-span-2">
                                        <label className="pl-1 uppercase text-[11px] tracking-[0.1em]" htmlFor="phoneNumber">
                                            {t('career.phone')}
                                        </label>
                                        <input
                                            type="tel"
                                            id="phoneNumber"
                                            name="phoneNumber"
                                            required
                                            placeholder="+383 4X XXX XXX"
                                            pattern="^\+?[0-9\s]{7,15}$"
                                            className="bg-[#18181B] rounded-lg border border-[#3F3F46] py-3 px-4 text-white placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-gray-400"
                                        />
                                    </div>

                                    {/* CV */}
                                    <div className="col-span-2 flex flex-col gap-1">
                                        <label className="pl-1 uppercase text-[11px] tracking-[0.1em]">
                                            {t('career.cv')}
                                        </label>
                                        <FileInput />
                                    </div>

                                    {/* CONSENT */}
                                    <div className="col-span-2 flex items-start gap-3 max-w-full">
                                        <input type="checkbox" id="consent" className="mt-1 shrink-0" required />
                                        <label
                                            htmlFor="consent"
                                            className="text-xs text-[#6B7280] max-w-[470px] uppercase"
                                        >
                                            {t('career.consent')}
                                        </label>
                                    </div>

                                </div>

                                {/* SUBMIT */}
                                <button
                                    type="submit"
                                    className="bg-[#F97316] cursor-pointer w-fit mt-8 px-6 md:px-9 py-3 md:py-4 border border-[#3F3F46] text-white uppercase text-xs font-extrabold flex items-center justify-center hover:bg-orange-500"
                                >
                                    {t('career.submit')}
                                </button>

                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}