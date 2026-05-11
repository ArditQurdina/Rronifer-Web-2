interface TechCardProps {
  title1: string;
  title2: string;
  description: string;
}

export default function TechCard({ title1, title2, description }: TechCardProps) {
  return (
    <div className="w-full px-4 md:px-6 py-3 md:py-4 border border-[#3F3F46] text-white tracking-widest text-xs font-extrabold flex flex-col gap-4">
      <h3 className="uppercase text-[10px] text-[#F97316]">{title1}</h3>
      <h2 className="text-base">{title2}</h2>
      <p className="uppercase text-[10px] text-[#52525B]">{description}</p>
    </div>
  );
}