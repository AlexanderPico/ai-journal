const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.resolve(__dirname, '..');
const source = fs.readFileSync(path.join(root, 'timeline-data.js'), 'utf8');
const context = { globalThis: {} };
vm.runInNewContext(source, context);
const data = context.globalThis.AGENT_JOURNEY;

test('journal data loads and has substantial chronology', () => {
  assert.ok(data);
  assert.ok(data.entries.length >= 18);
  assert.equal(data.eras.length, 6);
});

test('entries are chronological and have valid era references', () => {
  const eraIds = new Set(data.eras.map((era) => era.id));
  const dates = data.entries.map((entry) => entry.date);
  assert.equal(JSON.stringify([...dates].sort()), JSON.stringify(Array.from(dates)));
  for (const entry of data.entries) {
    assert.ok(/^202[5-9]-\d{2}-\d{2}$/.test(entry.date), entry.date);
    assert.ok(eraIds.has(entry.era), entry.era);
    assert.ok(['low', 'medium', 'high'].includes(entry.confidence));
    assert.equal('evidence' in entry, false, entry.title);
    assert.ok(entry.summary.length >= 80, entry.title);
    assert.ok(entry.turn.length >= 35, entry.title);
  }
});

test('IDs and titles are unique', () => {
  assert.equal(new Set(data.entries.map((entry) => entry.id)).size, data.entries.length);
  assert.equal(new Set(data.entries.map((entry) => entry.title)).size, data.entries.length);
});

test('public trend URLs use HTTPS and entries do not claim weight training', () => {
  for (const trend of data.publicTrends) assert.match(trend.url, /^https:\/\//);
  const prose = data.entries.map((entry) => `${entry.summary} ${entry.turn}`).join(' ').toLowerCase();
  assert.equal(prose.includes('autonomous weight training'), false);
});

test('file-openable page uses scripts rather than fetch', () => {
  const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
  const app = fs.readFileSync(path.join(root, 'app.js'), 'utf8');
  assert.match(html, /timeline-data\.js/);
  assert.match(html, /theme-init\.js/);
  assert.match(html, /app\.js/);
  assert.equal(app.includes('fetch('), false);
});

test('public page and dataset contain no evidence UI or provenance payloads', () => {
  const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
  const app = fs.readFileSync(path.join(root, 'app.js'), 'utf8');
  const css = fs.readFileSync(path.join(root, 'styles.css'), 'utf8');
  assert.doesNotMatch(`${html}\n${app}\n${css}`, /toggleEvidence|show evidence|hide evidence|class="evidence"/i);
  for (const entry of data.entries) assert.equal('evidence' in entry, false, entry.title);
});

test('long-lived framing, dark mode, and automated maintenance replace manual-entry UI', () => {
  const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
  const css = fs.readFileSync(path.join(root, 'styles.css'), 'utf8');
  const app = fs.readFileSync(path.join(root, 'app.js'), 'utf8');
  assert.match(html, /Begun 2025 · Ongoing/);
  assert.doesNotMatch(html, /Eight months|copyTemplate|The next entry/);
  assert.match(html, /toggleTheme/);
  assert.match(css, /data-theme="dark"/);
  assert.match(app, /agent-journey-theme/);
  assert.equal('ENTRY_TEMPLATE' in data, false);
});

test('specialized terms are defined on first journal use', () => {
  const sjcUses = data.entries
    .map((entry) => `${entry.date} ${entry.summary}`)
    .filter((text) => text.includes('SJC'));
  assert.ok(sjcUses.length >= 1);
  assert.match(sjcUses[0], /Structured Judgment Corpus \(SJC\)/);
});

test('public repository text does not expose absolute or home-relative paths', () => {
  const publicFiles = [
    'index.html', 'styles.css', 'app.js', 'timeline-data.js',
    'README.md', 'SOURCES.md', 'docs/maintenance-policy.md'
  ];
  for (const file of publicFiles) {
    const text = fs.readFileSync(path.join(root, file), 'utf8');
    assert.doesNotMatch(text, /\/Users\/[A-Za-z0-9._-]+\//, file);
    assert.doesNotMatch(text, /(^|[\s`"'(])~\/[A-Za-z0-9._-]/m, file);
  }
});
