<template>
    <el-form :model="settingData" label-width="100px">
        <el-form-item label="标签宽度:">
            <el-input v-model="settingData['label-width']"></el-input>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        name: 'form-edit',
        props: ['settingData'],
        data () {
            return {

            }
        }
    }
</script>

<style scoped>

</style>
