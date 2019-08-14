<template>
    <span v-if="$attrs.show">
        <el-radio-group v-if="options.formData && options.model" :ref="nodeInfo.nodeKey" v-bind="$attrs" v-on="$listeners" v-model="options.formData[options.model]" :class="nodeInfo.class">
            <el-radio v-if="Array.isArray(options.items)" v-for="item in options.items" :key="item.value" :label="item.value">{{item.label}}</el-radio>
            <slot v-if="!Array.isArray(options.items)"></slot>
        </el-radio-group>
        <el-radio-group v-else :ref="nodeInfo.nodeKey" v-bind="$attrs" v-on="$listeners" v-model="value" :class="nodeInfo.class">
            <el-radio v-if="Array.isArray(options.items)" v-for="item in options.items" :key="item.value" :label="item.value">{{item.label}}</el-radio>
            <slot v-if="!Array.isArray(options.items)"></slot>
        </el-radio-group>
    </span>
</template>

<script>
    import RadioGroup from 'element-ui/lib/radio-group'
    export default {
        name: 'radio-group-widget',
        props: ['nodeInfo', 'options'],
        data() {
            return {
                value: this.$attrs.value
            }
        },
        methods: {

        },
        watch: {
            '$attrs.value' (newData) {
                this.value = newData
            }
        },
        mounted () {
            this.$nextTick(() => {
                // proxy
                Object.keys(RadioGroup.methods).forEach((item) => {
                    this[item] = this.$refs[this.nodeInfo.nodeKey][item]
                })
            })
        }
    }
</script>

<style scoped>

</style>
