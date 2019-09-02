<template>
    <div>
        <base-component test="zz">
            <h2 slot="slot1">BaseComponent slot</h2>
            <p>default slot</p>
        </base-component>
        <hoc-com test="测试">
            <h2 slot="slot1">EnhancedComponent slot</h2>
            <p>default slot</p>
        </hoc-com>
    </div>
</template>

<script>
    import BaseComponent from './base-component'
    import hoc from './hoc'

    const HocCom = hoc(BaseComponent)
    export default {
        name: 'index',
        components: { BaseComponent, HocCom },
    }
</script>

<style scoped>

</style>
