const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')

module.exports = merge(baseConfig, {
    entry: {
        app: './src/entry-client.js'
    },
    //Since webpack v4, the CommonsChunkPlugin was removed in favor of optimization.splitChunks
    optimization: {
        splitChunks: {
            name: "mainfesy",
            minChunks: Infinity
        }
    },
    plugins: [
        new VueSSRClientPlugin()
    ]
})