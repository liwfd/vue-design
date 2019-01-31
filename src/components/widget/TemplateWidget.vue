<template>
    <div slot="footer">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'template-widget',
        props: ['options']
    }
</script>

<style scoped>

</style>
