<template>
    <el-form :model="settingData" label-width="100px" class="setting-form" :rules="rules" v-if="settingData">
        <el-form-item label="方向:" prop="direction">
            <el-select class="rule-item" v-model="settingData.direction">
                <el-option key="0" label="水平" value="horizontal"></el-option>
                <el-option key="1" label="垂直️" value="vertical"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="位置:" prop="content-position">
            <el-select class="rule-item" v-model="settingData['content-position']">
                <el-option key="0" label="左" value="left"></el-option>
                <el-option key="1" label="中" value="center"></el-option>
                <el-option key="2" label="右" value="right"></el-option>
            </el-select>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        name: 'divider-edit',
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
