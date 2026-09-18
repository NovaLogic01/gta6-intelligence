# Automated Netlify CI/CD Pipeline

This project uses a fully automated CI/CD pipeline built on GitHub Actions and the Netlify CLI, bypassing the interactive Netlify GitHub App.

## Architecture & Integration
Netlify native GitHub continuous deployment typically requires manual browser authorization via the Netlify GitHub App. To ensure a fully automated and headless CI/CD bridge, we rely on GitHub Actions:
- **Intelligence Ingestion:** A scheduled workflow (`.github/workflows/intelligence.yml`) runs data ingestion, validation, and commits any data updates to `master`. 
- **Continuous Deployment:** A deployment workflow (`.github/workflows/netlify-deploy.yml`) is triggered via `push` (for normal code pushes) and `workflow_run` (to run upon completion of the intelligence workflow).

### Trigger Flow
1. Intelligence Workflow runs -> validates -> builds -> pushes to `master`.
2. Netlify Deployment workflow runs (due to the `workflow_run` event listening for the intelligence workflow).
3. The deployment workflow checks out `master`, builds `out/`, and uses `npx netlify-cli deploy --prod` with stored secrets to push to the existing Netlify site.

## Configuration Details
- **Build Command:** `npm run build`
- **Publish Directory:** `out`
- **Netlify Site:** `remarkable-gumption-725330`

## Required Secrets
The deployment workflow authenticates with Netlify via repository secrets injected at runtime:
- `NETLIFY_AUTH_TOKEN`: The authorized CLI token.
- `NETLIFY_SITE_ID`: The static UUID corresponding to the target Netlify site.
*(These are stored securely in GitHub Secrets and are never logged or exported).*

## Security Model
- Netlify credentials exist ONLY within GitHub Secrets and are not checked into source control or exposed in logs.
- The `netlify-deploy.yml` workflow requires minimal permissions (`contents: read`). It cannot push back to the repository.
- The `intelligence.yml` workflow requires `contents: write` to update the data files but does not handle Netlify API keys.

## Failure Behavior
If the Netlify deployment fails (e.g., a `422 JSONHTTPError`), the GitHub Action will fail and surface the CLI error in its logs, halting the deployment of that particular build artifact. The site's current live version will remain unaffected, and no new Netlify site will be initialized.
