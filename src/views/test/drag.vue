<template>
    <draggable class="dragArea" tag="ul" :list="data" :group="{ name: 'g1' }">
        <li v-for="el in children" :key="el.name">
            <p>{{ el.name }}</p>
            <nested-draggable v-if="el.children" :tasks="el.children"/>
        </li>
    </draggable>
</template>

<script>
    import draggable from 'vuedraggable';


    export default {
        name: 'drag',
        component: {draggable}
    }
</script>

<style scoped>

</style>
