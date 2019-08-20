<template>
    <div>
        <widget-page :data="jsonData" :injection="injection" pagecode="级联选择" @jsonData="getJSON">
            <div slot="test" style="border: 1px dashed #eee;margin: 10px;">
                <el-button>插槽</el-button>
            </div>
        </widget-page>
    </div>
</template>

<script>
    export default {
        name: 'testPage',
        props: ['data'],
        data () {
            return {
                table: [],
                sel: 123,
                showName: false,
                visible: false,
                formData: {
                    name: '777',
                    state: false,
                    card: 2,
                    sex: 'value1',
                    like: [1],
                    time: new Date,
                    date: new Date
                },
                jsonData: [],
                uiParser: {},
                check: []
            }
        },
        computed: {
            injection () {
                return {
                    bc: {
                        options: {
                            options: [{
                                value: 'zhinan',
                                label: '指南',
                                children: [{
                                    value: 'shejiyuanze',
                                    label: '设计原则',
                                    children: [{
                                        value: 'yizhi',
                                        label: '一致'
                                    }, {
                                        value: 'fankui',
                                        label: '反馈'
                                    }, {
                                        value: 'xiaolv',
                                        label: '效率'
                                    }, {
                                        value: 'kekong',
                                        label: '可控'
                                    }]
                                }, {
                                    value: 'daohang',
                                    label: '导航',
                                    children: [{
                                        value: 'cexiangdaohang',
                                        label: '侧向导航'
                                    }, {
                                        value: 'dingbudaohang',
                                        label: '顶部导航'
                                    }]
                                }]
                            }, {
                                value: 'zujian',
                                label: '组件',
                                children: [{
                                    value: 'basic',
                                    label: 'Basic',
                                    children: [{
                                        value: 'layout',
                                        label: 'Layout 布局'
                                    }, {
                                        value: 'color',
                                        label: 'Color 色彩'
                                    }, {
                                        value: 'typography',
                                        label: 'Typography 字体'
                                    }, {
                                        value: 'icon',
                                        label: 'Icon 图标'
                                    }, {
                                        value: 'button',
                                        label: 'Button 按钮'
                                    }]
                                }, {
                                    value: 'form',
                                    label: 'Form',
                                    children: [{
                                        value: 'radio',
                                        label: 'Radio 单选框'
                                    }, {
                                        value: 'checkbox',
                                        label: 'Checkbox 多选框'
                                    }, {
                                        value: 'input',
                                        label: 'Input 输入框'
                                    }, {
                                        value: 'input-number',
                                        label: 'InputNumber 计数器'
                                    }, {
                                        value: 'select',
                                        label: 'Select 选择器'
                                    }, {
                                        value: 'cascader',
                                        label: 'Cascader 级联选择器'
                                    }, {
                                        value: 'switch',
                                        label: 'Switch 开关'
                                    }, {
                                        value: 'slider',
                                        label: 'Slider 滑块'
                                    }, {
                                        value: 'time-picker',
                                        label: 'TimePicker 时间选择器'
                                    }, {
                                        value: 'date-picker',
                                        label: 'DatePicker 日期选择器'
                                    }, {
                                        value: 'datetime-picker',
                                        label: 'DateTimePicker 日期时间选择器'
                                    }, {
                                        value: 'upload',
                                        label: 'Upload 上传'
                                    }, {
                                        value: 'rate',
                                        label: 'Rate 评分'
                                    }, {
                                        value: 'form',
                                        label: 'Form 表单'
                                    }]
                                }, {
                                    value: 'data',
                                    label: 'Data',
                                    children: [{
                                        value: 'table',
                                        label: 'Table 表格'
                                    }, {
                                        value: 'tag',
                                        label: 'Tag 标签'
                                    }, {
                                        value: 'progress',
                                        label: 'Progress 进度条'
                                    }, {
                                        value: 'tree',
                                        label: 'Tree 树形控件'
                                    }, {
                                        value: 'pagination',
                                        label: 'Pagination 分页'
                                    }, {
                                        value: 'badge',
                                        label: 'Badge 标记'
                                    }]
                                }, {
                                    value: 'notice',
                                    label: 'Notice',
                                    children: [{
                                        value: 'alert',
                                        label: 'Alert 警告'
                                    }, {
                                        value: 'loading',
                                        label: 'Loading 加载'
                                    }, {
                                        value: 'message',
                                        label: 'Message 消息提示'
                                    }, {
                                        value: 'message-box',
                                        label: 'MessageBox 弹框'
                                    }, {
                                        value: 'notification',
                                        label: 'Notification 通知'
                                    }]
                                }, {
                                    value: 'navigation',
                                    label: 'Navigation',
                                    children: [{
                                        value: 'menu',
                                        label: 'NavMenu 导航菜单'
                                    }, {
                                        value: 'tabs',
                                        label: 'Tabs 标签页'
                                    }, {
                                        value: 'breadcrumb',
                                        label: 'Breadcrumb 面包屑'
                                    }, {
                                        value: 'dropdown',
                                        label: 'Dropdown 下拉菜单'
                                    }, {
                                        value: 'steps',
                                        label: 'Steps 步骤条'
                                    }]
                                }, {
                                    value: 'others',
                                    label: 'Others',
                                    children: [{
                                        value: 'dialog',
                                        label: 'Dialog 对话框'
                                    }, {
                                        value: 'tooltip',
                                        label: 'Tooltip 文字提示'
                                    }, {
                                        value: 'popover',
                                        label: 'Popover 弹出框'
                                    }, {
                                        value: 'card',
                                        label: 'Card 卡片'
                                    }, {
                                        value: 'carousel',
                                        label: 'Carousel 走马灯'
                                    }, {
                                        value: 'collapse',
                                        label: 'Collapse 折叠面板'
                                    }]
                                }]
                            }, {
                                value: 'ziyuan',
                                label: '资源',
                                children: [{
                                    value: 'axure',
                                    label: 'Axure Components'
                                }, {
                                    value: 'sketch',
                                    label: 'Sketch Templates'
                                }, {
                                    value: 'jiaohu',
                                    label: '组件交互文档'
                                }]
                            }]
                        }
                    },
                    basicSelect1: {
                        options: {
                            items: [{ label: '自定义', value: 2 }, { label: '选啊', value: 1 }]
                        },
                        event: {
                            change: (val) => {
                                console.log('this', this)
                                console.log('val', val)
                            }
                        }
                    },
                    basicSteps1: {
                        options: {
                            items: [{ title: '自定义', description: '废话', status: 'wait' }, {
                                title: '选啊',
                                description: '连篇',
                                status: 'error'
                            }]
                        },
                        event: {
                            change: (val) => {
                                console.log('this', this)
                                console.log('val', val)
                            }
                        }
                    },
                    basicRadioGroup1: {
                        options: {
                            items: [{ label: '自定义', value: 2 }, { label: '选啊', value: 1 }]
                        },
                        event: {
                            change: (val) => {
                                console.log('this', this)
                                console.log('val', val)
                            }
                        }
                    },
                    basicCheckboxGroup1: {
                        options: {
                            items: [{ label: '自定义', value: 2 }, { label: '选啊', value: 1 }]
                        },
                        event: {
                            change: (val) => {
                                console.log('this', this)
                                console.log('val', val)
                            }
                        }
                    },
                    addBtn: {
                        // render: (h, node) => {
                        //     return (<el-select on-change={this.handleInput} value={this.sel}>
                        //                 <el-option label={123} value={123}></el-option>
                        //                 <el-option label={222} value={222}></el-option>
                        //             </el-select>);
                        // },
                        event: {
                            click: () => {
                                this.visible = true
                            }
                        }
                    },
                    saveBtn: {
                        event: {
                            click: this.submit
                        }
                    },
                    cancelBtn: {
                        event: {
                            click: _ => {
                                this.visible = false
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
                    showDrawer: {
                        event: {
                            click: () => {
                                this.visible = true
                            }
                        }
                    },
                    drawer: {
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
                    table: {
                        options: {
                            data: this.table
                        }
                    },
                    testAdd: {
                        event: {
                            click: this.add
                        }
                    },
                    dataTable1: {
                        options: {
                            data: [{
                                p1: '高中',
                                p2: '混子',
                                age: 22
                            }, {
                                p1: '初中',
                                p2: '杠子',
                                age: 18
                            }]
                        },
                        event: {
                            'cell-click': () => {
                                console.log('event')
                            }
                        },
                        class: {
                            aaa: true
                        }
                    },
                    c1: {
                        options: {
                            render: (h, scope) => {
                                return (
                                    <el-button type="text" on-click={() => console.log(123)}>{scope.row.p1}</el-button>)
                            }
                        }
                    },
                    c3: {
                        options: {
                            formatter (scope) {
                                return scope.row.age + '_' + scope.$index
                            }
                        }
                    }
                }
            }
        },
        methods: {
            getJSON (jsonData) {
                this.jsonData = jsonData
            },
            handleInput (value) {
                this.sel = value
            },
            addColumn () {
            },
            submit () {
                this.$getNode('dataForm1').validate(valid => {
                    console.log('valid', valid)
                    console.log('this', this.formData)
                })
            },
            change (value) {
                this.showName = value
            },
            add () {
                this.table.push({
                    name: 111,
                    n1: 222,
                    n2: 333,
                    age: 999,
                    big: '大',
                    small: '小'
                })
            }
        },
        created () {
            this.table = [{
                name: 111,
                n1: 222,
                n2: 333,
                age: 999,
                big: '大',
                small: '小'
            }]
        }
    }
</script>

<style scoped>

</style>
