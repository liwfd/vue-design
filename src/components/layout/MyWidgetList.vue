<template>
    <div class="widget-list">
        <ul>
            <li v-for="item in myWidget">
                <el-button class="widget-btn" type="text" :disabled="disabled(item)"
                           @click="addNode('widget', item.label)">{{item.label}}
                </el-button>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'my-widget-list',
        props: ['selectNode'],
        created () {
            this.getWidgets()
        },
        computed: {
            disabled () {
                return item => {
                    if (!this.selectNode.type) {
                        return true
                    } else if (item.all) {
                        return false
                    } else if (item.parent.includes(this.selectNode.type)) {
                        return false
                    } else {
                        return true
                    }
                }
            }
        },
        data () {
            return {
                myWidget: [],
            }
        },
        methods: {
            addNode (mode, name) {
                this.$emit('addNode', mode, name)
            },
            getWidgets () {
                this.$fetch.post('/api/getFiles', { type: 'widgets' }).then(jRes => {
                    jRes.json().then(res => {
                        if (res.success) {
                            this.myWidget = [];
                            res.data.map(item => {
                                this.myWidget.push({ label: item.split('.json')[0], all: true })
                            })
                        }
                    })
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    .widget-list {
        line-height: 30px;
        li {
            list-style: none;
            margin: 0 10px;
            float: left;
            .widget-btn {
                /*color: #000;*/
            }
        }
    }
</style>
