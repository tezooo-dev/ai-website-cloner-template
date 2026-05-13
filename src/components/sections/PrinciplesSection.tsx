interface Principle {
  title: string;
  description: string;
}

const principles: Principle[] = [
  {
    title: "Business First",
    description:
      "Start with the workflow, customer need, and business outcome before choosing tools.",
  },
  {
    title: "Clean Engineering",
    description:
      "Build systems that are maintainable, understandable, and ready for real operations.",
  },
  {
    title: "Practical AI",
    description:
      "Use AI where it improves speed, clarity, response quality, or decision support.",
  },
  {
    title: "Founder-Led Accountability",
    description:
      "Keep communication direct, project scope clear, and delivery tied to visible progress.",
  },
  {
    title: "Long-Term Support",
    description:
      "Plan for launch, iteration, maintenance, and the operational realities after handoff.",
  },
  {
    title: "Honest Guidance",
    description:
      "Recommend automation when it helps, and simpler software when AI is not required.",
  },
];

export function PrinciplesSection() {
  return (
    <section className="bg-[#FEFFFC] py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <p className="font-af text-neutral-600 text-[15px] uppercase tracking-wide mb-8">
          How Tezooo approaches the work
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {principles.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-neutral-300 bg-white p-6"
            >
              <h3 className="font-mondwest text-[#2c2c2c] text-lg mb-2">{p.title}</h3>
              <p className="font-af text-[#646464] text-[15px] leading-[150%]">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PrinciplesSection;
