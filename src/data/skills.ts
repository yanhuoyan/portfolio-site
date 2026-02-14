/**
 * 技能数据文件
 *
 * 作用：定义技能数据的结构和数据
 * 类比：类似Java的DTO类 + 常量数据
 *
 * 使用场景：在About组件中导入并展示技能栈
 */

// ========================================
// 类型定义
// ========================================

/**
 * 技能数据类型
 *
 * 字段说明：
 * - id: 技能唯一标识
 * - name: 技能名称
 * - category: 技能分类（frontend/backend/tools/other）
 * - level: 技能等级（1-5，5为最高）
 */
export interface Skill {
  id: number
  name: string
  category: 'frontend' | 'backend' | 'tools' | 'other'  // 联合类型：只能是这4个值之一
  level: number // 1-5
}

// ========================================
// 技能数据
// ========================================

/**
 * 技能列表数据
 *
 * 说明：包含前端、后端、工具等技能
 * 实际使用时，可以根据个人情况修改
 */
export const skills: Skill[] = [
  // ========== 前端技能 ==========
  { id: 1, name: 'React', category: 'frontend', level: 4 },
  { id: 2, name: 'TypeScript', category: 'frontend', level: 4 },
  { id: 3, name: 'JavaScript', category: 'frontend', level: 5 },
  { id: 4, name: 'HTML/CSS', category: 'frontend', level: 5 },
  { id: 5, name: 'Tailwind CSS', category: 'frontend', level: 4 },
  { id: 6, name: 'Next.js', category: 'frontend', level: 3 },

  // ========== 后端技能 ==========
  { id: 7, name: 'Java', category: 'backend', level: 5 },
  { id: 8, name: 'Spring Boot', category: 'backend', level: 5 },
  { id: 9, name: 'Node.js', category: 'backend', level: 3 },
  { id: 10, name: 'MySQL', category: 'backend', level: 4 },
  { id: 11, name: 'Redis', category: 'backend', level: 4 },

  // ========== 开发工具 ==========
  { id: 12, name: 'Git', category: 'tools', level: 4 },
  { id: 13, name: 'Docker', category: 'tools', level: 3 },
  { id: 14, name: 'VS Code', category: 'tools', level: 5 },
  { id: 15, name: 'Vite', category: 'tools', level: 4 },
]

// ========================================
// 按类别分组的技能
// ========================================

/**
 * 按类别分组的技能数据
 *
 * 作用：方便在组件中按类别展示技能
 * 使用：const { frontend, backend, tools } = skillsByCategory
 */
export const skillsByCategory = {
  // 前端技能列表
  frontend: skills.filter(s => s.category === 'frontend'),
  // 后端技能列表
  backend: skills.filter(s => s.category === 'backend'),
  // 工具技能列表
  tools: skills.filter(s => s.category === 'tools'),
  // 其他技能列表
  other: skills.filter(s => s.category === 'other'),
}

