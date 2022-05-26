const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === "production" ? "" : "/",
  outputDir: "dist",
  assetsDir: "app",
  productionSourceMap: false,
  filenameHashing: true,

})
