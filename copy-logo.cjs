const fs = require('fs');
const path = require('path');

const candidates = [
  'C:/Users/hp/.gemini/antigravity/brain/62ec88c2-71ed-42b0-9afb-cb0e993908df/.user_uploaded/media_1789451269720.jpg',
  'C:/Users/hp/.gemini/antigravity/brain/62ec88c2-71ed-42b0-9afb-cb0e993908df/.user_uploaded/media_1789450114837.png',
  'C:/Users/hp/.gemini/antigravity/brain/839dcce5-f42e-4997-bd07-95d62d03d005/.user_uploaded/media_1789449764980.png',
  'C:/Users/hp/.gemini/antigravity/brain/839dcce5-f42e-4997-bd07-95d62d03d005/.user_uploaded/media_1789449273025.png',
  'C:/Users/hp/.gemini/antigravity/brain/839dcce5-f42e-4997-bd07-95d62d03d005/.user_uploaded/media_1789448300653.png',
  'C:/Users/hp/.gemini/antigravity/brain/839dcce5-f42e-4997-bd07-95d62d03d005/.user_uploaded/media_1789447897982.jpg',
  'C:/Users/hp/.gemini/antigravity/brain/839dcce5-f42e-4997-bd07-95d62d03d005/.user_uploaded/media_1789204005040.png',
];

let sourcePath = null;
for (const p of candidates) {
  if (fs.existsSync(p)) {
    sourcePath = p;
    break;
  }
}

if (!sourcePath) {
  console.error('Error: Could not find uploaded logo image file.');
  process.exit(1);
}

console.log('Found source image at:', sourcePath);

const publicDir = path.join(__dirname, 'public');
const publicAssetsDir = path.join(publicDir, 'assets');
const srcAssetsDir = path.join(__dirname, 'src', 'assets');

if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
if (!fs.existsSync(publicAssetsDir)) fs.mkdirSync(publicAssetsDir, { recursive: true });
if (!fs.existsSync(srcAssetsDir)) fs.mkdirSync(srcAssetsDir, { recursive: true });

// Read binary buffer
const imgBuffer = fs.readFileSync(sourcePath);
const mimeType = sourcePath.endsWith('.jpg') || sourcePath.endsWith('.jpeg') ? 'image/jpeg' : 'image/png';
const base64Data = `data:${mimeType};base64,${imgBuffer.toString('base64')}`;

// Copy binary to public and src/assets
fs.writeFileSync(path.join(publicDir, 'exact-logo.png'), imgBuffer);
fs.writeFileSync(path.join(publicDir, 'infoyashonand-logo.png'), imgBuffer);
fs.writeFileSync(path.join(publicAssetsDir, 'logo.png'), imgBuffer);
fs.writeFileSync(path.join(publicAssetsDir, 'brand-logo.png'), imgBuffer);
fs.writeFileSync(path.join(srcAssetsDir, 'exact-logo.png'), imgBuffer);

// Write TypeScript Data URI file
const tsCode = `// Generated exact authoritative logo image from uploaded user file
export const EXACT_BRAND_IMAGE_DATA_URI = ${JSON.stringify(base64Data)};
export const EXACT_LOGO_IMAGE = EXACT_BRAND_IMAGE_DATA_URI;
export const UPLOADED_LOGO_IMAGE = EXACT_BRAND_IMAGE_DATA_URI;
export const BRAND_LOGO_SRC = '/assets/logo.png';
`;
fs.writeFileSync(path.join(__dirname, 'src', 'components', 'logoData.ts'), tsCode, 'utf8');

const svgContent = `<svg viewBox="0 0 470 110" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="INFOYASHONAND TECHNOLOGY PVT. LTD.">
  <g id="brand-emblem" transform="translate(55, 55)">
    <circle cx="0" cy="0" r="45" fill="#FFFFFF" />
    <circle cx="27" cy="-29" r="12.5" fill="#FFFFFF" />
    <circle cx="0" cy="33" r="11.5" fill="#FFFFFF" />
    <circle cx="0" cy="0" r="28.5" fill="none" stroke="#111111" strokeWidth="2.2" />
    <defs>
      <path id="topBrandArc" d="M -36, 10 A 36.5 36.5 0 1 1 33, -17" fill="none" />
      <path id="bottomBrandArc" d="M -17, 33 A 36.5 36.5 0 0 0 36, 12" fill="none" />
    </defs>
    <text fill="#D41829" font-size="8.6" font-weight="900" font-family="'Arial Black', 'Impact', sans-serif" letter-spacing="0.6">
      <textPath href="#topBrandArc" startOffset="50%" text-anchor="middle">INFOYASHONAND</textPath>
    </text>
    <text fill="#111111" font-size="8.6" font-weight="900" font-family="'Arial Black', 'Impact', sans-serif" letter-spacing="0.8">
      <textPath href="#bottomBrandArc" startOffset="50%" text-anchor="middle">TECHNOLOGY</textPath>
    </text>
    <g id="y-symbol-mark">
      <path d="M -14 -12 L 0 4 L 0 33" stroke="#FFFFFF" stroke-width="15.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M 0 4 L 27 -29" stroke="#FFFFFF" stroke-width="15.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M -14 -12 L 0 4 L 0 33" stroke="#172B85" stroke-width="9.2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M 0 4 L 27 -29" stroke="#172B85" stroke-width="9.2" stroke-linecap="round" stroke-linejoin="round" />
    </g>
  </g>
  <rect x="116" y="15" width="3.5" height="80" rx="1.75" fill="#FFFFFF" />
  <text x="134" y="52" fill="#FFFFFF" font-size="46" font-weight="900" font-family="'Anton', 'Impact', 'Bebas Neue', 'Oswald', 'Arial Black', sans-serif" letter-spacing="0.5" textLength="324" lengthAdjust="spacingAndGlyphs">INFOYASHONAND</text>
  <text x="134" y="93" fill="#FFFFFF" font-size="37" font-weight="900" font-family="'Anton', 'Impact', 'Bebas Neue', 'Oswald', 'Arial Black', sans-serif" letter-spacing="0.2" textLength="324" lengthAdjust="spacingAndGlyphs">TECHNOLOGY PVT. LTD.</text>
</svg>`;

fs.writeFileSync(path.join(publicDir, 'logo.svg'), svgContent, 'utf8');
fs.writeFileSync(path.join(publicAssetsDir, 'logo.svg'), svgContent, 'utf8');
fs.writeFileSync(path.join(srcAssetsDir, 'logo.svg'), svgContent, 'utf8');

console.log('Successfully saved logo to:');
console.log(' - public/exact-logo.png');
console.log(' - public/assets/logo.png');
console.log(' - public/assets/logo.svg (100% Genuine Alpha Transparent)');
console.log(' - src/assets/exact-logo.png');
console.log(' - src/components/logoData.ts (Data URI: ' + base64Data.length + ' chars)');


