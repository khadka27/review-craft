const fs = require('fs');
const path = require('path');

const FORBIDDEN_PATTERNS = [
  { pattern: /fake\s+google\s+review/i, label: 'Fake Google Review' },
  { pattern: /fake\s+amazon\s+review/i, label: 'Fake Amazon Review' },
  { pattern: /fake\s+facebook\s+review/i, label: 'Fake Facebook Review' },
  { pattern: /fake\s+trustpilot\s+review/i, label: 'Fake Trustpilot Review' },
  { pattern: /fake\s+yelp\s+review/i, label: 'Fake Yelp Review' },
  { pattern: /fake\s+instagram\s+review/i, label: 'Fake Instagram Review' },
  { pattern: /fake\s+reddit\s+review/i, label: 'Fake Reddit Review' },
  { pattern: /fake\s+tiktok\s+review/i, label: 'Fake TikTok Review' },
  { pattern: /fake\s+youtube\s+review/i, label: 'Fake YouTube Review' },
  { pattern: /fake\s+linkedin\s+review/i, label: 'Fake LinkedIn Review' },
  { pattern: /fake\s+tripadvisor\s+review/i, label: 'Fake TripAdvisor Review' },
  { pattern: /fake\s+booking\s+review/i, label: 'Fake Booking Review' },
  { pattern: /fake\s+customer\s+review/i, label: 'Fake Customer Review' },
  { pattern: /fake\s+product\s+review/i, label: 'Fake Product Review' },
  { pattern: /realistic\s+fake/i, label: 'Realistic Fake' },
  { pattern: /fool\s+customers/i, label: 'Fool Customers' },
  { pattern: /make\s+fake\s+reviews\s+look\s+real/i, label: 'Make Fake Reviews Look Real' },
  { pattern: /verified\s+fake\s+reviews/i, label: 'Verified Fake Reviews' },
  { pattern: /generate\s+reviews\s+for\s+your\s+business/i, label: 'Generate Reviews For Business' },
  { pattern: /create\s+reviews\s+that\s+look\s+genuine/i, label: 'Create Reviews That Look Genuine' },
  { pattern: /manipulate\s+ratings/i, label: 'Manipulate Ratings' },
  { pattern: /boost\s+your\s+reputation\s+with\s+fake/i, label: 'Boost Reputation With Fake' },
  { pattern: /convincing\s+fake/i, label: 'Convincing Fake' },
  { pattern: /authentic-looking\s+reviews/i, label: 'Authentic-Looking Reviews' },
];

// Exempt contexts where phrases appear strictly inside prohibition statements or policy disclaimers
const ALLOWED_CONTEXTS = [
  /do not/i,
  /prohibit/i,
  /forbidden/i,
  /never/i,
  /policy/i,
  /disclaimer/i,
  /acceptable-use/i,
  /legal/i,
  /ethics/i,
  /compliance/i,
  /script/i,
];

function scanDirectory(dirPath, violations = []) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== 'node_modules' && entry.name !== '.next' && entry.name !== '.git') {
        scanDirectory(fullPath, violations);
      }
    } else if (entry.isFile() && /\.(tsx?|jsx?|md|json)$/i.test(entry.name)) {
      const content = fs.readFileSync(fullPath, 'utf8');
      const lines = content.split('\n');

      lines.forEach((line, index) => {
        for (const item of FORBIDDEN_PATTERNS) {
          if (item.pattern.test(line)) {
            // Check if line is inside an allowed educational/policy disclaimer line
            const isExempt = ALLOWED_CONTEXTS.some(ctx => ctx.test(line));
            if (!isExempt) {
              violations.push({
                file: fullPath,
                line: index + 1,
                match: line.trim(),
                issue: item.label,
                recommendation: 'Replace with mockup/prototype/simulated terminology.'
              });
            }
          }
        }
      });
    }
  }

  return violations;
}

const targetDir = path.join(__dirname, '..', 'src');
console.log(`🔍 Scanning directory: ${targetDir}`);
const results = scanDirectory(targetDir);

if (results.length === 0) {
  console.log('✅ Policy Scan Passed! No problematic phrases detected.');
  process.exit(0);
} else {
  console.log(`⚠️ Found ${results.length} policy warnings:\n`);
  results.forEach(v => {
    console.log(`FILE: ${v.file}:${v.line}`);
    console.log(`MATCH: "${v.match}"`);
    console.log(`ISSUE: ${v.issue}`);
    console.log(`FIX: ${v.recommendation}\n`);
  });
  process.exit(1);
}
