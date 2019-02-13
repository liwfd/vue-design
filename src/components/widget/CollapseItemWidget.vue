<template>
    <el-collapse-item v-if="$attrs.show" v-bind="$attrs" v-on="$listeners" :class="nodeInfo.class" :ref="nodeInfo.nodeKey">
        <slot></slot>
    </el-collapse-item>
</template>

<script>
    export default {
        name: 'collapse-item-widget',
        props: ['options', 'nodeInfo'],
        created() {}
    }
</script>

<style scoped>

</style>
