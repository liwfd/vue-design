<template>
    <el-dialog v-el-drag-dialog v-if="$attrs.show" :ref="nodeInfo.nodeKey" v-bind="$attrs" v-on="$listeners"
               @close="cancel"
               :visible.sync="visible" :class="nodeInfo.class">
        <template v-if="!$attrs.title" slot="title">
            <slot name="title"></slot>
        </template>
        <slot></slot>
        <template slot="footer">
            <slot name="footer"></slot>
        </template>
    </el-dialog>
</template>

<script>
    import Dialog from 'element-ui/lib/dialog'

    export default {
        name: 'dialog-widget',
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
                Object.keys(Dialog.methods).forEach((item) => {
                    this[item] = this.$refs[this.nodeInfo.nodeKey][item]
                })
            })
        }
    }
</script>

<style scoped>

</style>
