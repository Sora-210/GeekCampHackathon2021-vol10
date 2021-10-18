module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  configureWebpack: {
    devServer: {
      proxy: 'http://localhost:8080',
      watchOptions: {
        ignored: /node_modules/,
        poll: true
      }
    }
  }
}
