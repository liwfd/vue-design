<template>
    <el-tabs v-if="$attrs.show" v-bind="$attrs" v-on="$listeners" :class="nodeInfo.class" :ref="nodeInfo.nodeKey">
        <slot></slot>
    </el-tabs>
</template>

<script>
    export default {
        name: 'tabs-widget',
        props: ['options', 'nodeInfo'],
        created() {}
    }
</script>

<style scoped>

</style>
