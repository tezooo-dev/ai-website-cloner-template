# Page Topology — generalintelligencecompany.com

## Shared Layout (all pages)
- **Fixed Nav** (`z-[112]`): Floating pill, centered, frosted glass, backdrop-blur-9px
- **Mobile Nav** (`z-[100]`): Full-page drawer, fixed, hidden on desktop
- **Fixed Bottom Image** (`z-[-1]`): Pixel-art Central Park joggers scene (`/images/footer-2.png`), behind everything, `mb-[400px] xl:mb-[500px]` on footer to reveal it
- **Footer**: White background, nav links + email signup + social icons, sits above fixed bottom image

---

## Route: `/` (Home)

### Sections (top to bottom)
1. **HeroSection** — `section.relative.w-full`
   - Full-screen anime NYC Central Park scene (`/images/spring-hero-2.avif`)
   - Top center: H1 "The General Intelligence Company Of New York" (white, mondwest)
   - Above H1: "Agentic companies are on the horizon, and we're building them" (white, af, 15px)
   - Top right: Live time display "2:11 PM NYC" (hidden on mobile)
   - Bottom left: Frosted glass card — "AI that runs businesses autonomously" (H2, mondwest) + description + "Get to know us →"

2. **ColorStripe** — 5 horizontal gradient stripes from dark teal to light grey

3. **VisionSection** — bg-[#FEFFFC]
   - Left: Pixel-art sunflower illustration (pixel-art style)
   - Right: Body text + large mondwest quote

4. **AgentsSection** (scroll-driven, 4 states) — bg-[#FEFFFC]
   - Sticky left panel with progress indicator (5 vertical bars)
   - 4 scroll-driven states: Isolated → Scaling → Coordinating → Automating
   - Right: animated diagram illustration per state

5. **CofoundrSection** — `div.bg-[#FEFFFC]` with background image (cofounder-bg.avif = pixel-art sunflowers)
   - Large heading "Cofounder lets you automate your business with natural language"
   - Typewriter effect for demo use cases
   - Mock Slack/email notification UI
   - "Get Cofounder" CTA button
   - "Everyone needs a Cofounder, not everyone has one."

6. **WritingSection** — bg-[#FEFFFC]
   - "Our vision for the future of the world" heading + "Read more articles" button
   - 3-column article card grid

7. **Footer** — bg-white, `mb-[400px]` to reveal fixed bottom image
   - "We're building tools for businesses that run themselves"
   - "come work with us →"
   - Nav links row: Home, About, Writing, Careers, Privacy Policy, Company
   - Email signup input + submit arrow
   - X (Twitter) and LinkedIn icon buttons
   - Color stripe (same 5-stripe design as top)
   - Copyright: "© The General Intelligence Company of New York 2026"
   - "Design by Altalogy"

8. **FixedBottomImage** — `fixed bottom-0 left-0 right-0 z-[-1]`
   - `/images/footer-2.png` pixel-art Central Park runners
   - Gradient overlay `linear-gradient(rgba(255,255,255,0) 75%, rgba(0,0,0,0.82))`

---

## Route: `/about`

1. **HeroSection** — pixel-art green Central Park (different image from homepage)
   - Same H1 title
   - Frosted glass card: "Our mission is to enable the one-person one-billion dollar company."
   - "The General Intelligence Company of New York was founded in January 2025 by Andrew Pignanelli and Abhishyant Khare to realize this mission."
   - "Backed by Compound & Acrew Capital"

2. **ColorStripe** — same 5-stripe separator

3. **MissionTextSection** — bg-[#FEFFFC]
   - Centered body text paragraphs
   - Large mondwest quote: "By building the right products, and developing the right agents, we can fix that."
   - Multiple paragraphs about vision
   - "with love from NYC, Andrew & Abhishyant" sign-off

4. **NYCPhotoSection** — bg-[#FEFFFC]
   - Rounded blue card with NYC skyline photo (`/images/og-about.png` or similar)
   - Frosted glass overlay card: "Come build the future in New York."
   - Description + "See job offers →"
   - Contact info: HQ address, email, press contact

5. Footer + FixedBottomImage (same as homepage)

---

## Route: `/writing`

1. **FeaturedArticle** — bg-[#FEFFFC], light blue bg
   - Pixel-art/illustrated article cover with quill icon above
   - H1: article title + author + date
   - "Read article →" button overlaid on image

2. **ArticleGrid** — bg-white separator + bg-[#FEFFFC]
   - Filter tabs: All 8 | Announcements 2 | Optimization 3 | Research 3
   - 3-column grid of article cards (same card style as homepage)

3. Footer + FixedBottomImage

---

## Route: `/careers`

1. **CareersHero** — bg-[#FEFFFC]
   - Briefcase icon above
   - "Working at" label
   - H1: "The General Intelligence Company Of New York"

2. **TeamDescription** — bg-[#FEFFFC]
   - Body text about team + working style
   - Large mondwest quote: "Build the world you'd like to live in..."
   - "How you do anything is how you do everything."

3. **PrinciplesSection** — bg-[#FEFFFC]
   - "Here's how we develop great products:"
   - Cards: Cycle Time, Intense Focus, Speed Over Everything, Delete the Part, etc.

4. **PhotosSection** (ColorStripe separator)
   - 2-column: founder team photo + office photo (real photos, not pixel art)

5. **JobListings** — bg-[#FEFFFC]
   - GIC logo icon + "We're building tools for businesses that run themselves"
   - Rounded card container with list items
   - Jobs: Agents Research Lead, Applied AI Engineer - Agents, Founding Designer, Fullstack Engineer - Cofounder, Senior Platform Engineer
   - Each job: title + "Full Time" + arrow chevron

6. Footer + FixedBottomImage

---

## Interaction Model Summary
- **Nav**: Static, consistent glass blur at all scroll positions
- **HeroSection**: Scroll-driven parallax on background image
- **AgentsSection**: Scroll-driven sticky — left panel content changes via IntersectionObserver
- **CofoundrSection**: Typewriter text cycling animation (time-driven)
- **WritingSection filter tabs**: Click-driven (click to filter article cards)
- **Footer email signup**: Click to submit (→ arrow button)
