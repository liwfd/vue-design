<template>
    <el-form :class="nodeInfo.class" style="overflow: auto;" v-if="$attrs.show" :ref="nodeInfo.nodeKey" v-bind="$attrs" v-on="$listeners" @submit.native.prevent @input.native.stop :model="options.model">
        <slot></slot>
    </el-form>
</template>

<script>
    import Form from 'element-ui/lib/form';

    export default {
        name: 'form-widget',
        props: ['options', 'nodeInfo'],
        data() {
            return {
            };
        },
        created() {
        },
        methods: {

        },
        mounted () {
            this.$nextTick(() => {
                // proxy
                Object.keys(Form.methods).forEach((item) => {
                    this[item] = this.$refs[this.nodeInfo.nodeKey][item]
                })
            })
        },
    }
</script>

<style scoped>

</style>
