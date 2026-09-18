# DISASTER RECOVERY & RESILIENCE ARCHITECTURE

## ARCHITECTURAL OVERVIEW
The GTA VI Intelligence Platform is a 100% statically generated Next.js application. It does not rely on a runtime database (like PostgreSQL, MongoDB, or Firebase) to serve content to users.

- **Primary Source of Truth:** GitHub Repository (`master` branch).
- **Data Layer:** Structured JSON/TypeScript data inside `src/data/` stored directly in version control.
- **Build System:** GitHub Actions (`npm run build`).
- **Deployment Artifact:** Static `/out` directory.
- **Production Host:** Netlify.

## FAILOVER CONCEPT
Because the entire application and its data are contained in the Git repository, the platform is highly resilient. If Netlify experiences a catastrophic failure or the account is lost, the site can be redeployed to *any* static hosting provider (Vercel, AWS S3, Cloudflare Pages, GitHub Pages) in under 5 minutes.

## DISASTER RECOVERY PROCEDURE
**Scenario 1: Netlify Outage**
1. Connect the GitHub repository to Cloudflare Pages or Vercel.
2. Set build command: `npm run build`
3. Set output directory: `out/`
4. Update DNS records to point to the new host.
5. Service restored.

**Scenario 2: Data Corruption / Bad Commit**
1. Identify the last known good commit: `git log`
2. Revert the bad commit: `git revert <commit-hash>`
3. Push to `master`. GitHub Actions will automatically rebuild and Netlify will redeploy the static artifact.

**Scenario 3: Repository Loss**
1. Clone from local backup.
2. Push to a new GitHub repository.
3. Reconnect hosting to the new repository.

## DATA INTEGRITY VALIDATION
The intelligence data inside `src/data/` acts as our database. To prevent data corruption from taking down the site, the CI pipeline enforces strict checks before any deployment:
1. `npm run intelligence:validate` - Ensures all entities have required fields and valid status enums.
2. `npm run intelligence:test` - Runs test suites verifying relationship integrity.

## SECRETS MANAGEMENT
- **NO** API tokens, Netlify credentials, or analytics IDs are stored in the codebase.
- All secrets are managed via GitHub Actions Secrets (`NETLIFY_AUTH_TOKEN`, `NETLIFY_SITE_ID`).
