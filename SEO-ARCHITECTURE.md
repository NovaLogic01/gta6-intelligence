# SEO ARCHITECTURE

## 1. CANONICAL SYSTEM
- **Centralized Config:** All URLs derive from `src/config/site.ts` which uses the production Netlify URL (`https://remarkable-gumption-725330.netlify.app`).
- **Dynamic Routing:** All dynamic routes (articles, entities) enforce a strict trailing-slash policy and specify canonical tags reflecting their final URL.
- **Deduplication:** Filter states and dynamic views (like `/search`) are `noindex` or canonicalized to the main route to avoid duplicate content penalties.

## 2. METADATA ENGINE
- **Titles:** Structured uniquely (e.g., `[Entity Name] — Characters | GTA VI Intelligence Platform`).
- **Descriptions:** Directly mapped from the intelligence graph summaries without generic filler.
- **Open Graph / Twitter Cards:** Defined in `src/app/layout.tsx` and dynamically overridden in page modules to ensure accurate social sharing.

## 3. INTERNAL LINKING & TOPIC CLUSTERS
- The Knowledge Graph (`src/lib/graph.ts`) automatically builds contextual links.
- Articles link to referenced Entities. Entities link to related Timeline events, Vehicles, and Activities, creating natural topical clusters around "GTA VI Map", "GTA VI Characters", etc.

## 4. TECHNICAL INFRASTRUCTURE
- **Sitemap:** Dynamically generated via `sitemap.ts` fetching all published graph nodes.
- **Robots.txt:** Generated via `robots.ts`, explicitly allowing `*` but disallowing utility routes like `/share/` to prevent bloat.
- **Performance:** Next.js Static Export ensures maximum Core Web Vitals performance with zero DB latency at runtime.
