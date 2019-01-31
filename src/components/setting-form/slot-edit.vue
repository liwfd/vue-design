<template>
    <el-form :model="settingData" label-width="100px" class="setting-form" :rules="rules" v-if="settingData">
        <el-form-item label="name:" prop="name">
            <el-input class="rule-item" v-model="settingData.name" placeholder="请输入name"></el-input>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        name: 'slot-edit',
        props: ['settingData'],
        data () {
            return {
                rules: {
                    name: [
                        { required: false, message: '请输入name', trigger: 'blur' },
                    ]
                }
            }
        }
    }
</script>

<style scoped>

</style>
