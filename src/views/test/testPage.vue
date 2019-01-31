<template>
    <div>
        <widget-page ref="wp" :data="jsonData" :eventHandler="eventHandler" pageId="p000001">
            <div slot="test" style="border: 1px dashed #eee;margin: 10px;">插槽区域，扩展特殊组件</div>
        </widget-page>
    </div>
</template>

<script>
    import TableColumn from './table-column'

    export default {
        name: 'testPage',
        components: { TableColumn },
        props: ['data'],
        data () {
            return {
                table: [{
                    name: 666
                }],
                showName: false,
                visible: false,
                formData: {
                    name: '777',
                    state: false,
                    card: 'value1',
                    sex: 'value1',
                    like: ['value3'],
                    time: new Date,
                    date: new Date
                },
                jsonData: [],
                uiParser: {},
                check: []
            }
        },
        computed: {
            eventHandler () {
                return {
                    addBtn: {
                        event: {
                            click: _ => {
                                this.visible = true
                            }
                        }
                    },
                    saveBtn: {
                        event: {
                            click: this.submit
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
                    testInput: {
                        event: {
                            native: {
                                keyup: ke => {
                                    console.log('keyup', ke)
                                }
                            },
                            input: value => {
                                console.log('input', value)
                            },
                        }
                    },
                    basicSwitch1: {
                        event: {
                            change: this.change
                        },
                        options: {
                            value: this.showName
                        }
                    },
                    dataForm1: {
                        options: {
                            model: this.formData,
                            rules: {
                                name: [
                                    { required: true, message: '请输入姓名呀' },
                                ],
                                card: [
                                    { required: true, message: '请选择证件类型呀' },
                                ],
                            }
                        }
                    },
                    dataFormItem2: {
                        options: {
                            show: this.showName
                        }
                    },
                    dataFormItem1: {
                        options: {}
                    },
                    dataTable1: {
                        options: {
                            data: [{
                                p1: '高中',
                                p2: '混子'
                            }]
                        },
                        class: {
                            aaa: true
                        }
                    },
                    dataTableColumn1: {
                        options: {
                            render: (h, scope) => {
                                return h('el-button', {
                                    props: {
                                        type: 'text'
                                    },
                                    on: {
                                        click: () => {
                                            console.log('scope', scope)
                                        }
                                    }
                                }, scope.row.p1)
                            }
                        }
                    },
                    dataTableColumn3: {
                        options: {
                            formatter: (row, column) => {
                                return row.p1 + '_' + row.p2
                            }
                        }
                    }
                }
            }
        },
        methods: {
            handleInput (value) {
                console.log('value', value)
            },
            submit () {
                // let form = this.$refs.wp.findUI('dataForm1')
                // form.validate(valid => {
                //     console.log('valid', valid, form.getFormData(), this.formData)
                // })
                console.log('formData', this.formData);
            },
            change (value) {
                this.showName = value
            }
        },
        created () {

        }
    }
</script>

<style scoped>

</style>
