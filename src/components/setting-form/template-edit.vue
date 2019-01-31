<template>
    <el-form :model="settingData" label-width="100px" class="setting-form" :rules="rules" v-if="settingData">
        <el-form-item label="slot:" prop="slot">
            <el-input class="rule-item" v-model="settingData.slot" placeholder="请输入slot"></el-input>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        name: 'template-edit',
        props: ['settingData'],
        data () {
            return {
                rules: {
                    slot: [
                        { required: false, message: '请输入slot', trigger: 'blur' },
                    ]
                }
            }
        }
    }
</script>

<style scoped>

</style>
