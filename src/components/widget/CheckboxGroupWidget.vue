<template>
    <span v-if="$attrs.show">
        <el-checkbox-group v-if="options.formData && options.model" :ref="nodeInfo.nodeKey" v-bind="$attrs" v-on="$listeners" v-model="options.formData[options.model]" :class="nodeInfo.class">
            <el-checkbox v-if="Array.isArray(options.items)" v-for="item in options.items" :key="item.value" :label="item.value">{{item.label}}</el-checkbox>
            <slot v-if="!Array.isArray(options.items)"></slot>
        </el-checkbox-group>
        <el-checkbox-group v-else :ref="nodeInfo.nodeKey" v-bind="$attrs" v-on="$listeners" v-model="value" :class="nodeInfo.class">
            <el-checkbox v-if="Array.isArray(options.items)" v-for="item in options.items" :key="item.value" :label="item.value">{{item.label}}</el-checkbox>
            <slot v-if="!Array.isArray(options.items)"></slot>
        </el-checkbox-group>
    </span>
</template>

<script>
    export default {
        name: 'checkbox-group-widget',
        props: ['nodeInfo', 'options'],
        data () {
            return {
                value: eval(this.$attrs.value) || [],
            }
        },
        watch: {
            '$attrs.value' (newData) {
                try {
                    this.value = eval(newData) || []
                } catch (err) {
                }
            }
        },
        methods: {

        },
        mounted () {

        }
    }
</script>

<style scoped>

</style>
