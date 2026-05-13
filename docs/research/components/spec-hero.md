# Spec: HeroSection (Homepage)

## Component: `src/components/sections/HeroSection.tsx`
`"use client"` — needs live clock + parallax scroll listener

### Overview
Full-viewport hero with an anime-style NYC Central Park background image. Parallax effect on scroll. Frosted glass card at bottom-left. Live NYC time in top-right. The entire section is min-h-[800px] or 100svh.

### Section Element
```
section classes: relative w-full min-h-[800px] lg:h-screen overflow-hidden
```

### Background Image (Parallax)
```jsx
<div
  className="absolute inset-0 bg-cover bg-center"
  style={{
    backgroundImage: "url('/images/spring-hero-2.avif')",
    transform: `translateY(${scrollY * 0.4}px)`,  // parallax multiplier ~0.4
    willChange: 'transform',
  }}
/>
```
- Parallax: On scroll, the background shifts upward slower than page scroll, revealing the lower part of the image (Central Park meadow) as user scrolls
- Implementation: `useEffect` + `window.addEventListener('scroll', ...)` → updates `translateY`

### Superscript Text (above H1)
```
position: absolute top-6 left-1/2 -translate-x-1/2 (centered top)
font: font-af text-white text-[15px] leading-[140%] tracking-[-0.15px] text-shadow-white
```
Text: `"Agentic companies are on the horizon, and we're building them"`

### H1 Title
```
position: absolute top-16 left-1/2 -translate-x-1/2 (below superscript, centered)
font: font-mondwest text-white text-center
size: text-[clamp(1.5rem,4vw,3.5rem)] or similar responsive size
text-shadow: text-shadow-white class (rgba(255,255,255,0.8) 0px 0px 4.978px)
```
Text: `"The General Intelligence Company Of New York"`

### Live Time Display (top-right, hidden on mobile)
```
position: absolute top-6 right-4
classes: md:flex items-center hidden gap-1.5
font: font-af text-white text-[13px]
```
Structure:
```jsx
<ClockIcon />
<span>{time}</span>  {/* e.g. "2:33 PM" */}
<span>NYC</span>
```
Implementation: `useEffect` with `setInterval(updateTime, 1000)`. Format: `h:mm A` (12-hour, no leading zero). City label "NYC" is a static span.

### Frosted Glass Card (bottom-left)
```
position: absolute bottom-8 left-6 lg:bottom-12 lg:left-12
classes: p-5 lg:p-8 lg:pr-6 relative rounded-2xl backdrop-blur-[15px] border border-white/20 shadow-[0_2px_6px_0_rgba(0,0,0,0.15)] bg-gradient-to-r from-black/12 via-black/7 to-black/7 bg-clip-padding max-w-[500px]
```

**Card structure (top to bottom):**

1. H2 (font-mondwest, white):
   ```
   text-white text-[clamp(1.25rem,2.5vw,2rem)] leading-[115%] tracking-[-0.02em] mb-3
   ```
   Text: `"AI that runs businesses autonomously"`

2. Description paragraph:
   ```
   text-white/80 text-[15px] leading-[140%] mb-5
   ```
   Text: `"The General Intelligence Company is an applied AI lab working towards automating businesses full-stack with AI."`

3. CTA Link — "Get to know us →":
   ```jsx
   <a href="/about" className="inline-flex items-center gap-2 text-white text-[15px] font-medium hover:opacity-80 transition-opacity group">
     Get to know us
     <ArrowIcon className="group-hover:animate-[slideOut_0.8s_linear_infinite]" />
   </a>
   ```

### Assets
- `/public/images/spring-hero-2.avif` — the hero background (already downloaded)
- `ClockIcon`, `ArrowIcon` from `@/components/icons`

### Implementation Notes
- `"use client"` required for parallax + live clock
- Parallax: listen to `window.scroll`, update `translateY` state
- Live clock: `setInterval` every 1000ms, format with `Intl.DateTimeFormat` using `America/New_York` timezone
- The `text-shadow-white` utility class is in `globals.css`
