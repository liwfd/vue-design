<template>
    <el-form :model="settingData" label-width="100px" class="setting-form" :rules="rules" v-if="settingData">
        <el-form-item label="分隔符:" prop="separator">
            <el-input class="rule-item" v-model="settingData.separator"></el-input>
        </el-form-item>
        <el-row>
            <el-col :span="12">
                <el-form-item label="完整路径:" prop="show-all-levels">
                    <el-switch class="rule-item" v-model="settingData['show-all-levels']"></el-switch>
                </el-form-item>
            </el-col>
            <el-col :span="12">
                <el-form-item label="可搜索:" prop="filterable">
                    <el-switch class="rule-item" v-model="settingData.filterable"></el-switch>
                </el-form-item>
            </el-col>
        </el-row>
        <div class="prop-divider">
            <el-divider>props</el-divider>
        </div>
        <el-form-item label="多选:" prop="multiple">
            <el-switch class="rule-item" v-model="settingData.props.multiple"></el-switch>
        </el-form-item>
        <el-form-item label="返回值:" prop="emitPath">
            <el-switch class="rule-item" v-model="settingData.props.emitPath" active-text="层级数组" inactive-text="末级value"></el-switch>
        </el-form-item>
        <el-form-item label="次级触发:" prop="expandTrigger">
            <el-select class="rule-item" v-model="settingData.props.expandTrigger">
                <el-option value="click" label="click" key="0"></el-option>
                <el-option value="hover" label="hover" key="1"></el-option>
            </el-select>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        name: 'cascader-edit',
        props: ['settingData'],
        data () {
            return {
                rules: {}
            }
        }
    }
</script>

<style scoped lang="scss">
    .prop-divider /deep/ {
        .el-divider {
            background-color: pink;
            .el-divider__text {
                background-color: #7BEEB2;
            }
        }
    }
</style>
