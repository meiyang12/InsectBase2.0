module.exports = {
  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false
    }
  },
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:8000",
        changeOrigin: true,
        ws: true,
        secure: false,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  },


  transpileDependencies: [
    'quasar'
  ]
}