const path = require('path')

module.exports = {
  reactStrcitMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {

    // config.plugins.push(new WebpackBar())

    return {
      ...config,
      resolve: {
        ...config.resolve,
        modules: [path.resolve(__dirname), 'node_modules'],
      }
    }
  },
}
