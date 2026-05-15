"use client";

import { useState, useEffect } from "react";
import ReactCountryFlag from "react-country-flag";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
    const [open, setOpen] = useState(false);
    const [closing, setClosing] = useState(false);
    const [pathname, setPathname] = useState("");
    const router = useRouter();
    const currentPathname = usePathname();
    const { language, setLanguage, t } = useLanguage();
    const closeMenu = () => {
        setClosing(true);

        setTimeout(() => {
            setOpen(false);
            setClosing(false);
        }, 400);
    };

    const toggleMenu = () => {
        if (open) {
            closeMenu();
        } else {
            setOpen(true);
        }
    };

    useEffect(() => {
        setPathname(currentPathname);
    }, [currentPathname]);

    const isActiveLink = (href: string) => {
        if (href === "/") {
            return pathname === "/";
        }
        return pathname.startsWith(href);
    };

    return (
        <div className="sticky top-0 z-[100] py-4 md:py-6 px-6 md:px-10 xl:px-30 bg-black text-white text-[10px] relative border-b border-[#2A2A2E]">
            <div className="max-w-[1500px] mx-auto ">

                <div className="flex items-center justify-between">

                    {/* LOGO */}
                    <Link href="/">
                        <Image
                            src="/rronifer-logo.svg"
                            alt="Rronifer logo"
                            width={180}
                            height={50}
                        />
                    </Link>
                    {/* DESKTOP MENU */}
                    <ul className="hidden lg:flex items-center gap-6 uppercase text-[11px] font-semibold tracking-widest">
                        <li className={`${isActiveLink("/") ? "underline decoration-[#F97316] underline-offset-8 decoration-2" : "hover:underline decoration-[#F97316] underline-offset-8 decoration-2"}`}>
                            <Link href="/">{t('nav.home')}</Link>
                        </li>
                        <li className="relative group">
                            <Link href="/about-us" className={`uppercase ${isActiveLink("/about-us") ? "underline decoration-[#F97316] underline-offset-8 decoration-2" : "hover:underline decoration-[#F97316] underline-offset-8 decoration-2"}`}>    {t('nav.aboutUs')}</Link>                        </li>
                        <li className="relative group">
                            <button
                                type="button"
                                onClick={() => router.push("/products")}
                                className={`flex items-center gap-1 cursor-pointer ${isActiveLink("/products") ? "underline decoration-[#F97316] underline-offset-8 decoration-2" : "hover:underline decoration-[#F97316] underline-offset-8 decoration-2"} uppercase`}
                            >
                                {t('nav.products')}
                                <ChevronDown size={16} />
                            </button>
                            <div className="absolute top-full left-0 bg-black border border-t-0 border-[#2A2A2E] rounded mt-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 inline-block whitespace-nowrap">                                <Link href="/products/wire-mesh" className={`block px-4 py-2 hover:bg-[#27272A] text-[11px] border-b border-[#2A2A2E] ${isActiveLink("/products/wire-mesh") ? "text-[#F97316] font-bold" : ""}`}>
                                {t('nav.wireMesh')}
                            </Link>
                                <Link href="/products/cutting-bending" className={`block px-4 py-2 hover:bg-[#27272A] text-[11px] border-b border-[#2A2A2E] ${isActiveLink("/products/cutting-bending") ? "text-[#F97316] font-bold" : ""}`}>
                                    {t('nav.cuttingBanding')}
                                </Link>
                                <Link href="/products/medium-carbon" className={`block px-4 py-2 hover:bg-[#27272A] text-[11px] ${isActiveLink("/products/medium-carbon") ? "text-[#F97316] font-bold" : ""}`}>
                                    {t('nav.mediumCarbon')}
                                </Link>
                            </div>
                        </li>
                        <li className={`${isActiveLink("/media") ? "underline decoration-[#F97316] underline-offset-8 decoration-2" : "hover:underline decoration-[#F97316] underline-offset-8 decoration-2"}`}>
                            <Link href="/media">{t('nav.media')}</Link>
                        </li>
                        <li className={`${isActiveLink("/career") ? "underline decoration-[#F97316] underline-offset-8 decoration-2" : "hover:underline decoration-[#F97316] underline-offset-8 decoration-2"}`}>
                            <Link href="/career">{t('nav.career')}</Link>
                        </li>
                    </ul>
                    <div className="hidden lg:flex items-center gap-10">
                        <Link
                            href="/contact-us"
                            className={`text-[11px] uppercase tracking-widest ${isActiveLink("/contact-us") ? "underline decoration-[#F97316] underline-offset-8 decoration-2" : "hover:underline decoration-[#F97316] underline-offset-8 decoration-2"}`}>
                            {t('nav.getInTouch')}
                        </Link>
                        {/* Language Toggle */}
                        <div className="flex gap-3">
                            <button
                                onClick={() => setLanguage("al")}
                                className={`transition-opacity hover:opacity-80 cursor-pointer ${language === "al"
                                    ? "opacity-100 underline decoration-[#F97316] underline-offset-8 decoration-2"
                                    : "opacity-60"
                                    }`}
                                aria-label="Albanian"
                            >
                                <ReactCountryFlag
                                    countryCode="AL"
                                    svg
                                    title={t("nav.albanian")}
                                    style={{
                                        width: "20px",
                                        height: "20px",
                                    }}
                                />
                            </button>

                            <button
                                onClick={() => setLanguage("en")}
                                className={`transition-opacity hover:opacity-80 cursor-pointer ${language === "en"
                                    ? "opacity-100 underline decoration-[#F97316] underline-offset-8 decoration-2"
                                    : "opacity-60"
                                    }`}
                                aria-label="English"
                            >
                                <ReactCountryFlag
                                    countryCode="GB"
                                    title={t("nav.english")}
                                    svg
                                    style={{
                                        width: "18px",
                                        height: "18px",
                                    }}
                                />
                            </button>

                            <button
                                onClick={() => setLanguage("ge")}
                                className={`transition-opacity hover:opacity-80 cursor-pointer ${language === "ge"
                                    ? "opacity-100 underline decoration-[#F97316] underline-offset-8 decoration-2"
                                    : "opacity-60"
                                    }`}
                                aria-label="German"
                            >
                                <ReactCountryFlag
                                    countryCode="DE"
                                    title={t("nav.german")}
                                    svg
                                    style={{
                                        width: "18px",
                                        height: "18px",
                                    }}
                                />
                            </button>

                        </div>
                    </div>

                    <button
                        onClick={toggleMenu}
                        className="lg:hidden flex flex-col gap-1"
                    >
                        <span className="w-6 h-[2px] bg-white"></span>
                        <span className="w-6 h-[2px] bg-white"></span>
                        <span className="w-6 h-[2px] bg-white"></span>
                    </button>
                </div>

                {(open || closing) && (
                    <div
                        className={`lg:hidden absolute top-full right-0 w-full bg-black border-t border-[#2A2A2E]
                        ${closing ? "animate-menu-close" : "animate-menu-open"}`}
                    >
                        <ul className="flex flex-col gap-6 p-6 uppercase text-[11px] font-semibold tracking-widest">
                            <li>
                                <Link href="/" onClick={closeMenu} className={isActiveLink("/") ? "underline decoration-[#F97316] underline-offset-4 decoration-2" : ""}>{t('nav.home')}</Link>
                            </li>
                            <li>
                                <Link href="/about-us" onClick={closeMenu} className={isActiveLink("/about-us") ? "underline decoration-[#F97316] underline-offset-4 decoration-2" : ""}>
                                    {t('nav.aboutUs')}
                                </Link>
                            </li>
                            <li>
                                <div className="flex flex-col">

                                    {/* TOP ROW */}
                                    <div className="flex items-center">

                                        <span
                                            onClick={() => {
                                                closeMenu();
                                                router.push("/products");
                                                setOpen(false);
                                            }}
                                            className={`cursor-pointer ${isActiveLink("/products")
                                                    ? "underline decoration-[#F97316] underline-offset-4 decoration-2"
                                                    : ""
                                                }`}
                                        >
                                            {t('nav.products')}
                                        </span>
                                        <button
                                            type="button"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                const el = document.getElementById("mobile-products");
                                                if (el) el.classList.toggle("hidden");
                                            }}
                                            className="cursor-pointer"
                                        >
                                            <ChevronDown size={16} />
                                        </button>

                                    </div>

                                    {/* DROPDOWN */}
                                    <div id="mobile-products" className="pl-4 mt-2 flex flex-col gap-2 hidden">

                                        <Link
                                            href="/products/wire-mesh"
                                            onClick={closeMenu}
                                            className={`word-break ${isActiveLink("/products/wire-mesh")
                                                ? "text-[#F97316] font-bold"
                                                : ""
                                                }`}
                                        >
                                            {t('nav.wireMesh')}
                                        </Link>

                                        <Link
                                            href="/products/cutting-bending"
                                            onClick={closeMenu}
                                            className={`word-break ${isActiveLink("/products/cutting-bending")
                                                ? "text-[#F97316] font-bold"
                                                : ""
                                                }`}
                                        >
                                            {t('nav.cuttingBanding')}
                                        </Link>

                                        <Link
                                            href="/products/medium-carbon"
                                            onClick={closeMenu}
                                            className={`word-break ${isActiveLink("/products/medium-carbon")
                                                ? "text-[#F97316] font-bold"
                                                : ""
                                                }`}
                                        >
                                            {t('nav.mediumCarbon')}
                                        </Link>

                                    </div>
                                </div>
                            </li>
                            <li>
                                <Link href="/media" onClick={closeMenu} className={isActiveLink("/media") ? "underline decoration-[#F97316] underline-offset-4 decoration-2" : ""}>{t('nav.media')}</Link>
                            </li>
                            <li>
                                <Link href="/career" onClick={closeMenu} className={isActiveLink("/career") ? "underline decoration-[#F97316] underline-offset-4 decoration-2" : ""}>{t('nav.career')}</Link>
                            </li>
                            <li>
                                <Link href="/contact-us" onClick={closeMenu} className={`${isActiveLink("/contact-us") ? "underline decoration-[#F97316] underline-offset-4 decoration-2" : "text-white"}`}>{t('nav.getInTouch')}</Link>
                            </li>
                            {/* Mobile Language Toggle */}
                            <li className="flex gap-3">
                                <button
                                    onClick={() => setLanguage('al')}
                                    className={`text-[11px] font-semibold tracking-widest uppercase transition-colors ${language === 'al' ? 'text-[#F97316]' : 'text-white hover:text-[#F97316]'
                                        }`}
                                >
                                    <ReactCountryFlag
                                        countryCode="AL"
                                        svg
                                        title={t("nav.albanian")}
                                        style={{
                                            width: "20px",
                                            height: "20px",
                                        }}
                                    />
                                </button>
                                <span className="text-white">|</span>

                                <button
                                    onClick={() => setLanguage('en')}
                                    className={`text-[11px] font-semibold tracking-widest uppercase transition-colors ${language === 'en' ? 'text-[#F97316]' : 'text-white hover:text-[#F97316]'
                                        }`}
                                >
                                    <ReactCountryFlag
                                        countryCode="GB"
                                        svg
                                        title={t("nav.english")}
                                        style={{
                                            width: "20px",
                                            height: "20px",
                                        }}
                                    />
                                </button>
                                <span className="text-white">|</span>
                                <button
                                    onClick={() => setLanguage('ge')}
                                    className={`text-[11px] font-semibold tracking-widest uppercase transition-colors ${language === 'ge' ? 'text-[#F97316]' : 'text-white hover:text-[#F97316]'
                                        }`}
                                >
                                    <ReactCountryFlag
                                        countryCode="DE"
                                        svg
                                        title={t("nav.german")}
                                        style={{
                                            width: "20px",
                                            height: "20px",
                                        }}
                                    />
                                </button>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div >
    );
}