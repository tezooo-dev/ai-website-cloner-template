"use client";

import { useEffect, useRef, useState } from "react";

const HEADING_WORDS = [
  "Where", "starting", "up", "a", "real", "world", "company",
  "is", "as", "easy", "as", "playing", "a", "video", "game.",
];

// Deterministic seeded pseudo-random for consistent SSR/CSR output
function seed(x: number, y: number): number {
  return (((x * 1374761 + y * 3765887) ^ (x >> 4)) & 0x7fff) / 0x7fff;
}

function ChrysanthemumCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = 280;
    const H = 420;
    canvas.width = W;
    canvas.height = H;
    ctx.clearRect(0, 0, W, H);

    const CELL = 11;
    const PX = 9; // pixel square size (CELL - gap)

    const flowerColors = [
      "#f5da3a", "#f5da3a", "#f5da3a", "#f5c820",
      "#f0a820", "#f0a820", "#d44020", "#e06878",
      "#f5e860", "#f3b040",
    ];
    const leafColors = [
      "#4a7c2e", "#4a7c2e", "#2d5c14", "#6a9e40", "#3d7a20",
    ];
    const stemColor = "#3d5c1e";

    // Flower head — circular probability mask centered at (140, 110)
    const hx = 140, hy = 110, hr = 82;
    for (let gx = 0; gx < W; gx += CELL) {
      for (let gy = 0; gy < 210; gy += CELL) {
        const cx = gx + CELL / 2;
        const cy = gy + CELL / 2;
        const dist = Math.sqrt((cx - hx) ** 2 + (cy - hy) ** 2);
        const prob = Math.max(0, 1 - dist / hr) * 0.88;
        if (seed(gx, gy) < prob) {
          const ci = Math.floor(seed(gx + 7, gy + 7) * flowerColors.length);
          ctx.fillStyle = flowerColors[ci];
          ctx.fillRect(gx + 1, gy + 1, PX, PX);
        }
      }
    }

    // Stem — two thin columns from flower base to leaves
    const stemX = 133;
    const stemTop = hy + hr * 0.72;
    const stemBot = stemTop + 52;
    for (let y = stemTop; y < stemBot; y += CELL) {
      ctx.fillStyle = stemColor;
      ctx.fillRect(stemX, y, PX, PX);
      ctx.fillRect(stemX + CELL, y, PX, PX);
    }

    // Leaves — fan shape below stem
    const leafCY = stemBot + 16;
    for (let gx = 0; gx < W; gx += CELL) {
      for (let gy = Math.floor(stemBot); gy < H; gy += CELL) {
        const cx = gx + CELL / 2;
        const cy = gy + CELL / 2;
        const dx = Math.abs(cx - hx) / 105;
        const dy = (cy - leafCY) / 95;
        if (dy < 0) continue;
        const prob = Math.max(0, (1 - dx * 1.1 - dy * 0.5) * 0.72);
        if (seed(gx + 50, gy + 50) < prob) {
          const ci = Math.floor(seed(gx + 13, gy + 13) * leafColors.length);
          ctx.fillStyle = leafColors[ci];
          ctx.fillRect(gx + 1, gy + 1, PX, PX);
        }
      }
    }
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full max-w-[280px] mx-auto block"
      aria-hidden="true"
    />
  );
}

export function VisionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#FEFFFC] w-full py-20 lg:py-32 px-6 md:px-12 lg:px-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center max-w-7xl mx-auto">
        {/* Left — pixel-art chrysanthemum */}
        <div className="w-full flex items-center justify-center">
          <ChrysanthemumCanvas />
        </div>

        {/* Right — text */}
        <div
          className={`transition-all duration-700 ease-out ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="font-af text-[#444141] text-[17px] leading-[160%] mb-5">
            We envision a world where anyone with an idea and some unique insight
            can start a business.
          </p>

          <p className="font-af text-[#b4b8b4] text-[17px] leading-[160%] mb-8">
            A world where someone can wake up with an idea for a company, open
            their laptop, and create it in real time.
          </p>

          {/* Word-by-word animated heading */}
          <h2 className="font-mondwest text-[#2c2c2c] text-[clamp(1.75rem,3vw,2.75rem)] leading-[130%] tracking-[-0.02em] flex flex-wrap gap-x-[0.3em]">
            {HEADING_WORDS.map((word, i) => (
              <span
                key={i}
                className={`transition-all duration-500 ${
                  visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                }`}
                style={{
                  transitionDelay: visible ? `${100 + i * 50}ms` : "0ms",
                }}
              >
                {word}
              </span>
            ))}
          </h2>
        </div>
      </div>
    </section>
  );
}
