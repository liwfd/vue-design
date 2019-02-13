<template>
    <el-form :model="settingData" label-width="100px" class="setting-form" :rules="rules" v-if="settingData">
        <el-form-item label="列名:" prop="label">
            <el-input class="rule-item" v-model="settingData.label" placeholder="请输入列名"></el-input>
        </el-form-item>
        <el-form-item label="prop:" prop="prop">
            <el-input class="rule-item" v-model="settingData.prop" placeholder="请输入prop"></el-input>
        </el-form-item>
        <el-form-item label="类型:" prop="type">
            <el-select class="rule-item" v-model="settingData.type" placeholder="请选择类型">
                <el-option label="标准" value="" key="0"></el-option>
                <el-option label="序列" value="index" key="1"></el-option>
                <el-option label="展开" value="expand" key="2"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="列宽:" prop="width">
            <el-input class="rule-item" v-model="settingData.width" placeholder="请输入列宽"></el-input>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        name: 'table-column-edit',
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
        }
    }
</script>

<style scoped>

</style>
