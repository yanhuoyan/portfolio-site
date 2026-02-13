import { FaGithub, FaLinkedin, FaEnvelope, FaWeixin } from 'react-icons/fa'

const Contact = () => {
  const contactMethods = [
    {
      icon: <FaEnvelope size={32} />,
      title: '邮箱',
      value: 'your.email@example.com',
      link: 'mailto:your.email@example.com',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
    },
    {
      icon: <FaGithub size={32} />,
      title: 'GitHub',
      value: 'github.com/username',
      link: 'https://github.com/username',
      color: 'text-gray-800',
      bgColor: 'bg-gray-50',
    },
    {
      icon: <FaLinkedin size={32} />,
      title: 'LinkedIn',
      value: 'linkedin.com/in/username',
      link: 'https://linkedin.com/in/username',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: <FaWeixin size={32} />,
      title: '微信',
      value: 'your-wechat-id',
      link: '#',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
  ]

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            联系我
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            如果你对我的项目感兴趣，或者想要交流技术，欢迎通过以下方式联系我
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.link}
              target={method.link.startsWith('http') ? '_blank' : undefined}
              rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`${method.bgColor} rounded-lg p-6 text-center hover:shadow-lg transition transform hover:-translate-y-1`}
            >
              <div className={`${method.color} flex justify-center mb-4`}>
                {method.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {method.title}
              </h3>
              <p className="text-gray-600 text-sm break-all">
                {method.value}
              </p>
            </a>
          ))}
        </div>

        {/* Contact Form (Optional) */}
        <div className="max-w-2xl mx-auto bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            发送消息
          </h3>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                姓名
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                placeholder="请输入您的姓名"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                邮箱
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                placeholder="请输入您的邮箱"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                消息
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition resize-none"
                placeholder="请输入您的消息"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition transform hover:scale-105"
            >
              发送消息
            </button>
          </form>
          <p className="text-center text-gray-500 text-sm mt-4">
            注：此表单为演示用途，暂未连接后端服务
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact
