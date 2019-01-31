<template>
    <span v-if="$attrs.show">
        <el-switch v-if="options.formData && options.model" :ref="nodeInfo.nodeKey" v-bind="$attrs" v-on="$listeners"
                   v-model="options.formData[options.model]" :class="nodeInfo.class">
            <slot></slot>
        </el-switch>
        <el-switch v-else :ref="nodeInfo.nodeKey" v-bind="$attrs" v-on="$listeners" v-model="value"
                   :class="nodeInfo.class">
            <slot></slot>
        </el-switch>
    </span>
</template>

<script>
    import Switch from 'element-ui/lib/switch'

    export default {
        name: 'switch-widget',
        props: ['nodeInfo', 'options'],
        data () {
            return {
                value: this.$attrs.value
            }
        },
        created () {
            // console.log('input', this.$attrs.value)
        },
        watch: {
            '$attrs.value' (newData) {
                this.value = newData
            }
        },
        methods: {},
        mounted () {
            this.$nextTick(() => {
                // proxy
                Object.keys(Switch.methods).forEach((item) => {
                    this[item] = this.$refs[this.nodeInfo.nodeKey][item]
                })
            })
        }
    }
</script>

<style scoped>

</style>
