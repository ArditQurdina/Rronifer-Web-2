interface EngineersCardProps {
    title1: string;
    title2: string;
    description: string;
    descriptionStyle?: boolean;
}

export default function EngineersCard({ title1, title2, description, descriptionStyle }: EngineersCardProps) {
    return (
        <div className={`w-full py-4 md:py-6 text-white tracking-widest uppercase text-xs font-normal flex flex-col ${descriptionStyle ? 'gap-5' : 'gap-6'}`}>
            
            <div className="flex flex-col gap-1">
                <h2 className="text-xl font-extrabold">{title1}</h2>
                <h3 className="text-[10px] text-[#F97316] tracking-[0.2em] font-normal">
                    {title2}
                </h3>
            </div>

            <p className={` text-[#71717A] font-semibold ${descriptionStyle ? "normal-case text-sm tracking-normal font-light" : "text-[10px] uppercase tracking-widest"}`}>
                {description}
            </p>

        </div>
    );
}