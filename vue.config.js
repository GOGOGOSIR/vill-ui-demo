const {resolve} = require('path')
module.exports = {
  publicPath: '/',
  // chainWebpack: config => {
  //   // 查看打包文件体积大小
  //   config
  //     .plugin('webpack-bundle-analyzer')
  //     .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
  // },
  devServer: {
    host: '0.0.0.0'
  }
}
