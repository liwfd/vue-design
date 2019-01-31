const express = require('./server/dev-server')
// const config = require("./config");
const path = require('path')
// //去console插件
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

//
function resolve (dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    // eslint-loader 是否在保存的时候检查
    lintOnSave: false,

    // // webpack-dev-server 相关配置
    devServer: {
        host: '',
        open: true,
        https: false,
        port: 5555,
        proxy: '', // 设置代理
        before: express
    },
    // 生产环境是否生成 sourceMap 文件
    productionSourceMap: true,
    // webpack配置
    //  webpack插件配置
    configureWebpack: config => {
        let plugins = [
            new UglifyJsPlugin({
                uglifyOptions: {
                    compress: {
                        warnings: false,
                        drop_debugger: true,
                        drop_console: true
                    }
                },
                sourceMap: false,
                parallel: true
            })
        ]
        if (process.env.NODE_ENV !== 'development') {
            config.plugins = [...config.plugins, ...plugins]
        }
    },

    // 链式操作webpack
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('assets', resolve('src/assets'))
            .set('styles', resolve('src/assets/styles'))
            .set('components', resolve('src/components'))

        config.module.rule("svg").uses.delete("file-loader");
        config.module // webpackChain 提供的添加 loader 方法
            .rule("svg")
            .use("svg-sprite-loader")
            .loader("svg-sprite-loader")
            .options({
                symbolId: "icon-[name]"
            });
    },
    // 第三方插件配置
    pluginOptions: {

    }
}
