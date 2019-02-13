<template>
    <el-form :model="settingData" label-width="100px" class="setting-form" :rules="rules" v-if="settingData">
        <el-form-item label="当前步骤:" prop="active">
            <el-input-number class="rule-item" v-model="settingData.active" :min="1" :max="children.length" type="number" placeholder="请输入当前步骤"></el-input-number>
        </el-form-item>
        <el-form-item label="显示方向:" prop="direction">
            <el-select class="rule-item" v-model="settingData.direction" placeholder="请选择显示方向">
                <el-option label="水平" value="horizontal" key="0"></el-option>
                <el-option label="垂直" value="vertical" key="1"></el-option>
            </el-select>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        name: 'steps-edit',
        props: ['settingData', 'children'],
        data () {
            return {
                rules: {
                    active: [
                        { required: true, message: '请输入当前步骤', trigger: 'blur' },
                    ]
                }
            }
        }
    }
</script>

<style scoped>

</style>
