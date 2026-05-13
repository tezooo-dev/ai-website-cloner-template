import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { LogoMarkWhite } from "@/components/icons";
import type { Job } from "@/types";

const jobs: Job[] = [
  { id: "1", title: "Agents Research Lead", type: "Full Time" },
  { id: "2", title: "Applied AI Engineer - Agents", type: "Full Time" },
  { id: "3", title: "Founding Designer", type: "Full Time" },
  { id: "4", title: "Fullstack Engineer - Cofounder", type: "Full Time" },
  { id: "5", title: "Senior Platform Engineer", type: "Full Time" },
];

export function JobListings() {
  return (
    <section className="bg-[#FEFFFC] py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <LogoMarkWhite className="opacity-40" />
          <p className="font-af text-[#444141] text-[17px]">
            We&apos;re building tools for businesses that run themselves
          </p>
        </div>

        {/* Job listings card */}
        <div className="rounded-2xl border border-neutral-300 overflow-hidden bg-white">
          {jobs.map((job, i) => (
            <a
              key={job.id}
              href={job.href ?? "#"}
              className={cn(
                "flex items-center justify-between px-6 py-5 hover:bg-neutral-50 transition-colors group",
                i > 0 && "border-t border-neutral-300"
              )}
            >
              <div>
                <h3 className="font-medium text-[#2c2c2c] text-[16px] tracking-[-0.15px] mb-0.5 font-af">
                  {job.title}
                </h3>
                <span className="font-af text-[#646464] text-[14px]">{job.type}</span>
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
