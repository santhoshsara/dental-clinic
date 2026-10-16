import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import fs from 'fs'
import path from 'path'

// Auto-copy images from brain artifact directories to public (Updated batch)
try {
  const srcDirs = [
    'C:\\Users\\Santhosh\\.gemini\\antigravity-ide\\brain\\f38addd7-6e7f-4699-ad47-937766660b61',
    'C:\\Users\\Santhosh\\.gemini\\antigravity-ide\\brain\\22983c2d-0a22-40de-bcc2-5ad263127fe0'
  ];
  const destDir = path.resolve(__dirname, 'public', 'images');
  if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });
  
  for (const srcDir of srcDirs) {
    if (fs.existsSync(srcDir)) {
      fs.readdirSync(srcDir).forEach(file => {
        if (file.endsWith('.jpg') || file.endsWith('.png') || file.endsWith('.webp')) {
          fs.copyFileSync(path.join(srcDir, file), path.join(destDir, file));
        }
      });
    }
  }
} catch (e) {
  console.error('Auto-copy images failed:', e);
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      allow: [
        '..',
        'C:/Users/Santhosh/.gemini',
        'c:/Users/Santhosh/.gemini'
      ]
    }
  }
})
