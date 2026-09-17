# GTA VI Intelligence Platform — Session 2 Handoff Document

This document outlines the **current real implementation** of the GTA VI Intelligence Platform frontend as of the completion of Session 1. It serves as the baseline for integrating automated intelligence processing (Session 2).

---

## 1. Current Architecture Overview

**A. Framework and version:**
Next.js 14 (App Router) with React 18 and Tailwind CSS.

**B. Node version requirement:**
Node.js 18.x or later.

**C. Build command:**
`npm run build`

**D. Production output directory:**
`out/`

**E. Netlify configuration:**
Configured for pure static hosting on Netlify Free. `next.config.mjs` has `output: 'export'` enabled. `netlify.toml` points to `publish = "out"`.

**F. Exact routing architecture:**
All routes are statically generated at build time.
- Static Routes: `/`, `/news`, `/database`, `/database/{characters|locations|vehicles|features}`, `/timeline`, `/map`, `/trailers`, `/search`, `/about`, `/sources`, `/editorial-policy`, `/corrections`, `/contact`, `/privacy`, `/terms`.
- Dynamic Routes: `/news/[slug]` and `/database/[category]/[slug]` use `generateStaticParams` to build paths during compilation.

**G. Exact data directory/file structure:**
Data is currently stored as exported TypeScript arrays in `src/data/`:
- `src/data/articles.ts`
- `src/data/sources.ts`
- `src/data/characters.ts`
- `src/data/locations.ts`
- `src/data/vehicles.ts`
- `src/data/features.ts`
- `src/data/trailers.ts`
- `src/data/timeline.ts`
- `src/data/categories.ts`

**H. Exact TypeScript interfaces/types:**
(See Section 2: Data Contract)

**I. How articles are currently represented:**
Exported as `export const articles: Article[] = [...]` in `src/data/articles.ts`. They are fully statically defined objects.

**J. How sources are currently represented:**
Exported as `export const sources: Source[] = [...]` in `src/data/sources.ts`. Includes a helper function `getSourceById`.

**K. How status classifications are represented:**
As a strict TypeScript string literal union type: `'CONFIRMED' | 'OFFICIALLY_SHOWN' | 'REPORTED' | 'RUMOR' | 'SPECULATION'`.

**L. How entity records are represented:**
Exported as typed arrays (e.g., `Character[]`, `Location[]`) in their respective data files.

**M. How the homepage consumes data:**
Directly imports the `articles`, `categories`, and `timelineEvents` arrays. It sorts them by date and slices the top X records to render the Latest Signal and Recent Developments sections statically.

**N. How the news page consumes data:**
Imports `articles` array. Renders them using client-side React state (`useState`, `useMemo`) for instant filtering by category and status.

**O. How search consumes data:**
Client-side component calling a local `search()` function (from `src/lib/search.ts`) that maps over all static data arrays and performs basic text-matching and relevance scoring in the browser.

**P. How timeline consumes data:**
Directly imports `timelineEvents`, sorts them chronologically descending, and maps them to a vertical timeline UI.

**Q. How entity pages consume data:**
Listing pages (e.g., `/database/characters`) import the full array and use client-side filtering. Detail pages (`/database/characters/[slug]`) import the array, find the matching object via the slug parameter, and render statically.

**R. Current static-generation process:**
When `npm run build` is called, Next.js executes `generateStaticParams()` on all `[slug]` pages. It reads the local `.ts` data arrays, generates a list of slugs, and pre-renders an HTML file for every single article, character, location, etc.

**S. Files Session 2 should modify:**
Session 2's automated intelligence processing should focus entirely on programmatically rewriting or modifying the files inside `src/data/*.ts`.

**T. Files Session 2 should NOT modify unless necessary:**
Do not modify UI components (`src/components/`), layouts (`src/app/layout.tsx`), stylesheets (`src/app/globals.css`), configuration files (`netlify.toml`, `next.config.mjs`), or the base types (`src/types/index.ts`) unless absolute structural compatibility requires it.

---

## 2. Data Contract

Session 2 scripts must adhere strictly to these existing TypeScript schemas. Do not invent new schemas; map scraped data into these interfaces.

```typescript
export type Status = 'CONFIRMED' | 'OFFICIALLY_SHOWN' | 'REPORTED' | 'RUMOR' | 'SPECULATION'
export type SourceType = 'OFFICIAL' | 'NEWS' | 'REPORTING' | 'COMMUNITY'
export type EntityType = 'character' | 'location' | 'vehicle' | 'feature' | 'gameplay' | 'trailer' | 'wildlife' | 'activity'
export type ArticleCategory = 'RELEASE' | 'MAP' | 'GAMEPLAY' | 'CHARACTERS' | 'VEHICLES' | 'FEATURES' | 'TRAILERS' | 'STORY' | 'MULTIPLAYER' | 'OFFICIAL' | 'GENERAL'

export interface Source {
  id: string
  name: string
  url: string
  type: SourceType
  priority: number // 1 = highest (official), 5 = lowest
}

export interface Article {
  id: string
  slug: string
  title: string
  summary: string
  content: string // Supports paragraphs split by \n\n
  category: ArticleCategory
  status: Status
  sourceId: string
  sourceUrl?: string
  publishedAt: string // ISO date
  updatedAt?: string // ISO date
  isSeedData: boolean // MUST BE SET TO false FOR LIVE DATA
  relatedEntityIds?: string[]
  relatedArticleIds?: string[]
  tags?: string[]
}

export interface BaseEntity {
  id: string
  slug: string
  name: string
  description: string
  status: Status
  category: EntityType
  knownInformation: string[]
  sourceIds: string[]
  relatedEntityIds?: string[]
  relatedArticleIds?: string[]
  lastUpdated: string // ISO date
  isSeedData: boolean
  imageDescription?: string
}

export interface Character extends BaseEntity { category: 'character', role?: string, voiceActor?: string, firstAppearance?: string }
export interface Location extends BaseEntity { category: 'location', locationType?: string, region?: string, coordinates?: { lat: number; lng: number } }
export interface Vehicle extends BaseEntity { category: 'vehicle', vehicleType?: string, manufacturer?: string, realWorldInspiration?: string }
export interface Feature extends BaseEntity { category: 'feature', featureType?: string }

export interface Trailer {
  id: string
  slug: string
  title: string
  description: string
  status: Status
  releaseDate: string // ISO date
  officialUrl?: string
  embedId?: string // YouTube video ID
  duration?: string
  sourceId: string
  relatedEntityIds?: string[]
  relatedArticleIds?: string[]
  isSeedData: boolean
  keyDetails?: string[]
}

export interface TimelineEvent {
  id: string
  date: string // ISO date
  title: string
  description: string
  category: ArticleCategory
  status: Status
  sourceId: string
  sourceUrl?: string
  relatedArticleIds?: string[]
  relatedEntityIds?: string[]
  isSeedData: boolean
}
```

---

## 3. Future Intelligence Pipeline

Session 2 will introduce an automated ingestion architecture that flows exactly as follows:

1. **SOURCE**: External endpoints are identified.
2. **FETCH**: Scripts download RSS or official source updates.
3. **PARSE**: Raw data is stripped of irrelevant markup.
4. **NORMALIZE**: Data is mapped to the internal `Article`, `TimelineEvent`, or `BaseEntity` schemas.
5. **RELEVANCE FILTER**: Non-GTA VI gaming news is discarded.
6. **DUPLICATE DETECTION**: New intelligence is checked against existing `src/data/*.ts` entries to prevent duplicate stories.
7. **SOURCE IDENTIFICATION**: The origin is mapped to an internal `Source` ID.
8. **STATUS CLASSIFICATION**: Content is strictly classified (`CONFIRMED`, `REPORTED`, `RUMOR`, etc.). *Crucially, RSS content is NEVER assumed to be automatically factual.*
9. **STRUCTURED DATA UPDATE**: Scripts programmatically rewrite the `src/data/*.ts` arrays.
10. **GIT COMMIT**: The changes are committed to the repository via an automated script.
11. **NETLIFY BUILD**: The commit triggers Netlify to run `npm run build`.
12. **UPDATED STATIC WEBSITE**: The new static HTML goes live globally.

---

## 4. Primary vs Secondary Sources

- **Primary Sources**: Official Rockstar Games Newswire, Take-Two Interactive investor reports, official YouTube channels. These generate `CONFIRMED` or `OFFICIALLY_SHOWN` status.
- **Secondary Sources**: Established, verified gaming publications (e.g., Bloomberg, IGN, Kotaku). These generate `REPORTED` status.
- **Community Sources**: Social media, reddit, standard influencers. These generate `RUMOR` or `SPECULATION` status and must *never* be treated as confirmed information.

*Note: Do not invent fake RSS endpoints. If a source lacks an RSS feed, rely on alternative legitimate programmatic ingestion methods (like REST APIs or scraping scripts) rather than fabricating nonexistent endpoints.*

---

## 5. Static-Site Constraint

The production website is **statically generated** and hosted on Netlify.
The future automated intelligence system must therefore act as a build-time step. It needs to generate/update the static `.ts` data files locally and trigger a new deployment to push updates.

**Important:**
- The client browser does NOT continuously scrape RSS feeds. All data is baked into the HTML/JS.
- DO NOT put secret credentials, API keys, or database passwords into client-side code. They must only exist in the environment of the ingestion scripts.

---

## 6. Session 2 Safety Rails

When developing the automated ingestion system, the following rules are absolute:

- **Never fabricate GTA VI news.**
- **Never invent sources.**
- **Never convert rumors into facts.**
- **Never silently rewrite conflicting reports as confirmed information.**
- **Preserve source URLs.**
- **Preserve original publication timestamps where available.**
- **Track update timestamps separately.**
- **Deduplicate repeated stories.**
- **Avoid publishing irrelevant gaming news** merely because it came from a gaming feed.
- **Avoid publishing low-quality SEO filler.**
- **Never claim "live" or "real-time"** unless the system actually provides that behavior via webhooks/websockets.
- **Do not rehost copyrighted trailers.** (Always embed via YouTube).
- **Do not mass-download copyrighted imagery.**
- **Do not expose API keys.**
- **Do not add Firebase, Supabase, Vercel, or paid APIs.**
