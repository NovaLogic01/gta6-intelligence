# Session 2: Automated Intelligence Engine

## Architecture Overview
The GTA VI Intelligence Platform uses a deterministic, zero-cost static ingestion architecture to discover and publish new information without requiring real-time APIs, client-side polling, or paid backend databases.

### The Pipeline
1. **Source Discovery**: Registered sources are defined in `src/intelligence/sources.ts`.
2. **Fetch**: A Node script fetches standard RSS feeds (e.g., Gamer Guides) using timeouts and error handling. 
3. **Parse & Normalize**: Feed items are parsed using `rss-parser` and mapped to our internal `Article` schema.
4. **Relevance Engine**: Items are evaluated against `highSignals` and `mediumSignals` to discard irrelevant generic gaming news.
5. **Deduplication**: Newly parsed items are compared against `src/data/articles.ts` by canonical URL, title similarity, and timing.
6. **Classification**: Status is inferred depending on source authority (`OFFICIAL` sources get `CONFIRMED` or `OFFICIALLY_SHOWN`, standard `REPORTING` gets `REPORTED`, `RUMOR`, or `SPECULATION` based on wording).
7. **Atomic Write**: A merged array is validated and safely written via a temporary file exchange to `src/data/articles.ts`.
8. **Git Commit & Netlify**: A GitHub Action periodically runs this script, committing only valid changes, which triggers the Netlify static export build.

## Commands
- `npm run intelligence:fetch`: Runs the live fetch engine, updates local data, and writes the log.
- `npm run intelligence:dry-run`: Fetches and processes data but outputs actions to the console without mutating any files.
- `npm run intelligence:validate`: Performs a strict schema check on `src/data/articles.ts`.
- `npm run intelligence:test`: Runs the internal test suite verifying classification, relevance, and deduping logic.

## GitHub Actions Workflow
The workflow is located at `.github/workflows/intelligence.yml`. 
- **Schedule**: It runs periodically using `cron: '17 */6 * * *'` (every 6 hours at 17 minutes past the hour). 
- **Trigger**: Can be triggered manually via `workflow_dispatch`.
- **Git Safety**: It runs a `git diff --exit-code` and only pushes if data actually changed, keeping the repository clean of empty commits.

## Source Strategy
Sources are declared in `src/intelligence/sources.ts`. 

To add a new source:
1. Append a new object to the `sources` array.
2. Specify the `sourceType` (`OFFICIAL`, `NEWS`, `REPORTING`, `COMMUNITY`).
3. Set `enabled: true`.
4. Define `parserType: 'RSS'` (Custom parsers for Rockstar Newswire can be implemented here later).

*Note: Fake endpoints should never be added. Ensure the URL returns a legitimate machine-readable payload before pushing.*

## Failure & Idempotency Behavior
- **Idempotency**: The script checks `sourceUrl`, exact titles, and slugs before inserting. Running `fetch` twice on unchanged feeds results in 0 inserts and 0 git changes.
- **Failures**: If one source goes down, the pipeline isolates the exception, continues fetching remaining sources, and finishes gracefully. Corrupted atomic writes are prevented by a validation step running prior to final disk sync.
