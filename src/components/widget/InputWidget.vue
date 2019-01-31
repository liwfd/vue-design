<template>
    <span v-if="$attrs.show">
        <el-input v-if="options.formData && options.model" :ref="nodeInfo.nodeKey" v-bind="$attrs" v-on="$listeners" :class="nodeInfo.class"
                  v-model="options.formData[options.model]">
            <slot></slot>
            <template slot="prepend">
                <slot name="prepend"></slot>
            </template>
            <template slot="append">
                <slot name="append"></slot>
            </template>
            <template slot="prefix">
                <slot name="prefix"></slot>
            </template>
            <template slot="suffix">
                <slot name="suffix"></slot>
            </template>
        </el-input>

        <el-input v-else :ref="nodeInfo.nodeKey" v-bind="$attrs" v-on="$listeners" :class="nodeInfo.class" v-model="value">
            <slot></slot>
            <template slot="prepend">
                <slot name="prepend"></slot>
            </template>
            <template slot="append">
                <slot name="append"></slot>
            </template>
            <template slot="prefix">
                <slot name="prefix"></slot>
            </template>
            <template slot="suffix">
                <slot name="suffix"></slot>
            </template>
        </el-input>
    </span>
</template>

<script>
    import Input from 'element-ui/lib/input'

    export default {
        name: 'input-widget',
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
                Object.keys(Input.methods).forEach((item) => {
                    this[item] = this.$refs[this.nodeInfo.nodeKey][item]
                })
            })
        },
    }
</script>

<style scoped>

</style>
