<template>
    <el-card class="no-padding">
        <template slot="header">样式配置</template>
        <div id="csseditor">

        </div>
        <div class="el-card__footer">
            <el-button type="danger" plain @click="reset">重置</el-button>
            <el-button type="primary" plain @click="$emit('save', editor.get(), styleData.uiKey)">确定</el-button>
        </div>
    </el-card>
</template>

<script>
    import JSONEditor from 'jsoneditor'
    import 'jsoneditor/dist/jsoneditor.min.css'

    export default {
        name: 'style-setting',
        data () {
            return {
                editor: {},
                jsonData: {}
            }
        },
        props: {
            styleData: {
                type: Object,
                default () {
                    return {}
                }
            }
        },
        mounted() {
            this.$nextTick(_ => {
                const container = document.getElementById('csseditor')
                const editor = new JSONEditor(container, {
                    mode: 'code',
                    indentation: 4
                })
                this.editor = editor;
            })
        },
        watch: {
            'styleData.style'(newData) {
                this.jsonData =  newData;
                this.editor.set(newData || {})
            }
        },
        methods: {
            reset() {
                this.editor.set(this.jsonData || {})
            }
        }
    }
</script>

<style lang="scss" scoped>
    .no-padding /deep/ {
        height: 100%;
        background: #7BEEB2;
        #csseditor {
            width: 100%;
            height: calc(50vh - 134px);
            .jsoneditor-menu {
                display: none;
            }

            .jsoneditor-outer.has-main-menu-bar {
                margin-top: 0;
                padding-top: 0;
            }

            div.jsoneditor {
                border: 0;
            }

            div.jsoneditor-statusbar, .ace_gutter-layer {
                background: pink;
            }
        }
        .el-card__body {
            background: pink;
            padding: 0!important;
        }
        .el-card__header {
            height: 50px;
            padding: 14px 20px;
            background: pink;
            color: #666;
        }
        .el-card__footer {
            text-align: left;
        }
    }
</style>
