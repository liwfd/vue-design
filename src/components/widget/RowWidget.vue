<template>
    <el-row v-if="$attrs.show" v-bind="$attrs" v-on="$listeners" :class="nodeInfo.class" :ref="nodeInfo.nodeKey">
        <slot></slot>
    </el-row>
</template>

<script>
    export default {
        name: 'row-widget',
        props: ['options', 'nodeInfo']
    }
</script>

<style scoped>

</style>
