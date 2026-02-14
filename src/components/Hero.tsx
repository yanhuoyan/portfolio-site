/**
 * 首屏组件（Hero Section）
 *
 * 作用：网站的首屏展示，是用户访问网站时看到的第一个section
 * 功能：
 * - 展示个人头像/Logo
 * - 显示姓名和职位
 * - 简短的个人介绍
 * - CTA按钮（Call To Action）引导用户操作
 * - 社交媒体链接
 *
 * 类比：类似产品的Landing Page，吸引用户注意力
 *
 * 设计要点：
 * - 全屏高度（min-h-screen）
 * - 渐变背景（蓝色到紫色）
 * - 居中布局
 * - 响应式设计
 */

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'  // 导入社交媒体图标

const Hero = () => {
  return (
    // ========================================
    // Section容器
    // ========================================
    // - id="home": 用于导航栏锚点跳转
    // - min-h-screen: 最小高度为整个屏幕
    // - flex items-center justify-center: 内容垂直水平居中
    // - bg-gradient-to-br: 从左上到右下的渐变背景
    // - from-blue-50 via-white to-purple-50: 渐变颜色（蓝→白→紫）
    // - pt-16: 顶部padding，避免被固定导航栏遮挡
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16"
    >
      {/* 内容容器：限制最大宽度，响应式padding */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* 文本居中容器 */}
        <div className="text-center">

          {/* ========== 头像/Logo ========== */}
          <div className="mb-8 flex justify-center">
            {/* 圆形头像容器
                - w-32 h-32: 移动端尺寸（128px）
                - sm:w-40 sm:h-40: 小屏及以上尺寸（160px）
                - rounded-full: 圆形
                - bg-gradient-to-br: 渐变背景
                - from-blue-400 to-purple-500: 蓝到紫的渐变
                - flex items-center justify-center: 内容居中
                - text-5xl sm:text-6xl: 响应式字体大小
                - shadow-xl: 大阴影效果
            */}
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-5xl sm:text-6xl font-bold shadow-xl">
              JW  {/* 显示首字母缩写 */}
            </div>
          </div>

          {/* ========== 姓名和职位 ========== */}
          {/* 主标题
              - text-4xl sm:text-5xl lg:text-6xl: 响应式字体大小
                移动端4xl，小屏5xl，大屏6xl
              - font-bold: 粗体
              - text-gray-900: 深灰色文字
              - mb-4: 底部margin
          */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            你好，我是 <span className="text-blue-600">张三</span>  {/* 名字用蓝色高亮 */}
          </h1>

          {/* 副标题：职位描述 */}
          <p className="text-xl sm:text-2xl text-gray-600 mb-8">
            全栈工程师 | Java后端 → 前端学习中
          </p>

          {/* ========== 个人介绍 ========== */}
          {/* 简短的个人介绍
              - text-lg: 较大字体
              - text-gray-600: 中灰色
              - max-w-2xl mx-auto: 最大宽度2xl，水平居中
              - mb-12: 底部margin
          */}
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            5年Java后端开发经验，现在正在学习前端技术栈。
            <br />  {/* 换行 */}
            热爱编程，追求代码质量，享受解决问题的过程。
          </p>

          {/* ========== CTA按钮 ========== */}
          {/* Call To Action按钮：引导用户操作
              - flex flex-col sm:flex-row: 移动端垂直排列，小屏及以上水平排列
              - gap-4: 按钮间距
              - justify-center: 居中对齐
              - mb-12: 底部margin
          */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            {/* 主要按钮：查看项目 */}
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault()  // 阻止默认跳转
                // 平滑滚动到项目section
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
              // 按钮样式：
              // - px-8 py-3: 内边距
              // - bg-blue-600: 蓝色背景
              // - text-white: 白色文字
              // - rounded-lg: 圆角
              // - hover:bg-blue-700: 悬停时深蓝色
              // - transition: 过渡动画
              // - transform hover:scale-105: 悬停时放大5%
              // - shadow-lg: 大阴影
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition transform hover:scale-105 shadow-lg"
            >
              查看项目
            </a>

            {/* 次要按钮：联系我 */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              // 按钮样式：
              // - bg-white: 白色背景
              // - text-blue-600: 蓝色文字
              // - border-2 border-blue-600: 蓝色边框
              // - hover:bg-blue-50: 悬停时浅蓝色背景
              className="px-8 py-3 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition transform hover:scale-105 shadow-lg"
            >
              联系我
            </a>
          </div>

          {/* ========== 社交媒体链接 ========== */}
          {/* 社交媒体图标
              - flex justify-center: 水平居中
              - gap-6: 图标间距
          */}
          <div className="flex justify-center gap-6">
            {/* GitHub链接 */}
            <a
              href="https://github.com/username"
              target="_blank"  // 新标签页打开
              rel="noopener noreferrer"  // 安全属性
              // 图标样式：
              // - text-gray-600: 灰色
              // - hover:text-blue-600: 悬停时蓝色
              // - transition: 过渡动画
              // - transform hover:scale-110: 悬停时放大10%
              className="text-gray-600 hover:text-blue-600 transition transform hover:scale-110"
              aria-label="GitHub"  // 无障碍标签
            >
              <FaGithub size={28} />  {/* GitHub图标，大小28px */}
            </a>

            {/* LinkedIn链接 */}
            <a
              href="https://linkedin.com/in/username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={28} />
            </a>

            {/* Email链接 */}
            <a
              href="mailto:your.email@example.com"  // mailto协议，点击打开邮件客户端
              className="text-gray-600 hover:text-blue-600 transition transform hover:scale-110"
              aria-label="Email"
            >
              <FaEnvelope size={28} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
