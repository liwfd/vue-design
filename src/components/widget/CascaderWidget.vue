<template>
    <span v-if="$attrs.show">
        <el-cascader v-if="options.formData && options.model" :ref="nodeInfo.nodeKey" v-bind="$attrs" v-on="$listeners" :class="nodeInfo.class"
                  v-model="options.formData[options.model]">
            <slot></slot>
        </el-cascader>
        <el-cascader v-else :ref="nodeInfo.nodeKey" v-bind="$attrs" v-on="$listeners" :class="nodeInfo.class" v-model="value">
            <slot></slot>
        </el-cascader>
    </span>
</template>

<script>
    import InputNumber from 'element-ui/lib/input-number'

    export default {
        name: 'cascader-widget',
        props: ['nodeInfo', 'options'],
        data () {
            return {
                value: this.$attrs.value
            }
        },
        created () {
        },
        watch: {
            '$attrs.value' (newData) {
                this.value = newData
            }
        },
        methods: {
        },
        mounted () {
            this.$nextTick(() => {
                // proxy
                Object.keys(InputNumber.methods).forEach((item) => {
                    this[item] = this.$refs[this.nodeInfo.nodeKey][item]
                })
            })
        },
    }
</script>

<style scoped>

</style>
