import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const PROJECT_ROOT = process.cwd();
const BRAIN_DIR = 'C:\\Users\\anima\\.gemini\\antigravity\\brain\\8983df6a-358c-45a5-b39e-2224ec958b18';
const TRANSCRIPT_FULL = path.join(BRAIN_DIR, '.system_generated', 'logs', 'transcript_full.jsonl');

const fileState = new Map();

function ensureDir(filePath) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

// 1. RECOVER FROM TRANSCRIPT (write_to_file & replace_file_content)
console.log('--- Phase 1: Transcript Recovery ---');
if (fs.existsSync(TRANSCRIPT_FULL)) {
  const lines = fs.readFileSync(TRANSCRIPT_FULL, 'utf-8').split('\n');
  
  for (const line of lines) {
    if (!line.trim()) continue;
    try {
      const step = JSON.parse(line);
      if (step.tool_calls) {
        for (const call of step.tool_calls) {
          if (call.name === 'default_api:write_to_file' || call.name === 'write_to_file') {
            const args = call.args;
            if (args.TargetFile && args.CodeContent) {
              fileState.set(args.TargetFile, args.CodeContent);
              console.log('Recovered from write_to_file:', args.TargetFile);
            }
          }
          if (call.name === 'default_api:replace_file_content' || call.name === 'replace_file_content') {
            const args = call.args;
            if (args.TargetFile && args.TargetContent && args.ReplacementContent) {
              let content = fileState.get(args.TargetFile);
              if (content) {
                // simple replace
                content = content.replace(args.TargetContent, args.ReplacementContent);
                fileState.set(args.TargetFile, content);
                console.log('Applied replace_file_content to:', args.TargetFile);
              }
            }
          }
        }
      }
    } catch (e) {
      console.log('Error parsing line');
    }
  }
} else {
  console.log("NO TRANSCRIPT FOUND AT", TRANSCRIPT_FULL);
}

let recoveredCount = 0;
// Write the transcript-recovered files
for (const [filePath, content] of fileState.entries()) {
  if (filePath.includes('gta6-intel')) {
    ensureDir(filePath);
    fs.writeFileSync(filePath, content, 'utf-8');
    recoveredCount++;
  }
}
console.log(`Recovered ${recoveredCount} files from transcript.`);

// 2. RECOVER FROM GIT DANGLING BLOBS
console.log('\n--- Phase 2: Git Blob Recovery ---');
const LOST_FOUND_DIR = path.join(PROJECT_ROOT, '.git', 'lost-found', 'other');
if (fs.existsSync(LOST_FOUND_DIR)) {
  const blobs = fs.readdirSync(LOST_FOUND_DIR);
  for (const blob of blobs) {
    const blobPath = path.join(LOST_FOUND_DIR, blob);
    try {
      const content = fs.readFileSync(blobPath, 'utf-8');
      
      // Identify package.json
      if (content.includes('"name":') && content.includes('"dependencies":') && content.includes('"next":') && content.includes('gta6-intel')) {
        const dest = path.join(PROJECT_ROOT, 'package.json');
        fs.writeFileSync(dest, content);
        console.log('Recovered package.json from blob', blob);
      }
      // Identify tsconfig.json
      else if (content.includes('"compilerOptions"') && content.includes('"jsx": "preserve"') && content.includes('plugins')) {
        const dest = path.join(PROJECT_ROOT, 'tsconfig.json');
        fs.writeFileSync(dest, content);
        console.log('Recovered tsconfig.json from blob', blob);
      }
      // Identify next.config.mjs
      else if (content.includes('/** @type {import(\'next\').NextConfig} */') || content.includes('output: \'export\'')) {
        const dest = path.join(PROJECT_ROOT, 'next.config.mjs');
        fs.writeFileSync(dest, content);
        console.log('Recovered next.config.mjs from blob', blob);
      }
      // Identify postcss.config.mjs
      else if (content.includes('tailwindcss:') && content.includes('plugins:') && !content.includes('content:')) {
        const dest = path.join(PROJECT_ROOT, 'postcss.config.mjs');
        fs.writeFileSync(dest, content);
        console.log('Recovered postcss.config.mjs from blob', blob);
      }
      // Identify .eslintrc.json
      else if (content.includes('"extends":') && content.includes('"next/core-web-vitals"')) {
        const dest = path.join(PROJECT_ROOT, '.eslintrc.json');
        fs.writeFileSync(dest, content);
        console.log('Recovered .eslintrc.json from blob', blob);
      }
      // Identify tailwind.config.ts
      else if (content.includes('tailwindcss') && content.includes('theme:') && content.includes('colors:')) {
        const dest = path.join(PROJECT_ROOT, 'tailwind.config.ts');
        if (!fs.existsSync(dest)) {
          fs.writeFileSync(dest, content);
          console.log('Recovered tailwind.config.ts from blob', blob);
        }
      }
    } catch(e) {}
  }
}

console.log('\nRecovery script complete.');
