<template>
    <el-form label-width="100px" :model="settingData">
        <el-form-item label="类型:" prop="type">
            <el-select v-model="settingData.type">
                <el-option label="日期" value="date" key="0"></el-option>
                <el-option label="日期+时间" value="datetime" key="2"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="显示格式化:" prop="format">
            <el-input class="rule-item" v-model="settingData.format" placeholder="年 yyyy，月 MM，日 dd，小时 HH，分 mm，秒 ss，AM/PM A"></el-input>
        </el-form-item>
        <el-form-item label="值格式化:" prop="value-format">
            <el-input class="rule-item" v-model="settingData['value-format']" placeholder="年 yyyy，月 MM，日 dd，小时 HH，分 mm，秒 ss，AM/PM A"></el-input>
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
        name: 'date-picker-edit',
        props: ['settingData'],
        data () {
            return {}
        }
    }
</script>

<style scoped>

</style>
