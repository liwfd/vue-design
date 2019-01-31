<template>
    <el-checkbox :ref="nodeInfo.nodeKey" v-if="$attrs.show" v-bind="$attrs" v-on="$listeners" :class="nodeInfo.class">
        <slot></slot>
    </el-checkbox>
</template>

<script>
    import Checkbox from 'element-ui/lib/checkbox'
    export default {
        name: 'checkbox-widget',
        props: ['options', 'nodeInfo'],
        mounted () {
            this.$nextTick(() => {
                // proxy
                Object.keys(Checkbox.methods).forEach((item) => {
                    this[item] = this.$refs[this.nodeInfo.nodeKey][item]
                })
            })
        }
    }
</script>

<style scoped>

</style>
