<template>
    <el-steps v-if="$attrs.show" v-bind="$attrs" v-on="$listeners" :class="nodeInfo.class" :ref="nodeInfo.nodeKey">
        <el-step v-if="Array.isArray(options.items)" v-for="(item, index) in options.items" :key="index" v-bind="item"></el-step>
        <slot v-if="!Array.isArray(options.items)"></slot>
    </el-steps>
</template>

<script>
    export default {
        name: 'steps-widget',
        props: ['options', 'nodeInfo'],
        created() {}
    }
</script>

<style scoped>

</style>
