import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { federation } from '@module-federation/vite';

export default defineConfig({
  plugins: [
    react(),

    federation({
      name: 'auth_mfe',

      filename: 'remoteEntry.js',

      exposes: {
        './AuthApp': './src/App.tsx',
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
    port: 5174,
    origin: 'http://localhost:5174',
  },

  build: {
    target: 'esnext',
  },
});