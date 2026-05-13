import { Briefcase } from "lucide-react";

export function CareersHero() {
  return (
    <section className="bg-[#FEFFFC] pt-40 pb-16 px-6 md:px-12 lg:px-24 text-center">
      <div className="max-w-4xl mx-auto">
        {/* Briefcase icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-2xl bg-neutral-100 flex items-center justify-center">
            <Briefcase className="w-8 h-8 text-[#444141]" />
          </div>
        </div>

        <p className="font-af text-neutral-600 text-[15px] tracking-wide uppercase mb-3">
          Working at
        </p>

        <h1 className="font-mondwest text-[#2c2c2c] text-[clamp(2rem,5vw,4rem)] leading-[110%] tracking-[-0.02em]">
          The General Intelligence Company Of New York
        </h1>
      </div>
    </section>
  );
}

export default CareersHero;
