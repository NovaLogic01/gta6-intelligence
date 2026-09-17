# GTA VI Intel — The Intelligence Layer

A continuously organized intelligence platform for GTA VI — tracking official announcements, reported developments, characters, locations, gameplay, and more.

## Development

```bash
npm run dev
```

## Production Build

```bash
npm run build
```

The static output will be in the `out/` directory.

## Deployment

This project is configured for **Netlify Free** deployment via static export.

```bash
# Preview production build locally
npx serve out
```

## Architecture

- **Framework**: Next.js 14 (App Router, Static Export)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Data**: Structured local TypeScript files
- **Hosting**: Netlify Free (static)

## Project Structure

```
src/
├── app/          # Next.js App Router pages
├── components/   # Reusable React components
├── data/         # Structured data files
├── lib/          # Utilities, config, search
└── types/        # TypeScript type definitions
```

## Status

Session 1 — Foundation. Live data pipeline, RSS automation, and monetization connect in future sessions.

---

*GTA VI Intel is an independent fan-operated information project. Not affiliated with Rockstar Games or Take-Two Interactive.*
