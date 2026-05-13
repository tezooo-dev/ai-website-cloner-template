"use client";

import React, { useEffect, useRef, useState } from "react";

// State content definitions
interface AgentState {
  title: string;
  description: string;
}

const AGENT_STATES: AgentState[] = [
  {
    title: "Manual follow-ups",
    description: "Leads, messages, reports, and admin work sit in separate tools.",
  },
  {
    title: "Connected workflows",
    description: "Automation links CRM, email, calendars, payments, forms, and internal data.",
  },
  {
    title: "AI-assisted teams",
    description: "Agents answer routine questions, qualify leads, summarize work, and hand off clearly.",
  },
  {
    title: "Clearer operations",
    description: "Owners and teams get faster responses, cleaner reporting, and fewer repetitive tasks.",
  },
];

// Progress bars: 5 bars total, bars 0..activeState are "active"
function ProgressBars({ activeState }: { activeState: number }) {
  return (
    <div className="flex gap-2 items-end mb-4 h-4">
      {[0, 1, 2, 3, 4].map((i) => {
        // Bar i is active if i <= activeState (map 4 states to 5 bars)
        const isActive = i <= activeState;
        return (
          <div
            key={i}
            className={`w-1 rounded-full transition-all duration-300 ${
              isActive ? "h-4 bg-[#646464]" : "h-2 bg-[#b4b8b4]"
            }`}
          />
        );
      })}
    </div>
  );
}

// State 0 diagram: 4×4 grid of grey squares, no connections
function DiagramIsolated() {
  const squares: React.ReactElement[] = [];
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 4; col++) {
      squares.push(
        <rect
          key={`${row}-${col}`}
          x={col * 60 + 10}
          y={row * 60 + 10}
          width="30"
          height="30"
          rx="4"
          fill="#b4b8b4"
        />,
      );
    }
  }
  return (
    <svg viewBox="0 0 280 280" className="w-full max-w-[320px] mx-auto">
      {squares}
    </svg>
  );
}

// State 1 diagram: squares with dashed lines to a center circle
function DiagramScaling() {
  const cx = 140;
  const cy = 140;
  const squarePositions = [
    { x: 20, y: 20 },
    { x: 90, y: 20 },
    { x: 160, y: 20 },
    { x: 230, y: 20 },
    { x: 20, y: 110 },
    { x: 230, y: 110 },
    { x: 20, y: 180 },
    { x: 230, y: 180 },
    { x: 20, y: 240 },
    { x: 90, y: 240 },
    { x: 160, y: 240 },
    { x: 230, y: 240 },
  ];

  return (
    <svg viewBox="0 0 280 280" className="w-full max-w-[320px] mx-auto">
      {/* Dashed lines from squares to center */}
      {squarePositions.map((pos, i) => (
        <line
          key={`line-${i}`}
          x1={pos.x + 15}
          y1={pos.y + 15}
          x2={cx}
          y2={cy}
          stroke="#eef1ed"
          strokeWidth="1.5"
          strokeDasharray="4 3"
        />
      ))}
      {/* Squares */}
      {squarePositions.map((pos, i) => (
        <rect
          key={`sq-${i}`}
          x={pos.x}
          y={pos.y}
          width="30"
          height="30"
          rx="4"
          fill="#b4b8b4"
        />
      ))}
      {/* Center circle */}
      <circle cx={cx} cy={cy} r="22" fill="#2c2c2c" />
      <circle cx={cx} cy={cy} r="28" fill="none" stroke="#646464" strokeWidth="1" />
    </svg>
  );
}

// State 2 diagram: larger network, more connecting lines, glowing center
function DiagramCoordinating() {
  const nodes = [
    { cx: 140, cy: 140, r: 24, fill: "#2c2c2c", glow: true },
    { cx: 60, cy: 60, r: 14, fill: "#646464", glow: false },
    { cx: 220, cy: 60, r: 14, fill: "#646464", glow: false },
    { cx: 60, cy: 220, r: 14, fill: "#646464", glow: false },
    { cx: 220, cy: 220, r: 14, fill: "#646464", glow: false },
    { cx: 140, cy: 30, r: 10, fill: "#b4b8b4", glow: false },
    { cx: 250, cy: 140, r: 10, fill: "#b4b8b4", glow: false },
    { cx: 140, cy: 250, r: 10, fill: "#b4b8b4", glow: false },
    { cx: 30, cy: 140, r: 10, fill: "#b4b8b4", glow: false },
  ];

  const edges: [number, number][] = [
    [0, 1], [0, 2], [0, 3], [0, 4],
    [1, 5], [2, 5], [2, 6], [4, 6],
    [3, 8], [1, 8], [3, 7], [4, 7],
  ];

  return (
    <svg viewBox="0 0 280 280" className="w-full max-w-[320px] mx-auto">
      <defs>
        <radialGradient id="glow-grad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#646464" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#646464" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Glow behind center */}
      <circle cx={140} cy={140} r={50} fill="url(#glow-grad)" />
      {/* Edges */}
      {edges.map(([a, b], i) => (
        <line
          key={`edge-${i}`}
          x1={nodes[a].cx}
          y1={nodes[a].cy}
          x2={nodes[b].cx}
          y2={nodes[b].cy}
          stroke="#eef1ed"
          strokeWidth="1.5"
        />
      ))}
      {/* Nodes */}
      {nodes.map((n, i) => (
        <circle key={`node-${i}`} cx={n.cx} cy={n.cy} r={n.r} fill={n.fill} />
      ))}
    </svg>
  );
}

// State 3 diagram: dense dot grid with GIC logo at center
function DiagramAutomating() {
  const dots: React.ReactElement[] = [];
  const cols = 9;
  const rows = 9;
  const cx = 140;
  const cy = 140;
  const spacing = 30;
  const startX = cx - ((cols - 1) / 2) * spacing;
  const startY = cy - ((rows - 1) / 2) * spacing;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const x = startX + col * spacing;
      const y = startY + row * spacing;
      const dist = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2);
      // Skip dots too close to center (logo area)
      if (dist < 36) continue;
      const opacity = Math.max(0.25, 1 - dist / 180);
      dots.push(
        <circle
          key={`dot-${row}-${col}`}
          cx={x}
          cy={y}
          r="3"
          fill="#b4b8b4"
          opacity={opacity}
        />,
      );
    }
  }

  return (
    <svg viewBox="0 0 280 280" className="w-full max-w-[320px] mx-auto">
      {dots}
      {/* Lines from center to a few outer dots */}
      {(
        [
          [cx, startY],
          [cx + spacing * 3, cy],
          [cx, startY + spacing * 8],
          [cx - spacing * 3, cy],
          [cx + spacing * 2, startY + spacing * 2],
          [cx - spacing * 2, startY + spacing * 2],
        ] as [number, number][]
      ).map(([x2, y2], i) => (
        <line
          key={`ray-${i}`}
          x1={cx}
          y1={cy}
          x2={x2}
          y2={y2}
          stroke="#eef1ed"
          strokeWidth="1"
          strokeDasharray="3 3"
        />
      ))}
      {/* Center background circle */}
      <circle cx={cx} cy={cy} r="30" fill="#2c2c2c" />
      <text x={cx} y={cy + 8} textAnchor="middle" fill="white" fontSize="26" fontWeight="700">
        T
      </text>
    </svg>
  );
}

function AgentDiagram({ state }: { state: number }) {
  return (
    <div className="w-full flex items-center justify-center">
      <div
        className={`transition-opacity duration-300 ${
          state === 0 ? "opacity-100" : "opacity-0 absolute"
        }`}
      >
        <DiagramIsolated />
      </div>
      <div
        className={`transition-opacity duration-300 ${
          state === 1 ? "opacity-100" : "opacity-0 absolute"
        }`}
      >
        <DiagramScaling />
      </div>
      <div
        className={`transition-opacity duration-300 ${
          state === 2 ? "opacity-100" : "opacity-0 absolute"
        }`}
      >
        <DiagramCoordinating />
      </div>
      <div
        className={`transition-opacity duration-300 ${
          state === 3 ? "opacity-100" : "opacity-0 absolute"
        }`}
      >
        <DiagramAutomating />
      </div>
    </div>
  );
}

export function AgentsSection() {
  const [activeState, setActiveState] = useState(0);
  const sentinelRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sentinelRefs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveState(i);
            }
          });
        },
        { threshold: 0.5 },
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const setSentinelRef = (i: number) => (el: HTMLDivElement | null) => {
    sentinelRefs.current[i] = el;
  };

  return (
    <section id="solutions" className="relative bg-[#FEFFFC]">
      {/* Sticky viewport — stays fixed while sentinels scroll past */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          {/* Left panel — progress indicator + text */}
          <div className="w-full lg:w-1/2">
            <ProgressBars activeState={activeState} />
            {AGENT_STATES.map((s, i) => (
              <div
                key={i}
                className={`transition-opacity duration-300 ${
                  activeState === i ? "opacity-100" : "opacity-0 absolute pointer-events-none"
                }`}
              >
                <h2 className="font-mondwest text-[#2c2c2c] text-[clamp(1.75rem,3.5vw,3rem)] leading-[115%] tracking-[-0.02em] mb-4">
                  {s.title}
                </h2>
                <p className="font-af text-[#444141] text-[17px] leading-[160%]">
                  {s.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right panel — diagram */}
          <div className="w-full lg:w-1/2 relative flex items-center justify-center min-h-[280px]">
            <AgentDiagram state={activeState} />
          </div>
        </div>
      </div>

      {/* Scroll sentinel regions — each is 1 viewport tall */}
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          ref={setSentinelRef(i)}
          className="h-screen"
          aria-hidden="true"
        />
      ))}
    </section>
  );
}
