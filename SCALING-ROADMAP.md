# SCALING ROADMAP

## CURRENT ARCHITECTURE (PHASE 1)
**Stack:** Next.js (Static Export) + GitHub Actions + Netlify Global CDN.
**Capacity:** Highly scalable. Since the application serves purely static HTML/CSS/JS and JSON payload chunks, it can easily handle massive traffic spikes (e.g., during a GTA VI Trailer drop) without backend server crashes.

## METRICS FOR SCALING
We will not pre-optimize or purchase expensive infrastructure before it is economically justified. Scaling decisions will be triggered by actual measured usage based on privacy-conscious analytics and Netlify bandwidth reports.

### Threshold 1: Bandwidth Exceeds Free/Pro Limits
*Trigger:* 100GB+ monthly bandwidth on Netlify.
*Action:* 
- Evaluate image optimization. Ensure all heavy assets (like the interactive map or high-res trailer stills) are heavily compressed or offloaded to a dedicated cheaper image CDN (e.g., Cloudflare R2 or BunnyCDN).
- If HTML/JS bandwidth remains high, consider upgrading the Netlify plan or shifting the static export to Cloudflare Pages (which offers unmetered static bandwidth).

### Threshold 2: Build Time Degradation
*Trigger:* As the intelligence database grows, Next.js static generation (`npm run build`) takes > 10 minutes in GitHub Actions.
*Action:*
- Implement incremental builds if a migration to Next.js SSR/ISR becomes necessary.
- **IMPORTANT:** Do NOT abandon the static model unless absolutely required. We will first optimize data parsing and component rendering.

### Threshold 3: Interactive Map Complexity
*Trigger:* The Leaflet map component lags on mobile devices due to too many marker nodes.
*Action:*
- Implement marker clustering and vector tiles.
- Lazy load map tiles only when the user scrolls the map into view.

## INFRASTRUCTURE MIGRATION (IF REQUIRED LATER)
We explicitly reject migrating to Vercel, Supabase, or AWS right now. 
If true dynamic functionality (user accounts, real-time community intelligence submissions) is approved in the future, we will transition to an API route-backed architecture. Until then, static CDN distribution is the most resilient, cost-effective, and performant method for this intelligence platform.
