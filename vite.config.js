import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // 절대 경로 설정
      '@components-app': path.resolve(__dirname, 'src/components/app'),
      '@components-common': path.resolve(__dirname, 'src/components/common'),
      '@skeletons-base': path.resolve(__dirname, 'src/skeletons/base'),
      '@skeletons-common': path.resolve(__dirname, 'src/skeletons/common'),
      '@skeletons-detail': path.resolve(__dirname, 'src/skeletons/detail'),
      '@': path.resolve(__dirname, 'src')
    }
  }
});
