<template>
    <div>
        <ul>
            <li v-for="(item, index) in arr" :key="index">{{item}}</li>
        </ul>
        <el-button @click="change">改变就是好事</el-button>
    </div>
</template>

<script>
    export default {
        name: 'array',
        data() {
            return {
                arr: [1, 2, 3]
            }
        },
        watch: {
            arr: {
                handler(newArr, oldArr) {
                    console.log('改变就是好事');
                    console.log('newArr, oldArr', newArr, oldArr);
                },
                deep: true
            }
        },
        methods: {
            change() {
                // this.$set(this.arr, 2, 6);
                // this.arr = [2, 1, 3];
                this.arr[2] = 6;
            }
        }
    }
</script>

<style scoped>

</style>
