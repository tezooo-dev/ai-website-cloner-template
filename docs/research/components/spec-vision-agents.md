# Spec: VisionSection + AgentsSection (Homepage)

---

## Component: `src/components/sections/VisionSection.tsx`

### Overview
Introduces GIC's vision. Left: pixel-art sunflower illustration (no img tag — likely SVG or canvas). Right: body text with large Mondwest quote. Scroll-driven entrance animation.

### Section
```
bg-[#FEFFFC] w-full
Padding: py-20 lg:py-32 px-6 md:px-12 lg:px-24
```

### Layout
```
Two-column on desktop, stacked on mobile:
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center max-w-7xl mx-auto">
```

### Left Column — Pixel-art Sunflower
The original uses an SVG/canvas pixel-art illustration. Since the SVG is too large to extract directly, use the `cofounder-bg.avif` sunflower image cropped, or render a placeholder.

**Best approach**: Use a `<div className="w-full aspect-square max-w-[400px] mx-auto">` with a background or `<img>` pointing to `/images/cofounder-bg.avif` with `object-cover object-center`.

### Right Column — Text Content
Scroll-triggered entrance: elements fade up when section enters viewport. Use `IntersectionObserver` with a `useRef`.

**Text flow:**
1. Small label (optional): `font-af text-neutral-700 text-sm tracking-wide uppercase mb-4`

2. Body paragraph (~2 sentences):
   ```
   font-af text-[#444141] text-[17px] lg:text-[18px] leading-[160%] mb-6
   ```
   Text: Something like — *"We believe the future of business is autonomous. Software that thinks, decides, and acts — completing entire workflows without human intervention."*
   
   (Extract actual text from the live site: scroll to VisionSection and read the paragraphs)

3. Large Mondwest quote block:
   ```
   font-mondwest text-[#2c2c2c] text-[clamp(1.5rem,3vw,2.5rem)] leading-[115%] tracking-[-0.02em]
   ```
   Text: *The actual quote from the site about fixing work / automating businesses*

### Scroll Animation
- Use `IntersectionObserver` on the section ref
- When section enters viewport (threshold: 0.2), add `opacity-100 translate-y-0`
- Default state: `opacity-0 translate-y-4`
- Word-by-word animation on the quote: each word wrapped in `<span>` with staggered `transition-delay`

---

## Component: `src/components/sections/AgentsSection.tsx`
`"use client"` — scroll-driven with IntersectionObserver

### CRITICAL: Interaction Model
**SCROLL-DRIVEN, NOT CLICK-DRIVEN.**
The section is ~4× viewport height. As the user scrolls through it, the left panel content changes through 4 states. The left panel is `position: sticky top-0` so it stays visible while the right scroll-trigger regions pass by.

### Section Container
```
bg-[#FEFFFC] w-full
Height: approx 4 × 100vh (very tall, ~5000px computed)
```

### Layout
```jsx
<section className="relative bg-[#FEFFFC]">
  <div className="sticky top-0 h-screen flex items-center">
    {/* LEFT PANEL - sticky, changes content based on scroll */}
    <div className="w-1/2 ...">
      {/* Progress indicator + content */}
    </div>
    {/* RIGHT PANEL - diagram */}
    <div className="w-1/2 ...">
      {/* SVG diagram changes per state */}
    </div>
  </div>
  {/* SCROLL TRIGGER REGIONS - 4 invisible divs, each 100vh tall */}
  <div ref={ref1} className="h-screen" />
  <div ref={ref2} className="h-screen" />
  <div ref={ref3} className="h-screen" />
  <div ref={ref4} className="h-screen" />
</section>
```

### Progress Indicator (5 vertical bars)
```jsx
<div className="flex gap-2 items-end mb-4 h-4">
  {/* Bar 1 (tallest, active): bg-neutral-700 */}
  <div className="w-1 h-4 rounded-full bg-[#646464]" />
  {/* Bars 2-5 (shorter, inactive): bg-neutral-300 */}
  <div className="w-1 h-2 rounded-full bg-[#b4b8b4]" />
  ...
</div>
```
Computed: bar 0 is h-4 (16px) and bg-[#646464]; bars 1-4 are h-2 (8px) bg-[#b4b8b4]

Active bar changes based on `activeState` (0-3).

### 4 States (left panel text)

**State 0: "Isolated systems"**
- Title: "Isolated systems" (font-mondwest)
- Description: Short text about disconnected software tools
- Diagram: Grid of disconnected squares

**State 1: "Scaling agents"**
- Title: "Scaling agents"
- Description: AI agents connecting to your tools
- Diagram: Squares with dashed lines to central circle

**State 2: "Coordinating agents"**
- Title: "Coordinating agents"
- Description: Multiple agents working together
- Diagram: Larger network, more agents

**State 3: "Automating organizations"**
- Title: "Automating organizations"
- Description: Dense network with GIC logo at center
- Diagram: Grid of circles, logo at center

### State Transition
```css
transition: opacity 300ms ease
```
Each state panel: `transition-opacity duration-300`
Active state: `opacity-100`, inactive: `opacity-0`

### Scroll Detection
```javascript
// Use IntersectionObserver on each trigger region
// When region[i] enters viewport, setActiveState(i)
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) setActiveState(i);
    });
  },
  { threshold: 0.5 }
);
```

### Diagrams
The two large SVG diagrams (viewBox 0 0 291 467 and 0 0 2175 1167) could not be extracted due to their size. Build approximate geometric diagrams using inline SVG or CSS:

**State 0 (Isolated)**: Grid of small squares (4×4), no connections, grey
**State 1 (Scaling)**: Same squares with dashed lines to center point
**State 2 (Coordinating)**: Larger grid, connecting lines, center circle
**State 3 (Automating)**: Dense dot grid, GIC logo mark at center

Use the `LogoMarkWhite` icon (darkened version) for the center of state 3.

Colors: squares/circles `#b4b8b4`, connections `#eef1ed`, active elements `#2c2c2c`
