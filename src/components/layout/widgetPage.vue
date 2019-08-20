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
            injection: {
                type: Object,
                default () {
                    return {}
                }
            },
            pagecode: {
                type: String,
                default () {
                    return ''
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
            getData () {
                this.pagecode && this.$fetch.post('/api/getFile', { pagecode: this.pagecode, type: 'pages' }).then(jRes => {
                    jRes.json().then(res => {
                        if (res.success) {
                            this.jsonData = JSON.parse(res.data).data || this.jsonData
                            this.$emit('jsonData', this.jsonData)
                        } else {
                            console.error(`pagecode--[${this.pagecode}]不存在！`)
                        }
                    })
                })
            }
        },
        created () {
            this.getData()
        },
        watch: {
            pagecode () {
                this.getData()
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
                    let custom = this.injection[item.nodeKey] || {}
                    let options = Object.assign({}, item.options, custom.options)
                    if (item.type === 'form-widget') {
                        this.formModels[item.nodeKey] = options.model
                    }
                    if (this.$constants.inWidgets.includes(item.type)) {
                        if (options.formKey && this.formModels[options.formKey]) {
                            options.formData = this.formModels[options.formKey]
                        } else {
                            options.formData = null
                        }
                    }
                    //解决列排序问题
                    if (item.type === 'table-column-widget') {
                        options.key = index + 100
                    }
                    if (custom.render && typeof custom.render === 'function') {
                        return custom.render(h, item)
                    }
                    return h(item.type, {
                        props: {
                            options,
                            nodeInfo: item,
                            children: item.children,
                            parent
                        },
                        // attrs: Object.assign(options, { draggable: true }),
                        attrs: options,
                        class: custom.class || item.class,
                        style: Object.assign({}, item.style, custom.style),
                        // key: custom.uiKey || item.uiKey,
                        ref: custom.nodeKey || item.nodeKey,
                        on: {
                            ...custom.event, ...{
                                //公共方法
                                handle (action, uiKey, ext) {
                                    page.$emit('handle', action, uiKey, ext)
                                },
                                dragover (ev) {
                                    ev.dataTransfer.dropEffect = 'copy';
                                    ev.preventDefault()
                                    return false;
                                },
                                dragenter(ev) {
                                    ev.target.classList.add('dragOver');
                                },
                                drop(ev) {
                                    ev.preventDefault();
                                    ev.stopPropagation();
                                    ev.target.className = ev.target.className.replace('dragOver', '')
                                    let elData = JSON.parse(ev.dataTransfer.getData('elData'))
                                    page.$emit('handle', 'dropDown', item.uiKey, elData)
                                },
                                dragleave(ev) {
                                    ev.target.classList.remove('dragOver');
                                    ev.preventDefault()
                                }
                            }
                        },
                        nativeOn: custom.event ? custom.event.native : {},
                        slot: options.slot,
                        scopedSlots: this.$scopedSlots,
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

<style>
    .dragOver {
        border: 2px dashed #ff0000 !important;
    }
</style>
