"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function FileInput() {
    const { t } = useLanguage();

    return (
        <label className="w-full cursor-pointer border border-[#27272A] rounded-lg p-8 flex flex-col items-center justify-center gap-4 bg-[#18181B] hover:border-orange-500/50 transition">

            {/* ICON */}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-[#D1D5DB]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 16V4m0 0l-4 4m4-4l4 4M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2"
                />
            </svg>

            {/* TEXT */}
            <p className="text-sm text-center">
                {t("career.fileDragText")}
            </p>

            <p className="text-xs">
                {t("career.fileHint")}
            </p>

            {/* INPUT */}
            <input
                type="file"
                name="attachment"
                accept=".pdf,.doc,.docx"
                className="hidden"
            />
        </label>
    );
}