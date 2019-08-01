<template>
    <widget-page :eventHandler="eventHandler" :pageId="$route.query.pageId">
    </widget-page>
</template>

<script>
    export default {
        name: 'page',
        data () {
            return {
                dataList: [],
                visible: false,
                formData: {}
            }
        },
        created () {
            this.getTable()
        },
        methods: {
            getTable () {
                this.dataList = [{
                    name: '张三',
                    age: 0
                }, {
                    name: '李四',
                    age: 20
                }, {
                    name: '刘能',
                    age: 66
                }]
            }
        },
        computed: {
            eventHandler () {
                return {
                    table: {
                        options: {
                            data: this.dataList
                        }
                    },
                    form: {
                        options: {
                            model: this.formData,
                            rules: {
                                name: [
                                    { required: true, message: '请输入姓名呀' },
                                ],
                            }
                        }
                    },
                    c1: {
                        options: {
                            render: (h, scope) => {
                                return h('el-tag', scope.row.name)
                            }
                        }
                    },
                    c0: {
                        options: {
                            render: (h, scope) => {
                                return h('span', scope.row.name + '隐藏了')
                            }
                        }
                    },
                    dialog: {
                        options: {
                            visible: this.visible
                        },
                        event: {
                            close: () => {
                                this.visible = false
                            }
                        }
                    },
                    addBtn: {
                        event: {
                            click: () => {
                                this.visible = true
                            }
                        }
                    },
                    cancelBtn: {
                        event: {
                            click: () => {
                                this.visible = false
                            }
                        }
                    },
                    saveBtn: {
                        event: {
                            click: () => {
                                console.log('this.formData', this.formData)
                            }
                        }
                    }
                }
            }
        }
    }
</script>

<style>
    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 200px;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }

    body > .el-container {
        margin-bottom: 40px;
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }
</style>
