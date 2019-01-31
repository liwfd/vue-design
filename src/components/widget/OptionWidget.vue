<template>
    <el-option :class="nodeInfo.class" v-if="$attrs.show" :ref="nodeInfo.nodeKey" v-bind="$attrs" v-on="$listeners">
        <slot></slot>
    </el-option>
</template>

<script>
    import Option from 'element-ui/lib/option'
    export default {
        name: 'option-widget',
        props: ['nodeInfo'],
        data() {
            return {
                value: this.$attrs.value
            }
        },
        created () {
            // console.log('input', this.$attrs)
        },
        methods: {

        },
        mounted () {
            this.$nextTick(() => {
                // proxy
                Object.keys(Option.methods).forEach((item) => {
                    this[item] = this.$refs[this.nodeInfo.nodeKey][item]
                })
            })
        }
    }
</script>

<style scoped>

</style>
