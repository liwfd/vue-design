<template>
    <div class="widget-list">
        <ul>
            <li v-for="item in basicWidget">
                <el-button class="widget-btn" type="text" draggable
                           :disabled="disabled(item)" @dragstart.native="ev => drag(ev, 'basic', item)"
                           @click="addNode('basic', item.type)">{{item.label}}
                </el-button>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'base-widget-list',
        props: ['selectNode'],
        computed: {
            disabled() {
                return item => {
                    if (!this.selectNode.type) {
                        return true;
                    } else if (item.all) {
                        return false;
                    } else if (this.selectNode.mode === 'layout') {
                        return false;
                    } else if (item.parent.includes(this.selectNode.type)) {
                        return false;
                    } else {
                        return true;
                    }
                }
            }
        },
        data () {
            return {
                basicWidget: [{
                    label: '文本',
                    type: 'span',
                    parent: ['div', 'form-item-widget', 'row-widget', 'col-widget', 'dialog-widget', 'template', 'link-widget']
                }, {
                    label: '链接',
                    type: 'link-widget',
                    parent: ['div', 'form-item-widget', 'row-widget', 'col-widget', 'dialog-widget', 'template']
                }, {
                    label: '图标',
                    type: 'icon',
                    parent: ['div', 'form-item-widget', 'row-widget', 'col-widget', 'dialog-widget', 'template']
                }, {
                    label: '输入框',
                    type: 'input-widget',
                    parent: ['div', 'form-item-widget', 'row-widget', 'col-widget', 'dialog-widget', 'template']
                }, {
                    label: '计数器',
                    type: 'input-number-widget',
                    parent: ['div', 'form-item-widget', 'row-widget', 'col-widget', 'dialog-widget', 'template']
                }, {
                    label: '按钮',
                    type: 'button-widget',
                    parent: ['div', 'form-item-widget', 'row-widget', 'col-widget', 'dialog-widget', 'template']
                }, {
                    label: '开关',
                    type: 'switch-widget',
                    parent: ['div', 'form-item-widget', 'row-widget', 'col-widget', 'dialog-widget', 'template']
                }, {
                    label: '下拉选择',
                    type: 'select-widget',
                    parent: ['div', 'form-item-widget', 'row-widget', 'col-widget', 'dialog-widget', 'template']
                }, {
                    label: '单选',
                    type: 'radio-group-widget',
                    parent: ['div', 'form-item-widget', 'row-widget', 'col-widget', 'dialog-widget', 'template']
                }, {
                    label: '单选选项',
                    type: 'radio-widget',
                    parent: ['radio-group-widget']
                }, {
                    label: '复选',
                    type: 'checkbox-group-widget',
                    parent: ['div', 'form-item-widget', 'row-widget', 'col-widget', 'dialog-widget', 'template']
                }, {
                    label: '复选选项',
                    type: 'checkbox-widget',
                    parent: ['checkbox-group-widget']
                }, {
                    label: '级联选择',
                    type: 'cascader-widget',
                    parent: ['div', 'form-item-widget', 'row-widget', 'col-widget', 'dialog-widget', 'template']
                }, {
                    label: '日期选择',
                    type: 'date-picker-widget',
                    parent: ['div', 'form-item-widget', 'row-widget', 'col-widget', 'dialog-widget', 'template']
                }, {
                    label: '时间选择',
                    type: 'time-picker-widget',
                    parent: ['div', 'form-item-widget', 'row-widget', 'col-widget', 'dialog-widget', 'template']
                }, {
                    label: '步骤条',
                    type: 'steps-widget',
                    parent: ['div', 'row-widget', 'col-widget', 'dialog-widget', 'card-widget', 'collapse-item-widget', 'tab-pane-widget']
                }]
            }
        },
        methods: {
            addNode (mode, type) {
                this.$emit('addNode', mode, type)
            },
            drag(ev, mode, item) {
                item.mode = mode;
                ev.dataTransfer.setData('elData', JSON.stringify(item));
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
        }
    }
</style>
