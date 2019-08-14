<template>
    <div class="main">
        <navbar @addNode="addNode" :selectNode="selectNode" ref="navbar"></navbar>
        <div style="height: 50px;"></div>
        <split-pane split="vertical" @resize="resize" :default-percent='70'>
            <template slot="paneL">
                <split-pane split="vertical" :default-percent='20'>
                    <template slot="paneL">
                        <el-card class="tree-card">
                            <div slot="header" class="clearfix">
                                <span>节点树</span>
                            </div>
                            <node-tree :data.sync="jsonData" @nodeClick="nodeClick" @handle="handleNode"
                                       @nodeDrop="nodeDrop" :currentNode="selectNode"></node-tree>
                        </el-card>
                    </template>
                    <template slot="paneR">
                        <tool-bar @handle="handleTool" :page="page"></tool-bar>
                        <fullscreen ref="fullscreen" style="background: #fff;">
                            <div :style="{padding: '5px 0', height: height, overflow: 'auto', width: '100%'}">
                                <widget-page key="wp" ref="page" :data="jsonData" @handle="handlePage"></widget-page>
                            </div>
                        </fullscreen>
                    </template>
                </split-pane>
            </template>
            <template slot="paneR">
                <split-pane split="horizontal">
                    <template slot="paneL">
                        <div class="top-container">
                            <el-tabs type="border-card" style="height: 100%;">
                                <el-tab-pane label="属性配置" style="z-index: 0;">
                                    <prop-setting ref="propSetting" :propData="selectNode"
                                                  @setProp="(key, value) => selectNode.options[key] = value"
                                                  @addChild="addNode"></prop-setting>
                                </el-tab-pane>
                                <el-tab-pane label="节点配置" style="z-index: 0;">
                                    <node-setting :nodeData="selectNode"></node-setting>
                                </el-tab-pane>
                            </el-tabs>
                        </div>
                    </template>
                    <template slot="paneR" style="z-index: 1;">
                        <style-setting :styleData="selectNode" @save="saveStyle"></style-setting>
                    </template>
                </split-pane>
            </template>
        </split-pane>
        <json-edit-dialog :visible.sync="jsonVisible" @saveJson="saveJson"></json-edit-dialog>
        <html-view-dialog :visible.sync="htmlVisible" :htmlTemplate="htmlTemplate"
                          :formatHtml="formatHtml"></html-view-dialog>
    </div>
</template>

<script>
    import splitPane from 'vue-splitpane'
    import Navbar from '../components/layout/navbar'
    import NodeTree from '../components/layout/nodeTree'
    import WidgetPage from '../components/layout/widgetPage'
    import ToolBar from '../components/layout/toolBar'
    import JSONEditor from 'jsoneditor'
    import vkbeautify from 'vkbeautify'
    import PropSetting from '../components/layout/prop-setting'
    import NodeSetting from '../components/layout/node-setting'
    import StyleSetting from '../components/layout/style-setting'
    import JsonEditDialog from './components/jsonEditDialog'
    import HtmlViewDialog from './components/htmlViewDialog'

    export default {
        name: 'home',
        components: {
            HtmlViewDialog,
            JsonEditDialog,
            StyleSetting,
            NodeSetting,
            PropSetting,
            ToolBar,
            WidgetPage,
            NodeTree,
            Navbar,
            splitPane
        },
        data () {
            return {
                fullscreen: false,
                jsonVisible: false,
                htmlVisible: false,
                selectNode: {},
                editor: {},
                htmlTemplate: '',
                formatHtml: '',
                formKey: '',
                page: {
                    pageId: ''
                },
                height: window.innerHeight - 100 + 'px',
                jsonData: [{
                    label: '根节点',
                    type: 'div',
                    eleType: 'div',
                    style: {
                        overflow: 'auto',
                        height: '100%'
                    },
                    uiKey: 'root',
                    nodeKey: 'root',
                    children: []
                }]
            }
        },
        computed: {
            dragOptions() {
                return {
                    animation: 0,
                    group: "description",
                    disabled: false,
                    ghostClass: "ghost"
                };
            }
        },
        created () {

        },
        mounted () {
            window.addEventListener('resize', () => {
                this.height = window.innerHeight - 100 + 'px'
            })
        },
        methods: {
            allowDrop (ev) {
                ev.preventDefault()
                // console.log('ev', ev);
            },
            drop () {
                console.log('----------------------drop-------------------------')
            },
            //树拖拽结束
            nodeDrop () {
                // this.jsonData = JSON.parse(JSON.stringify(this.jsonData));
            },
            resize () {
                console.log('resize')
            },
            toggle () {
                this.$refs['fullscreen'].toggle()
            },
            view () {
                this.page.pageId && this.$fetch.post('/api/getFile', {
                    pageId: this.page.pageId,
                    type: 'pages'
                }).then(jRes => {
                    jRes.json().then(res => {
                        if (res.success) {
                            this.jsonData = JSON.parse(res.data).data || this.jsonData
                        } else {
                            this.$message.error(`pageId--[${this.page.pageId}]不存在！`)
                        }
                    })
                })
            },
            addNode (mode, type, uiKey) {
                let key = new Date().getTime() + '_' + Math.ceil(Math.random() * 99999)
                let pk = ''
                if (uiKey) {
                    pk = uiKey
                } else {
                    pk = this.selectNode.uiKey
                }
                const loop = data => {
                    data.map(item => {
                        if ('form-widget' === item.type) {
                            this.formKey = item.nodeKey
                        }
                        if (item.uiKey === pk) {
                            if (mode === 'widget') {
                                this.addWidget(item, mode, key, type)
                                return
                            }
                            let widget = this._.cloneDeep(this.$constants.widgets[mode][type])
                            let bros = item.children.filter(v => v.type === widget.type)
                            widget.uiKey = type + '_' + key
                            this.setOptions(widget, bros, mode)
                            item.children.push(widget)
                        } else if (item.children && item.children.length > 0) {
                            loop(item.children)
                        }
                    })
                }
                this.$nextTick(_ => {
                    loop(this.jsonData)
                })
            },
            addWidget (item, mode, key, type) {
                this.$fetch.post('/api/getFile', { pageId: type, type: 'widgets' }).then(jRes => {
                    jRes.json().then(res => {
                        if (res.success) {
                            let wid = JSON.parse(res.data).data
                            wid.uiKey = mode + '_' + key
                            item.children.push(wid)
                        }
                    })
                })
            },
            setOptions (widget, bros, mode) {

                bros.length++
                //nodeInfo
                widget.nodeKey += bros.length
                widget.label += bros.length
                widget.options.key = widget.uiKey

                //options
                widget.options.label && (widget.options.label += bros.length)
                widget.options.prop && (widget.options.prop += bros.length)
                widget.options.value && (widget.options.value += bros.length)
                widget.options.name && (widget.options.name += bros.length)
                widget.options.text && (widget.options.text += bros.length)
                mode !== 'chart' && widget.options.title && (widget.options.title += bros.length)
                if (this.$constants.inWidgets.includes(widget.type)) {
                    widget.options.formKey = this.formKey
                }
            },
            nodeClick (node) {
                this.selectNode = node
            },
            setAttr (node, key, value) {
                node.setAttribute(key, value)
            },
            generateHtml (data) {
                let el = document.createElement(data.eleType)
                // 设置属性
                for (let prop in data.options) {
                    if (data.options.hasOwnProperty(prop)) {
                        if (typeof data.options[prop] === 'string') {
                            this.setAttr(el, prop, data.options[prop])
                        } else {
                            this.setAttr(el, ':' + prop, data.options[prop])
                        }
                        if (['el-button', 'el-radio', 'el-checkbox'].includes(data.eleType)) {
                            el.innerText = data.options.text
                        }
                    }
                }

                //设置class
                data.class && this.setAttr(el, 'class', data.class)

                //设置style
                let style = ''
                data.style && Object.keys(data.style).map(item => style += item + ': ' + data.style[item] + ';')
                if (style) el.style = style
                data.children && data.children.map(item => {
                    let childNode = this.generateHtml(item)
                    if (data.eleType === 'template') {
                        el.innerHTML += childNode.outerHTML
                    } else {
                        el.appendChild(childNode)
                    }
                })
                return el
            },
            showHtml () {
                this.htmlVisible = true
                let xml = this.generateHtml(this.jsonData[0]).outerHTML
                this.formatHtml = vkbeautify.xml(xml)
                this.htmlTemplate = `\n${vkbeautify.xml(xml)}\n`
            },
            save () {
                if (!this.page.pageId) {
                    this.$message.error('请先输入pageId')
                    return
                }
                this.$fetch.post('/api/setFile', {
                    data: this.jsonData,
                    pageId: this.page.pageId,
                    type: 'pages'
                }).then(jRes => {
                    jRes.json().then(res => {
                        if (res.success) {
                            this.$message.success('保存成功！')
                        }
                    })
                })
            },
            handleTool (action) {
                this[action]()
            },
            handlePage (action, uiKey, ext) {
                if (action === 'cancel') {
                    const loop = data => {
                        data.map(item => {
                            if (item.uiKey === uiKey) {
                                item.options.visible = false
                            }
                            if (item.children && item.children.length > 0) {
                                loop(item.children)
                            }
                        })
                    }
                    loop(this.jsonData)
                } else if (action === 'dropDown') {
                    // this.selectNode.uiKey = uiKey;
                    this.addNode(ext.mode, ext.type, uiKey)
                }
            },
            handleNode (action) {
                //删除节点
                if (action === 'delete') {
                    const loop = (data, parent) => {
                        data.map((item, index) => {
                            if (item.uiKey === this.selectNode.uiKey) {
                                parent.children.splice(index, 1)
                            }
                            if (item.children && item.children.length > 0) {
                                loop(item.children, item)
                            }
                        })
                    }
                    loop(this.jsonData, {})
                } else if (action === 'clear') {
                    const loop = data => {
                        data.map(item => {
                            if (item.uiKey === this.selectNode.uiKey) {
                                item.children = []
                            }
                            if (item.children && item.children.length > 0) {
                                loop(item.children)
                            }
                        })
                    }
                    loop(this.jsonData)
                } else if (action === 'edit') {
                    this.jsonVisible = true
                    this.$nextTick(_ => {
                        const container = document.getElementById('jsoneditor')
                        const editor = new JSONEditor(container, {
                            mode: 'code',
                            indentation: 4
                        })
                        this.editor = editor
                        editor.set(this.selectNode)
                    })
                } else if (action === 'updateMyWidgets') {
                    this.$refs['navbar'].updateMyWidgets()
                }

            },
            saveJson () {
                const loop = (data, parent) => {
                    return data.map((item, index) => {
                        if (item.children && item.children.length > 0) {
                            loop(item.children, item)
                        }
                        if (item.uiKey === this.selectNode.uiKey) {
                            if (parent.children) {
                                parent.children.splice(index, 1, this.editor.get())
                            } else {
                                this.jsonData = [this.editor.get()]
                            }
                        }
                    })
                }
                loop(this.jsonData, {})
                this.jsonVisible = false
            },
            saveStyle (style) {
                const loop = data => {
                    data.map(item => {
                        if (item.uiKey === this.selectNode.uiKey) {
                            item.style = style
                        }
                        if (item.children && item.children.length > 0) {
                            loop(item.children)
                        }
                    })
                }
                loop(this.jsonData)
            }
        },
        beforeRouteLeave (to, from, next) {
            this.$confirm('有数据未保存，是否离开页面?', '提示', {
                confirmButtonText: '离开',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                next()
            }).catch(() => {
                next(false)
            })
        }
    }
</script>

<style scoped lang="scss">
    .main {
        position: relative;
        height: 100vh;
    }

    .bottom-container {
        width: 100%;
        background-color: pink;
        height: 100%;
    }
</style>

<style lang="scss">
    .top-container {
        width: 100%;
        height: 100%;
        .el-tabs--border-card > .el-tabs__header .el-tabs__item.is-active {
            background: pink;
        }

        .el-tabs--border-card > .el-tabs__content {
            height: 100%;
            background: #7BEEB2 !important;
            z-index: 0;
        }
    }

    .tree-card {
        height: 100%;
        background: pink !important;
        border: 0 !important;
        border-radius: 0 !important;
        .el-card__header {
            padding: 9px 20px;
            color: #409EFF;
        }
        .el-card__body {
            height: 100%;
            background: #7BEEB2 !important;
        }
    }

</style>
