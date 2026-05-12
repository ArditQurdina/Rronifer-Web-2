'use client';
import Link from "next/link";
import Image from "next/image";
import { Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
export default function StructuralSeriesAnalysis() {
    const { t } = useLanguage();
    return (
        <div className="bg-black py-16 md:py-20 lg:py-26 px-6 sm:px-10 md:px-20 w-full">
            <div className="max-w-[1500px] mx-auto">
                <div className="flex flex-col lg:flex-row gap-20">

                    {/* LEFT */}
                    <div className="flex flex-col gap-8 shrink-0 lg:w-[50%]">
                        <div>
                            <Image
                                src="/Reinforcement Mesh.svg"
                                alt="Wire Mesh"
                                width={0}
                                height={0}
                                className="w-full h-auto object-contain"
                            />
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
                            <div
                                className="bg-white border-l-4 border-l-[#FF6B00] px-3 md:px-4 py-3 md:py-4 text-black uppercase text-[11px] font-extrabold flex items-center gap-2"
                            >
                                <Check className="text-[#FF6B00] size-4" />
                                <span>{t('products.panel')}: 2150×6000 mm</span>
                            </div>
                            <div
                                className="bg-white border-l-4 border-l-[#FF6B00] px-3 md:px-4 py-3 md:py-4 text-black uppercase text-[11px] font-extrabold flex items-center gap-2"
                            >
                                <Check className="text-[#FF6B00] size-4" />
                                <span>{t('products.wire')} Ø: 5.0 – 10.0 mm</span>
                            </div>

                            <div
                                className="bg-white border-l-4 border-l-[#FF6B00] px-3 md:px-4 py-3 md:py-4 text-black uppercase text-[11px] font-extrabold flex items-center gap-2"
                            >
                                <Check className="text-[#FF6B00] size-4" />
                                <span>{t('products.rSeries25cmSpacing')}</span>
                            </div>

                            <div
                                className="bg-white border-l-4 border-l-[#FF6B00] px-3 md:px-4 py-3 md:py-4 text-black uppercase text-[11px] font-extrabold flex items-center gap-2"
                            >
                                <Check className="text-[#FF6B00] size-4" />
                                <span>{t('products.qSeriesDenseGrid')}</span>
                            </div>
                        </div>
                    </div>
                    {/* RIGHT */}
                    <div className="flex flex-col gap-10 lg:w-[50%]">

                        <div className="flex flex-col gap-6">
                            <div className="flex items-center gap-4">
                                <div className="uppercase text-xs text-[#F97316] tracking-[0.2em] font-semibold">
                                    {t('products.reinforcementSpecification')}
                                </div>
                            </div>

                            <h1 className="uppercase text-3xl sm:text-4xl lg:text-5xl text-white font-bold tracking-tighter">
                                {t('products.wiremesh')}
                            </h1>
                        </div>

                        <div className="flex flex-col gap-6 max-w-xl">
                            <p className="font-light text-sm md:text-base leading-relaxed">
                                {t('products.wiremeshStructuralSeriesAnalysisDesc')}
                            </p>
                        </div>
                        <div className="flex flex-col gap-10 pt-14 pb-8 px-8 bg-[#121213]">
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-4">
                                    <div className="flex flex-col items-end gap-1 cursor-pointer">
                                        <span className="w-4 h-0.5 bg-[#F97316]"></span>
                                        <span className="w-4 h-0.5 bg-[#F97316]"></span>
                                        <span className="w-2 h-0.5 bg-[#F97316]"></span>
                                    </div>
                                    <h1 className="uppercase text-xl md:text-2xl text-white font-bold tracking-tighter">
                                        {t('products.structuralSeriesAnalysis')}
                                    </h1>
                                </div>
                                <div className="border border-white/10"></div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="flex flex-col gap-3">
                                    <div className="flex items-center justify-between uppercase">
                                        <div className="text-[#FF6B00] font-bold tracking-[0.1em] text-sm md:text-base ">{t('products.qSeriesHighStress')}</div>
                                        <div className="text-[11px] tracking-wide py-1 px-2 bg-white/10">10-15 cm {t('products.transverseSpacing')}</div>
                                    </div>
                                    <div className="border border-white/10"></div>
                                </div>
                                <div className="bg-[#0B0F14]">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="text-[#6B7280] text-xs uppercase tracking-wider border-b border-white/10">
                                                <th className="pb-3">{t('products.range')}</th>
                                                <th className="pb-3">{t('products.wire')} Ø (mm)</th>
                                                <th className="pb-3">{t('products.weightPerSheet')}</th>
                                                <th className="pb-3">{t('products.primaryUse')}</th>
                                            </tr>
                                        </thead>

                                        <tbody className="text-sm text-[#D1D5DB]">
                                            <tr className="border-b border-white/10">
                                                <td className="py-4 font-semibold">Q131({t('products.base')})</td>
                                                <td>5.0 / 5.0</td>
                                                <td>27.10 kg</td>
                                                <td>{t('products.lightWalls')}</td>
                                            </tr>

                                            <tr>
                                                <td className="py-4 font-semibold">Q785({t('products.heavy')})</td>
                                                <td>10.0 / 10.0</td>
                                                <td>160.92 kg</td>
                                                <td>{t('products.bridgesBeams')}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center justify-between uppercase">
                                    <div className="font-bold tracking-[0.1em] text-sm md:text-base ">{t('products.rSeriesBalanced')}</div>
                                    <div className="text-[11px] tracking-wide py-1 px-2 bg-white/10">
                                        25cm {t('products.standardSpacing')}
                                    </div>
                                </div>

                                <div className="bg-[#0B0F14]">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="text-[#6B7280] text-xs uppercase tracking-wider border-b border-[#1F2937]">
                                                <th className="pb-3">{t('products.range')}</th>
                                                <th className="pb-3">{t('products.wire')} Ø (mm)</th>
                                                <th className="pb-3">{t('products.weightPerSheet')}</th>
                                                <th className="pb-3">{t('products.primaryUse')}</th>
                                            </tr>
                                        </thead>

                                        <tbody className="text-sm text-[#D1D5D8]">
                                            <tr className="border-b border-[#1F2937]">
                                                <td className="py-4 font-semibold">R131({t('products.base')})</td>
                                                <td>5.0 / 5.0</td>
                                                <td>21.81 kg</td>
                                                <td>{t('products.foundations')}</td>
                                            </tr>

                                            <tr>
                                                <td className="py-4 font-semibold">R785({t('products.heavy')})</td>
                                                <td>10.0 / 7.0</td>
                                                <td>97.03 kg</td>
                                                <td>{t('products.roadSlabs')}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            <div className="flex flex-col gap-4 py-8 px-8 bg-[#121213] border-l-5 border-l-[#FF6B00]">
                                <h1 className="uppercase text-base md:text-lg !text-[#FF6B00] font-bold">
                                    {t('products.spacingLogic')}
                                </h1>

                                <div className="flex flex-col gap-4 text-xs">
                                    <div className="text-[#9CA3AF]">
                                        <span className="font-semibold uppercase text-white">{t('products.aSpacing')} </span>
                                        10cm – 15cm ({t('products.longitudinal')})
                                    </div>

                                    <div className="text-[#9CA3AF]">
                                        <span className="font-semibold uppercase text-white">{t('products.bSpacing')} </span>
                                        25cm ({t('products.standardR')})
                                    </div>

                                    <div className="text-[#9CA3AF]">
                                        <span className="font-semibold uppercase text-white">{t('products.qDensity')} </span>
                                        10cm – 15cm ({t('products.transverse')})
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-4 py-8 px-8 bg-[#FF6B00]">
                                <h1 className="uppercase text-base md:text-lg font-bold">
                                    {t('products.bundleCapacity')}
                                </h1>

                                <div className="flex flex-col gap-4 text-xs">
                                    <div className="text-white/90">
                                        <span className="font-semibold uppercase text-white">{t('products.lightMesh')} </span>
                                        50 {t('products.panelsPerUnit')}
                                    </div>

                                    <div className="text-white/90">
                                        <span className="font-semibold uppercase text-white">{t('products.heavyMesh')} </span>
                                        15 – 20 {t('products.panelsPerUnit')}
                                    </div>

                                    <div className="text-white/90">
                                        <span className="font-semibold uppercase text-white">{t('products.dimensions')} </span>
                                        2150 x 6000 mm {t('products.fixed')}
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="flex flex-col gap-6">
                            <div className="border w-full border-[#F3F4F6]">

                            </div>
                            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full">
                                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full">
                                    <Link href="/contact-us#hear-from-you" className="w-full py-3 md:py-4 px-4 md:px-6 bg-[#F97316] uppercase tracking-widest text-xs font-bold flex items-center justify-center hover:bg-orange-500">
                                        {t('products.requestFullBoqQuote')}
                                    </Link>

                                    <a
                                        href="#"

                                        className="w-full py-3 md:py-4 px-4 md:px-6 border border-[#3F3F46] text-white uppercase tracking-widest text-xs font-bold flex items-center justify-center hover:bg-[#111111]"
                                    >
                                        {t('products.downloadTechnicalPDF')}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}