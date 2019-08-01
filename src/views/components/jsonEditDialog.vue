<template>
    <el-dialog v-el-drag-dialog
               class="code-dialog"
               v-if="visible"
               :close-on-click-modal="false"
               title="编辑JSON"
               :visible="visible"
               width="40%"
               :before-close="cancel">
        <div id="jsoneditor" style="width: 100%; height: 500px;"></div>
        <template slot="footer" class="dialog-footer">
            <el-button @click="cancel">取 消</el-button>
            <el-button type="primary" @click="$emit('saveJson')">确 定</el-button>
        </template>
    </el-dialog>
</template>

<script>
    import 'jsoneditor/dist/jsoneditor.min.css'
    export default {
        name: 'jsonEditDialog',
        props: ['visible'],
        data() {
            return {

            };
        },
        methods: {
            cancel() {
                this.$emit('update:visible', false);
            }
        }
    }
</script>

<style scoped lang="scss">
    .code-dialog /deep/ {
        #jsoneditor {
            .jsoneditor-menu {
                display: none;
            }

            .jsoneditor-outer.has-main-menu-bar {
                margin-top: 0;
                padding-top: 0;
            }

            div.jsoneditor {
                border: 1px solid #aaa;
            }
        }
    }

    .code-dialog /deep/ {
        .el-dialog__body {
            padding: 5px 0 !important;
        }
    }
</style>
