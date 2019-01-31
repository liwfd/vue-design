<template>
    <widget-page :eventHandler="eventHandler" pageId="p000003">
    </widget-page>
</template>

<script>
    export default {
        name: 'p000003',
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
                    age: 10
                }, {
                    name: '李四',
                    age: 20
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
                            model: this.formData
                        }
                    },
                    c1: {
                        options: {
                            render: (h, scope) => {
                                return h('el-button', scope.row.name);
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
                                this.visible = true;
                            }
                        }
                    },
                    cancelBtn: {
                        event: {
                            click: () => {
                                this.visible = false;
                            }
                        }
                    },
                    saveBtn: {
                        event: {
                            click: () => {
                                console.log('this.formData', this.formData);
                            }
                        }
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>
