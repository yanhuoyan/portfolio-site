/**
 * 根组件
 *
 * 作用：应用的根组件，组装所有页面section
 * 类比：类似Spring Boot的主配置类，组装所有模块
 *
 * 组件结构：
 * - Navbar: 导航栏（固定在顶部）
 * - Hero: 首屏（个人介绍）
 * - About: 关于我（简介、经历、技能）
 * - Projects: 项目展示（项目卡片）
 * - Contact: 联系方式（联系卡片、表单）
 * - Footer: 页脚（版权信息、链接）
 */

// 导入所有页面组件
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    // 最外层容器：最小高度为整个屏幕
    <div className="min-h-screen">
      {/* 导航栏：固定在顶部 */}
      <Navbar />

      {/* 首屏：个人介绍和CTA */}
      <Hero />

      {/* 关于我：个人简介、工作经历、技能栈 */}
      <About />

      {/* 项目展示：项目卡片列表 */}
      <Projects />

      {/* 联系方式：联系卡片和表单 */}
      <Contact />

      {/* 页脚：版权信息和快速链接 */}
      <Footer />
    </div>
  )
}

export default App

