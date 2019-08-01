<template>
    <el-form :model="settingData" label-width="100px" class="setting-form" :rules="rules" v-if="settingData">
        <el-form-item label="高度:" prop="height">
            <el-input class="rule-item" v-model="settingData.height" placeholder="请输入高度"></el-input>
        </el-form-item>
        <el-form-item label="可勾选:" prop="selection">
            <el-switch class="rule-item" v-model="settingData.selection"></el-switch>
        </el-form-item>
        <el-form-item label="边框:" prop="border">
            <el-switch class="rule-item" v-model="settingData.border"></el-switch>
        </el-form-item>
        <el-form-item label="斑马纹:" prop="stripe">
            <el-switch class="rule-item" v-model="settingData.stripe"></el-switch>
        </el-form-item>
        <el-form-item label="内容超长样式:" prop="tooltip-effect">
            <el-select class="rule-item" v-model="settingData['tooltip-effect']" placeholder="请选择内容超长样式">
                <el-option label="亮" value="light"></el-option>
                <el-option label="暗" value="dark"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="$emit('addChild', 'data', 'table-column-widget')">添加表格列</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        name: 'table-edit',
        props: ['settingData'],
        data () {
            return {
                rules: {
                    label: [
                        { required: false, message: '请输入列名', trigger: 'blur' },
                    ],
                    prop: [
                        { required: false, message: '请输入prop', trigger: 'blur' },
                    ],
                    width: [
                        { required: false, message: '请输入列宽', trigger: 'blur' },
                    ],
                }
            }
        },
        methods: {
            addColumn() {

            }
        }
    }
</script>

<style scoped>

</style>
