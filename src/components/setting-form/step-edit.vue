<template>
    <el-form :model="settingData" label-width="100px" class="setting-form" v-if="settingData">
        <el-form-item label="标题:" prop="title">
            <el-input class="rule-item" v-model="settingData.title" type="text" placeholder="请输入标题"></el-input>
        </el-form-item>
        <el-form-item label="描述:" prop="description">
            <el-input class="rule-item" v-model="settingData.description" type="text" placeholder="请输入描述"></el-input>
        </el-form-item>
        <el-form-item label="图标:" prop="icon">
            <el-input class="rule-item" v-model="settingData.icon" type="text" placeholder="请输入图标"></el-input>
        </el-form-item>
        <el-form-item label="显示状态:" prop="status">
            <el-select class="rule-item" v-model="settingData.status" placeholder="请选择显示状态">
                <el-option label="等待" value="wait" key="0"></el-option>
                <el-option label="进行" value="process" key="1"></el-option>
                <el-option label="完成" value="finish" key="2"></el-option>
                <el-option label="错误" value="error" key="3"></el-option>
                <el-option label="正确" value="success" key="4"></el-option>
            </el-select>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        name: 'step-edit',
        props: ['settingData', 'children'],
        data () {
            return {}
        }
    }
</script>

<style scoped>

</style>
