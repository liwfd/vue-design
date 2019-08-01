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
        <el-form-item label="最大值:" prop="max">
            <el-input-number controls-position="right" class="rule-item" v-model="settingData.max" placeholder="请输入最大值"></el-input-number>
        </el-form-item>
        <el-form-item label="最小值:" prop="min">
            <el-input-number controls-position="right" class="rule-item" v-model="settingData.min" placeholder="请输入最小值"></el-input-number>
        </el-form-item>
        <el-form-item label="精度:" prop="precision">
            <el-input-number controls-position="right" class="rule-item" v-model="settingData.precision" placeholder="请输入精度"></el-input-number>
        </el-form-item>
        <el-form-item label="步长:" prop="step">
            <el-input-number controls-position="right" class="rule-item" v-model="settingData.step" placeholder="请输入步长"></el-input-number>
        </el-form-item>
        <el-form-item label="控制按钮位置:" prop="controls-position">
            <el-select class="rule-item" v-model="settingData['controls-position']" placeholder="请选择按钮位置">
                <el-option label="右侧" value="right" key="0"></el-option>
                <el-option label="左右两侧" value="-" key="1"></el-option>
            </el-select>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        name: 'input-number-edit',
        props: ['settingData'],
        data () {
            return {
                rules: {
                    value: [
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

<style scoped lang="scss">
    .setting-form {
        .rule-item {
            width: 80%;
        }
    }
</style>
