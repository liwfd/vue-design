<template>
    <el-form :model="settingData" label-width="100px" class="setting-form" :rules="rules" v-if="settingData">
        <el-form-item v-if="!settingData.model" label="默认值:" prop="value">
            <el-input class="rule-item" v-model="settingData.value" placeholder="请输入默认值"></el-input>
        </el-form-item>
        <el-form-item label="model:" prop="model">
            <el-input class="rule-item" v-model="settingData.model" placeholder="请输入model"></el-input>
        </el-form-item>
        <el-form-item label="formKey:" prop="formKey">
            <el-input class="rule-item" v-model="settingData.formKey" placeholder="请输入formKey"></el-input>
        </el-form-item>
        <el-form-item label="type:" prop="type" v-if="type === 'input-widget'">
            <el-select class="rule-item" v-model="settingData.type" placeholder="请选择类型">
                <el-option label="文本框" value="text" key="0"></el-option>
                <el-option label="数字框" value="number" key="1"></el-option>
                <el-option label="文本域" value="textarea" key="2"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item v-if="type === 'select-widget'">
            <el-button type="primary" @click="$emit('addChild', 'basic', 'option-widget')">添加选项</el-button>
        </el-form-item>
        <el-form-item v-if="type === 'radio-group-widget'">
            <el-button type="primary" @click="$emit('addChild', 'basic', 'radio-widget')">添加单选项</el-button>
        </el-form-item>
        <el-form-item v-if="type === 'checkbox-group-widget'">
            <el-button type="primary" @click="$emit('addChild', 'basic', 'checkbox-widget')">添加复选项</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        name: 'input-edit',
        props: ['settingData', 'type'],
        data () {
            return {
                rules: {
                    label: [
                        { required: false, message: '请输入默认值', trigger: 'blur' },
                    ],
                    prop: [
                        { required: true, message: '请输入model', trigger: 'blur' },
                    ],
                    formKey: [
                        { required: false, message: '请输入formKey', trigger: 'blur' },
                    ]
                }
            }
        }
    }
</script>

<style scoped>

</style>
