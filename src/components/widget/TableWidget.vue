<template>
    <el-table v-if="$attrs.show" v-bind="$attrs" v-on="$listeners" :class="nodeInfo.class" :ref="nodeInfo.nodeKey">
        <el-table-column type="selection" v-if="$attrs.selection" :key="-1"></el-table-column>
        <slot></slot>
    </el-table>
</template>

<script>
    import RenderColumn from './components/render-column'

    export default {
        name: 'table-widget',
        components: { RenderColumn },
        props: ['options', 'nodeInfo', 'children'],
        created () {
            // console.log('this.options', this.options);
        },
        methods: {}
    }
</script>

<style scoped>

</style>
