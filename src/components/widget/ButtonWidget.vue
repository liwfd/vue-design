<template>
    <el-button :ref="nodeInfo.nodeKey" v-if="$attrs.show" v-bind="$attrs" v-on="$listeners" :class="nodeInfo.class">
        <slot></slot>
    </el-button>
</template>

<script>
    import Button from 'element-ui/lib/button'
    export default {
        name: 'button-widget',
        props: ['options', 'nodeInfo'],
        data() {
            return {}
        },
        created() {
            // console.log('created', this.$attrs);
        },
        mounted () {
            this.$attrs.slot = 'footer';
            this.$nextTick(() => {
                // proxy
                Object.keys(Button.methods).forEach((item) => {
                    this[item] = this.$refs[this.nodeInfo.nodeKey][item]
                })
            })
        }
    }
</script>

<style scoped>

</style>
