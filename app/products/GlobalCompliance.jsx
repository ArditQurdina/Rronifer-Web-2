'use client';

import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";

export default function GlobalCompliance() {
    const { t } = useLanguage();

    const certificates = [
        "Certifikata-1",
        "Certifikata-2",
        "Certifikata-3",
        "Certifikata-4",
        "Certifikata-5",
    ];

    const items = [
        [t('products.dakAccreditation'), t('products.isoiek17025')],
        [t('products.highPerformance'), t('products.constancyRating')],
        [t('products.wqrCertification'), t('products.iso90012015')],
        [t('products.tmsEngineering'), t('products.productionStandard')],
        [t('products.aeoOperator'), t('products.customsSecurity')],
    ];

    const [open, setOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [index, setIndex] = useState(0);

    const openCert = (i) => {
        setIndex(i);
        setOpen(true);

        setTimeout(() => setIsVisible(true), 10);
    };

    const close = () => {
        setIsVisible(false);

        setTimeout(() => {
            setOpen(false);
            document.body.style.overflow = "unset";
        }, 300);
    };

    const next = () => {
        setIndex((prev) => (prev + 1) % certificates.length);
    };

    const prev = () => {
        setIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
    };

    useEffect(() => {
        const handleKey = (e) => {
            if (!open) return;

            if (e.key === "Escape") close();
            if (e.key === "ArrowRight") next();
            if (e.key === "ArrowLeft") prev();
        };

        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [open]);

    useEffect(() => {
        return () => {
            document.body.style.overflow = "unset";
        };
    }, []);

    return (
        <div
            id="certificates"
            className="bg-black px-6 sm:px-10 md:px-20 py-16 md:py-20 lg:py-26 w-full border border-t-0 border-[#2A2A2E]"
        >
            <div className="max-w-[1500px] mx-auto">

                {/* TITLE */}
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

                    {/* CARDS */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 w-full">

                        {items.map((item, i) => (
                            <div
                                key={i}
                                onClick={() => openCert(i)}
                                className="cursor-pointer bg-[#0A0A0B] border border-[#3F3F46] p-4 flex flex-col items-center justify-center gap-2 text-center hover:scale-105 transition"
                            >
                                <div className="text-[#F97316] tracking-[0.2em] text-[10px] uppercase">
                                    {item[0]}
                                </div>
                                <div className="text-[#71717A] text-xs tracking-wider uppercase">
                                    {item[1]}
                                </div>
                            </div>
                        ))}

                    </div>

                    {/* 🔥 DOWNLOAD BUTTON (RESTORED) */}
                    <div className="w-full flex justify-center">
                        <a
                            href="/certificatesInGroup/rronifer-certificates_com.pdf"
                            download
                            className="bg-[#F97316] text-black px-6 py-3 text-xs uppercase tracking-[0.3em] font-extrabold w-full sm:w-auto inline-block text-center hover:opacity-90 transition"
                        >
                            {t('products.downloadCertificates')}
                        </a>
                    </div>

                </div>
            </div>

            {/* ================= LIGHTBOX ================= */}
            {open && (
                <div
                    className={`fixed inset-0 bg-black/40 z-999 flex items-center justify-center transition-all duration-300 ease-out
                    ${isVisible ? "opacity-100" : "opacity-0"}`}
                >

                    {/* IMAGE */}
                    <div
                        className={`transition-all duration-300 ease-out transform
    ${isVisible ? "scale-100" : "scale-90"}`}
                    >
                        <div className="relative w-[90vw] h-[90vh]">
                            <Image
                                src={`/certificates/${certificates[index]}.webp`}
                                alt="certificate"
                                fill
                                className="object-contain"
                                sizes="90vw"
                            />
                        </div>
                    </div>
                    {/* CLOSE */}
                    <button
                        onClick={close}
                        className="absolute top-4 right-4 text-white hover:text-[#F97316]"
                    >
                        <X size={28} />
                    </button>

                    {/* LEFT */}
                    <button
                        onClick={prev}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-[#F97316]"
                    >
                        <ChevronLeft size={50} />
                    </button>

                    {/* RIGHT */}
                    <button
                        onClick={next}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-[#F97316]"
                    >
                        <ChevronRight size={50} />
                    </button>

                    {/* COUNTER */}
                    <div className="absolute bottom-6 text-white text-sm bg-black/60 px-3 py-1 rounded-full">
                        {index + 1} / {certificates.length}
                    </div>

                </div>
            )}
        </div>
    );
}