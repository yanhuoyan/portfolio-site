// 技能数据类型定义
export interface Skill {
  id: number
  name: string
  category: 'frontend' | 'backend' | 'tools' | 'other'
  level: number // 1-5
}

// 技能数据
export const skills: Skill[] = [
  // 前端技能
  { id: 1, name: 'React', category: 'frontend', level: 4 },
  { id: 2, name: 'TypeScript', category: 'frontend', level: 4 },
  { id: 3, name: 'JavaScript', category: 'frontend', level: 5 },
  { id: 4, name: 'HTML/CSS', category: 'frontend', level: 5 },
  { id: 5, name: 'Tailwind CSS', category: 'frontend', level: 4 },
  { id: 6, name: 'Next.js', category: 'frontend', level: 3 },

  // 后端技能
  { id: 7, name: 'Java', category: 'backend', level: 5 },
  { id: 8, name: 'Spring Boot', category: 'backend', level: 5 },
  { id: 9, name: 'Node.js', category: 'backend', level: 3 },
  { id: 10, name: 'MySQL', category: 'backend', level: 4 },
  { id: 11, name: 'Redis', category: 'backend', level: 4 },

  // 工具
  { id: 12, name: 'Git', category: 'tools', level: 4 },
  { id: 13, name: 'Docker', category: 'tools', level: 3 },
  { id: 14, name: 'VS Code', category: 'tools', level: 5 },
  { id: 15, name: 'Vite', category: 'tools', level: 4 },
]

// 按类别分组技能
export const skillsByCategory = {
  frontend: skills.filter(s => s.category === 'frontend'),
  backend: skills.filter(s => s.category === 'backend'),
  tools: skills.filter(s => s.category === 'tools'),
  other: skills.filter(s => s.category === 'other'),
}
