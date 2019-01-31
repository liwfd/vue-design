<template>
    <el-form-item v-if="$attrs.show" :ref="nodeInfo.nodeKey" v-bind="$attrs" v-on="$listeners" :class="nodeInfo.class">
        <slot></slot>
    </el-form-item>
</template>

<script>
    import FormItem from 'element-ui/lib/form-item'

    export default {
        name: 'form-item-widget',
        props: ['options', 'nodeInfo'],
        created () {

        },
        methods: {

        },
        mounted () {
            this.$nextTick(() => {
                // proxy
                this.$attrs.show && Object.keys(FormItem.methods).forEach((item) => {
                    this[item] = this.$refs[this.nodeInfo.nodeKey][item]
                })
            })
        },
    }
</script>

<style scoped>

</style>
