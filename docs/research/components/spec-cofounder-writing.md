# Spec: CofoundrSection + WritingSection (Homepage)

---

## Component: `src/components/sections/CofoundrSection.tsx`
`"use client"` — typewriter animation

### Overview
Full-width section with pixel-art sunflower field background. Contains a typewriter demo, a mock Slack notification, and a CTA. Located between AgentsSection and WritingSection on homepage.

### Container
```
bg-[#FEFFFC] w-full
Background image: url('/images/cofounder-bg.avif') — pixel-art sunflower field
bg-cover bg-center or bg-no-repeat
Padding: py-24 lg:py-32 px-6 md:px-12 lg:px-24
```

### Layout
Max-width container with `max-w-7xl mx-auto`

### Top Badge / Label
```jsx
<div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-3 py-1 mb-6">
  <SparkleIcon />
  <span className="text-white text-sm font-medium">Cofounder</span>
</div>
```

### Main Heading
```
font-mondwest text-white text-[clamp(2rem,5vw,4rem)] leading-[110%] tracking-[-0.02em] mb-6 max-w-[700px]
```
Text: `"Cofounder lets you automate your business with natural language"`

### Typewriter Demo
```jsx
<div className="font-af text-white text-[17px] mb-8">
  <span>Try: </span>
  <span className="text-white/80">{currentDemo}</span>
  <span className="animate-pulse">|</span>
</div>
```
Demo strings cycle through (each displays for ~3s then transitions):
- `"competitor research"`
- `"CRM enrichment"`
- `"market analysis"`
- `"lead generation"`
- `"email outreach"`

Implementation: `useEffect` with `setInterval` every 3000ms cycling through array index.

### Mock Notification Card
```jsx
<div className="inline-flex items-start gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 mb-8 max-w-[380px]">
  <img src="/images/icons/slack.png" alt="Slack" className="w-8 h-8 rounded" />
  <div>
    <p className="text-white font-medium text-sm">Cofounder</p>
    <p className="text-white/70 text-sm">Research complete. Found 12 competitors...</p>
  </div>
</div>
```

### "CRM enrichment" floating pill
```jsx
<div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 text-white text-sm mb-8">
  CRM enrichment
</div>
```

### CTA Button
```jsx
<a href="https://cofounder.co">
  <button className="inline-flex items-center gap-2 bg-[#1F1F29] border border-[#282834] rounded-lg text-white h-9 px-4 py-2 text-[15px] tracking-[-0.15px] font-medium hover:opacity-90 transition-opacity group">
    <div className="...arrow icon wrapper...">
      <ArrowIcon className="group-hover:animate-[slideOut_0.8s_linear_infinite]" />
    </div>
    Get Cofounder
  </button>
</a>
```

### Tagline
```
text-white/60 text-[15px] mt-6 font-af
```
Text: `"Everyone needs a Cofounder, not everyone has one."`

### Assets
- `/public/images/cofounder-bg.avif` — sunflower field background
- `/public/images/icons/slack.png` — pixel-art Slack icon
- `SparkleIcon`, `ArrowIcon`, `ChatIcon` from `@/components/icons`

---

## Component: `src/components/sections/WritingSection.tsx`

### Overview
3-column grid of article cards with a heading and "Read more articles" link. Static section (no interactivity).

### Section Container
```
bg-[#FEFFFC] w-full
Padding: py-20 lg:py-24 px-6 md:px-12 lg:px-24
```

### Header Row
```jsx
<div className="flex items-center justify-between mb-12 max-w-7xl mx-auto">
  <h2 className="font-mondwest text-[#2c2c2c] text-[clamp(1.5rem,3vw,2.5rem)] leading-[115%]">
    Our vision for the future of the world
  </h2>
  <a href="/writing" className="inline-flex items-center gap-2 text-[#2c2c2c] text-[15px] font-medium hover:opacity-80 group">
    Read more articles
    <ArrowIcon className="group-hover:animate-[slideOut_0.8s_linear_infinite]" />
  </a>
</div>
```

### Article Cards Grid
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
  {articles.map(article => <ArticleCard key={article.id} article={article} />)}
</div>
```

### Article Card: `src/components/ArticleCard.tsx`
```
rounded-2xl overflow-hidden border border-neutral-300 bg-white hover:shadow-md transition-shadow cursor-pointer
```

Structure:
```jsx
<a href={`/writing/${article.slug}`}>
  <div className="aspect-video w-full overflow-hidden">
    <img
      src={article.thumbnail}
      alt={article.title}
      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
    />
  </div>
  <div className="p-5">
    <span className="text-xs font-medium text-neutral-600 uppercase tracking-wide mb-2 block">
      {article.category}
    </span>
    <h3 className="font-mondwest text-[#2c2c2c] text-lg leading-[120%] mb-2">
      {article.title}
    </h3>
    <p className="text-neutral-600 text-sm">by {article.author}</p>
  </div>
</a>
```

### Article Data (3 cards on homepage)
```typescript
const homepageArticles = [
  {
    id: '1',
    title: 'An Update on Cofounder 1',
    category: 'Announcements',
    author: 'Andrew Pignanelli',
    slug: 'cofounder-1-sunset-blue',
    thumbnail: '/images/posts/cofounder-1-sunset-blue.png',
    date: '2025',
  },
  {
    id: '2',
    title: 'Agent-Native Engineering',
    category: 'Research',
    author: 'Andrew Pignanelli',
    slug: 'agent-native-engineering',
    thumbnail: '/images/posts/agent-native-engineering/agent-native-engineering.png',
    date: '2025',
  },
  {
    id: '3',
    title: 'Announcing Cofounder 1.5 and our $8.7 Million Seed Round',
    category: 'Announcements',
    author: 'Andrew Pignanelli',
    slug: 'cofounder-1-5-and-8-7-million-seed',
    thumbnail: '/images/posts/cofounder-1.5-and-8.7-million-seed.png',
    date: '2025',
  },
];
```
