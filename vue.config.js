const express = require('./server/dev-server')
const markdownRender = require('markdown-it')()
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
        } else {
            config.entry['app'].push('./mock/index.js')
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
        config.module
            .rule('md')
            .test(/\.md$/)
            .use('vue-loader')
            .loader('vue-loader')
            .end()
            .use("vue-markdown-loader")
            .loader('vue-markdown-loader/lib/markdown-compiler')
            .options({
                raw: true,
                use: [
                    [require('markdown-it-container'), 'demo', {
                        validate: function (params) {
                            return params.trim().match(/^demo\s*(.*)$/)
                        },
                        render: function (tokens, idx) {
                            if (tokens[idx].nesting === 1) {
                                // 1.获取第一行的内容使用markdown渲染html作为组件的描述
                                let demoInfo = tokens[idx].info.trim().match(/^demo\s+(.*)$/)
                                let description = (demoInfo && demoInfo.length > 1) ? demoInfo[1] : ''
                                let descriptionHTML = description ? markdownRender.render(description) : ''
                                // 2.获取代码块内的html和js代码
                                let content = tokens[idx + 1].content
                                // 3.使用自定义开发组件【DemoBlock】来包裹内容并且渲染成案例和代码示例
                                return `<demo-block>
                                            <div class="source" slot="source">${content}</div>
                                            ${descriptionHTML}
                                            <div class="highlight" slot="highlight">`
                            } else {
                                return '</div></demo-block>\n'
                            }
                        }
                    }]
                ]
            })
    },
    // 第三方插件配置
    pluginOptions: {

    }
}
