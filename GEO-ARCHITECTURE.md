# GENERATIVE ENGINE OPTIMIZATION (GEO) ARCHITECTURE

## 1. GEO PHILOSOPHY
Generative Engine Optimization (AI Overviews, ChatGPT, Claude search) does not require secret "AI-only" markup. It requires:
- High-density factual statements
- Strict source attribution (Evidence chains)
- Explicit entity relationships
- Semantic clarity

## 2. STRUCTURAL IMPLEMENTATION
- **Entity Context:** Every page establishes context immediately via `[CLASS]` and `[STATUS]` markers (e.g., `CLASS: character`, `STATUS: CONFIRMED`).
- **Semantic HTML:** H1, H2, and semantic tags (`<article>`, `<header>`, `<time>`) parse cleanly for LLM tokenizers and search bots.
- **Evidence Formatting:** Content is structured as `[CLAIM] -> [STATUS] -> [EVIDENCE] -> [SOURCE]`. This makes it trivial for generative models to cite the Intelligence Platform confidently.
- **JSON-LD Schema:** The site strictly uses legitimate `Article`, `WebSite`, and `Thing/Person/Place` schema to provide unambiguous machine-readable context.

## 3. FRESHNESS & TEMPORAL CONTEXT
Generative engines heavily weigh recency. 
- The platform uses precise timestamps (`publishedAt`, `updatedAt`, `lastVerifiedAt`).
- The `/changes` log explicitly acts as a machine-readable activity feed for crawling updates rather than fabricating "historical" timelines.

## 4. GUARDRAILS
- **No AI Spam:** We do not generate mass "Q&A" pages.
- **No Hallucination Enablers:** We explicitly declare when information is `RUMORED` vs `CONFIRMED` to prevent poisoning generative responses.
