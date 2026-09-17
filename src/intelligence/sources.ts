export type SourceType = 'OFFICIAL' | 'NEWS' | 'REPORTING' | 'COMMUNITY';
export type ParserType = 'RSS' | 'ATOM' | 'CUSTOM_ROCKSTAR';

export interface IntelligenceSource {
  id: string;
  name: string;
  url: string;
  feedUrl?: string;
  sourceType: SourceType;
  priority: number; // 1 = highest, 5 = lowest
  enabled: boolean;
  parserType: ParserType;
}

export const sources: IntelligenceSource[] = [
  {
    id: 'src-rockstar-newswire',
    name: 'Rockstar Games Newswire',
    url: 'https://www.rockstargames.com/newswire',
    sourceType: 'OFFICIAL',
    priority: 1,
    enabled: true,
    parserType: 'CUSTOM_ROCKSTAR',
  },
  {
    id: 'src-gamer-guides',
    name: 'Gamer Guides',
    url: 'https://www.gamerguides.com/grand-theft-auto-vi',
    feedUrl: 'https://www.gamerguides.com/grand-theft-auto-vi/feed',
    sourceType: 'REPORTING',
    priority: 2,
    enabled: true,
    parserType: 'RSS',
  },
];
