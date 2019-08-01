<template>
    <div class="tool-bar">
        <el-col :span="8" style="margin-top: 4px;">
            <el-input v-model="page.pageId" placeholder="请输入pageId" @keyup.native.enter="$emit('handle', 'view')">
                <el-button slot="append" @click="$emit('handle', 'view')">查看</el-button>
            </el-input>
        </el-col>
        <el-button class="tool-btn" plain @click="$emit('handle', 'save')">保存</el-button>
        <el-button class="tool-btn" plain @click="$emit('handle', 'toggle')">全屏</el-button>
        <el-button class="tool-btn" plain @click="$emit('handle', 'showHtml')">查看HTML</el-button>
    </div>
</template>

<script>
    export default {
        name: 'toolBar',
        props: ['page'],

    }
</script>

<style scoped lang="scss">
    .tool-bar {
        height: 40px;
        width: 100%;
        border-bottom: 1px dashed red;
        vertical-align: middle;
        .tool-btn {
            float: right;
            margin: 5px 10px 5px 0;
        }
    }
</style>
