"use client";
import Image from "next/image";

export default function Intro() {
    return (
        <div className="fixed inset-0 flex items-center justify-center overflow-hidden bg-[#0d0d0d] font-[Montserrat]">

            {/* ambient glow */}
            <div className="light-leak" />

            {/* content */}
            <div className="container float-container">

                {/* logo reveal wrapper */}
                <div className="logo-wrap">
                    <Image
                        src="/rronifer-logo.svg"
                        alt="Ronifer Group"
                        width={700}
                        height={300}
                        className="main-logo"
                        priority
                    />
                </div>

                {/* separator line */}
                <div className="separator" />

                {/* tagline */}
                <div className="tagline">
                    GROUP
                </div>

            </div>
        </div>
    );
}