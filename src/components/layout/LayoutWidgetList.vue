<template>
    <div class="widget-list">
        <ul>
            <li v-for="item in layoutWidget">
                <el-button class="widget-btn" type="text" :disabled="disabled(item)"
                           @click="addNode('layout', item.type)">{{item.label}}
                </el-button>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'layout-widget-list',
        props: ['selectNode'],
        computed: {
            disabled () {
                return item => {
                    if (!this.selectNode.type) {
                        return true
                    } else if (item.all) {
                        return false
                    } else if (item.parent.includes(this.selectNode.type)) {
                        return false
                    } else {
                        return true
                    }
                }
            }
        },
        data () {
            return {
                layoutWidget: [{
                    label: '插槽',
                    type: 'slot',
                    parent: [],
                    all: true
                }, {
                    label: '模板',
                    type: 'template',
                    parent: [],
                    all: true
                }, {
                    label: '外层容器',
                    type: 'container-widget',
                    parent: [],
                    all: true
                }, {
                    label: '顶栏容器',
                    type: 'header-widget',
                    parent: [],
                    all: true
                }, {
                    label: '侧边栏容器',
                    type: 'aside-widget',
                    parent: [],
                    all: true
                }, {
                    label: '主要区域容器',
                    type: 'main-widget',
                    parent: [],
                    all: true
                }, {
                    label: '底栏容器',
                    type: 'footer-widget',
                    parent: [],
                    all: true
                }, {
                    label: '栅格布局',
                    type: 'row-widget',
                    parent: [],
                    all: true
                }, {
                    label: '格子',
                    type: 'col-widget',
                    parent: [],
                    all: true
                }, {
                    label: '弹窗',
                    type: 'dialog-widget',
                    parent: ['div', 'row-widget', 'col-widget', 'dialog-widget', 'card-widget', 'collapse-item-widget']
                }, {
                    label: '卡片',
                    type: 'card-widget',
                    parent: ['div', 'row-widget', 'col-widget', 'dialog-widget', 'card-widget', 'collapse-item-widget', 'tab-pane-widget']
                }, {
                    label: '标签页',
                    type: 'tabs-widget',
                    parent: ['div', 'row-widget', 'col-widget', 'dialog-widget', 'card-widget', 'tab-pane-widget']
                }, {
                    label: '页签',
                    type: 'tab-pane-widget',
                    parent: ['tabs-widget']
                }, {
                    label: '面板',
                    type: 'collapse-widget',
                    parent: ['div', 'row-widget', 'col-widget', 'dialog-widget', 'card-widget', 'collapse-item-widget', 'tab-pane-widget']
                }, {
                    label: '面板项',
                    type: 'collapse-item-widget',
                    parent: ['collapse-widget']
                }, {
                    label: '步骤条',
                    type: 'steps-widget',
                    parent: ['div', 'row-widget', 'col-widget', 'dialog-widget', 'card-widget', 'collapse-item-widget', 'tab-pane-widget']
                }, {
                    label: '步骤',
                    type: 'step-widget',
                    parent: ['steps-widget']
                }],
            }
        },
        methods: {
            addNode (mode, type) {
                this.$emit('addNode', mode, type)
            }
        }
    }
</script>

<style scoped lang="scss">
    .widget-list {
        line-height: 30px;
        li {
            list-style: none;
            margin: 0 10px;
            float: left;
            .widget-btn {
                /*color: #000;*/
            }
        }
    }
</style>
