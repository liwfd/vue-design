<template>
    <el-col v-if="$attrs.show" v-bind="$attrs" v-on="$listeners" :class="nodeInfo.class" :ref="nodeInfo.nodeKey">
        <slot></slot>
    </el-col>
</template>

<script>
    export default {
        name: 'col-widget',
        props: ['options', 'nodeInfo']
    }
</script>

<style scoped>

</style>
