interface Principle {
  title: string;
  description: string;
}

const principles: Principle[] = [
  {
    title: "Cycle Time",
    description:
      "Ship fast. The shorter the feedback loop, the faster we learn and improve.",
  },
  {
    title: "Intense Focus",
    description:
      "Work on the things that matter most. Say no to everything else.",
  },
  {
    title: "Speed Over Everything",
    description:
      "Bias towards action. A good decision made quickly beats a perfect one made slowly.",
  },
  {
    title: "Delete the Part",
    description:
      "The best feature is no feature. Simplify ruthlessly before adding complexity.",
  },
  {
    title: "Own the Outcome",
    description:
      "Take full responsibility. If something is broken, fix it regardless of whose fault it is.",
  },
  {
    title: "Build in Public",
    description:
      "Share your work early and often. Transparency creates accountability and trust.",
  },
];

export function PrinciplesSection() {
  return (
    <section className="bg-[#FEFFFC] py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <p className="font-af text-neutral-600 text-[15px] uppercase tracking-wide mb-8">
          Here&apos;s how we develop great products:
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
