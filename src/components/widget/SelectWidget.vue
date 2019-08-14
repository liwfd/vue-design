<template>
    <span v-if="$attrs.show">
        <el-select v-if="options.formData && options.model" :ref="nodeInfo.nodeKey" v-bind="$attrs" v-on="$listeners"
                   v-model="options.formData[options.model]" :class="nodeInfo.class">
            <el-option v-if="Array.isArray(options.items)" v-for="item in options.items" :key="item.value" :value="item.value" :label="item.label"></el-option>
            <slot v-if="!options.items"></slot>
        </el-select>
        <el-select v-else :ref="nodeInfo.nodeKey" v-bind="$attrs" v-on="$listeners"
                   v-model="value" :class="nodeInfo.class">
            <el-option v-if="Array.isArray(options.items)" v-for="item in options.items" :key="item.value" :value="item.value" :label="item.label"></el-option>
            <slot v-if="!options.items"></slot>
        </el-select>
    </span>
</template>

<script>
    import Select from 'element-ui/lib/select'

    export default {
        name: 'select-widget',
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
        methods: {},
        mounted () {
            this.$nextTick(() => {
                // proxy
                Object.keys(Select.methods).forEach((item) => {
                    this[item] = this.$refs[this.nodeInfo.nodeKey][item]
                })
            })
        }
    }
</script>

<style scoped>

</style>
