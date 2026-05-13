# Behaviors & Interactions — generalintelligencecompany.com

## Global Behaviors

### Nav (all pages)
- **Always visible**: Fixed, `z-[112]`, centered on desktop, full-width on mobile
- **Appearance**: Consistent frosted glass at ALL scroll positions (no scroll-triggered change)
- **Logo**: Two SVG variants (dark + light) toggle opacity (one at `opacity-100`, other at `opacity-0`) based on page background context
- **Desktop**: `max-w-fit`, centered via `left-1/2 -translate-x-1/2`, `rounded-[12px]`
- **Mobile**: Full width, no border radius, reveals a separate mobile drawer nav
- **Transitions**: `duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)]`
- **Get Cofounder button**: Dark pill, arrow icon slides on hover via `animate-[slideOut_0.8s_linear_infinite]` on `group-hover`

### Mobile Nav Drawer
- `block lg:hidden`, `fixed top-0 right-0`, full-page height
- Contains large mondwest links: Home, About, Writing, Careers
- Active page link has no opacity muting
- Copyright at bottom

## Homepage Behaviors

### Hero Section
- Background image `spring-hero-2.avif` fills viewport (`min-h-[800px]`)
- **Parallax**: Background shifts as user scrolls (different scenes visible: cherry blossoms → Central Park meadow)
- Time display: `absolute top-6 right-4`, updates live with `setInterval`
- **Hidden on mobile**: `md:flex items-center hidden`

### Color Stripe Separator
- Static — 5 stripes act as visual transition from dark hero to white content
- Not interactive

### Vision Section
- **Scroll-driven entrance**: Elements animate in as section enters viewport
- Word-by-word animation on quote text: each `<span>` fades/slides in sequentially

### Agents Section (SCROLL-DRIVEN)
- **INTERACTION MODEL: Scroll-driven with IntersectionObserver**
- Large height section (`~4x viewport`) holds sticky content
- Left panel is `position: sticky` or controlled by scroll listener
- Progress indicator: 5 vertical bars that progressively highlight as user scrolls
- **State 1**: "Isolated systems" — disconnected squares, no connections
- **State 2**: "Scaling agents" — squares connected to central circle with dashed lines
- **State 3**: "Coordinating agents" — larger network with more agents
- **State 4**: "Automating organizations" — dense grid of circles with logo center
- Content fade between states: `transition-opacity duration-300`
- Right panel diagram also animates/transitions between states

### Cofounder Section
- **Background**: `url('/images/cofounder-bg.avif')` — pixel-art sunflower field
- **Typewriter effect**: Demo text cycles through use cases: "competitor research|", "...", etc.
- **Notification mock**: Slack/mail notification card appears (pixel-art Slack icon)
- "Get Cofounder" button links to `https://cofounder.co`
- "CRM enrichment" pill floats over the section

### Writing Section
- Static grid of 3 article cards
- Cards have hover states (likely subtle scale or shadow change)

## About Page Behaviors
- Mission section text: appears to have scroll-triggered fade-in for paragraphs
- NYC photo card: static

## Writing Page Behaviors
- **Filter tabs**: Click-driven
  - Clicking "Announcements", "Optimization", "Research" filters visible cards
  - "All" shows all 8 cards
  - Active filter has different styling (not muted)
- **Featured article**: Static hero with "Read article" button

## Careers Page Behaviors
- **Job listings**: Each row is a link, hover likely shows different border/bg color
- Job row arrow: visible at all times

## Footer Behaviors
- Email input: placeholder text "Get updates in your inbox", arrow submit button
- Arrow button has sliding animation on hover (same as nav CTA)
- X and LinkedIn buttons: navigate to social profiles
- **Fixed bottom image**: Pixel-art park scene, reveals as user scrolls footer past content (`mb-[400px]`)
- Gradient overlay darkens bottom of image: `linear-gradient(rgba(255,255,255,0) 75%, rgba(0,0,0,0.82))`
- Copyright + "Design by Altalogy" in footer image overlay

## Hover States
- Nav links: `hover:opacity-80 transition-all`
- "come work with us" in footer: underline animation, border-b hover
- "Get to know us →" / "See job offers →": underline with slide-in arrow
- Article cards: scale-up or shadow on hover (standard card behavior)
- Job rows: background highlight on hover
