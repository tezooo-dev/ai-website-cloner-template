# Design Tokens — generalintelligencecompany.com

## CSS Custom Properties (from :root)
```css
:root {
  --background: #fff;
  --foreground: #171717;
  --neutral-900: #2c2c2c;
  --neutral-800: #444141;
  --neutral-700: #646464;
  --neutral-600: #b4b8b4;
  --neutral-300: #eef1ed;
  --neutral-100: #f9faf7;
  --scrollbar-width: calc(100vw - 100%);
}
```

## Body
- Background: `bg-neutral-50` = `#f9faf7` (via `--neutral-100`)
- Most sections: `bg-[#FEFFFC]` (very slight off-white/cream)
- Footer section: `bg-white` = `#ffffff`

## Fonts
- **Headings**: `ppmondwest` (PP Mondwest) — CSS var `--font-mondwest`
  - Source: `/_next/static/media/17330fd087386262-s.p.woff2`
  - Used for: H1, H2, nav (mobile), large display text
- **Body/UI**: `af` (AF Foundry) — CSS var `--font-af-foundary`
  - Source: `/_next/static/media/be66fc6922929061-s.p.woff2`
  - Weight range: 100–900 (variable)
  - Used for: nav links, body text, labels, captions
- **Mono**: `Geist Mono` — CSS var `--font-geist-mono`
  - Used for: code, pill labels

## Typography Scale (from Tailwind classes)
| Element | Size | Weight | Line Height | Tracking |
|---------|------|--------|-------------|---------|
| H1 (hero) | 32px / 48px / 54px / 64px | 400 (mondwest) | 110% | -2% |
| H2 (large) | 22px / 28px / 32px / 40px | 500 (mondwest) | 120% | — |
| H2 (body) | 32px / 40px / 48px | 400 (mondwest) | — | — |
| Body large | 17px | 500 (af) | 130% | -0.27px |
| Body | 15px | 500 (af) | 140% | -0.15px |
| Caption | 13px | 500 (af) | 130-140% | -0.13px |

## Text Colors
- White: `#FFFFFF` (hero text, card text on dark backgrounds)
- Near black: `#2c2c2c` (--neutral-900)
- Mid grey: `#b4b8b4` (--neutral-600) — muted labels, counts
- Blue-grey: `#9DB0BD` — agent pill labels
- Body text: `#171717` (--foreground)

## Border Radius
- Nav pill: `12px` (rounded-[12px])
- Hero card: `16px` (rounded-2xl)
- Article cards: varies (~12px)
- Job list card: `~16px`

## Shadows
- Nav: `0 2px 6px 0 rgba(0,0,0,0.15)`
- Hero card: `0 2px 6px 0 rgba(0,0,0,0.15)`

## Backdrop Filters
- Nav: `blur(9px)`
- Hero card: `blur(15px)`
- Glass overlays: `blur(4px)`

## Color Stripe Separator (transition from hero to white)
5 horizontal bars (top to bottom):
```
#344      (6px)
#576A6A   (6px)
#728383   (6px)
#A5AFAF   (6px)
#CFD3CF   (6px)
```
Each stripe has a 2px white gap below (except the last).

## Key Backgrounds
- Nav gradient: `linear-gradient(to right, rgba(249,250,247,0.12), rgba(249,250,247,0.18))`
- Hero card gradient: `linear-gradient(to right, rgba(0,0,0,0.12), rgba(0,0,0,0.07), rgba(0,0,0,0.07))`
- Cofounder section: `background-image: url('/images/cofounder-bg.avif')` (blue pixel-art sunflowers)
- Footer bottom: `/images/footer-2.png` with overlay `linear-gradient(rgba(255,255,255,0) 75%, rgba(0,0,0,0.82))`

## Animations/Transitions
- Nav transitions: `duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)]`
- Button hover: `transition-all duration-200`
- Get Cofounder button arrow: `group-hover:animate-[slideOut_0.8s_linear_infinite]`
- Scroll indicator arrows animate on hover: `slideOut` keyframe
