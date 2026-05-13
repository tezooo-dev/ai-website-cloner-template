# Spec: Nav + MobileNavDrawer

## Component: `src/components/Nav.tsx`

### Overview
Fixed frosted-glass pill nav bar. Consistent appearance at ALL scroll positions (no scroll-triggered changes). On desktop it floats as a pill centered at top. On mobile it spans full width with no border-radius.

### Layout & Positioning
```
nav element classes:
  fixed lg:top-4 lg:left-1/2 lg:-translate-x-1/2
  z-[112]
  w-full lg:max-w-fit mx-auto
  lg:rounded-[12px]
  transition-all duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)]
  will-change-[background-color,border-color]
```

### Visual Appearance
- Background: `bg-gradient-to-r from-white/12 via-white/12 to-[#F0EAE6]/0` (computed: linear-gradient to right in oklab from rgba(255,255,255,0.12) to rgba(240,234,230,0))
- Backdrop filter: `backdrop-blur-[9px]`
- Border: `border border-white/20`
- Box shadow: `shadow-[0_2px_6px_0_rgba(0,0,0,0.15)]`

### Inner Container (desktop pill)
```
div classes: flex gap-6 items-center px-5 py-3 lg:px-3 lg:py-2 w-full justify-between
```

### Logo Area (left)
- `<a href="/">` wrapping a `div.relative` with two stacked SVGs (absolute positioned, opacity toggling):
  - `LogoDark` SVG (35×34, white fills) — `absolute inset-0 opacity-0 transition-opacity duration-[250ms] ...`
  - `LogoLight` SVG (35×34, dark fills) — same class but `opacity-100`
  - Separately: `LogoMarkWhite` SVG (35×18) — also `absolute inset-0 opacity-100`
- The outer div is `relative w-[35px] h-[34px]` (or similar to contain both absolute children)

### Desktop Nav Links (hidden on mobile)
```
div classes: hidden gap-6 items-center lg:flex
```
Links: About (`/about`), Writing (`/writing`), Careers (`/careers`)
Each link: `font-medium text-[15px] leading-[140%] tracking-[-0.15px] text-foreground hover:opacity-80 transition-all duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)]`

### Right Side Container
```
div classes: flex gap-4 items-center lg:gap-6
```

Contains:
1. **Get Cofounder button** — `<a href="https://cofounder.co">` wrapping a `<button>`:
   - Button classes: `inline-flex items-center justify-center whitespace-nowrap font-medium cursor-pointer group border border-[#282834] rounded-lg gap-2 text-white hover:opacity-90 transition-opacity h-9 px-4 py-2 has-[>svg]:px-3 text-[15px] tracking-[-0.15px] leading-[140%]`
   - Background: `bg-[#1F1F29]` (computed: rgb(31,31,41))
   - Inner content:
     ```jsx
     <div className="flex items-center justify-center w-3 h-4 pl-[2.5px] pr-[1.5px] py-0 rounded-[50.496px] border ...">
       <ArrowIcon className="group-hover:animate-[slideOut_0.8s_linear_infinite]" />
     </div>
     Get Cofounder
     ```

2. **Mobile menu toggle button** (lg:hidden): `flex relative flex-col justify-center items-center w-9 h-9 rounded-lg border border-black/6 backdrop-blur-[9px]` — 3 horizontal bars (hamburger), toggles MobileNavDrawer

### MobileNavDrawer
```
Component: src/components/MobileNavDrawer.tsx
```
- Container: `block lg:hidden fixed top-0 right-0 z-[100] w-full h-dvh pointer-events-none` (full screen overlay)
- When open: slides in from right or fades in
- Large Mondwest font links: Home, About, Writing, Careers
- Each link is large text (~3xl-4xl) in `font-mondwest`
- Active page link has full opacity; inactive links may have lower opacity
- Copyright text at the bottom: `© The General Intelligence Company of New York 2026`
- Close button (X) in top right

### Interaction
- Mobile button toggles open/close state via React `useState`
- Use `"use client"` directive

### Assets Used
- `LogoDark`, `LogoLight`, `LogoMarkWhite`, `ArrowIcon` from `@/components/icons`

### Notes
- The `slideOut` keyframe is defined in `globals.css` and animates the arrow on button hover
- Nav does NOT change appearance on scroll — it's always frosted glass
- `will-change-[background-color,border-color]` is on the nav element for GPU compositing
