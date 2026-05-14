"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
    ChevronLeft,
    ChevronRight,
    X,
    Maximize,
    Minimize,
    Share,
    ZoomIn,
} from "lucide-react";

export default function CompanyImages() {
    const [visibleItems, setVisibleItems] = useState([]);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isZoomed, setIsZoomed] = useState(false);
    const [isMaximized, setIsMaximized] = useState(false);
    const refs = useRef([]);

    const images = Array.from({ length: 35 }, (_, i) => i + 1);
    // Intersection animation
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = refs.current.indexOf(entry.target);
                    setVisibleItems((prev) => [...new Set([...prev, index])]);
                }
            });
        }, { threshold: 0.2 });

        refs.current.forEach((el) => el && observer.observe(el));
        return () => observer.disconnect();
    }, []);

    // Keyboard controls
    useEffect(() => {
        const handleKeyPress = (e) => {
            if (!lightboxOpen) return;

            switch (e.key) {
                case "ArrowLeft":
                    goToPrevious();
                    break;
                case "ArrowRight":
                    goToNext();
                    break;
                case "Escape":
                    closeLightbox();
                    break;
                case " ":
                case "Enter":
                    e.preventDefault();
                    toggleZoom();
                    break;
                case "f":
                case "F":
                    toggleMaximize();
                    break;
                case "s":
                case "S":
                    shareImage();
                    break;
            }
        };

        document.addEventListener("keydown", handleKeyPress);
        return () =>
            document.removeEventListener("keydown", handleKeyPress);
    }, [lightboxOpen, currentImageIndex, isZoomed, isMaximized]);

    // Sync fullscreen state (IMPORTANT)
    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsMaximized(!!document.fullscreenElement);
        };

        document.addEventListener("fullscreenchange", handleFullscreenChange);
        return () =>
            document.removeEventListener("fullscreenchange", handleFullscreenChange);
    }, []);

    const openLightbox = (index) => {
        setCurrentImageIndex(index);
        setLightboxOpen(true);
    };

    const closeLightbox = async () => {
        setLightboxOpen(false);
        setIsZoomed(false);

        if (document.fullscreenElement) {
            await document.exitFullscreen();
        }

        setIsMaximized(false);
        document.body.style.overflow = "unset";
    };

    const goToNext = () => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
        setIsZoomed(false);
    };

    const goToPrevious = () => {
        setCurrentImageIndex((prev) =>
            (prev - 1 + images.length) % images.length
        );
        setIsZoomed(false);
    };

    const toggleZoom = () => setIsZoomed((p) => !p);

    // 🔥 REAL FULLSCREEN FIX
    const toggleMaximize = async () => {
        if (!document.fullscreenElement) {
            try {
                await document.documentElement.requestFullscreen();
                setIsMaximized(true);
            } catch (err) {
                console.log("Fullscreen error:", err);
            }
        } else {
            await document.exitFullscreen();
            setIsMaximized(false);
        }
    };

    const shareImage = async () => {
        const imageUrl = `/image${images[currentImageIndex]}.webp`;

        if (navigator.share) {
            try {
                await navigator.share({
                    title: `Company Image ${images[currentImageIndex]}`,
                    text: "Check out this company image",
                    url: window.location.origin + imageUrl,
                });
            } catch {
                fallbackShare();
            }
        } else {
            fallbackShare();
        }
    };

    const fallbackShare = () => {
        const imageUrl =
            window.location.origin +
            `/image${images[currentImageIndex]}.webp`;

        navigator.clipboard.writeText(imageUrl).then(() => {
            alert("Image URL copied to clipboard!");
        });
    };

    return (
        <>
            <div className="bg-black py-16 md:py-20 lg:py-26 px-6 sm:px-10 md:px-20 w-full border border-t-0 border-[#2A2A2E]">
                <div className="max-w-[1500px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {images.map((num, i) => (
                            <div
                                key={num}
                                ref={(el) => (refs.current[i] = el)}
                                className={`relative w-full h-[320px] cursor-pointer transition-all duration-500 hover:scale-105
                                ${visibleItems.includes(i)
                                        ? "opacity-100 scale-100 blur-0"
                                        : "opacity-0 scale-[0.96] blur-[6px]"
                                    }`}
                                style={{ transitionDelay: `${i * 45}ms` }}
                                onClick={() => openLightbox(i)}
                            >
                                <Image
                                    src={`/image${num}.webp`}
                                    alt={`Company Image ${num}`}
                                    fill
                                    className="object-cover rounded-3xl"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* LIGHTBOX */}
            {lightboxOpen && (
                <div className="fixed inset-0 bg-black/90 z-999">

                    {/* IMAGE */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Image
                            src={`/image${images[currentImageIndex]}.webp`}
                            alt="image"
                            width={1200}
                            height={800}
                            className={`object-contain opacity-0 animate-fadeInUp transition-all duration-700 hover:scale-105 ${isZoomed ? "scale-150 cursor-zoom-out" : "scale-100 cursor-zoom-in"
                                }`}
                            onClick={toggleZoom}
                        />
                    </div>

                    {/* UI */}
                    <div className="absolute inset-0 z-999 pointer-events-none">

                        {/* TOP */}
                        <div className="absolute top-4 right-4 flex gap-2 pointer-events-auto">

                            <button
                                onClick={toggleZoom}
                                className="p-2 text-white hover:text-[#F97316]"
                            >
                                <ZoomIn size={20} />
                            </button>

                            <button
                                onClick={toggleMaximize}
                                className="p-2 text-white hover:text-[#F97316]"
                            >
                                {isMaximized ? (
                                    <Minimize size={20} />
                                ) : (
                                    <Maximize size={20} />
                                )}
                            </button>

                            <button
                                onClick={shareImage}
                                className="p-2 text-white hover:text-[#F97316]"
                            >
                                <Share size={20} />
                            </button>

                            <button
                                onClick={closeLightbox}
                                className="p-2 text-white hover:text-white cursor-pointer"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* LEFT */}
                        <button
                            onClick={goToPrevious}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-white pointer-events-auto"
                        >
                            <ChevronLeft size={48} />
                        </button>

                        {/* RIGHT */}
                        <button
                            onClick={goToNext}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-white pointer-events-auto"
                        >
                            <ChevronRight size={48} />
                        </button>
                    </div>

                    {/* BOTTOM */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-999 text-white text-sm bg-black bg-opacity-50 px-3 py-1 rounded-full">
                        {currentImageIndex + 1} / {images.length}
                    </div>
                </div>
            )}
        </>
    );
}