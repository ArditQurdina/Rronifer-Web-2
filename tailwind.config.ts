import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],

    theme: {
        extend: {
            fontFamily: {
                montserrat: ["Montserrat", "sans-serif"],
            },

            animation: {
                "elegant-fade-in": "elegantFadeIn 1.4s ease-out forwards",
                "sweep": "sweep 2.2s ease-in-out 0.6s forwards",
                "line-expand": "lineExpand 1.2s ease-out 1.4s forwards",
                "text-breath": "textBreath 1.6s ease-out 1.8s forwards",
                "floating": "floating 4s ease-in-out infinite",
            },

            keyframes: {
                elegantFadeIn: {
                    "0%": {
                        opacity: "0",
                        transform: "translateY(20px) scale(0.98)",
                        filter: "blur(10px)",
                    },
                    "100%": {
                        opacity: "1",
                        transform: "translateY(0) scale(1)",
                        filter: "blur(0)",
                    },
                },

                sweep: {
                    "0%": { left: "-150%" },
                    "100%": { left: "150%" },
                },

                lineExpand: {
                    "0%": { width: "0", opacity: "0" },
                    "100%": { width: "60%", opacity: "0.6" },
                },

                textBreath: {
                    "0%": {
                        opacity: "0",
                        letterSpacing: "1rem",
                    },
                    "100%": {
                        opacity: "0.5",
                        letterSpacing: "1.5rem",
                    },
                },

                floating: {
                    from: { transform: "translateY(0px)" },
                    to: { transform: "translateY(-10px)" },
                },
            },
        },
    },

    plugins: [],
};

export default config;