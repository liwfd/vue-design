<template>
    <el-divider v-if="$attrs.show" :ref="nodeInfo.nodeKey" v-bind="$attrs" v-on="$listeners" :class="nodeInfo.class">
        <slot></slot>
    </el-divider>
</template>

<script>

    export default {
        name: 'divider-widget',
        props: ['nodeInfo'],
        data () {
            return {}
        },
        methods: {}
    }
</script>

<style scoped>

</style>
