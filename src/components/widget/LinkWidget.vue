<template>
    <el-link v-if="$attrs.show" v-bind="$attrs" v-on="$listeners" :class="nodeInfo.class" :ref="nodeInfo.nodeKey">
        <span v-if="options.text">{{options.text}}</span>
        <slot v-if="!options.text"></slot>
    </el-link>
</template>

<script>
    export default {
        name: 'link-widget',
        props: ['options', 'nodeInfo'],
        created() {}
    }
</script>

<style scoped>

</style>
