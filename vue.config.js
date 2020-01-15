// For extra aliases you can use chanWebpack
// const path = require('path')

module.exports = {
  productionSourceMap: false,
  lintOnSave: false

  // How to add custom aliases
  // chainWebpack: config => {
  //   config.resolve.alias.set('folder1', path.resolve(__dirname, 'src/folder1'))
  // }

  // Sass preload example for sass-loader v8+
  // css: {
  //   loaderOptions: {
  //     sass: {
  //       prependData: ` @import '@/assets/sass/_theme.scss';`
  //     }
  //   }
  // },
}
