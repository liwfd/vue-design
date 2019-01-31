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
                    parent: ['div', 'row-widget', 'col-widget', 'dialog-widget', 'card-widget']
                }, {
                    label: '卡片',
                    type: 'card-widget',
                    parent: ['div', 'row-widget', 'col-widget', 'dialog-widget', 'card-widget']
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
