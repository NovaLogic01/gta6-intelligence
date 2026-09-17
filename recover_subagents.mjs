import fs from 'fs';
import path from 'path';

const PROJECT_ROOT = process.cwd();
const BRAINS_DIR = 'C:\\Users\\anima\\.gemini\\antigravity\\brain';

const fileState = new Map();

function ensureDir(filePath) {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

console.log('--- Phase 1: Subagent Transcript Recovery ---');
const brains = fs.readdirSync(BRAINS_DIR);
let transcriptCount = 0;

for (const brain of brains) {
  const transcriptPath = path.join(BRAINS_DIR, brain, '.system_generated', 'logs', 'transcript_full.jsonl');
  if (fs.existsSync(transcriptPath)) {
    // Only process transcripts modified recently (within last 3 hours)
    const mtime = fs.statSync(transcriptPath).mtimeMs;
    if (Date.now() - mtime < 3 * 60 * 60 * 1000) {
      transcriptCount++;
      const lines = fs.readFileSync(transcriptPath, 'utf-8').split('\n');
      for (const line of lines) {
        if (!line.trim()) continue;
        try {
          const step = JSON.parse(line);
          if (step.tool_calls) {
            for (const call of step.tool_calls) {
              if (call.name === 'default_api:write_to_file' || call.name === 'write_to_file') {
                const args = call.args;
                if (args.TargetFile && args.CodeContent && args.TargetFile.includes('gta6-intel')) {
                  fileState.set(args.TargetFile, args.CodeContent);
                  console.log('Recovered:', args.TargetFile);
                }
              }
              if (call.name === 'default_api:replace_file_content' || call.name === 'replace_file_content') {
                const args = call.args;
                if (args.TargetFile && args.TargetContent && args.ReplacementContent && args.TargetFile.includes('gta6-intel')) {
                  let content = fileState.get(args.TargetFile);
                  if (content) {
                    content = content.replace(args.TargetContent, args.ReplacementContent);
                    fileState.set(args.TargetFile, content);
                  }
                }
              }
            }
          }
        } catch (e) {}
      }
    }
  }
}

let recoveredCount = 0;
for (const [filePath, content] of fileState.entries()) {
  ensureDir(filePath);
  fs.writeFileSync(filePath, content, 'utf-8');
  recoveredCount++;
}
console.log(`Processed ${transcriptCount} recent transcripts. Recovered ${recoveredCount} files.`);
