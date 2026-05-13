# Spec: Footer + ColorStripe + FixedBottomImage

## Component: `src/components/Footer.tsx`

### Overview
White-background footer that sits above a fixed pixel-art background image. The footer has `mb-[400px] xl:mb-[500px]` which pushes the page content up and reveals the fixed-bottom pixel-art image underneath.

### Footer Element
```
footer classes: w-full mb-[400px] xl:mb-[500px] bg-white
```
Computed height: ~468px

### Footer Structure (top to bottom)

**Section 1: Top content area**
```
Padding: px-6 md:px-12 lg:px-24 xl:px-32 pt-12 pb-8 (approximate)
```
- `<h2>` (font-mondwest, ~2xl-3xl): `"We're building tools for businesses that run themselves"`
- `<p>`: `"If that sounds interesting to you,"` + `<a className="border-b hover:border-b-2 transition-all">come work with us →</a>`
- The "come work with us" link has an underline with slide animation on hover

**Section 2: Nav links row**
```
Horizontal flex row, gap-4 or gap-6, text-sm text-neutral-700
```
Links: Home (`/`), About (`/about`), Writing (`/writing`), Careers (`/careers`), Privacy Policy, Company

**Section 3: Email signup**
```
flex items-center gap-2 rounded-full border border-neutral-300 px-4 py-2 max-w-[320px]
```
- Placeholder text: `"Get updates in your inbox"`
- Arrow submit button (ArrowIcon) on the right, same slideOut animation on hover

**Section 4: Social icons row**
```
flex gap-3 items-center
```
- X (Twitter) icon button — links to GIC's X profile
- LinkedIn icon button — links to GIC's LinkedIn profile
- Both: `w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-neutral-100 transition-all`

**Section 5: ColorStripe (same as top separator)**
- Reuse `ColorStripe` component

**Section 6: Pixel-art footer image overlay section**
- This is rendered as the `FixedBottomImage` component, NOT inside Footer
- Fixed behind the footer

---

## Component: `src/components/ColorStripe.tsx`

### Overview
5-stripe horizontal separator. Each stripe is a colored 6px bar + a 2px white gap.

### Structure
```jsx
<div className="w-full">
  <div><div className="w-full h-[6px]" style={{ backgroundColor: '#334444' }} /><div className="w-full h-[2px] bg-white" /></div>
  <div><div className="w-full h-[6px]" style={{ backgroundColor: '#576A6A' }} /><div className="w-full h-[2px] bg-white" /></div>
  <div><div className="w-full h-[6px]" style={{ backgroundColor: '#728383' }} /><div className="w-full h-[2px] bg-white" /></div>
  <div><div className="w-full h-[6px]" style={{ backgroundColor: '#A5AFAF' }} /><div className="w-full h-[2px] bg-white" /></div>
  <div><div className="w-full h-[6px]" style={{ backgroundColor: '#CFD3CF' }} /></div>
</div>
```

Colors (dark teal → light grey):
1. `#334` / `#334444` — darkest teal
2. `#576A6A` — medium teal
3. `#728383` — grey-teal
4. `#A5AFAF` — light grey
5. `#CFD3CF` — palest grey (no white gap after last stripe)

---

## Component: `src/components/FixedBottomImage.tsx`

### Overview
Fixed pixel-art background image of Central Park joggers, visible as user scrolls past the footer due to the footer's large `mb-[400px]`.

### Structure
```
div classes: fixed bottom-0 left-0 right-0 z-[-1] max-w-[1920px] mx-auto overflow-clip
Height: 500px (xl: 500px)
```

### Inner structure
```jsx
<div className="relative w-full h-full">
  <img
    src="/images/footer-2.png"
    alt="Central Park"
    className="w-full h-full object-cover object-top"
  />
  {/* Gradient overlay darkening the bottom */}
  <div className="footer-gradient absolute inset-0" />
  {/* Copyright overlay at bottom */}
  <div className="absolute bottom-4 left-0 right-0 flex justify-between px-6 text-white/60 text-xs">
    <span>© The General Intelligence Company of New York 2026</span>
    <span>Design by Altalogy</span>
  </div>
</div>
```

The `.footer-gradient` class is already defined in `globals.css`:
```css
.footer-gradient {
  background: linear-gradient(rgba(255, 255, 255, 0) 75%, rgba(0, 0, 0, 0.82));
}
```

### Assets
- `/public/images/footer-2.png` — pixel-art Central Park joggers scene (already downloaded)
