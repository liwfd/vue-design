<template>
    <demo-block class="demo-box">
        <div class="source" slot="source">
            <el-button>DIANJI</el-button>
        </div>
        <!--${descriptionHTML}-->
        <div class="highlight" slot="highlight">
            <pre v-highlightjs>
                <code class="xml">
                    {{template}}
                </code>
                <code class="xml">
                    &ltscript&gt
                </code>
                <code class="javascript">
                        export default {
                            name: 'preT',
                            components: { DemoBlock },
                            data () {
                                return {
                                    template: '',
                                    injection: {{template}}
                                }
                            },
                            created() {
                            }
                        }
                </code>
                <code class="xml">
                    &lt/script&gt
                </code>
                <code class="xml">
                    &ltstyle&gt
                </code>
                <code class="css">
                    {
                      border: 1px solid #fff;
                    }
                </code>
                <code class="xml">
                    &lt/style&gt
                </code>
            </pre>
        </div>
    </demo-block>
</template>

<script>
    import DemoBlock from '../../components/demo/demo-block'
    import alert from './md/test.md';
    export default {
        name: 'preT',
        components: { DemoBlock },
        data () {
            return {
                template: '<template>666</template>',
                injection: alert
            }
        },
        created() {
        }
    }
</script>

<style scoped lang="scss">
    .demo-box /deep/ {
        code {
            margin-bottom: -30px !important;
        }
    }
</style>
