<template>
    <el-table-column v-if="$attrs.show" v-bind="$attrs" v-on="$listeners" :class="nodeInfo.class" :ref="nodeInfo.nodeKey">
        <template slot-scope="scope">
            <template v-if="!options.formatter">
                <render-column v-if="options.render" :scope="scope" :render="options.render"></render-column>
                <span v-else>{{scope.row[options.prop]}}</span>
            </template>
            <template v-else>
                <span v-html="options.formatter(scope.row, options)"></span>
            </template>
        </template>
    </el-table-column>
</template>

<script>
    import RenderColumn from './components/render-column'
    export default {
        name: 'table-column-widget',
        components: { RenderColumn },
        props: ['options', 'nodeInfo'],
        created () {
            // console.log('options', this.options)
        }
    }
</script>

<style scoped>

</style>
