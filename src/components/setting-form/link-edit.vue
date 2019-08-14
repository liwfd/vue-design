<template>
    <el-form :model="settingData" label-width="100px" class="setting-form" v-if="settingData">
        <el-form-item label="href:" prop="href">
            <el-input class="rule-item" v-model="settingData.href" type="text" placeholder="请输入href"></el-input>
        </el-form-item>
        <el-form-item label="文本:" prop="text">
            <el-input class="rule-item" v-model="settingData.text" type="text" placeholder="请输入链接文本"></el-input>
        </el-form-item>
        <el-form-item label="下划线:" prop="underline">
            <el-switch class="rule-item" v-model="settingData.underline"></el-switch>
        </el-form-item>
        <el-form-item label="禁用:" prop="disabled">
            <el-switch class="rule-item" v-model="settingData.disabled"></el-switch>
        </el-form-item>
        <el-form-item label="图标:" prop="icon">
            <el-input class="rule-item" v-model="settingData.icon" type="text" placeholder="请输入图标类名"></el-input>
        </el-form-item>
        <el-form-item label="类型:" prop="type">
            <el-select class="rule-item" v-model="settingData.type" placeholder="请选择类型">
                <el-option label="默认" value="primary" key="0"></el-option>
                <el-option label="成功" value="success" key="1"></el-option>
                <el-option label="警告" value="warning" key="2"></el-option>
                <el-option label="危险" value="danger" key="3"></el-option>
                <el-option label="信息" value="info" key="4"></el-option>
            </el-select>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        name: 'link-edit',
        props: ['settingData', 'children'],
        data () {
            return {}
        }
    }
</script>

<style scoped>

</style>
