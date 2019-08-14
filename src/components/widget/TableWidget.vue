<template>
    <el-table v-if="$attrs.show" v-bind="$attrs" v-on="$listeners" :class="nodeInfo.class" :ref="nodeInfo.nodeKey" @drop.native="drop">
        <el-table-column type="selection" v-if="$attrs.selection" :key="-1"></el-table-column>
        <slot></slot>
    </el-table>
</template>

<script>
    import RenderColumn from './components/render-column'
    import Table from 'element-ui/lib/table'

    export default {
        name: 'table-widget',
        components: { RenderColumn },
        props: ['options', 'nodeInfo', 'children'],
        created () {
            // console.log('this.options', this.options);
        },
        mounted () {
            this.$nextTick(() => {
                // proxy
                Object.keys(Table.methods).forEach((item) => {
                    this[item] = this.$refs[this.nodeInfo.nodeKey][item]
                })
            })
        },
        methods: {
            drop (ev) {
                ev.preventDefault();
                ev.stopPropagation();
                ev.target.className = ev.target.className.replace('dragOver', '')
                let elData = JSON.parse(ev.dataTransfer.getData('elData'))
                this.$emit('handle', 'dropDown', this.nodeInfo.uiKey, elData)
            }
        }
    }
</script>

<style scoped>

</style>
