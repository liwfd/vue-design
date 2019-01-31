<template>
    <el-form label-width="100px" :model="settingData">
        <el-form-item label="值格式化:" prop="value-format">
            <el-input class="rule-item" v-model="settingData['value-format']" placeholder="小时 HH，分 mm，秒 ss，AM/PM A"></el-input>
        </el-form-item>
        <el-form-item label="model:" prop="model">
            <el-input class="rule-item" v-model="settingData.model" placeholder="请输入model"></el-input>
        </el-form-item>
        <el-form-item label="formKey:" prop="formKey">
            <el-input class="rule-item" v-model="settingData.formKey" placeholder="请输入formKey"></el-input>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        name: 'time-picker-edit',
        props: ['settingData'],
        data () {
            return {}
        }
    }
</script>

<style scoped>

</style>
