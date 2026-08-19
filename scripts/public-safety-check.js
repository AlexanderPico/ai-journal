const fs = require('node:fs');
const path = require('node:path');
const { execFileSync } = require('node:child_process');

const root = path.resolve(__dirname, '..');
const tracked = execFileSync('git', ['ls-files', '-z'], { cwd: root, encoding: 'utf8' })
  .split('\0')
  .filter(Boolean);

const checks = [
  ['macOS home path', /\/Users\/[A-Za-z0-9._-]+\//g],
  ['Linux home path', /\/home\/[A-Za-z0-9._-]+\//g],
  ['Windows home path', /[A-Za-z]:\\Users\\[^\\\s]+/g],
  ['home-relative path', /(^|[\s`"'(])~\/[A-Za-z0-9._-]/gm],
  ['Hermes-style session identifier', /\b\d{8}_\d{6}_[a-f0-9]{6,}\b/gi],
  ['email address', /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/gi],
  ['private key header', /-----BEGIN [A-Z ]*PRIVATE KEY-----/g],
  ['GitHub token', /\bgh[pousr]_[A-Za-z0-9]{20,}\b/g],
  ['OpenAI-style secret', /\bsk-[A-Za-z0-9_-]{20,}\b/g],
  ['AWS access key', /\bAKIA[0-9A-Z]{16}\b/g],
  ['Google API key', /\bAIza[0-9A-Za-z_-]{30,}\b/g],
  ['IPv4 address', /\b(?:\d{1,3}\.){3}\d{1,3}\b/g],
  ['private commit reference', /\bcommits?\s+[0-9a-f]{7,40}\b/gi]
];

const findings = [];
for (const relative of tracked) {
  const absolute = path.join(root, relative);
  const buffer = fs.readFileSync(absolute);
  if (buffer.includes(0)) continue;
  const text = buffer.toString('utf8');
  for (const [label, pattern] of checks) {
    pattern.lastIndex = 0;
    for (const match of text.matchAll(pattern)) {
      const line = text.slice(0, match.index).split('\n').length;
      findings.push(`${relative}:${line}: ${label}`);
    }
  }
}

const timeline = fs.readFileSync(path.join(root, 'timeline-data.js'), 'utf8');
if (/\bevidence\s*:/.test(timeline)) findings.push('timeline-data.js: public evidence field');

const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const app = fs.readFileSync(path.join(root, 'app.js'), 'utf8');
if (/toggleEvidence|show evidence|hide evidence/i.test(`${html}\n${app}`)) {
  findings.push('public UI: evidence control');
}

if (findings.length) {
  console.error('Public-safety check failed:\n' + findings.map((item) => `- ${item}`).join('\n'));
  process.exit(1);
}

console.log(`Public-safety check passed across ${tracked.length} tracked files.`);
