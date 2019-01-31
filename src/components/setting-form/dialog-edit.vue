<template>
    <el-form :model="settingData" label-width="100px" class="setting-form" :rules="rules" v-if="settingData">
        <el-form-item label="显示:" prop="visible">
            <el-switch class="rule-item" v-model="settingData.visible"></el-switch>
        </el-form-item>
        <el-form-item label="title:" prop="title">
            <el-input class="rule-item" v-model="settingData.title" placeholder="请输入title"></el-input>
            <span style="color: #888;">title为空时render-header生效</span>
        </el-form-item>
        <el-form-item label="宽度:" prop="width">
            <el-input class="rule-item" v-model="settingData.width" placeholder="请输入宽度"></el-input>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        name: 'dialog-edit',
        props: ['settingData'],
        data () {
            return {
                rules: {
                    title: [
                        { required: false, message: '请输入title', trigger: 'blur' },
                    ],
                    width: [
                        { required: true, message: '请输入宽度', trigger: 'blur' },
                    ]
                }
            }
        }
    }
</script>

<style scoped>

</style>
