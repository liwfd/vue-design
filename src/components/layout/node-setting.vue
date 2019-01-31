<template>
    <el-form :model="nodeData" label-width="100px" class="setting-form" :rules="rules" v-if="nodeData.uiKey">
        <el-form-item label="名称:" prop="label">
            <el-input class="rule-item" v-model="nodeData.label" placeholder="请输入名称"></el-input>
        </el-form-item>
        <el-form-item label="键值:" prop="nodeKey">
            <el-input class="rule-item" :readonly="nodeData.uiKey === 'root'" v-model="nodeData.nodeKey" placeholder="请输入键值"></el-input>
        </el-form-item>
        <el-form-item label="类名:" prop="class">
            <el-input class="rule-item" v-model="nodeData.class" placeholder="请输入类名"></el-input>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        name: 'node-setting',
        props: ['nodeData'],
        data() {
            return {
                rules: {
                    label: [
                        { required: true, message: '请输入名称', trigger: 'blur' },
                    ],
                    nodeKey: [
                        { required: true, message: '请输入键值', trigger: 'blur' },
                    ],
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
