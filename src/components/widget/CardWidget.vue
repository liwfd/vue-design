<template>
    <el-card v-if="$attrs.show" v-bind="$attrs" v-on="$listeners" :class="nodeInfo.class" :ref="nodeInfo.nodeKey">
        <template v-if="$attrs.header" slot="header">
            <slot name="header"></slot>
        </template>
        <slot></slot>
    </el-card>
</template>

<script>
    export default {
        name: 'col-widget',
        props: ['options', 'nodeInfo']
    }
</script>

<style scoped>

</style>
