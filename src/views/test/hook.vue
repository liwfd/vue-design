<template>
    <div>
        <el-input v-model="name"></el-input>
        <el-button @click="view">点击</el-button>
    </div>
</template>

<script>
    import {Buried} from './hook/descriptor';

    export default {
        name: 'hook',
        data() {
            return {
                name: 'zhangsan'
            }
        },
        @Buried
        created() {
            setTimeout(_ => {
                this.name = 'lisi';
            }, 2000);
        },
        @Buried
        mounted() {
            setTimeout(_ => {
                this.name = 'lisi';
            }, 2000);
        },
        methods: {
            @Buried
            view(e) {
                console.log('name', e);
                return true;
            }
        }
    }
</script>

<style scoped>

</style>
