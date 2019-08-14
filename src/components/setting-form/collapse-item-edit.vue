<template>
    <el-form :model="settingData" label-width="100px" class="setting-form" v-if="settingData">
        <el-form-item label="标志符(name):" prop="name">
            <el-input class="rule-item" v-model="settingData.name"></el-input>
        </el-form-item>
        <el-form-item label="标题:" prop="title">
            <el-input class="rule-item" v-model="settingData.title"></el-input>
        </el-form-item>
        <el-form-item label="禁用:" prop="disabled">
            <el-switch class="rule-item" v-model="settingData.disabled"></el-switch>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        name: 'collapse-item-edit',
        props: ['settingData'],
        data () {
            return {}
        }
    }
</script>

<style scoped>

</style>
