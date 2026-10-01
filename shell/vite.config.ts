import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { federation } from '@module-federation/vite';

export default defineConfig({
  plugins: [
    react(),

    federation({
      name: 'shell',

      remotes: {
        auth_mfe: {
          type: 'module',
          name: 'auth_mfe',
          entry: 'http://localhost:5174/remoteEntry.js',
          entryGlobalName: 'auth_mfe',
          shareScope: 'default',
        },
      },

      shared: {
        react: {
          singleton: true,
          eager: true,
        },
        'react-dom': {
          singleton: true,
          eager: true,
        },
      },
    }),
  ],

  server: {
    port: 5173,
  },

  build: {
    target: 'esnext',
  },
});