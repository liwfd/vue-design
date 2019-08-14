<template>
    <div class="widget-list">
        <ul>
            <li v-for="item in dataWidget">
                <el-button class="widget-btn" type="text" :disabled="disabled(item)" draggable @dragstart.native="ev => drag(ev, 'data', item)"
                           @click="addNode('data', item.type)">{{item.label}}
                </el-button>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'data-widget-list',
        props: ['selectNode'],
        computed: {
            disabled() {
                return item => {
                    if (!this.selectNode.type) {
                        return true;
                    } else if (item.all) {
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
                dataWidget: [{
                    label: '表格',
                    type: 'table-widget',
                    parent: ['div', 'row-widget', 'col-widget', 'dialog-widget', 'template', 'card-widget', 'collapse-item-widget', 'drawer-widget']
                }, {
                    label: '分页',
                    type: 'pagination-widget',
                    parent: ['div', 'row-widget', 'col-widget', 'dialog-widget', 'template', 'card-widget', 'collapse-item-widget', 'drawer-widget']
                }, {
                    label: '表单',
                    type: 'form-widget',
                    parent: ['div', 'row-widget', 'col-widget', 'dialog-widget', 'template', 'card-widget', 'collapse-item-widget', 'drawer-widget']
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
