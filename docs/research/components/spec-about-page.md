# Spec: About Page (`/about`)

## Route file: `src/app/about/page.tsx`

The About page shares the global layout (Nav, Footer, FixedBottomImage) and has these sections top-to-bottom.

---

## Section 1: HeroSection (About variant)

Reuse `HeroSection` or create `AboutHeroSection`.

### Differences from Homepage Hero
- Same layout, same parallax mechanism
- Background: same `spring-hero-2.avif` or a green/park variant (check — the site uses the same hero image)
- Frosted glass card at bottom-left has different text:
  - H2: `"Our mission is to enable the one-person one-billion dollar company."`
  - P: `"The General Intelligence Company of New York was founded in January 2025 by Andrew Pignanelli and Abhishyant Khare to realize this mission."`
  - P (smaller, muted): `"Backed by Compound & Acrew Capital"`
  - No CTA button (or a "See job offers →" link)

### Implementation
Create `AboutHeroSection.tsx` using same frosted card structure as `HeroSection` but with different text content.

---

## Section 2: ColorStripe
Same `ColorStripe` component — reused between hero and content.

---

## Section 3: MissionTextSection

```
bg-[#FEFFFC] w-full
Padding: py-20 lg:py-32 px-6 md:px-12 lg:px-24
Max-width: max-w-3xl mx-auto (centered text, narrow column)
```

### Content (centered body text)
Multiple paragraphs about vision + large Mondwest quote.

**Body paragraphs** (`font-af text-[#444141] text-[17px] lg:text-[18px] leading-[170%] mb-6`):
- Extract actual paragraph text from the live site (scroll to `/about`)
- Approximate content: discussion of the company's mission, the opportunity, what they're building

**Large Mondwest quote** in the middle:
```
font-mondwest text-[#2c2c2c] text-[clamp(1.75rem,4vw,3rem)] leading-[115%] tracking-[-0.02em] my-12
```
Text: `"By building the right products, and developing the right agents, we can fix that."`

**Sign-off at bottom**:
```
font-af text-[#444141] text-[15px] italic mt-8
```
Text: `"with love from NYC, Andrew & Abhishyant"`

### Scroll Animation
Paragraphs fade in as section scrolls into view (same IntersectionObserver pattern as VisionSection).

---

## Section 4: NYCPhotoSection

```
bg-[#FEFFFC] w-full
Padding: py-16 lg:py-24 px-6 md:px-12 lg:px-24
```

### Structure
A large rounded card with NYC skyline photo, overlaid with a frosted glass info card.

```jsx
<div className="max-w-5xl mx-auto">
  {/* Main card — blue-tinted rounded container */}
  <div className="relative rounded-3xl overflow-hidden bg-blue-100">
    <img
      src="/images/og-about.png"  {/* NYC skyline/about image */}
      alt="New York City"
      className="w-full h-[400px] lg:h-[500px] object-cover"
    />
    {/* Frosted overlay card in bottom-left or bottom area */}
    <div className="absolute bottom-6 left-6 right-6 lg:right-auto lg:max-w-[400px] bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-white/40">
      <h3 className="font-mondwest text-[#2c2c2c] text-xl mb-2">
        Come build the future in New York.
      </h3>
      <p className="text-[#646464] text-[15px] leading-[150%] mb-4">
        We're a small team of builders obsessed with AI. Based in NYC.
      </p>
      <a href="/careers" className="inline-flex items-center gap-2 text-[#2c2c2c] text-[15px] font-medium hover:opacity-80 group">
        See job offers →
        <ArrowIcon className="group-hover:animate-[slideOut_0.8s_linear_infinite]" />
      </a>
    </div>
  </div>
  
  {/* Contact info below the card */}
  <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-[15px] text-[#646464]">
    <div>
      <p className="font-medium text-[#2c2c2c] mb-1">HQ</p>
      <p>New York City, NY</p>
    </div>
    <div>
      <p className="font-medium text-[#2c2c2c] mb-1">Email</p>
      <p>hello@generalintelligencecompany.com</p>
    </div>
    <div>
      <p className="font-medium text-[#2c2c2c] mb-1">Press</p>
      <p>press@generalintelligencecompany.com</p>
    </div>
  </div>
</div>
```

### Assets
- `/public/images/og-about.png` — NYC skyline photo (already downloaded)

---

## Page Assembly (`src/app/about/page.tsx`)
```tsx
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import FixedBottomImage from '@/components/FixedBottomImage';
import ColorStripe from '@/components/ColorStripe';
import AboutHeroSection from '@/components/sections/AboutHeroSection';
import MissionTextSection from '@/components/sections/MissionTextSection';
import NYCPhotoSection from '@/components/sections/NYCPhotoSection';

export default function AboutPage() {
  return (
    <>
      <Nav />
      <AboutHeroSection />
      <ColorStripe />
      <MissionTextSection />
      <NYCPhotoSection />
      <Footer />
      <FixedBottomImage />
    </>
  );
}
```
