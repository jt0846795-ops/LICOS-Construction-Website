import { defineConfig } from 'vite';
import { mkdirSync, copyFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

export default defineConfig({
  plugins: [
    {
      name: 'copy-git-content',
      closeBundle() {
        const source = resolve('content/pages/home.json');
        const destination = resolve('dist/content/pages/home.json');
        mkdirSync(dirname(destination), { recursive: true });
        copyFileSync(source, destination);
      }
    }
  ]
});
