import { ArrowIcon } from "@/components/icons";

export function NYCPhotoSection() {
  return (
    <section className="bg-[#FEFFFC] w-full py-16 lg:py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        {/* Main card */}
        <div className="relative rounded-3xl overflow-hidden bg-blue-100">
          <img
            src="/images/og-about.png"
            alt="New York City"
            className="w-full h-[400px] lg:h-[500px] object-cover"
          />

          {/* Frosted overlay card */}
          <div className="absolute bottom-6 left-6 right-6 lg:right-auto lg:max-w-[400px] bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-white/40">
            <h3 className="font-mondwest text-[#2c2c2c] text-xl leading-[125%] mb-2">
              Come build the future in New York.
            </h3>
            <p className="font-af text-[#646464] text-[15px] leading-[150%] mb-4">
              We&apos;re a small team of builders obsessed with AI. Based in NYC.
            </p>
            <a
              href="/careers"
              className="inline-flex items-center gap-2 text-[#2c2c2c] text-[15px] font-medium hover:opacity-80 transition-opacity group"
            >
              See job offers
              <ArrowIcon className="group-hover:animate-[slideOut_0.8s_linear_infinite]" />
            </a>
          </div>
        </div>

        {/* Contact info row */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-[15px] text-[#646464]">
          <div>
            <p className="font-medium text-[#2c2c2c] mb-1 font-af">HQ</p>
            <p className="font-af">New York City, NY</p>
          </div>
          <div>
            <p className="font-medium text-[#2c2c2c] mb-1 font-af">Email</p>
            <p className="font-af">hello@generalintelligencecompany.com</p>
          </div>
          <div>
            <p className="font-medium text-[#2c2c2c] mb-1 font-af">Press</p>
            <p className="font-af">press@generalintelligencecompany.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NYCPhotoSection;
