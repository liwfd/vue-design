<template>
    <el-form :model="settingData" label-width="100px" class="setting-form" :rules="rules" v-if="settingData">
        <el-form-item label="icon-class:" prop="icon-class">
            <el-input class="rule-item" v-model="settingData['icon-class']" placeholder="请输入图标class"></el-input>
        </el-form-item>
        <el-form-item label="颜色:" prop="color">
            <el-color-picker class="rule-item" v-model="settingData.color"></el-color-picker>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        name: 'icon-edit',
        props: ['settingData'],
        data () {
            return {
                rules: {
                    'icon-class': [
                        { required: true, message: '请输入图标class', trigger: 'blur' },
                    ],
                    color: [
                        { required: true, message: '请选择图标颜色', trigger: 'blur' },
                    ]
                }
            }
        }
    }
</script>

<style scoped>

</style>
