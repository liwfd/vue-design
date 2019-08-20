<template>
    <el-dialog v-el-drag-dialog
               class="code-dialog"
               v-if="visible"
               :close-on-click-modal="false"
               title="查看HTML"
               :visible="visible"
               width="40%"
               :before-close="cancel">
            <pre v-highlightjs v-if="htmlTemplate" style="margin: -20px 0 -30px 0;">
                <code class="xml" style="padding-left: -150px;">
                    <div style="margin: -20px 0;max-height: 500px;overflow: auto;padding-bottom: 20px;">{{htmlTemplate}}</div>
                </code>
            </pre>
        <template slot="footer" class="dialog-footer">
            <el-button @click="cancel">取 消</el-button>
            <el-button type="primary" @click="copy">复 制</el-button>
        </template>
    </el-dialog>
</template>

<script>
    export default {
        name: 'htmlViewDialog',
        props: ['visible', 'htmlTemplate', 'formatHtml'],
        data () {
            return {}
        },
        methods: {
            cancel () {
                this.$emit('update:visible', false)
            },
            copy () {
                this.copyToClipboard(this.formatHtml);
            },
            copyToClipboard(text) {
                let vm = this;
                if (window.clipboardData) {
                    window.clipboardData.setData('text', text);
                    vm.$message.success('已复制到剪切板');
                } else {
                    (function (text) {
                        document.oncopy = function (e) {
                            e.clipboardData.setData('text', text);
                            vm.$message.success('已复制到剪切板');
                            e.preventDefault();
                            document.oncopy = null;
                        }
                    })(text);
                    document.execCommand('Copy');
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .code-dialog /deep/ {
        #htmleditor {
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
