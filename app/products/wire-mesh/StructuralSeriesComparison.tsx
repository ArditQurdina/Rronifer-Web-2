'use client';
import Link from "next/link";
import Image from "next/image";
import { Check, Package, Truck, Info } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function StructuralSeriesComparison() {
    const { t } = useLanguage();

    return (
        <div className="bg-black py-16 md:py-20 lg:py-26 px-6 md:px-20 w-full">
            <div className="max-w-[1500px] mx-auto">

                <div className="flex flex-col lg:flex-row gap-20">

                    {/* LEFT */}
                    <div className="flex flex-col gap-8 shrink-0 lg:w-[50%]">

                        <div>
                            <Image
                                src="/Wiremesh.svg"
                                alt="Wiremesh"
                                width={0}
                                height={0}
                                className="w-full h-auto object-contain"
                            />
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">

                            <div className="bg-white border-l-4 border-l-[#FF6B00] px-3 md:px-4 py-3 md:py-4 text-black uppercase text-[11px] font-extrabold flex items-center gap-2">
                                <Check className="text-[#FF6B00] size-4" />
                                <span>{t('products.panelSize')}</span>
                            </div>

                            <div className="bg-white border-l-4 border-l-[#FF6B00] px-3 md:px-4 py-3 md:py-4 text-black uppercase text-[11px] font-extrabold flex items-center gap-2">
                                <Check className="text-[#FF6B00] size-4" />
                                <span>{t('products.abQualityVariations')}</span>
                            </div>

                            <div className="bg-white border-l-4 border-l-[#FF6B00] px-3 md:px-4 py-3 md:py-4 text-black uppercase text-[11px] font-extrabold flex items-center gap-2">
                                <Check className="text-[#FF6B00] size-4" />
                                <span>{t('products.highBondSteel')}</span>
                            </div>

                            <div className="bg-white border-l-4 border-l-[#FF6B00] px-3 md:px-4 py-3 md:py-4 text-black uppercase text-[11px] font-extrabold flex items-center gap-2">
                                <Check className="text-[#FF6B00] size-4" />
                                <span>{t('products.seriesTypes')}</span>
                            </div>

                        </div>

                        <Image
                            src="/Wire Mesh.svg"
                            alt="Wiremesh"
                            width={0}
                            height={0}
                            className="w-full h-auto object-contain"
                        />
                    </div>

                    {/* RIGHT */}
                    <div className="flex flex-col gap-10 lg:w-[50%]">

                        {/* HEADER */}
                        <div className="flex flex-col gap-6">

                            <div className="uppercase text-xs text-[#F97316] tracking-[0.2em] font-semibold">
                                {t('products.reinforcement')}
                            </div>

                            <h1 className="uppercase text-3xl sm:text-4xl lg:text-5xl text-white font-bold tracking-tighter">
                                {t('products.specializedMesh')}
                            </h1>
                        </div>

                        {/* DESCRIPTION */}
                        <div className="flex flex-col gap-6 max-w-xl">
                            <p className="font-light text-sm md:text-base leading-relaxed">
                                {t('products.specializedReinforcementMeshDescription')}
                            </p>
                        </div>

                        {/* TABLE SECTION */}
                        <div className="flex flex-col gap-10 pt-14 pb-8 px-8 bg-[#121213]">

                            {/* TITLE */}
                            <div className="flex flex-col gap-4">

                                <div className="flex items-center gap-4">

                                    <div className="flex flex-col items-end gap-1 cursor-pointer">
                                        <span className="w-4 h-0.5 bg-[#F97316]"></span>
                                        <span className="w-4 h-0.5 bg-[#F97316]"></span>
                                        <span className="w-2 h-0.5 bg-[#F97316]"></span>
                                    </div>

                                    <h1 className="uppercase text-xl md:text-2xl text-white font-bold tracking-tighter">
                                        {t('products.structuralComparison')}
                                    </h1>

                                </div>

                                <div className="border border-white/10"></div>
                            </div>

                            {/* Q SERIES */}
                            <div className="flex flex-col gap-4">

                                <div className="flex flex-col gap-3">

                                    <div className="flex items-center justify-between uppercase">

                                        <div className="text-[#FF6B00] font-bold tracking-[0.1em] text-sm md:text-base">
                                            {t('products.qSeries')}
                                        </div>

                                        <div className="text-[11px] tracking-wide py-1 px-2 bg-white/10">
                                            150 × 150 mm
                                        </div>

                                    </div>

                                    <div className="border border-white/10"></div>
                                </div>

                                <div className="bg-[#0B0F14]">
                                    <table className="w-full text-left border-collapse">

                                        <thead>
                                            <tr className="text-[#6B7280] text-xs uppercase tracking-wider border-b border-[#1F2937]">
                                                <th className="pb-3">{t('products.type')}</th>
                                                <th className="pb-3">{t('products.wire')} Ø (mm)</th>
                                                <th className="pb-3">{t('products.weightPerSheet')}</th>
                                                <th className="pb-3">{t('products.bundle')}</th>
                                            </tr>
                                        </thead>

                                        <tbody className="text-sm text-[#D1D5DB]">
                                            <tr className="border-b border-white/10">
                                                <td className="py-4 font-semibold">Q188</td>
                                                <td>6.0</td>
                                                <td>41.70 kg</td>
                                                <td>50 {t('products.pieces')}</td>
                                            </tr>

                                            <tr className="border-b border-white/10">
                                                <td className="py-4 font-semibold">Q335</td>
                                                <td>8.0</td>
                                                <td>74.30 kg</td>
                                                <td>30 {t('products.pieces')}</td>
                                            </tr>

                                            <tr>
                                                <td className="py-4 font-semibold">Q524</td>
                                                <td>10.0</td>
                                                <td>100.90 kg</td>
                                                <td>20 {t('products.pieces')}</td>
                                            </tr>
                                        </tbody>

                                    </table>
                                </div>
                            </div>

                            {/* R SERIES */}
                            <div className="flex flex-col gap-4">

                                <div className="flex items-center justify-between uppercase">

                                    <div className="font-bold tracking-[0.1em] text-sm md:text-base">
                                        {t('products.rSeries')}
                                    </div>

                                    <div className="text-[11px] tracking-wide py-1 px-2 bg-white/10">
                                        150 × 250 mm
                                    </div>

                                </div>

                                <div className="bg-[#0B0F14]">
                                    <table className="w-full text-left border-collapse">

                                        <thead>
                                            <tr className="text-[#6B7280] text-xs uppercase tracking-wider border-b border-[#1F2937]">
                                                <th className="pb-3">{t('products.type')}</th>
                                                <th className="pb-3">{t('products.wire')} (L/T)</th>
                                                <th className="pb-3">{t('products.weightPerSheet')}</th>
                                                <th className="pb-3">{t('products.bundle')}</th>
                                            </tr>
                                        </thead>

                                        <tbody className="text-sm text-[#D1D5D8]">
                                            <tr className="border-b border-[#1F2937]">
                                                <td className="py-4 font-semibold">Q188</td>
                                                <td>6.0 / 6.0</td>
                                                <td>33.60 kg</td>
                                                <td>50 {t('products.pieces')}</td>
                                            </tr>

                                            <tr className="border-b border-[#1F2937]">
                                                <td className="py-4 font-semibold">Q335</td>
                                                <td>8.0 / 6.0</td>
                                                <td>50.20 kg</td>
                                                <td>40 {t('products.pieces')}</td>
                                            </tr>

                                            <tr>
                                                <td className="py-4 font-semibold">Q524</td>
                                                <td>10.0 / 8.0</td>
                                                <td>75.70 kg</td>
                                                <td>30 {t('products.pieces')}</td>
                                            </tr>
                                        </tbody>

                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* TECHNICAL */}
                        <div className="flex flex-col gap-6">

                            <div className="flex items-center gap-2">
                                <Info className="text-[#FF6B00] size-6" />
                                <h1 className="uppercase text-xl md:text-2xl text-white font-bold tracking-tighter">
                                    {t('products.technicalStandards')}
                                </h1>
                            </div>

                            <div className="border border-[#E5E7EB]">

                                <div className="flex justify-between items-center px-6 py-4 border-b border-[#E5E7EB]">
                                    <span className="text-xs uppercase text-white font-semibold">
                                        {t('products.standardPanel')}
                                    </span>
                                    <span className="text-sm font-semibold text-white">
                                        6000 × 2300 mm
                                    </span>
                                </div>

                                <div className="flex justify-between items-center px-6 py-4 border-b border-[#E5E7EB]">
                                    <span className="text-xs uppercase text-white font-semibold">
                                        {t('products.wireRange')}
                                    </span>
                                    <span className="text-sm font-semibold text-white">
                                        6.0 mm – 10.0 mm
                                    </span>
                                </div>

                                <div className="flex justify-between items-center px-6 py-4 border-b border-[#E5E7EB]">
                                    <span className="text-xs uppercase text-white font-semibold">
                                        {t('products.qSpacingLabel')}
                                    </span>
                                    <span className="text-sm font-semibold text-white">
                                        150 × 150 mm
                                    </span>
                                </div>

                                <div className="flex justify-between items-center px-6 py-4 border-b border-[#E5E7EB]">
                                    <span className="text-xs uppercase text-white font-semibold">
                                        {t('products.rSpacingLabel')}
                                    </span>
                                    <span className="text-sm font-semibold text-white">
                                        150 × 250 mm
                                    </span>
                                </div>

                                <div className="flex justify-between items-center px-6 py-4">
                                    <span className="text-xs uppercase text-white font-semibold">
                                        {t('products.material')}
                                    </span>
                                    <span className="text-sm font-semibold text-white">
                                        B500B {t('products.highDucility')}
                                    </span>
                                </div>

                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                            <div className="flex flex-col gap-4 py-8 px-8 bg-[#121213] border-l-5 border-l-[#FF6B00]">

                                <div className="flex items-center gap-2">
                                    <Package className="text-[#FF6B00] size-5" />
                                    <h1 className="uppercase text-base md:text-lg text-[#FF6B00] font-bold">
                                        {t('products.packaging')}
                                    </h1>
                                </div>

                                <div className="text-[#9CA3AF]">
                                    {t('products.packagingDescription')}
                                </div>

                            </div>

                            <div className="flex flex-col gap-4 py-8 px-8 bg-[#FF6B00]">

                                <div className="flex items-center gap-2">
                                    <Truck className="size-5" />
                                    <h1 className="uppercase text-base md:text-lg font-bold">
                                        {t('products.logistics')}
                                    </h1>
                                </div>

                                <div className="text-white/90 font-light">
                                    {t('products.logisticsDescription')}
                                </div>

                            </div>

                        </div>

                        {/* BUTTONS */}
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full">

                            <Link href="/contact-us#hear-from-you" className="w-full py-3 md:py-4 md:px-6 px-4 bg-[#F97316] uppercase tracking-widest text-xs font-bold flex items-center justify-center">
                                {t('products.requestFullMeshPriceList')}
                            </Link>

                            <a
                                href="/Wire Mesh.pdf"
                                download
                                className="w-full py-3 md:py-4 border border-[#3F3F46] text-white uppercase tracking-widest text-xs font-bold flex items-center justify-center"
                            >
                                {t('products.downloadDataSheet')}
                            </a>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}