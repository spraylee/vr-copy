const path = require('path')

// 拼接路径
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: './',
  lintOnSave: false,
  productionSourceMap: false,
  devServer: {
    port: '9122',
    // publicPath: './', // 和 baseUrl 保持一致
    proxy: {
      '/lhnkmanage-server': {
        target: 'http://134.175.23.248:80',
        // pathRewrite: { '/_dev': '/' },
        changeOrigin: true,
      },
      '/ueditor': {
        target: 'http://134.175.23.248:80',
        // pathRewrite: { '/_dev': '/' },
        changeOrigin: true,
      },
    },
  },
  pluginOptions: {
    quasar: {
      treeShake: true,
    },
  },
  transpileDependencies: [/[\\\/]node_modules[\\\/]quasar[\\\/]/],
  chainWebpack: config => {
    config.resolve.alias.set('@', resolve('src')).set('src', resolve('src'))
    // .set("config", resolve("src/config"))
    // .set("service", resolve("src/service"))
    // .set("components", resolve("src/components"))
    // .set("utils", resolve("src/utils"))
    // .set("views", resolve("src/views"))
    // .set("pages", resolve("src/pages"))
    // .set("assets", resolve("src/assets"))
    // .set("layouts", resolve("src/layouts"))
    // .set("styles", resolve("src/styles"))
    // .set("mixins", resolve("src/mixins"))
    // .set("plugins", resolve("src/plugins"))
    // .set("modules", resolve("src/modules"));
  },
}
