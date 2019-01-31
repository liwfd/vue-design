<template>
    <span v-if="$attrs.show">
        <el-date-picker v-if="options.formData && options.model" :ref="nodeInfo.nodeKey" v-bind="$attrs" v-on="$listeners" :class="nodeInfo.class"
                  v-model="options.formData[options.model]">
            <slot></slot>
        </el-date-picker>
        <el-date-picker v-else :ref="nodeInfo.nodeKey" v-bind="$attrs" v-on="$listeners" :class="nodeInfo.class" v-model="value">
            <slot></slot>
        </el-date-picker>
    </span>
</template>

<script>
    export default {
        name: 'date-picker-widget',
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
        },
    }
</script>

<style scoped>

</style>
