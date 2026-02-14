/**
 * Vite 配置文件
 *
 * 作用：配置Vite构建工具的行为
 * 类比：类似Spring Boot的application.yml配置文件
 *
 * 主要配置项：
 * - plugins: 插件配置（这里使用React插件）
 * - server: 开发服务器配置（端口、代理等）
 * - build: 构建配置（输出目录、压缩等）
 * - resolve: 路径解析配置（别名等）
 */

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // 插件配置
  plugins: [
    react(), // React插件：支持JSX、Fast Refresh等
  ],

  // 开发服务器配置（可选）
  // server: {
  //   port: 3000,              // 开发服务器端口
  //   open: true,              // 自动打开浏览器
  //   proxy: {                 // 代理配置（解决跨域）
  //     '/api': {
  //       target: 'http://localhost:8080',
  //       changeOrigin: true,
  //     }
  //   }
  // },

  // 构建配置（可选）
  // build: {
  //   outDir: 'dist',          // 输出目录
  //   sourcemap: false,        // 是否生成sourcemap
  //   minify: 'terser',        // 压缩方式
  // },

  // 路径别名配置（可选）
  // resolve: {
  //   alias: {
  //     '@': '/src',           // @指向src目录
  //   }
  // }
})

