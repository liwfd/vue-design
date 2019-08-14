<template>
    <el-drawer v-if="$attrs.show" :ref="nodeInfo.nodeKey" v-bind="$attrs" v-on="$listeners"
               @close="cancel"
               :visible.sync="visible" :class="nodeInfo.class">
        <template v-if="!$attrs.title" slot="title">
            <slot name="title"></slot>
        </template>
        <slot></slot>
    </el-drawer>
</template>

<script>
    import Drawer from 'element-ui/lib/drawer'

    export default {
        name: 'drawer-widget',
        props: ['nodeInfo'],
        data () {
            return {
                visible: this.$attrs.visible
            }
        },
        watch: {
            '$attrs.visible' (newData) {
                this.visible = newData
            }
        },
        methods: {
            cancel () {
                this.visible = false
                this.$emit('handle', 'cancel', this.nodeInfo.uiKey);
            }
        },
        mounted () {
            this.$nextTick(() => {
                // proxy
                Object.keys(Drawer.methods).forEach((item) => {
                    this[item] = this.$refs[this.nodeInfo.nodeKey][item]
                })
            })
        }
    }
</script>

<style scoped>

</style>
