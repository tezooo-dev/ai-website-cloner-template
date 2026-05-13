# Spec: Careers Page (`/careers`)

## Route file: `src/app/careers/page.tsx`

---

## Section 1: CareersHero

```
bg-[#FEFFFC] w-full
Padding: pt-40 pb-16 px-6 md:px-12 lg:px-24 (extra top for fixed nav)
Max-width: max-w-4xl mx-auto text-center
```

### Structure
```jsx
<section className="bg-[#FEFFFC] pt-40 pb-16 px-6 text-center">
  <div className="max-w-4xl mx-auto">
    {/* Briefcase icon */}
    <div className="flex justify-center mb-6">
      <div className="w-16 h-16 rounded-2xl bg-neutral-100 flex items-center justify-center">
        {/* Use a briefcase emoji or Lucide Briefcase icon */}
        🧳
      </div>
    </div>
    
    <p className="font-af text-neutral-600 text-[15px] tracking-wide uppercase mb-3">
      Working at
    </p>
    
    <h1 className="font-mondwest text-[#2c2c2c] text-[clamp(2rem,5vw,4rem)] leading-[110%] tracking-[-0.02em]">
      The General Intelligence Company Of New York
    </h1>
  </div>
</section>
```

---

## Section 2: TeamDescription

```
bg-[#FEFFFC] w-full
Padding: py-16 px-6 md:px-12 lg:px-24
Max-width: max-w-3xl mx-auto
```

### Content
Body paragraphs in `font-af text-[#444141] text-[17px] leading-[170%]` — extract actual text from the live site.

Large Mondwest quote:
```
font-mondwest text-[#2c2c2c] text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[115%] my-10
```
Text: `"Build the world you'd like to live in..."`

Second quote / philosophy:
```
font-af text-[#646464] text-[17px] italic
```
Text: `"How you do anything is how you do everything."`

---

## Section 3: PrinciplesSection

```
bg-[#FEFFFC] w-full
Padding: py-16 px-6 md:px-12 lg:px-24
```

### Header
```
font-af text-neutral-600 text-[15px] uppercase tracking-wide mb-8
```
Text: `"Here's how we develop great products:"`

### Principles Cards Grid
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
  {principles.map(p => (
    <div key={p.title} className="rounded-2xl border border-neutral-300 bg-white p-6">
      <h3 className="font-mondwest text-[#2c2c2c] text-lg mb-2">{p.title}</h3>
      <p className="font-af text-[#646464] text-[15px] leading-[150%]">{p.description}</p>
    </div>
  ))}
</div>
```

### Principles Data
```typescript
const principles = [
  { title: 'Cycle Time', description: 'Ship fast. The shorter the feedback loop, the faster we learn and improve.' },
  { title: 'Intense Focus', description: 'Work on the things that matter most. Say no to everything else.' },
  { title: 'Speed Over Everything', description: 'Bias towards action. A good decision made quickly beats a perfect one made slowly.' },
  { title: 'Delete the Part', description: 'The best feature is no feature. Simplify ruthlessly before adding complexity.' },
  { title: 'Own the Outcome', description: 'Take full responsibility. If something is broken, fix it regardless of whose fault it is.' },
  { title: 'Build in Public', description: 'Share your work early and often. Transparency creates accountability and trust.' },
];
```
*(Extract actual text from live site — navigate to /careers)*

---

## Section 4: PhotosSection (ColorStripe separator)

```
ColorStripe + two-column photo grid
bg-[#FEFFFC]
Padding: py-16 px-6 md:px-12 lg:px-24
```

### Layout
```jsx
<>
  <ColorStripe />
  <section className="bg-[#FEFFFC] py-16 px-6 md:px-12 lg:px-24">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
      <div className="rounded-2xl overflow-hidden aspect-[4/3]">
        <img src="/images/career.avif" alt="Team" className="w-full h-full object-cover" />
      </div>
      <div className="rounded-2xl overflow-hidden aspect-[4/3]">
        <img src="/images/office-1.png" alt="Office" className="w-full h-full object-cover" />
      </div>
    </div>
  </section>
</>
```

### Assets
- `/public/images/career.avif` — team photo (downloaded)
- `/public/images/office-1.png` — office photo (downloaded)

---

## Section 5: JobListings

```
bg-[#FEFFFC] w-full
Padding: py-16 px-6 md:px-12 lg:px-24
```

### Header
```jsx
<div className="flex items-center gap-4 mb-8 max-w-3xl mx-auto">
  <LogoMarkWhite className="opacity-40" />  {/* or LogoDark at small size */}
  <p className="font-af text-[#444141] text-[17px]">
    We're building tools for businesses that run themselves
  </p>
</div>
```

### Job Listings Card
```jsx
<div className="max-w-3xl mx-auto rounded-2xl border border-neutral-300 overflow-hidden bg-white">
  {jobs.map((job, i) => (
    <a
      key={job.id}
      href={job.href || '#'}
      className={cn(
        "flex items-center justify-between px-6 py-5 hover:bg-neutral-50 transition-colors group",
        i > 0 && "border-t border-neutral-300"
      )}
    >
      <div>
        <h3 className="font-medium text-[#2c2c2c] text-[16px] tracking-[-0.15px] mb-0.5">
          {job.title}
        </h3>
        <span className="text-[#646464] text-[14px]">{job.type}</span>
      </div>
      <ChevronRight className="w-4 h-4 text-neutral-400 group-hover:text-neutral-700 transition-colors" />
    </a>
  ))}
</div>
```

Import `ChevronRight` from `lucide-react`.

### Jobs Data
```typescript
const jobs: Job[] = [
  { id: '1', title: 'Agents Research Lead', type: 'Full Time' },
  { id: '2', title: 'Applied AI Engineer - Agents', type: 'Full Time' },
  { id: '3', title: 'Founding Designer', type: 'Full Time' },
  { id: '4', title: 'Fullstack Engineer - Cofounder', type: 'Full Time' },
  { id: '5', title: 'Senior Platform Engineer', type: 'Full Time' },
];
```

---

## Page Assembly (`src/app/careers/page.tsx`)
```tsx
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import FixedBottomImage from '@/components/FixedBottomImage';
import ColorStripe from '@/components/ColorStripe';
// All careers sections

export default function CareersPage() {
  return (
    <>
      <Nav />
      <CareersHero />
      <TeamDescription />
      <PrinciplesSection />
      <ColorStripe />
      <PhotosSection />
      <JobListings />
      <Footer />
      <FixedBottomImage />
    </>
  );
}
```
