import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: 'index.ts',
      name: 'index',
      fileName: 'index',
    },
  },
});
