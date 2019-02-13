<template>
    <div class="nar-bar">
        <el-popover
            placement="bottom"
            title="请选择基础组件"
            width="500"
            trigger="hover">
            <base-widget-list @addNode="addNode" :selectNode="selectNode"></base-widget-list>
            <el-button class="widget-btn" slot="reference" type="text">基础组件</el-button>
        </el-popover>
        <el-popover
            placement="bottom"
            title="请选择图表组件"
            width="500"
            trigger="hover">
            <chart-widget-list @addNode="addNode" :selectNode="selectNode"></chart-widget-list>
            <el-button class="widget-btn" slot="reference" type="text">图表组件</el-button>
        </el-popover>
        <el-popover
            placement="bottom"
            title="请选择数据组件"
            width="500"
            trigger="hover">
            <data-widget-list @addNode="addNode" :selectNode="selectNode"></data-widget-list>
            <el-button class="widget-btn" slot="reference" type="text">数据组件</el-button>
        </el-popover>
        <el-popover
            placement="bottom"
            title="请选择布局组件"
            width="500"
            trigger="hover">
            <layout-widget-list @addNode="addNode" :selectNode="selectNode"></layout-widget-list>
            <el-button class="widget-btn" slot="reference" type="text">布局组件</el-button>
        </el-popover>
        <el-popover
            placement="bottom"
            title="请选择我的部件"
            width="500"
            trigger="hover">
            <my-widget-list ref="myWidgetList" @addNode="addNode" :selectNode="selectNode"></my-widget-list>
            <el-button class="widget-btn" slot="reference" type="text">我的部件</el-button>
        </el-popover>
    </div>
</template>

<script>
    import BaseWidgetList from './BaseWidgetList'
    import DataWidgetList from './DataWidgetList'
    import LayoutWidgetList from './LayoutWidgetList'
    import ChartWidgetList from './ChartWidgetList'
    import MyWidgetList from './MyWidgetList'

    export default {
        name: 'navbar',
        components: { MyWidgetList, ChartWidgetList, LayoutWidgetList, DataWidgetList, BaseWidgetList },
        props: ['selectNode'],
        data () {
            return {}
        },
        methods: {
            addNode (mode, type) {
                this.$emit('addNode', mode, type)
            },
            updateMyWidgets () {
                this.$refs['myWidgetList'].getWidgets();
            }
        }
    }
</script>

<style scoped lang="scss">
    .nar-bar {
        height: 50px;
        width: 100%;
        background: #95E1D3;
        text-align: center;
        position: absolute;
        top: 0;
        z-index: 100;
        overflow: hidden;
        .widget-btn {
            height: 50px;
            margin: 0 20px;
            border-radius: 0;
            padding-bottom: 5px;
            font-size: 18px;
            &:hover {
                background: #FCE38A;
            }
        }
    }
</style>
