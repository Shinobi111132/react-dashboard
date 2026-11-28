import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const proxy = {
    '/api/countries': {
      target: 'https://api.restcountries.com',
      changeOrigin: true,
      headers: { Authorization: 'Bearer ' + (process.env.REST_COUNTRIES_KEY || env.REST_COUNTRIES_KEY || '') },
      rewrite: path => path.replace('/api/countries', '/countries/v5'),
    },
  };

  return {
    plugins: [react()],
    server: { proxy },
    preview: { proxy },
  };
});
