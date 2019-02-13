<template>
    <el-form :model="settingData" label-width="100px" class="setting-form" :rules="rules" v-if="settingData">
        <el-form-item v-if="!settingData.model" label="默认值:" prop="value">
            <el-switch class="rule-item" v-model="settingData.value"></el-switch>
        </el-form-item>
        <el-form-item label="model:" prop="model">
            <el-input class="rule-item" v-model="settingData.model" placeholder="请输入model"></el-input>
        </el-form-item>
        <el-form-item label="formKey:" prop="formKey">
            <el-input class="rule-item" v-model="settingData.formKey" placeholder="请输入formKey"></el-input>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        name: 'switch-edit',
        props: ['settingData'],
        data () {
            return {
                rules: {
                    value: [
                        { required: false, message: '请输入默认值', trigger: 'blur' },
                    ],
                    prop: [
                        { required: true, message: '请输入model', trigger: 'blur' },
                    ]
                }
            }
        }
    }
</script>

<style scoped>

</style>
