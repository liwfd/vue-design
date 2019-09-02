<template>
    <div class="source-box" @mouseenter="showBtn = true" @mouseleave="showBtn = false">
        <slot></slot>
        <el-button v-if="showBtn" class="trigger-btn" v-show="!visible" @mouseenter.native="showIcon = false" @mouseleave.native="showIcon = true" @click="visible = true">
            <svg-icon v-if="showIcon" icon-class="code"></svg-icon>
            <span v-else>查看代码</span>
        </el-button>
            <div class="code-panel" v-show="visible">
                <div class="mask">
                    <div class="panel" @click.stop :class="visible ? 'open' : 'close'" v-clickoutside="() => {this.visible = false}">
                            <el-icon class="el-icon-close close-icon" @click.native="visible = false"></el-icon>
                            <pre v-highlightjs style="height: 100%;margin: 0;overflow: auto">
                                <code class="xml">
                                    &lttemplate&gt
                                </code>
                                <code class="xml" style="margin-top: -40px;">
                                        {{template}}
                                </code>
                                <code class="xml" style="margin-top: -40px">
                                    &lt/template&gt
                                </code>
                                <code class="xml" style="margin-top: -30px;">
                                    &ltscript&gt
                                </code>
                                <code class="javascript" style="padding: 0;margin: -30px 0;">
                                        export default {
                                            name: 'p000001',
                                            computed: {
                                                injection () {
                                                    return {
                                                        btn: {
                                                            options: {
                                                                type: 'danger'
                                                            },
                                                            event: {
                                                                change: e => {
                                                                    /* do something */
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            },
                                            created() {
                                                /* created */
                                            },
                                            mounted() {
                                                /* mounted */
                                            }
                                        }
                                </code>
                                <code class="xml" style="margin-top: -30px">
                                    &lt/script&gt
                                </code>
                            </pre>
                        </div>
                </div>
            </div>
    </div>
</template>

<script>
    export default {
        name: 'source-block',
        data () {
            return {
                showIcon: true,
                showBtn: false,
                visible: false,
                template: '',
                injection: alert
            }
        },
        created() {
            let wp = document.createElement('widget-page')
            wp.setAttribute('pagecode', 'p000001');
            wp.setAttribute(':injection', 'injection')
            this.template = wp.outerHTML
        }
    }
</script>

<style scoped lang="scss">
    .source-box /deep/ {
        width: 100%;
        height: 100%;
        position: relative;

        .trigger-btn {
            position: absolute;
            left: -1px;
            top: 50%;
            width: 40px;
            height: 40px;
            padding: 0;
            background-color: pink;
            border-color: hotpink;
            border-left: 0;
            box-shadow: 5px 5px 5px #ddd;
            color: red;
            transition: all .5s;
            z-index: 10;
            &:hover {
                color: red;
                width: auto;
                padding: 0 20px;
            }
        }

        @keyframes drawer-r {
            0% {
                transform: translateX(-100%);
            }
            100% {
                transform: translateX(0%);
            }
        }

        @keyframes drawer-l {
            0% {
                transform: translateX(0);
            }
            100% {
                transform: translateX(-100%);
            }
        }

        .code-panel {
            position: absolute;
            top: 0;
            height: 100%;
            width: 100%;
            transition: all .5s;
            z-index: 10000;
            .mask {
                overflow: hidden;
                width: 100%;
                height: 100%;
                background-color: #00000060;
                .panel {
                    height: 100%;
                    width: 0;
                    background-color: #282c34;
                    position: relative;
                    .close-icon {
                        position: absolute;
                        font-size: 22px;
                        right: 10px;
                        top: 10px;
                        color: #fff;
                        &:hover {
                            color: #ff0000;
                        }
                    }
                }
                .open {
                    width: 80%;
                    animation: drawer-r .5s;
                }
                .close {
                    /*width: 0;*/
                    animation: drawer-l .5s;
                }
            }
        }

        code {
            margin-bottom: -30px !important;
            margin-left: -200px !important;
            background: transparent;
        }

        .demo-block-control.is-fixed {
            position: absolute;
            left: 0 !important;
        }
    }
</style>
