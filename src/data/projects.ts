// 项目数据类型定义
export interface Project {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  githubUrl?: string
  liveUrl?: string
}

// 项目数据
export const projects: Project[] = [
  {
    id: 1,
    title: '个人作品集网站',
    description: '使用 React + TypeScript + Tailwind CSS 构建的响应式个人作品集网站，展示个人信息、技能和项目经验。',
    image: '/project1.png',
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
