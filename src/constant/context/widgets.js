export default {
    basic: {
        'span': {
            label: '文本',
            mode: 'basic',
            style: {},
            class: '',
            type: 'span',
            eleType: 'span',
            nodeKey: 'span',
            options: {
                show: true,
                text: '文字'
            },
            children: []
        },
        'icon': {
            label: '图标',
            mode: 'basic',
            style: {},
            class: '',
            type: 'svg-icon',
            eleType: 'svg-icon',
            nodeKey: 'icon',
            options: {
                show: true,
                'icon-class': 'add',
                color: '#000'
            },
            children: []
        },
        'button-widget': {
            label: '按钮',
            mode: 'basic',
            style: {},
            class: '',
            type: 'button-widget',
            eleType: 'el-button',
            nodeKey: 'basicBtn',
            options: {
                type: 'primary',
                text: '按钮',
                show: true
            },
            children: []
        },
        'input-widget': {
            label: '输入框',
            mode: 'basic',
            style: {},
            class: '',
            type: 'input-widget',
            eleType: 'el-input',
            nodeKey: 'basicInput',
            options: {
                type: 'text',
                model: '',
                formKey: '',
                show: true,
                formData: {},
            },
            children: []
        },
        'switch-widget': {
            label: '开关',
            mode: 'basic',
            style: {},
            class: '',
            type: 'switch-widget',
            eleType: 'el-switch',
            nodeKey: 'basicSwitch',
            options: {
                disabled: false,
                model: '',
                formKey: '',
                show: true
            },
            children: []
        },
        'select-widget': {
            label: '选择',
            mode: 'basic',
            style: {},
            class: '',
            type: 'select-widget',
            eleType: 'el-select',
            nodeKey: 'basicSelect',
            options: {
                disabled: false,
                model: '',
                formKey: '',
                show: true,
                clearable: true
            },
            children: []
        },
        'option-widget': {
            label: '选项',
            mode: 'basic',
            style: {},
            class: '',
            type: 'option-widget',
            eleType: 'el-option',
            nodeKey: 'basicOption',
            options: {
                disabled: false,
                show: true,
                label: '选项',
                value: 'value',
            },
            children: []
        },
        'radio-group-widget': {
            label: '单选',
            mode: 'basic',
            style: {},
            class: '',
            type: 'radio-group-widget',
            eleType: 'el-radio-group',
            nodeKey: 'basicRadioGroup',
            options: {
                disabled: false,
                show: true,
                model: ''
            },
            children: []
        },
        'radio-widget': {
            label: '单选选项',
            mode: 'basic',
            style: {},
            class: '',
            type: 'radio-widget',
            eleType: 'el-radio',
            nodeKey: 'basicRadio',
            options: {
                disabled: false,
                show: true,
                label: 'value',
                text: '选项',
            },
            children: []
        },
        'checkbox-group-widget': {
            label: '复选',
            mode: 'basic',
            style: {},
            class: '',
            type: 'checkbox-group-widget',
            eleType: 'el-checkbox-group',
            nodeKey: 'basicCheckboxGroup',
            options: {
                disabled: false,
                show: true,
                model: ''
            },
            children: []
        },
        'checkbox-widget': {
            label: '复选选项',
            mode: 'basic',
            style: {},
            class: '',
            type: 'checkbox-widget',
            eleType: 'el-checkbox',
            nodeKey: 'basicCheckbox',
            options: {
                disabled: false,
                show: true,
                label: 'value',
                text: '选项',
            },
            children: []
        },
        'date-picker-widget': {
            label: '日期选择',
            mode: 'basic',
            style: {},
            class: '',
            type: 'date-picker-widget',
            eleType: 'el-date-picker',
            nodeKey: 'basicDatePicker',
            options: {
                disabled: false,
                show: true,
                type: 'date',
                clearable: true
            },
            children: []
        },
        'time-picker-widget': {
            label: '时间选择',
            mode: 'basic',
            style: {},
            class: '',
            type: 'time-picker-widget',
            eleType: 'el-time-picker',
            nodeKey: 'basicTimePicker',
            options: {
                disabled: false,
                show: true,
                clearable: true
            },
            children: []
        }
    },
    chart: {
        've-line-chart': {
            label: '折线图',
            mode: 'chart',
            style: {},
            class: '',
            type: 've-line-chart',
            eleType: 've-line-chart',
            nodeKey: 'chartLine',
            options: {
                data: {},
                settings: {},
                title: {}
            }
        },
        've-bar-chart': {
            label: '柱状图',
            mode: 'chart',
            style: {},
            class: '',
            type: 've-bar-chart',
            eleType: 've-bar-chart',
            nodeKey: 'chartBar',
            options: {
                data: {},
                settings: {},
                title: {}
            }
        },
        've-pie-chart': {
            label: '饼图',
            mode: 'chart',
            style: {},
            class: '',
            type: 've-pie-chart',
            eleType: 've-pie-chart',
            nodeKey: 'chartPie',
            options: {
                data: {},
                settings: {},
                title: {}
            }
        },
        've-donut-chart': {
            label: '环形图',
            mode: 'chart',
            style: {},
            class: '',
            type: 've-donut-chart',
            eleType: 've-donut-chart',
            nodeKey: 'chartDonut',
            options: {
                data: {},
                settings: {},
                title: {}
            }
        },
    },
    data: {
        'form-widget': {
            label: '表单',
            mode: 'data',
            style: {},
            class: '',
            type: 'form-widget',
            eleType: 'el-form',
            nodeKey: 'dataForm',
            options: {
                'label-width': '150px',
                model: {},
                show: true
            },
            children: []
        },
        'form-item-widget': {
            label: '表单项',
            mode: 'data',
            style: {},
            class: '',
            type: 'form-item-widget',
            eleType: 'el-form-item',
            nodeKey: 'dataFormItem',
            options: {
                required: false,
                label: '表单项',
                prop: 'prop',
                show: true
            },
            children: []
        },
        'table-widget': {
            label: '表格',
            mode: 'data',
            style: {},
            class: '',
            type: 'table-widget',
            eleType: 'el-table',
            nodeKey: 'dataTable',
            options: {
                data: [],
                show: true,
                selection: true,
                'tooltip-effect': 'light',
                border: true,
                stripe: true,
            },
            children: []
        },
        'table-column-widget': {
            label: '表格列',
            mode: 'data',
            style: {},
            class: '',
            type: 'table-column-widget',
            eleType: 'el-table-column',
            nodeKey: 'dataTableColumn',
            options: {
                type: '',
                width: '',
                label: '表格列',
                prop: 'prop',
                show: true
            },
            children: []
        },
    },
    layout: {
        'slot': {
            label: '插槽',
            mode: 'layout',
            style: {},
            class: '',
            type: 'slot',
            eleType: 'slot',
            nodeKey: 'slot',
            options: {
                name: 'custom'
            },
            children: []
        },
        'template': {
            label: '模板',
            mode: 'layout',
            style: {},
            class: '',
            type: 'template',
            eleType: 'template',
            nodeKey: 'template',
            options: {
                slot: 'temp',
                show: true
            },
            children: []
        },
        'row-widget': {
            label: '栅格布局',
            mode: 'layout',
            style: {},
            class: '',
            type: 'row-widget',
            eleType: 'el-row',
            nodeKey: 'layoutRow',
            options: {
                gutter: 0,
                type: '',
                justify: 'start',
                align: 'top',
                show: true
            },
            children: []
        },
        'container-widget': {
            label: '外层容器',
            mode: 'layout',
            style: {},
            class: '',
            type: 'el-container',
            eleType: 'el-container',
            nodeKey: 'layoutContainer',
            options: {
                show: true
            },
            children: []
        },
        'header-widget': {
            label: '顶栏容器',
            mode: 'layout',
            style: {},
            class: '',
            type: 'el-header',
            eleType: 'el-header',
            nodeKey: 'layoutHeader',
            options: {
                show: true
            },
            children: []
        },
        'aside-widget': {
            label: '侧边栏容器',
            mode: 'layout',
            style: {},
            class: '',
            type: 'el-aside',
            eleType: 'el-aside',
            nodeKey: 'layoutAside',
            options: {
                show: true
            },
            children: []
        },
        'main-widget': {
            label: '主要区域容器',
            mode: 'layout',
            style: {},
            class: '',
            type: 'el-main',
            eleType: 'el-main',
            nodeKey: 'layoutMain',
            options: {
                show: true
            },
            children: []
        },
        'footer-widget': {
            label: '底栏容器',
            mode: 'layout',
            style: {},
            class: '',
            type: 'el-footer',
            eleType: 'el-footer',
            nodeKey: 'layoutFooter',
            options: {
                show: true
            },
            children: []
        },
        'col-widget': {
            label: '格子',
            mode: 'layout',
            style: {},
            class: '',
            type: 'col-widget',
            eleType: 'el-col',
            nodeKey: 'layoutCol',
            options: {
                span: 4,
                show: true
            },
            children: []
        },
        'dialog-widget': {
            label: '弹窗',
            mode: 'layout',
            style: {},
            class: '',
            type: 'dialog-widget',
            eleType: 'el-dialog',
            nodeKey: 'layoutDialog',
            options: {
                show: true,
                visible: false,
                title: '提示',
                'close-on-click-modal': false,
                'show-close': true,
                'width': '50%'
            },
            children: []
        },
        'card-widget': {
            label: '卡片',
            mode: 'layout',
            style: {},
            class: '',
            type: 'card-widget',
            eleType: 'el-card',
            nodeKey: 'layoutCard',
            options: {
                show: true,
                header: '标题',
                'body-style': {},
                'shadow': 'always'
            },
            children: []
        },
        'tabs-widget': {
            label: '标签页',
            mode: 'layout',
            style: {},
            class: '',
            type: 'tabs-widget',
            eleType: 'el-tabs',
            nodeKey: 'layoutTabs',
            options: {
                show: true,
                type: '',
                closable: false,
                addable: false,
                editable: false,
                value: '',
                "tab-position": 'top'
            },
            children: []
        },
        'tab-pane-widget': {
            label: '页签',
            mode: 'layout',
            style: {},
            class: '',
            type: 'el-tab-pane',
            eleType: 'el-tab-pane',
            nodeKey: 'layoutTabPane',
            options: {
                show: true,
                label: '页签',
                disabled: false,
                closable: false,
                name: 'name'
            },
            children: []
        },
        'collapse-widget': {
            label: '面板',
            mode: 'layout',
            style: {},
            class: '',
            type: 'collapse-widget',
            eleType: 'el-collapse',
            nodeKey: 'layoutCollapse',
            options: {
                show: true,
                accordion: false
            },
            children: []
        },
        'collapse-item-widget': {
            label: '面板项',
            mode: 'layout',
            style: {},
            class: '',
            type: 'collapse-item-widget',
            eleType: 'el-collapse-item',
            nodeKey: 'layoutCollapseItem',
            options: {
                show: true,
                name: 'name',
                title: '标题'
            },
            children: []
        },
        'steps-widget': {
            label: '步骤条',
            mode: 'layout',
            style: {},
            class: '',
            type: 'steps-widget',
            eleType: 'el-steps',
            nodeKey: 'layoutSteps',
            options: {
                show: true,
                direction: 'horizontal',
                active: 1
            },
            children: []
        },
        'step-widget': {
            label: '步骤',
            mode: 'layout',
            style: {},
            class: '',
            type: 'el-step',
            eleType: 'el-step',
            nodeKey: 'layoutStep',
            options: {
                show: true,
                description: '描述',
                title: '步骤'
            },
            children: []
        }
    }
}
