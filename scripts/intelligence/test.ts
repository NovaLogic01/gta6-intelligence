import { determineRelevance } from './relevance';
import { classifyStatus } from './classify';
import { isDuplicate } from './deduplicate';
import { IntelligenceSource } from '../../src/intelligence/sources';
import { Article } from '../../src/types';
import assert from 'assert';

console.log('Running Intelligence Test Suite...\n');

// Mock Official Source
const officialSource: IntelligenceSource = {
  id: 'src-official', name: 'Rockstar', url: '', sourceType: 'OFFICIAL', priority: 1, enabled: true, parserType: 'CUSTOM_ROCKSTAR'
};

// Mock Reporting Source
const reportingSource: IntelligenceSource = {
  id: 'src-reporting', name: 'IGN', url: '', sourceType: 'REPORTING', priority: 2, enabled: true, parserType: 'RSS'
};

// 1. Relevance Filtering Tests
console.log('Testing Relevance Filtering...');
assert.strictEqual(determineRelevance('GTA VI Trailer 2 Announced', 'Coming soon'), 'RELEVANT', 'High signal should be RELEVANT');
assert.strictEqual(determineRelevance('Rockstar Games acquires new studio', 'The GTA franchise expands'), 'POSSIBLY_RELEVANT', 'Two medium signals should be POSSIBLY_RELEVANT');
assert.strictEqual(determineRelevance('Call of Duty Update', 'New weapons'), 'IRRELEVANT', 'No signals should be IRRELEVANT');
assert.strictEqual(determineRelevance('Rockstar releases new music track', 'Listen now'), 'IRRELEVANT', 'Single medium signal should be IRRELEVANT');
console.log('  ✓ Relevance Filtering passed\n');

// 2. Status Classification Tests
console.log('Testing Status Classification...');
assert.strictEqual(classifyStatus('GTA VI Trailer 2', officialSource), 'OFFICIALLY_SHOWN', 'Official trailer mentions are OFFICIALLY_SHOWN');
assert.strictEqual(classifyStatus('Take-Two Earnings Report', officialSource), 'CONFIRMED', 'Official other mentions are CONFIRMED');
assert.strictEqual(classifyStatus('Leak: Jason actor revealed', reportingSource), 'RUMOR', 'Reporting leak is RUMOR');
assert.strictEqual(classifyStatus('Could Vice City map be twice as large?', reportingSource), 'SPECULATION', 'Reporting theory is SPECULATION');
assert.strictEqual(classifyStatus('Bloomberg reports GTA 6 delayed', reportingSource), 'REPORTED', 'Standard reporting is REPORTED');
console.log('  ✓ Status Classification passed\n');

// 3. Duplicate Detection Tests
console.log('Testing Duplicate Detection...');
const existingArticles: Article[] = [
  {
    id: 'art-1', slug: 'gta-vi-trailer', title: 'GTA VI Trailer', summary: '', content: '',
    category: 'GENERAL', status: 'REPORTED', sourceId: 'src', sourceUrl: 'https://test.com/1',
    publishedAt: new Date().toISOString(), isSeedData: false
  }
];

const exactUrlMatch = { sourceUrl: 'https://test.com/1', title: 'Different Title', slug: 'diff', publishedAt: new Date().toISOString() };
const exactTitleMatch = { sourceUrl: 'https://test.com/2', title: 'GTA VI Trailer', slug: 'diff', publishedAt: new Date().toISOString() };
const noMatch = { sourceUrl: 'https://test.com/2', title: 'Different Title', slug: 'diff', publishedAt: new Date().toISOString() };

assert.strictEqual(isDuplicate(exactUrlMatch, existingArticles), true, 'Exact URL should be duplicate');
assert.strictEqual(isDuplicate(exactTitleMatch, existingArticles), true, 'Exact title should be duplicate');
assert.strictEqual(isDuplicate(noMatch, existingArticles), false, 'No match should be false');
console.log('  ✓ Duplicate Detection passed\n');

console.log('ALL TESTS PASSED.');
