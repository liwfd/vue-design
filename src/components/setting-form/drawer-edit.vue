<template>
    <el-form :model="settingData" label-width="100px" class="setting-form" :rules="rules" v-if="settingData">
        <el-row>
            <el-col :span="12">
                <el-form-item label="显示:" prop="visible">
                    <el-switch class="rule-item" v-model="settingData.visible"></el-switch>
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="遮罩:" prop="modal">
                    <el-switch class="rule-item" v-model="settingData.modal"></el-switch>
                </el-form-item>
            </el-col>
        </el-row>
        <el-form-item label="方向:" prop="direction">
            <el-select class="rule-item" v-model="settingData.direction">
                <el-option key="0" label="⬅️" value="rtl"></el-option>
                <el-option key="1" label="➡️" value="ltr"></el-option>
                <el-option key="2" label="⬆️️" value="btt"></el-option>
                <el-option key="3" label="⬇️" value="ttb"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="title:" prop="title">
            <el-input class="rule-item" v-model="settingData.title" placeholder="请输入title"></el-input>
            <span style="color: #888;">title为空时render-header生效</span>
        </el-form-item>
        <el-form-item label="尺寸" prop="size">
            <el-input class="rule-item" v-model="settingData.size" placeholder="请输入尺寸"></el-input>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        name: 'drawer-edit',
        props: ['settingData'],
        data () {
            return {
                rules: {
                    title: [
                        { required: false, message: '请输入title', trigger: 'blur' },
                    ],
                    width: [
                        { required: true, message: '请输入宽度', trigger: 'blur' },
                    ]
                }
            }
        }
    }
</script>

<style scoped>

</style>
