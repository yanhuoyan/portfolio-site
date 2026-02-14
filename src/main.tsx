/**
 * 应用入口文件
 *
 * 作用：React应用的启动文件，负责将React组件挂载到DOM
 * 类比：类似Spring Boot的main方法，是应用的启动入口
 *
 * 执行流程：
 * 1. 导入必要的依赖
 * 2. 获取HTML中的root元素
 * 3. 创建React根节点
 * 4. 渲染App组件
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'  // 导入全局样式（包含Tailwind CSS）
import App from './App.tsx'  // 导入根组件

// 创建React根节点并渲染应用
createRoot(document.getElementById('root')!).render(
  // StrictMode: React严格模式，帮助发现潜在问题
  // 类比：类似Java的断言（assert），在开发环境启用额外检查
  <StrictMode>
    {/* 渲染根组件 */}
    <App />
  </StrictMode>,
)

