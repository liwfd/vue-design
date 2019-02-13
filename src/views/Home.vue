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
                                <widget-page ref="page" :data="jsonData" @handle="handlePage"></widget-page>
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
                                <el-tab-pane label="属性配置">
                                    <prop-setting ref="propSetting" :propData="selectNode"></prop-setting>
                                </el-tab-pane>
                                <el-tab-pane label="节点配置">
                                    <node-setting :nodeData="selectNode"></node-setting>
                                </el-tab-pane>
                            </el-tabs>
                        </div>
                    </template>
                    <template slot="paneR">
                        <style-setting :styleData="selectNode" @save="saveStyle"></style-setting>
                    </template>
                </split-pane>
            </template>
        </split-pane>
        <el-dialog v-el-drag-dialog
                   class="code-dialog"
                   v-if="jsonVisible"
                   :close-on-click-modal="false"
                   title="编辑JSON"
                   :visible="jsonVisible"
                   width="40%"
                   :before-close="cancel">
            <div id="jsoneditor" style="width: 100%; height: 500px;"></div>
            <template slot="footer" class="dialog-footer">
                <el-button @click="cancel">取 消</el-button>
                <el-button type="primary" @click="saveJson">确 定</el-button>
            </template>
        </el-dialog>
        <el-dialog v-el-drag-dialog
                   class="code-dialog"
                   v-if="htmlVisible"
                   :close-on-click-modal="false"
                   title="查看HTML"
                   :visible="htmlVisible"
                   width="40%"
                   :before-close="cancel">
            <pre v-highlightjs v-if="htmlTemplate" style="margin: -20px 0 -30px 0;">
                <code class="xml" style="padding-left: -150px;">
                    <div
                        style="margin: -20px 0;max-height: 500px;overflow: auto;padding-bottom: 20px;">{{htmlTemplate}}</div>
                </code>
            </pre>
            <template slot="footer" class="dialog-footer">
                <el-button @click="cancel">取 消</el-button>
                <el-button type="primary" @click="copy">复 制</el-button>
            </template>
        </el-dialog>
    </div>
</template>

<script>
    import splitPane from 'vue-splitpane'
    import Navbar from '../components/layout/navbar'
    import NodeTree from '../components/layout/nodeTree'
    import WidgetPage from '../components/layout/widgetPage'
    import ToolBar from '../components/layout/toolBar'
    import JSONEditor from 'jsoneditor'
    import 'jsoneditor/dist/jsoneditor.min.css'
    import vkbeautify from 'vkbeautify'
    import PropSetting from '../components/layout/prop-setting'
    import NodeSetting from '../components/layout/node-setting'
    import StyleSetting from '../components/layout/style-setting'

    export default {
        name: 'home',
        components: { StyleSetting, NodeSetting, PropSetting, ToolBar, WidgetPage, NodeTree, Navbar, splitPane },
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
                height: window.innerHeight - 100 + "px",
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
        created () {

        },
        mounted() {
            window.addEventListener("resize", () => {
                this.height = window.innerHeight - 100 + "px";
            });
        },
        methods: {
            //树拖拽结束
            nodeDrop () {
                // this.jsonData = JSON.parse(JSON.stringify(this.jsonData));
            },
            resize () {
                console.log('resize')
            },
            copy () {
                let vm = this
                this.$copyText(this.formatHtml).then(e => {
                    vm.$message.success({ message: '复制成功', duration: 2000 })
                    vm.htmlVisible = false
                })
            },
            toggle () {
                this.$refs['fullscreen'].toggle()
            },
            view () {
                this.page.pageId && this.$fetch.post('/api/getFile', { pageId: this.page.pageId, type: 'pages' }).then(jRes => {
                    jRes.json().then(res => {
                        if (res.success) {
                            this.jsonData = JSON.parse(res.data).data || this.jsonData
                        } else {
                            this.$message.error(`pageId--[${this.page.pageId}]不存在！`);
                        }
                    })
                })
            },
            addNode (mode, type) {
                let key = new Date().getTime() + '_' + Math.ceil(Math.random() * 99999)
                const loop = data => {
                    data.map(item => {
                        if ('form-widget' === item.type) {
                            this.formKey = item.nodeKey
                        }
                        if (item.uiKey === this.selectNode.uiKey) {
                            if (mode === 'widget') {
                                this.$fetch.post('/api/getFile', { pageId: type, type: 'widgets' }).then(jRes => {
                                    jRes.json().then(res => {
                                        if (res.success) {
                                            let wid = JSON.parse(res.data).data;
                                            wid.uiKey = mode + '_' + key;
                                            item.children.push(wid);
                                        }
                                    })
                                })
                                return;
                            }
                            let widget = this._.cloneDeep(this.$constants.widgets[mode][type])
                            let bros = item.children.filter(v => v.type === widget.type)
                            bros.length++

                            //nodeInfo
                            widget.uiKey = type + '_' + key
                            widget.nodeKey += bros.length
                            widget.label += bros.length

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
                            item.children.push(widget)
                        }
                        if (item.children && item.children.length > 0) {
                            loop(item.children)
                        }
                    })
                }
                loop(this.jsonData)
            },
            cancel () {
                this.jsonVisible = false
                this.htmlVisible = false
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
                data.children.map(item => {
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
                    this.$message.error('请先输入pageId');
                    return;
                }
                this.$fetch.post('/api/setFile', { data: this.jsonData, pageId: this.page.pageId, type: 'pages' }).then(jRes => {
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
            handlePage (action, uiKey) {
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
                    this.$refs['navbar'].updateMyWidgets();
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
        background-color: #FCE38A;
        height: 100%;
    }
</style>

<style lang="scss">
    #jsoneditor, #htmleditor {
        .jsoneditor-menu {
            display: none;
        }

        .jsoneditor-outer.has-main-menu-bar {
            margin-top: 0;
            padding-top: 0;
        }

        div.jsoneditor {
            border: 1px solid #aaa;
        }
    }

    .top-container {
        width: 100%;
        height: 100%;
        .el-tabs--border-card > .el-tabs__header .el-tabs__item.is-active {
            background: #FCE38A;
        }

        .el-tabs--border-card > .el-tabs__content {
            height: 100%;
            background: #95E1D3 !important;
        }
    }

    .tree-card {
        height: 100%;
        background: #FCE38A !important;
        border: 0 !important;
        .el-card__header {
            padding: 9px 20px;
            color: #409EFF;
        }
        .el-card__body {
            height: 100%;
            background: #95E1D3 !important;
        }
    }

    .code-dialog {
        .el-dialog__body {
            padding: 5px 0 !important;
        }
    }
</style>
