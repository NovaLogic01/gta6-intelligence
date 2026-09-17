import { Status } from '../../src/types';
import { IntelligenceSource } from '../../src/intelligence/sources';

export function classifyStatus(title: string, source: IntelligenceSource): Status {
  const text = title.toLowerCase();

  // Official sources are always CONFIRMED or OFFICIALLY_SHOWN
  if (source.sourceType === 'OFFICIAL') {
    if (text.includes('trailer') || text.includes('screenshot') || text.includes('look')) {
      return 'OFFICIALLY_SHOWN';
    }
    return 'CONFIRMED';
  }

  // Secondary reporting
  if (source.sourceType === 'REPORTING' || source.sourceType === 'NEWS') {
    if (text.includes('rumor') || text.includes('leak') || text.includes('unverified')) {
      return 'RUMOR';
    }
    if (text.includes('theory') || text.includes('could') || text.includes('might') || text.includes('speculation')) {
      return 'SPECULATION';
    }
    // Generally reported as factual by a credible outlet
    return 'REPORTED';
  }

  // Community sources
  if (text.includes('theory') || text.includes('think')) {
    return 'SPECULATION';
  }
  return 'RUMOR';
}
