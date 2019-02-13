<template>
    <el-form label-width="100px" :model="settingData">
        <el-form-item label="宽度:" prop="span">
            <el-slider
                v-model="settingData.span"
                :max="24"
                :min="0"
                show-input>
            </el-slider>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        name: 'col-edit',
        props: ['settingData'],
        data () {
            return {

            }
        }
    }
</script>

<style scoped>

</style>
