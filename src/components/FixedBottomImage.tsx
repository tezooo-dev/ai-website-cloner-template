import Image from "next/image";

export function FixedBottomImage() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[-1] max-w-[1920px] mx-auto overflow-clip h-[400px] xl:h-[500px]">
      <div className="relative w-full h-full">
        <Image
          src="/images/tezooo-footer-spring.png"
          alt="Modern spring architecture"
          fill
          className="object-cover object-top"
          sizes="100vw"
        />
        <div className="footer-gradient absolute inset-0" />
        <div className="absolute bottom-4 left-0 right-0 flex justify-between px-6 text-white/60 text-xs">
          <span>(c) Tezooo Innovations 2026</span>
          <span>Canada-led. India-powered.</span>
        </div>
      </div>
    </div>
  );
}
