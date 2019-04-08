const webpack = require('webpack')
const merge = require('webpack-merge')
const nodeExternals = require('webpack-node-externals')
const baseConfig = require('./webpack.base.config')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')

module.exports = merge(baseConfig, {
    entry: './src/entry-server.js',

    target: 'node',

    devtool: 'source-map',

    output: {
        filename: 'server-bundle.js',
        libraryTarget: 'commonjs2'
    },

    externals: nodeExternals({
        // 不要外置化 webpack 需要处理的依赖模块
        whitelist: /\.css$/
    }),

    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
            'process.env.VUE_ENV': '"server"'
          }),
        new VueSSRServerPlugin()
    ]
})