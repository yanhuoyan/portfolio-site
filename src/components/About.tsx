import { skillsByCategory } from '../data/skills'

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            关于我
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Left: Introduction */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              个人简介
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>
                你好！我是一名拥有5年经验的Java后端工程师，目前正在学习前端技术栈，
                希望成为一名全栈工程师。
              </p>
              <p>
                在后端开发中，我熟练使用Spring Boot、MySQL、Redis等技术，
                参与过多个企业级项目的开发和维护。
              </p>
              <p>
                现在，我正在通过实际项目学习React、TypeScript、Tailwind CSS等前端技术，
                享受从零开始构建用户界面的过程。
              </p>
              <p>
                我相信，全栈能力能让我更好地理解整个系统架构，
                从而写出更高质量的代码。
              </p>
            </div>
          </div>

          {/* Right: Experience */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              工作经历
            </h3>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="text-lg font-semibold text-gray-900">
                  高级Java工程师
                </h4>
                <p className="text-gray-600 mb-2">某互联网公司 | 2021 - 至今</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>负责核心业务系统的开发和维护</li>
                  <li>优化系统性能，提升响应速度30%</li>
                  <li>参与技术选型和架构设计</li>
                </ul>
              </div>

              <div className="border-l-4 border-gray-400 pl-4">
                <h4 className="text-lg font-semibold text-gray-900">
                  Java工程师
                </h4>
                <p className="text-gray-600 mb-2">某科技公司 | 2019 - 2021</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>参与电商平台后端开发</li>
                  <li>实现订单、支付等核心模块</li>
                  <li>编写单元测试，保证代码质量</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            技能栈
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Frontend Skills */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-blue-600 mb-4">
                前端技术
              </h4>
              <div className="space-y-3">
                {skillsByCategory.frontend.map((skill) => (
                  <div key={skill.id}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700">{skill.name}</span>
                      <span className="text-gray-500 text-sm">
                        {skill.level}/5
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all"
                        style={{ width: `${(skill.level / 5) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend Skills */}
            <div className="bg-green-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-green-600 mb-4">
                后端技术
              </h4>
              <div className="space-y-3">
                {skillsByCategory.backend.map((skill) => (
                  <div key={skill.id}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700">{skill.name}</span>
                      <span className="text-gray-500 text-sm">
                        {skill.level}/5
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-600 h-2 rounded-full transition-all"
                        style={{ width: `${(skill.level / 5) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="bg-purple-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-purple-600 mb-4">
                开发工具
              </h4>
              <div className="space-y-3">
                {skillsByCategory.tools.map((skill) => (
                  <div key={skill.id}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700">{skill.name}</span>
                      <span className="text-gray-500 text-sm">
                        {skill.level}/5
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-purple-600 h-2 rounded-full transition-all"
                        style={{ width: `${(skill.level / 5) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
