<template>
    <div class="widget-list">
        <ul>
            <li v-for="item in chartWidget">
                <el-button class="widget-btn" type="text" :disabled="disabled(item)" draggable
                           @click="addNode('chart', item.type)" @dragstart.native="ev => drag(ev, 'chart', item)">{{item.label}}
                </el-button>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'chart-widget-list',
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
                chartWidget: [{
                    label: '折线图',
                    type: 've-line-chart',
                    parent: ['div', 'row-widget', 'col-widget', 'dialog-widget', 'card-widget', 'collapse-item-widget', 'drawer-widget']
                },{
                    label: '柱状图',
                    type: 've-bar-chart',
                    parent: ['div', 'row-widget', 'col-widget', 'dialog-widget', 'card-widget', 'collapse-item-widget', 'drawer-widget']
                },{
                    label: '饼图',
                    type: 've-pie-chart',
                    parent: ['div', 'row-widget', 'col-widget', 'dialog-widget', 'card-widget', 'collapse-item-widget', 'drawer-widget']
                },{
                    label: '环形图',
                    type: 've-donut-chart',
                    parent: ['div', 'row-widget', 'col-widget', 'dialog-widget', 'card-widget', 'collapse-item-widget', 'drawer-widget']
                },],
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
