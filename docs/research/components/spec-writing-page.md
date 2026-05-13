# Spec: Writing Page (`/writing`)

## Route file: `src/app/writing/page.tsx`

---

## Section 1: FeaturedArticle

```
bg-[#FEFFFC] w-full
Padding: pt-32 pb-16 px-6 md:px-12 lg:px-24 (top padding accounts for fixed nav)
```

### Structure
```jsx
<section className="bg-[#FEFFFC] pt-32 pb-16 px-6 md:px-12 lg:px-24">
  <div className="max-w-5xl mx-auto">
    {/* Quill / pen icon above the image */}
    <div className="flex justify-center mb-6">
      {/* pixel-art quill icon — use a simple SVG or emoji pen */}
      <span className="text-4xl">✍️</span>
    </div>
    
    {/* Featured article card */}
    <div className="relative rounded-3xl overflow-hidden bg-blue-50 min-h-[400px]">
      <img
        src="/images/posts/cofounder-1-sunset-blue.png"
        alt="Featured article"
        className="w-full h-[400px] lg:h-[500px] object-cover"
      />
      {/* Overlay with article info */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      <div className="absolute bottom-8 left-8 right-8">
        <span className="text-white/70 text-sm uppercase tracking-wide mb-2 block">Announcements</span>
        <h1 className="font-mondwest text-white text-[clamp(1.5rem,4vw,3rem)] leading-[115%] mb-4 max-w-2xl">
          An Update on Cofounder 1
        </h1>
        <p className="text-white/70 text-sm mb-6">by Andrew Pignanelli</p>
        <a href="/writing/cofounder-1-sunset-blue"
           className="inline-flex items-center gap-2 bg-white text-[#2c2c2c] rounded-lg px-5 py-2.5 text-[15px] font-medium hover:bg-neutral-100 transition-colors group">
          Read article →
          <ArrowIcon className="group-hover:animate-[slideOut_0.8s_linear_infinite]" />
        </a>
      </div>
    </div>
  </div>
</section>
```

---

## Section 2: ArticleGrid with Filter Tabs

```
bg-white border-t border-neutral-300 + bg-[#FEFFFC]
Padding: py-16 px-6 md:px-12 lg:px-24
```

### Filter Tabs (click-driven)
```jsx
<div className="flex gap-3 mb-8 flex-wrap">
  {(['All', 'Announcements', 'Optimization', 'Research'] as const).map(cat => (
    <button
      key={cat}
      onClick={() => setActiveFilter(cat)}
      className={cn(
        "px-4 py-1.5 rounded-full text-[14px] font-medium border transition-all",
        activeFilter === cat
          ? "bg-[#2c2c2c] text-white border-[#2c2c2c]"
          : "bg-white text-[#646464] border-neutral-300 hover:border-neutral-600"
      )}
    >
      {cat} {cat === 'All' ? 8 : cat === 'Announcements' ? 2 : 3}
    </button>
  ))}
</div>
```

**INTERACTION MODEL: Click-driven.** Clicking a tab filters visible cards. Default: "All" shows all 8.

### Article Grid
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
  {filteredArticles.map(article => <ArticleCard key={article.id} article={article} />)}
</div>
```

### All 8 Articles Data
```typescript
const allArticles: Article[] = [
  // Announcements (2)
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
    id: '3',
    title: 'Announcing Cofounder 1.5 and our $8.7 Million Seed Round',
    category: 'Announcements',
    author: 'Andrew Pignanelli',
    slug: 'cofounder-1-5-and-8-7-million-seed',
    thumbnail: '/images/posts/cofounder-1.5-and-8.7-million-seed.png',
    date: '2025',
  },
  // Research (3)
  {
    id: '2',
    title: 'Agent-Native Engineering',
    category: 'Research',
    author: 'Andrew Pignanelli',
    slug: 'agent-native-engineering',
    thumbnail: '/images/posts/agent-native-engineering/agent-native-engineering.png',
    date: '2025',
  },
  // Optimization (3) — use placeholder thumbnails for missing images
  {
    id: '4',
    title: 'How We Cut Latency by 10x',
    category: 'Optimization',
    author: 'Andrew Pignanelli',
    slug: 'cut-latency-10x',
    thumbnail: '/images/posts/cofounder-1-sunset-blue.png',
    date: '2025',
  },
  {
    id: '5',
    title: 'Building Reliable Agent Pipelines',
    category: 'Optimization',
    author: 'Andrew Pignanelli',
    slug: 'reliable-agent-pipelines',
    thumbnail: '/images/posts/agent-native-engineering/agent-native-engineering.png',
    date: '2025',
  },
  {
    id: '6',
    title: 'The Art of Prompt Engineering',
    category: 'Optimization',
    author: 'Andrew Pignanelli',
    slug: 'prompt-engineering',
    thumbnail: '/images/posts/cofounder-1.5-and-8.7-million-seed.png',
    date: '2025',
  },
  {
    id: '7',
    title: 'Lessons from Shipping Cofounder',
    category: 'Research',
    author: 'Andrew Pignanelli',
    slug: 'lessons-shipping-cofounder',
    thumbnail: '/images/posts/cofounder-1-sunset-blue.png',
    date: '2025',
  },
  {
    id: '8',
    title: 'What We Learned About Multi-Agent Systems',
    category: 'Research',
    author: 'Andrew Pignanelli',
    slug: 'multi-agent-systems',
    thumbnail: '/images/posts/agent-native-engineering/agent-native-engineering.png',
    date: '2025',
  },
];
```

**Note**: Only 3 article images were downloaded. Use the 3 available images cycling for the 5 missing articles.

### Filter Logic
```typescript
const filteredArticles = activeFilter === 'All'
  ? allArticles
  : allArticles.filter(a => a.category === activeFilter);
```

---

## Page Assembly (`src/app/writing/page.tsx`)
`"use client"` — filter tabs need state

```tsx
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import FixedBottomImage from '@/components/FixedBottomImage';
// FeaturedArticle and ArticleGrid sections inline or as components
```
