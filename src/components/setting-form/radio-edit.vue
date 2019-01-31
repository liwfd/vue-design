<template>
    <el-form :model="settingData" label-width="100px" class="setting-form" :rules="rules" v-if="settingData">
        <el-form-item label="标签名:" prop="text">
            <el-input class="rule-item" v-model="settingData.text" placeholder="请输入默认值"></el-input>
        </el-form-item>
        <el-form-item label="value:" prop="label">
            <el-input class="rule-item" v-model="settingData.label" placeholder="请输入value"></el-input>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        name: 'radio-edit',
        props: ['settingData'],
        data () {
            return {
                rules: {
                    text: [
                        { required: true, message: '请输入标签名', trigger: 'blur' },
                    ],
                    label: [
                        { required: true, message: '请输入value', trigger: 'blur' },
                    ]
                }
            }
        }
    }
</script>

<style scoped>

</style>
