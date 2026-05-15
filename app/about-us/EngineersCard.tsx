interface EngineersCardProps {
    title1: string;
    title2: string;
    description: string;
    descriptionStyle?: boolean;
    specs?: string[][];
}

export default function EngineersCard({
    title1,
    title2,
    description,
    descriptionStyle,
    specs,
}: EngineersCardProps) {
    return (
        <div className="w-full h-full py-4 md:py-6 text-white tracking-widest uppercase text-xs font-normal flex flex-col gap-6">
            
            {/* TOP */}
            <div className="flex flex-col gap-1">
                <h2 className="text-xl font-extrabold">{title1}</h2>

                <h3 className="text-[10px] text-[#F97316] tracking-[0.2em] font-normal">
                    {title2}
                </h3>
            </div>

            {/* SPECS (NOW INSIDE CARD, ABOVE DESCRIPTION) */}
            {specs && (
                <div className="flex flex-col gap-3">
                    {specs.map((s, idx) => (
                        <div
                            key={idx}
                            className="flex items-center gap-3 w-full bg-[#F97316]/5"
                        >
                            <div className="h-14 w-0.5 bg-[#F97316]" />

                            <div className="flex flex-col gap-1 py-3">
                                <div className="text-[#71717A] uppercase tracking-widest text-xs">
                                    {s[0]}
                                </div>

                                <div className="text-sm text-white">
                                    {s[1]}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* DESCRIPTION (always pushed to bottom) */}
            <div className="mt-auto flex flex-col gap-3">
                <p
                    className={`text-[#71717A] font-semibold ${
                        descriptionStyle
                            ? "normal-case text-sm tracking-normal font-light"
                            : "text-[10px] uppercase tracking-widest"
                    }`}
                >
                    {description}
                </p>
            </div>
        </div>
    );
}