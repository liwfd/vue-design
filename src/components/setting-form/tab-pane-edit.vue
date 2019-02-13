<template>
    <el-form label-width="100px" :model="settingData">
        <el-form-item label="标签:" prop="label">
           <el-input v-model="settingData.label"></el-input>
        </el-form-item>
        <el-form-item label="name:" prop="name">
           <el-input v-model="settingData.name"></el-input>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        name: 'tab-pane-edit',
        props: ['settingData'],
        data () {
            return {
                rules: {
                    label: [
                        { required: true, message: '请输入标签', trigger: 'blur' },
                    ],
                    name: [
                        { required: true, message: '请输入name', trigger: 'blur' },
                    ],
                }
            }
        }
    }
</script>

<style scoped>

</style>
