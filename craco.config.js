const path = require('path')
const CracoLessPlugin = require('craco-less')

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin
    }
  ],
  webpack: {
    alias: {
      '@': path.join(__dirname, 'src')
    }
  }
}
