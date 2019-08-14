<template>
    <el-form :model="settingData" label-width="100px" class="setting-form" v-if="settingData">
        <el-form-item label="手风琴模式:" prop="accordion">
            <el-switch v-model="settingData.accordion"></el-switch>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="$emit('addChild', 'layout', 'collapse-item-widget')">添加面板项</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        name: 'collapse-edit',
        props: ['settingData'],
        data () {
            return {}
        }
    }
</script>

<style scoped>

</style>
