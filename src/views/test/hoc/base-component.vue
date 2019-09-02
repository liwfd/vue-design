<template>
    <div style="border: 1px solid red;width: 300px;">
        <span @click="handleClick">props: {{test}}</span>
        <slot name="slot1"/> <!-- 具名插槽 -->
        <p>===========</p>
        <slot/> <!-- 默认插槽 -->
    </div>
</template>

<script>
    export default {
        name: 'base-component',
        props: ['test'],
        methods: {
            handleClick() {
                console.log('this.test', this.test);
            }
        }
    }
</script>

<style scoped>

</style>
