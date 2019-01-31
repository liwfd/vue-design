<template>
    <div>
        <table-column-edit v-if="propData.type === 'table-column-widget'" :settingData="propData.options"></table-column-edit>
        <form-edit v-if="propData.type === 'form-widget'" :settingData="propData.options"></form-edit>
        <form-item-edit v-if="propData.type === 'form-item-widget'" :settingData="propData.options"></form-item-edit>
        <col-edit v-if="propData.type === 'col-widget'" :settingData="propData.options"></col-edit>
        <button-edit v-if="propData.type === 'button-widget'" :settingData="propData.options"></button-edit>
        <icon-edit v-if="propData.type === 'svg-icon'" :settingData="propData.options"></icon-edit>
        <input-edit v-if="['input-widget', 'select-widget', 'radio-group-widget', 'checkbox-group-widget'].includes(propData.type)" :settingData="propData.options" :type="propData.type"></input-edit>
        <switch-edit v-if="propData.type === 'switch-widget'" :settingData="propData.options"></switch-edit>
        <option-edit v-if="propData.type === 'option-widget'" :settingData="propData.options"></option-edit>
        <date-picker-edit v-if="propData.type === 'date-picker-widget'" :settingData="propData.options"></date-picker-edit>
        <time-picker-edit v-if="propData.type === 'time-picker-widget'" :settingData="propData.options"></time-picker-edit>
        <slot-edit v-if="propData.type === 'slot'" :settingData="propData.options"></slot-edit>
        <dialog-edit v-if="propData.type === 'dialog-widget'" :settingData="propData.options"></dialog-edit>
        <span-edit v-if="propData.type === 'span'" :settingData="propData.options"></span-edit>
        <template-edit v-if="propData.type === 'template'" :settingData="propData.options"></template-edit>
        <radio-edit v-if="['radio-widget', 'checkbox-widget'].includes(propData.type)" :settingData="propData.options"></radio-edit>
    </div>
</template>

<script>
    import TableColumnEdit from '../setting-form/table-column-edit'
    import ColEdit from '../setting-form/col-edit'
    import FormEdit from '../setting-form/form-edit'
    import FormItemEdit from '../setting-form/form-item-edit'
    import InputEdit from '../setting-form/input-edit'
    import SwitchEdit from '../setting-form/switch-edit'
    import OptionEdit from '../setting-form/option-edit'
    import ButtonEdit from '../setting-form/button-edit'
    import RadioEdit from '../setting-form/radio-edit'
    import SlotEdit from '../setting-form/slot-edit'
    import TemplateEdit from '../setting-form/template-edit'
    import SpanEdit from '../setting-form/span-edit'
    import DialogEdit from '../setting-form/dialog-edit'
    import IconEdit from '../setting-form/icon-edit'
    import DatePickerEdit from '../setting-form/date-picker-edit'
    import TimePickerEdit from '../setting-form/time-picker-edit'
    export default {
        name: 'prop-setting',
        components: { TimePickerEdit, DatePickerEdit, IconEdit, DialogEdit, SpanEdit, TemplateEdit, SlotEdit, RadioEdit, ButtonEdit, OptionEdit, SwitchEdit, InputEdit, FormItemEdit, FormEdit, ColEdit, TableColumnEdit },
        props: ['propData']
    }
</script>

<style scoped lang="scss">
    .setting-form {
        .rule-item {
            width: 80%;
        }
    }
</style>
