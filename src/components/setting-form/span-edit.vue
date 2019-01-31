<template>
    <el-form :model="settingData" label-width="100px" class="setting-form" :rules="rules" v-if="settingData">
        <el-form-item label="text:" prop="text">
            <el-input class="rule-item" v-model="settingData.text" placeholder="请输入文本内容"></el-input>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        name: 'span-edit',
        props: ['settingData'],
        data () {
            return {
                rules: {
                    text: [
                        { required: false, message: '请输入文本内容', trigger: 'blur' },
                    ]
                }
            }
        }
    }
</script>

<style scoped>

</style>
