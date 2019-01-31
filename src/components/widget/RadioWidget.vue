<template>
    <el-radio v-if="$attrs.show" :ref="nodeInfo.nodeKey" v-bind="$attrs" v-on="$listeners" :class="nodeInfo.class">
        <slot></slot>
    </el-radio>
</template>

<script>
    import Radio from 'element-ui/lib/radio'
    export default {
        name: 'radio-widget',
        props: ['options', 'nodeInfo'],
        mounted () {
            this.$nextTick(() => {
                // proxy
                Object.keys(Radio.methods).forEach((item) => {
                    this[item] = this.$refs[this.nodeInfo.nodeKey][item]
                })
            })
        }
    }
</script>

<style scoped>

</style>
