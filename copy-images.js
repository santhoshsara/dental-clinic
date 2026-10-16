const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\Santhosh\\.gemini\\antigravity-ide\\brain\\f38addd7-6e7f-4699-ad47-937766660b61';
const destDir = path.join(__dirname, 'public', 'images');

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

fs.readdirSync(srcDir).forEach(file => {
    if (file.endsWith('.jpg')) {
        fs.copyFileSync(path.join(srcDir, file), path.join(destDir, file));
        console.log(`Copied ${file}`);
    }
});
