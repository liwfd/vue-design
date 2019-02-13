<template>
    <el-step v-if="$attrs.show" v-bind="$attrs" v-on="$listeners" :class="nodeInfo.class" :ref="nodeInfo.nodeKey">
        <slot></slot>
    </el-step>
</template>

<script>
    export default {
        name: 'step-widget',
        props: ['options', 'nodeInfo'],
        created() {}
    }
</script>

<style scoped>

</style>
