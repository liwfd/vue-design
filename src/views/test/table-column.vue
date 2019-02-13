<template>
    <el-tabs>
        <slot></slot>
    </el-tabs>
</template>
<script>
    export default {
        name: 'table-column',
        props: ['options'],
        data () {
            return {
                visible: false
            }
        }
    }
</script>

<style scoped>

</style>
