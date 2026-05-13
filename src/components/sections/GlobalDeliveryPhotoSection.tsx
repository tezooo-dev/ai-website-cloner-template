import Link from "next/link";
import Image from "next/image";
import { ArrowIcon } from "@/components/icons";

export function GlobalDeliveryPhotoSection() {
  return (
    <section className="bg-[#FEFFFC] w-full py-16 lg:py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden bg-blue-100 h-[400px] lg:h-[500px]">
          <Image
            src="/images/tezooo-global-delivery.png"
            alt="Modern workspace"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 960px"
          />

          <div className="absolute bottom-6 left-6 right-6 lg:right-auto lg:max-w-[440px] bg-white/85 backdrop-blur-md rounded-2xl p-6 border border-white/40">
            <h3 className="font-mondwest text-[#2c2c2c] text-xl leading-[125%] mb-2">
              Built for small businesses and growing companies.
            </h3>
            <p className="font-af text-[#646464] text-[15px] leading-[150%] mb-4">
              Tezooo works with owners, founders, and teams that need practical
              AI, automation, dashboards, web apps, and payment technology.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 text-[#2c2c2c] text-[15px] font-medium hover:opacity-80 transition-opacity group"
            >
              Discuss a Project
              <ArrowIcon className="group-hover:animate-[slideOut_0.8s_linear_infinite]" />
            </Link>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-[15px] text-[#646464]">
          <div>
            <p className="font-medium text-[#2c2c2c] mb-1 font-af">Business</p>
            <p className="font-af">Tezooo Innovations Inc.</p>
          </div>
          <div>
            <p className="font-medium text-[#2c2c2c] mb-1 font-af">Delivery</p>
            <p className="font-af">Tezooo Innovations Pvt Ltd</p>
          </div>
          <div>
            <p className="font-medium text-[#2c2c2c] mb-1 font-af">Email</p>
            <p className="font-af">info@tezooo.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GlobalDeliveryPhotoSection;
