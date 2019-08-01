<template>
    <el-form label-width="150px" :model="settingData">
        <el-form-item label="组件布局(可拖动排序):" prop="layout">
            <el-checkbox-group v-model="settingData.layout" placeholder="请选择组件布局" @change="onDragEnd">
                <draggable v-model="options" :options="{draggable:'.draggable', clone: true}" @end="onDragEnd">
                    <transition-group>
                        <el-checkbox v-for="item in options" :class="{draggable: settingData.layout.includes(item.value)}" :label="item.value" :key="item.value">{{item.label}}
                        </el-checkbox>
                    </transition-group>
                </draggable>
            </el-checkbox-group>
        </el-form-item>
        <el-form-item label="显示背景:" prop="background">
            <el-switch class="rule-item" v-model="settingData.background"></el-switch>
        </el-form-item>
        <el-form-item label="每页显示条数:" prop="page-sizes">
            <el-input class="rule-item" v-model="sizes" @change="changeSizes" placeholder="页码数用','分隔开"></el-input>
        </el-form-item>
            <el-form-item label="总数:" prop="total">
            <el-input-number controls-position="right" class="rule-item" v-model="settingData.total" type="number" placeholder="请输入总数"></el-input-number>
        </el-form-item>
    </el-form>
</template>

<script>
    import draggable from 'vuedraggable'

    export default {
        name: 'pagination-edit',
        components: { draggable },
        props: ['settingData'],
        data () {
            return {
                options: [{ label: '总数', value: 'total' },
                    { label: '每页条数', value: 'sizes' },
                    { label: '上一页', value: 'prev' },
                    { label: '页码', value: 'pager' },
                    { label: '下一页', value: 'next' },
                    { label: '跳转', value: 'jumper' }],
                sizes: this.settingData['page-sizes'].join(',')
            }
        },
        methods: {
            onDragEnd () {
                let layout = [];
                this.options.map(item => {
                    if (this.settingData.layout.includes(item.value)) {
                        layout.push(item.value);
                    }
                })
                this.$emit('setProp', 'layout', layout)
            },
            changeSizes () {
                this.$emit('setProp', 'page-sizes', this.sizes.split(','))
            }
        }
    }
</script>

<style scoped>

</style>
