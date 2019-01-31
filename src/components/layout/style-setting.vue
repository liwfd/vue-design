<template>
    <el-card class="no-padding">
        <template slot="header">样式配置</template>
        <div id="csseditor" style="width: 100%; height: 34vh;" value="2421">

        </div>
        <div style="text-align: left;">
            <el-button type="primary" plain @click="reset">重置</el-button>
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

<style lang="scss">
    .no-padding {
        #csseditor {
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

            div.jsoneditor-statusbar, .ace_gutter-layer {
                background: #FCE38A;
            }
        }
        .el-card__body {
            background: #FCE38A;
            padding: 0!important;
        }
        height: 100%;
        .el-card__header {
            height: 50px;
            padding: 14px 20px;
            background: #FCE38A;
            color: #666;
        }
    }
</style>
