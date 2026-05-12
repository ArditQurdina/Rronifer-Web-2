'use client';

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function RelatedStructuralSolutions() {
    const { t } = useLanguage();

    return (
        <div className="bg-black flex justify-center items-start py-16 md:py-20 lg:py-26 px-6 sm:px-10 md:px-20 w-full">
            <div className="max-w-[1500px] w-full">
                <div className="flex flex-col gap-10 w-full">

                    <h1 className="uppercase text-xl md:text-2xl text-white font-bold tracking-tighter">
                        {t('products.relatedSolutions.title')}
                    </h1>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full uppercase">

                        {/* CARD 1 */}
                        <div className="flex flex-col gap-3 border border-[#F3F4F6] p-6">
                            <div className="text-[#FF6B00] text-[11px] tracking-[0.2em] font-semibold">
                                {t('products.relatedSolutions.cards.cuttingBending.category')}
                            </div>

                            <h1 className="text-xl tracking-tighter font-bold">
                                {t('products.relatedSolutions.cards.cuttingBending.title')}
                            </h1>

                            <div className="flex items-center text-[#9CA3AF]">
                                <Link
                                    href="/products/cutting-bending#cutting-bending"
                                    className="flex items-center text-[#9CA3AF] transition-colors duration-300 hover:text-white"
                                >
                                    <span className="text-[11px] tracking-[0.2em] font-semibold">
                                        {t('products.relatedSolutions.cards.cuttingBending.link')}
                                    </span>

                                    <ChevronRight className="ml-1 size-4" />
                                </Link>
                            </div>
                        </div>

                        {/* CARD 2 */}
                        <div className="flex flex-col gap-3 border border-[#F3F4F6] p-6">
                            <div className="text-[#FF6B00] text-[11px] tracking-[0.2em] font-semibold">
                                {t('products.relatedSolutions.cards.mediumCarbon.category')}
                            </div>

                            <h1 className="text-xl tracking-tighter font-bold">
                                {t('products.relatedSolutions.cards.mediumCarbon.title')}
                            </h1>

                            <div className="flex items-center text-[#9CA3AF]">
                                <Link
                                    href="/products/medium-carbon"
                                    className="flex items-center text-[#9CA3AF] transition-colors duration-300 hover:text-white"
                                >
                                    <span className="text-[11px] tracking-[0.2em] font-semibold">
                                        {t('products.relatedSolutions.cards.mediumCarbon.link')}
                                    </span>

                                    <ChevronRight className="ml-1 size-4" />
                                </Link>
                            </div>
                        </div>

                        {/* CARD 3 */}
                        <div className="flex flex-col gap-3 border border-[#F3F4F6] p-6">
                            <div className="text-[#FF6B00] text-[11px] tracking-[0.2em] font-semibold">
                                {t('products.relatedSolutions.cards.latticeGirders.category')}
                            </div>

                            <h1 className="text-xl tracking-tighter font-bold">
                                {t('products.relatedSolutions.cards.latticeGirders.title')}
                            </h1>

                            <div className="flex items-center text-[#9CA3AF]">
                                <Link href="/products/cutting-bending#lattice-girders" className="flex items-center text-[#9CA3AF] transition-colors duration-300 hover:text-white">
                                    <span className="text-[11px] tracking-[0.2em] font-semibold">        
                                        {t('products.relatedSolutions.cards.latticeGirders.link')}
                                    </span>
                                    <ChevronRight className="ml-1 size-4" />
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}