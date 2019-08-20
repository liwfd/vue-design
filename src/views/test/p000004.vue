<template>
    <widget-page :injection="injection" pagecode="p000004">
    </widget-page>
</template>

<script>
    export default {
        name: 'p000004',
        data () {
            return {
                lineData: {},
                barData: {},
                pieData: {},
                donutData: {},
            }
        },
        created () {
            this.getChart()
        },
        methods: {
            getChart () {
                this.lineData = {
                    dimensions: {
                        name: 'Week',
                        data: ['Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fir.', 'Sat.', 'Sun.']
                    },
                    measures: [{
                        name: '因子总数',
                        data: [3000, 3500, 3900, 3100, 3200, 3100, 3600, 3300, 3600, 3400, 3100, 3000]
                    },
                        {
                            name: 'AI处理日志数',
                            data: [2000, 2000, 2600, 2300, 2300, 2000, 2600, 2200, 2500, 2800, 2500, 2200]
                        },
                        {
                            name: '漏报数',
                            data: [827, 949, 1400, 1000, 884, 911, 983, 989, 925, 1100, 1200, 930]
                        }]
                };
                this.barData = {
                    dimensions: {
                        name: 'Week',
                        data: ['Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fir.', 'Sat.', 'Sun.']
                    },
                    measures: [{
                        name: 'PV',
                        data: [256, 767, 1356, 2087, 803, 582, 432]
                    }, {
                        name: 'UV',
                        data: [287, 707, 1756, 1822, 987, 432, 322]
                    }]
                };
                this.pieData = {
                    dimensions: {
                        name: '渠道',
                        data: ['APP', 'PC', 'M端', '微信', '手Q', '小程序']
                    },
                    measures: [{
                        name: 'PV',
                        data: [40000, 27800, 22000, 20200, 15600, 13600]
                    }]
                };
                this.donutData = {
                    dimensions: {
                        name: '渠道',
                        data: ['APP', 'PC', 'M端', '微信', '手Q', '小程序']
                    },
                    measures: [{
                        name: 'PV',
                        data: [40000, 27800, 22000, 20200, 15600, 13600]
                    }]
                };
            }
        },
        computed: {
            injection () {
                return {
                    line: {
                        options: {
                            data: this.lineData,
                            settings: {
                                label: {
                                    show: true,
                                    fontSize: '12',
                                    fontWeight: 'bold'
                                },
                                smooth: true,
                                areaStyle: {}
                            },
                            title: {
                                text: '折线图'
                            }
                        }
                    },
                    bar: {
                        options: {
                            data: this.barData,
                            settings: {

                            },
                            title: {
                                text: '柱状图'
                            }
                        }
                    },
                    pie: {
                        options: {
                            data: this.pieData,
                            settings: {

                            },
                            title: {
                                text: '饼图'
                            }
                        }
                    },
                    donut: {
                        options: {
                            data: this.donutData,
                            settings: {

                            },
                            title: {
                                text: '环形图'
                            }
                        }
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>
