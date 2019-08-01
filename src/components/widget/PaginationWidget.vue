<template>
    <el-pagination :ref="nodeInfo.nodeKey" v-if="$attrs.show" v-bind="$attrs" v-on="$listeners" :class="nodeInfo.class" :layout="$attrs.layout.join(',')">
        <slot></slot>
    </el-pagination>
</template>

<script>
    import Pagination from 'element-ui/lib/pagination'
    export default {
        name: 'pagination-widget',
        props: ['options', 'nodeInfo'],
        data() {
            return {}
        },
        created() {
            // console.log('created', this.$attrs);
        },
        mounted () {
            this.$nextTick(() => {
                // proxy
                Object.keys(Pagination.methods).forEach((item) => {
                    this[item] = this.$refs[this.nodeInfo.nodeKey][item]
                })
            })
        }
    }
</script>

<style scoped>

</style>
