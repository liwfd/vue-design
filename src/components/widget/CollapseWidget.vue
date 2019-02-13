<template>
    <el-collapse v-if="$attrs.show" v-bind="$attrs" v-on="$listeners" :class="nodeInfo.class" :ref="nodeInfo.nodeKey">
        <slot></slot>
    </el-collapse>
</template>

<script>
    export default {
        name: 'collapse-widget',
        props: ['options', 'nodeInfo'],
        created() {}
    }
</script>

<style scoped>

</style>
