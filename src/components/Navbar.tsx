/**
 * 导航栏组件
 *
 * 作用：网站顶部的固定导航栏
 * 功能：
 * - 显示Logo和导航链接
 * - 响应式设计（桌面端显示完整导航，移动端显示汉堡菜单）
 * - 平滑滚动到对应section
 *
 * 类比：类似网站的Header，提供全局导航
 */

import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'  // 导入图标：汉堡菜单和关闭图标

const Navbar = () => {
  // ========================================
  // 状态管理
  // ========================================

  /**
   * 移动端菜单开关状态
   * - true: 菜单打开
   * - false: 菜单关闭
   * 类比：类似Java的boolean成员变量
   */
  const [isOpen, setIsOpen] = useState(false)

  // ========================================
  // 导航链接数据
  // ========================================

  /**
   * 导航链接配置
   * 每个链接包含：
   * - name: 显示文字
   * - href: 跳转的section ID（使用#开头）
   */
  const navLinks = [
    { name: '首页', href: '#home' },
    { name: '关于', href: '#about' },
    { name: '项目', href: '#projects' },
    { name: '联系', href: '#contact' },
  ]

  // ========================================
  // 事件处理函数
  // ========================================

  /**
   * 平滑滚动到指定section
   *
   * @param href - section的ID（如 #home）
   *
   * 工作流程：
   * 1. 根据href查找DOM元素
   * 2. 使用scrollIntoView实现平滑滚动
   * 3. 关闭移动端菜单
   */
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })  // 平滑滚动
      setIsOpen(false)  // 关闭移动端菜单
    }
  }

  // ========================================
  // 组件渲染
  // ========================================

  return (
    // 导航栏容器
    // - fixed: 固定在顶部
    // - bg-white/90: 白色背景，90%不透明度
    // - backdrop-blur-sm: 背景模糊效果
    // - z-50: 层级最高，确保在其他内容之上
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm shadow-sm z-50">
      {/* 内容容器：限制最大宽度，居中显示 */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Flex容器：Logo和导航链接左右分布 */}
        <div className="flex justify-between items-center h-16">

          {/* ========== Logo ========== */}
          <div className="flex-shrink-0">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault()  // 阻止默认跳转行为
                scrollToSection('#home')  // 使用平滑滚动
              }}
              className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition"
            >
              Portfolio
            </a>
          </div>

          {/* ========== 桌面端导航 ========== */}
          {/* hidden md:flex: 小屏隐藏，中屏及以上显示 */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(link.href)
                }}
                className="text-gray-700 hover:text-blue-600 transition font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* ========== 移动端菜单按钮 ========== */}
          {/* md:hidden: 中屏及以上隐藏 */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}  // 切换菜单开关
              className="text-gray-700 hover:text-blue-600 transition"
              aria-label="Toggle menu"
            >
              {/* 根据isOpen状态显示不同图标 */}
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* ========== 移动端菜单 ========== */}
      {/* 只在isOpen为true时显示 */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(link.href)
                }}
                className="block text-gray-700 hover:text-blue-600 transition font-medium py-2"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
