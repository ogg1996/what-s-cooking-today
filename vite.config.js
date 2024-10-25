import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // 절대 경로 설정
      '@icons': path.resolve(__dirname, 'src/assets/images/icons'),
      '@menuImages': path.resolve(__dirname, 'src/assets/images/menuImages'),
      '@components-app': path.resolve(__dirname, 'src/components/app'),
      '@components-common': path.resolve(__dirname, 'src/components/common'),
      '@skeletons-base': path.resolve(__dirname, 'src/skeletons/base'),
      '@skeletons-common': path.resolve(__dirname, 'src/skeletons/common'),
      '@skeletons-detail': path.resolve(__dirname, 'src/skeletons/detail'),
      '@': path.resolve(__dirname, 'src')
    }
  },
  server: {
    // Proxy 설정
    proxy: {
      // 경로가 "/api" 로 시작하는 요청을 대상으로 proxy 설정
      '/api': {
        // 요청 전달 대상 서버 주소 설정
        target: 'http://211.237.50.150:7080',
        // 요청 헤더 host 필드 값을 대상 서버의 호스트 이름으로  변경
        changeOrigin: true,
        // 요청 경로에서 '/api' 제거
        rewrite: proxyPath => proxyPath.replace(/^\/api/, ''),
        // SSL 인증서 검증 무시
        secure: false,
        // WebSocket 프로토콜 사용
        ws: true
      }
    }
  }
});
