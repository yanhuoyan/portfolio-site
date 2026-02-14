/**
 * 项目数据文件
 *
 * 作用：定义项目展示的数据结构和数据
 * 类比：类似Java的DTO类 + 常量数据
 *
 * 使用场景：在Projects组件中导入并展示
 */

// ========================================
// 类型定义
// ========================================

/**
 * 项目数据类型
 *
 * 字段说明：
 * - id: 项目唯一标识
 * - title: 项目标题
 * - description: 项目描述
 * - image: 项目图片路径
 * - tags: 技术标签数组
 * - githubUrl: GitHub仓库地址（可选）
 * - liveUrl: 在线预览地址（可选）
 */
export interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  githubUrl?: string  // ? 表示可选字段
  liveUrl?: string
}

// ========================================
// 项目数据
// ========================================

/**
 * 项目列表数据
 *
 * 说明：这里定义了3个示例项目
 * 实际使用时，可以：
 * 1. 修改为真实的项目信息
 * 2. 从API获取数据
 * 3. 添加更多项目
 */
export const projects: Project[] = [
  {
    id: 1,
    title: '个人作品集网站',
    description: '使用 React + TypeScript + Tailwind CSS 构建的响应式个人作品集网站，展示个人信息、技能和项目经验。',
    image: '/project1.png',  // 图片路径（相对于public目录）
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    githubUrl: 'https://github.com/username/portfolio-site',
    liveUrl: 'https://portfolio-site.vercel.app',
  },
  {
    id: 2,
    title: 'Todo全栈应用',
    description: '全栈Todo应用，前端使用React，后端使用Node.js + Express，实现了用户认证、CRUD操作等功能。',
    image: '/project2.png',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    githubUrl: 'https://github.com/username/todo-app',
    liveUrl: 'https://todo-app.vercel.app',
  },
  {
    id: 3,
    title: '后台管理系统',
    description: '企业级后台管理系统，包含用户管理、权限控制、数据可视化等功能，采用现代化的技术栈。',
    image: '/project3.png',
    tags: ['React', 'Ant Design', 'TypeScript', 'Zustand'],
    githubUrl: 'https://github.com/username/admin-system',
    liveUrl: 'https://admin-system.vercel.app',
  },
]

