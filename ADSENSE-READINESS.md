# ADSENSE READINESS STRATEGY

## CURRENT STATUS
**STATE A:** Not Yet Approved / Pending Review.
- `advertising.enabled = false`
- **Zero active ads.**
- No placeholder publisher IDs in codebase.

## PREREQUISITES FOR ACTIVATION (STATE B)
1. Formal approval from Google AdSense via the AdSense Dashboard.
2. Verified site ownership in Google Search Console.
3. Addition of a valid `ads.txt` file at the root.
4. Implementation of an IAB-approved Consent Management Platform (CMP) for EEA/UK/Swiss users (e.g., Google's GDPR message tool).

## POLICY REQUIREMENTS
- **Content:** Pages must have substantial, unique content.
- **Traffic:** Do not click own ads; do not use artificial traffic bots.
- **Navigation:** Ad placements must not mimic navigation or core site features.
- **Privacy:** A truthful privacy policy must be live (currently active at `/privacy`) disclosing third-party advertising cookies.

## AD PLACEMENT STRATEGY
When approved, ads will be carefully integrated to respect the "cinematic intelligence" aesthetic.

**Eligible Surfaces:**
- Substantial editorial articles (`/news/[slug]`)
- Detailed entity dossiers (Characters, Locations)
- The main Database directory (between major category sections)

**Restricted Surfaces (NO ADS):**
- Navigation menus / Headers / Footers
- The interactive Timeline
- The Interactive Map
- Error Pages (404, 500)
- Legal/Trust pages (`/privacy`, `/terms`, `/disclaimer`, `/contact`, `/dmca`, `/about`)

## IMPLEMENTATION ROADMAP
1. Await dashboard approval.
2. Add publisher ID to secure environment variables.
3. Create `src/components/monetization/AdSlot.tsx` that reads `advertising.enabled` config.
4. Integrate `AdSlot` conservatively on eligible pages.
5. Deploy and monitor Core Web Vitals to ensure ads do not degrade the Next.js static performance.
