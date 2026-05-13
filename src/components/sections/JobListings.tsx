import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Job } from "@/types";

const areas: Job[] = [
  { id: "1", title: "AI Engineering", type: "Agents, automation, and model integrations" },
  { id: "2", title: "Full-Stack Development", type: "Web apps, dashboards, portals, and SaaS products" },
  { id: "3", title: "Automation Specialists", type: "CRM, operations, reporting, and workflow systems" },
  { id: "4", title: "UI/UX Design", type: "Business tools, customer portals, and product interfaces" },
  { id: "5", title: "Business Development", type: "AI services, software projects, and client growth" },
];

export function JobListings() {
  return (
    <section className="bg-[#FEFFFC] py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <p className="font-af text-[#444141] text-[17px]">
            Areas where Tezooo expects to grow
          </p>
          <p className="font-af text-[#646464] text-[15px] mt-2">
            For general applications, email hr@tezooo.com with your area of
            interest and relevant work.
          </p>
        </div>

        <div className="rounded-2xl border border-neutral-300 overflow-hidden bg-white">
          {areas.map((area, i) => (
            <a
              key={area.id}
              href="mailto:hr@tezooo.com"
              className={cn(
                "flex items-center justify-between px-6 py-5 hover:bg-neutral-50 transition-colors group",
                i > 0 && "border-t border-neutral-300",
              )}
            >
              <div>
                <h3 className="font-medium text-[#2c2c2c] text-[16px] tracking-[-0.15px] mb-0.5 font-af">
                  {area.title}
                </h3>
                <span className="font-af text-[#646464] text-[14px]">{area.type}</span>
              </div>
              <ChevronRight className="w-4 h-4 text-neutral-400 group-hover:text-neutral-700 transition-colors" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default JobListings;
