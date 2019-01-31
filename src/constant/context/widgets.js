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
                show: true
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
        }
    }
}
