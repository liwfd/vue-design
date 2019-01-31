<script>
    export default {
        name: 'render-column',
        functional: true,
        props: {
            scope: Object,
            render: Function
        },
        render: (h, ctx) => {
            return ctx.props.render(h, ctx.props.scope)
        }
    }
</script>

<style scoped>

</style>
