<template>
    <el-form label-width="100px" :model="settingData">
        <el-form-item label="文字:" prop="text">
            <el-input v-model="settingData.text"></el-input>
        </el-form-item>
        <el-form-item label="类型:" prop="type">
            <el-select v-model="settingData.type">
                <el-option label="primary" value="primary" key="0"></el-option>
                <el-option label="success" value="success" key="1"></el-option>
                <el-option label="info" value="info" key="2"></el-option>
                <el-option label="warning" value="warning" key="3"></el-option>
                <el-option label="danger" value="danger" key="4"></el-option>
                <el-option label="文字按钮" value="text" key="5"></el-option>
            </el-select>
        </el-form-item>
        <el-col :span="8">
            <el-form-item label="plain:" prop="plain">
                <el-switch v-model="settingData.plain"></el-switch>
            </el-form-item>
        </el-col>
        <el-col :span="8">
            <el-form-item label="round:" prop="round">
                <el-switch v-model="settingData.round"></el-switch>
            </el-form-item>
        </el-col>
        <el-col :span="8">
            <el-form-item label="circle:" prop="circle">
                <el-switch v-model="settingData.circle"></el-switch>
            </el-form-item>
        </el-col>
        <el-form-item style="display: inline-block;" label="图标:" prop="icon">
            <el-input v-model="settingData.icon" style="width: 200%;"></el-input>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        name: 'button-edit',
        props: ['settingData'],
        data () {
            return {}
        }
    }
</script>

<style scoped>

</style>
