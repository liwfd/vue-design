<template>
    <div class="nar-bar" @mouseleave="visible = false">
        <el-button class="widget-trg" type="text" @mouseenter.native="hover('layout')">布局组件</el-button>
        <el-button class="widget-trg" type="text" @mouseenter.native="hover('data')">数据组件</el-button>
        <el-button class="widget-trg" type="text" @mouseenter.native="hover('basic')">基础组件</el-button>
        <el-button class="widget-trg" type="text" @mouseenter.native="hover('chart')">图表组件</el-button>
        <el-button class="widget-trg" type="text" @mouseenter.native="hover('widget')">我的部件</el-button>
        <div :class="visible ? 'widget-menu' : 'widget-hidden'" class="trans">
            <layout-widget-list v-if="mode === 'layout'" v-show="visible" @addNode="addNode" :selectNode="selectNode"></layout-widget-list>
            <data-widget-list v-if="mode === 'data'" v-show="visible" @addNode="addNode" :selectNode="selectNode"></data-widget-list>
            <base-widget-list v-if="mode === 'basic'" v-show="visible" @addNode="addNode" :selectNode="selectNode"></base-widget-list>
            <chart-widget-list v-if="mode === 'chart'" v-show="visible" @addNode="addNode" :selectNode="selectNode"></chart-widget-list>
            <my-widget-list v-if="mode === 'widget'" v-show="visible" ref="myWidgetList" @addNode="addNode" :selectNode="selectNode"></my-widget-list>
        </div>
    </div>
</template>x

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
            return {
                visible: false,
                mode: ''
            }
        },
        methods: {
            hover(mode) {
                this.mode = mode;
                this.visible = true;
            },
            addNode (mode, type) {
                this.$emit('addNode', mode, type)
            },
            updateMyWidgets () {
                this.$refs['myWidgetList'] && this.$refs['myWidgetList'].getWidgets();
            }
        }
    }
</script>

<style scoped lang="scss">
    .nar-bar /deep/ {
        height: 50px;
        width: 100%;
        background: #7BEEB2;
        text-align: center;
        position: absolute;
        top: 0;
        z-index: 100;
        overflow: hidden;
        .widget-trg {
            height: 50px;
            padding: 0 20px;
            border-radius: 0;
            font-size: 18px!important;
            margin-left: 0;
            &:hover {
                background: pink;
            }
        }
        .widget-hidden {
            height: 0;
            visibility: hidden;
        }

        .widget-menu {
            height: 80px;
            padding: 20px 50px;
        }

        .widget-btn {
            font-size: 15px;
        }
        .trans {
            transition: all .3s;
            position: fixed;
            top: 50px;
            font-size: 15px!important;
            width: 1000px;
            margin-left: 50%;
            transform: translateX(-50%);
            background: #00000099;
        }
    }
</style>
