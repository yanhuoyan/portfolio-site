/**
 * PostCSS 配置文件
 *
 * 作用：配置CSS处理插件
 * PostCSS是一个用JavaScript转换CSS的工具
 *
 * 插件说明：
 * - @tailwindcss/postcss: Tailwind CSS v4的PostCSS插件
 * - autoprefixer: 自动添加CSS浏览器前缀（-webkit-, -moz-等）
 *
 * 类比：类似Java的编译器插件，在编译时处理CSS
 */

export default {
  plugins: {
    // Tailwind CSS v4 插件
    // 作用：处理Tailwind的@import指令，生成工具类CSS
    '@tailwindcss/postcss': {},

    // Autoprefixer 插件
    // 作用：自动添加浏览器前缀，确保CSS兼容性
    // 例如：transform → -webkit-transform, -ms-transform, transform
    autoprefixer: {},
  },
}

