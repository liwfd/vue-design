<script>
    export default {
        name: 'widgetPage',
        props: {
            data: {
                type: Array,
                default () {
                    return []
                }
            },
            eventHandler: {
                type: Object,
                default () {
                    return {}
                }
            },
            pageId: {
                type: String,
                default () {
                    return '';
                }
            }
        },
        data () {
            return {
                formModels: {},
                jsonData: []
            }
        },
        methods: {
            findUI (nodeKey, ctx) {
                let UI = {}
                try {
                    if (ctx) {
                        UI = ctx.$refs[nodeKey]
                    } else {
                        UI = this.$refs[nodeKey]
                    }
                } catch (err) {
                    console.error(`请检查nodeKey--[${nodeKey}]是否存在！`)
                }
                return UI
            },
            getData() {
                this.pageId && this.$fetch.post('/api/getFile', {pageId: this.pageId}).then(jRes => {
                    jRes.json().then(res => {
                        if (res.success) {
                            this.jsonData = JSON.parse(res.data).data || this.jsonData
                        } else {
                            console.error(`pageId--[${this.pageId}]不存在！`)
                        }
                    })
                })
            }
        },
        created () {
            this.getData();
        },
        watch: {
            pageId() {
                this.getData();
            }
        },
        render (h) {
            const renderChildren = item => {
                if (item.options && item.options.text) {
                    return item.options.text
                }
                if (item.children && item.children.length > 0) {
                    return loop(item.children, item)
                }
            }
            let page = this
            const loop = (data, parent) => {
                return data.map((item, index) => {
                    let custom = this.eventHandler[item.nodeKey] || {}
                    let options = Object.assign({}, item.options, custom.options)
                    if ('form-widget' === item.type) {
                        this.formModels[item.nodeKey] = options.model
                    }
                    if (this.$constants.inWidgets.includes(item.type)) {
                        if (options.formKey && this.formModels[options.formKey]) {
                            options.formData = this.formModels[options.formKey]
                        } else {
                            options.formData = {}
                        }
                    }
                    //解决列排序问题
                    options.key = index

                    return h(item.type, {
                        props: {
                            options,
                            nodeInfo: item,
                            children: item.children,
                            parent
                        },
                        attrs: options,
                        class: custom.class || item.class,
                        style: Object.assign({}, item.style, custom.style),
                        key: custom.uiKey || item.uiKey,
                        ref: custom.nodeKey || item.nodeKey,
                        on: {
                            ...custom.event, ...{
                                //公共方法
                                handle (action, uiKey) {
                                    page.$emit('handle', action, uiKey)
                                }
                            }
                        },
                        nativeOn: custom.event ? custom.event.native : {},
                        slot: options.slot,
                        // scopedSlots: {
                        //     default: props => {
                        //         return renderChildren(item)
                        //     }
                        // }
                    }, [renderChildren(item)].concat(this.$slots[options.name]))
                })
            }
            if (this.data.length > 0) {
                return loop(this.data, {})[0]
            } else if (this.jsonData.length > 0) {
                return loop(this.jsonData, {})[0]
            }
        }
    }
</script>

<style scoped>

</style>
