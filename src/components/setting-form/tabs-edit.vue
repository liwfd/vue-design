<template>
    <el-form :model="settingData" label-width="100px" class="setting-form" v-if="settingData">
        <el-form-item label="类型:" prop="type">
            <el-select v-model="settingData.type">
                <el-option key="0" label="普通式" value=""></el-option>
                <el-option key="1" label="卡片式" value="card"></el-option>
                <el-option key="2" label="边框卡片式" value="border-card"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="选项卡位置:" prop="type">
            <el-select v-model="settingData['tab-position']">
                <el-option key="0" label="上" value="top"></el-option>
                <el-option key="1" label="下" value="bottom"></el-option>
                <el-option key="2" label="左" value="left"></el-option>
                <el-option key="3" label="右" value="right"></el-option>
            </el-select>
        </el-form-item>
        <el-row>
            <el-col :span="8">
                <el-form-item label="可关闭:" prop="closable">
                    <el-switch v-model="settingData.closable"></el-switch>
                </el-form-item>
                <el-form-item label="可添加:" prop="addable">
                    <el-switch v-model="settingData.addable"></el-switch>
                </el-form-item>
            </el-col>
            <el-col :span="8">
                <el-form-item label="可增减:" prop="editable">
                    <el-switch v-model="settingData.editable"></el-switch>
                </el-form-item>
                <el-form-item label="自撑开:" prop="stretch">
                    <el-switch v-model="settingData.stretch"></el-switch>
                </el-form-item>
            </el-col>
        </el-row>
        <el-form-item>
            <el-button type="primary" @click="$emit('addChild', 'layout', 'tab-pane-widget')">添加标签</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        name: 'tabs-edit',
        props: ['settingData', 'children'],
        data () {
            return {}
        }
    }
</script>

<style scoped>

</style>
