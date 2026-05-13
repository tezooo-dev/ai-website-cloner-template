export function FixedBottomImage() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[-1] max-w-[1920px] mx-auto overflow-clip h-[400px] xl:h-[500px]">
      <div className="relative w-full h-full">
        <img
          src="/images/footer-2.png"
          alt="Central Park"
          className="w-full h-full object-cover object-top"
        />
        <div className="footer-gradient absolute inset-0" />
        <div className="absolute bottom-4 left-0 right-0 flex justify-between px-6 text-white/60 text-xs">
          <span>© The General Intelligence Company of New York 2026</span>
          <span>Design by Altalogy</span>
        </div>
      </div>
    </div>
  );
}
