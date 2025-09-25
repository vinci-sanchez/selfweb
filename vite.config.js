import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './',  // 添加这一行
 // publicDir: 'img', // 指定 img 作为公共资源目录
  assetsInclude: ['**/*.jpg', '**/*.png'], // 确保 Vite 识别 jpg 文件
});