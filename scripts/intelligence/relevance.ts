export type RelevanceScore = 'RELEVANT' | 'POSSIBLY_RELEVANT' | 'IRRELEVANT';

export function determineRelevance(title: string, summary: string): RelevanceScore {
  const text = `${title} ${summary}`.toLowerCase();
  
  const highSignals = [
    'gta vi', 'gta 6', 'grand theft auto vi', 'grand theft auto 6',
    'lucia', 'jason', 'leonida', 'vice city', 'gtavi', 'gta6'
  ];
  
  const mediumSignals = [
    'rockstar games', 'rockstar', 'gta franchise', 'grand theft auto'
  ];

  let hasHigh = false;
  let mediumCount = 0;

  for (const signal of highSignals) {
    if (text.includes(signal)) {
      hasHigh = true;
      break;
    }
  }

  for (const signal of mediumSignals) {
    if (text.includes(signal)) {
      mediumCount++;
    }
  }

  // Pure GTA VI mentions are relevant
  if (hasHigh) return 'RELEVANT';
  
  // Generic Rockstar/GTA mentions might be GTA Online or RDR, need multiple signals
  if (mediumCount >= 2) return 'POSSIBLY_RELEVANT';
  
  return 'IRRELEVANT';
}
