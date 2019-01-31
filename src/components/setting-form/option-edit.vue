<template>
    <el-form :model="settingData" label-width="100px" class="setting-form" :rules="rules" v-if="settingData">
        <el-form-item label="标签名:" prop="label">
            <el-input class="rule-item" v-model="settingData.label" placeholder="请输入默认值"></el-input>
        </el-form-item>
        <el-form-item label="value:" prop="value">
            <el-input class="rule-item" v-model="settingData.value" placeholder="请输入value"></el-input>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        name: 'option-edit',
        props: ['settingData'],
        data () {
            return {
                rules: {
                    label: [
                        { required: true, message: '请输入标签名', trigger: 'blur' },
                    ],
                    value: [
                        { required: true, message: '请输入value', trigger: 'blur' },
                    ]
                }
            }
        }
    }
</script>

<style scoped>

</style>
