<template>
    <div class="node-tree">
        <el-tree @node-drop="nodeDrop" draggable :expand-on-click-node="false" default-expand-all node-key="uiKey" style="background: transparent;" ref="tree" highlight-current :data="data"
                 :props="defaultProps" @node-click="handleNodeClick"
                 @node-contextmenu="openMenu"></el-tree>
        <ul v-show="visible" :style="{left:left+'px',top:top+'px'}" class="contextmenu">
            <li @click="save">保存为部件</li>
            <li @click="$emit('handle', 'edit')">编辑</li>
            <li @click="$emit('handle', 'clear')">清空</li>
            <li @click="$emit('handle', 'delete')" v-if="selectNode.uiKey !== 'root'">删除</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'nodeTree',
        props: ['data', 'currentNode'],
        data () {
            return {
                defaultProps: {
                    children: 'children',
                    label: 'label'
                },
                visible: false,
                top: 0,
                left: 0,
                selectNode: {}
            }
        },
        watch: {
            visible (value) {
                if (value) {
                    document.body.addEventListener('click', this.closeMenu)
                } else {
                    document.body.removeEventListener('click', this.closeMenu)
                }
            }
        },
        methods: {
            handleNodeClick (data) {
                this.selectNode = data;
                this.$emit('nodeClick', data)
            },
            nodeDrop () {
                this.$emit('nodeDrop');
            },
            save() {
                this.$prompt('请输入部件名称', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    inputValidator: value => {
                        return !!value;
                    },
                    inputErrorMessage: '请输入部件名称'
                }).then(({ value }) => {
                    this.$fetch.post('/api/setFile', { data: this.currentNode, pageId: value, type: 'widgets' }).then(jRes => {
                        jRes.json().then(res => {
                            if (res.success) {
                                this.$message.success('保存成功！')
                                this.$emit('handle', 'updateMyWidgets')
                            }
                        })
                    })
                }).catch(() => {

                });
            },
            openMenu (e, nodeData) {
                const menuMinWidth = 105
                const offsetLeft = this.$el.getBoundingClientRect().left // container margin left
                const offsetWidth = this.$el.offsetWidth // container width
                const maxLeft = offsetWidth - menuMinWidth // left boundary
                const left = e.clientX - offsetLeft + 15 // 15: margin right
                if (left > maxLeft) {
                    this.left = maxLeft
                } else {
                    this.left = left
                }
                this.top = e.clientY - 30
                this.visible = true
                this.$refs.tree.setCurrentKey(nodeData.uiKey)
                this.selectNode = nodeData;
                this.$emit('nodeClick', nodeData)
            },

            closeMenu () {
                this.visible = false
            },
        }
    }
</script>

<style scoped lang="scss">
    .node-tree {
        background: #95E1D3 ;
        height: 85%;
        overflow: auto;
        .contextmenu {
            margin: 0;
            background: #fff;
            z-index: 100;
            position: absolute;
            list-style-type: none;
            padding: 5px 0;
            border-radius: 4px;
            font-size: 12px;
            font-weight: 400;
            color: #333;
            box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, .3);
            li {
                margin: 0;
                padding: 7px 16px;
                cursor: pointer;
                &:hover {
                    background: #eee;
                }
            }
        }
    }
</style>
<style lang="scss">
    .node-tree {
        .el-tree-node__expand-icon {
            color: red!important;
            &.is-leaf {
                color: transparent!important;
            }
        }
    }
</style>
