export default function WithCon (WrapprdComponent) {
    return {
        mounted() {
            console.log('===========mounted===========');
        },
        props: WrapprdComponent.props,
        render(h) {
            let slots = Object.keys(this.$slots).reduce((arr, key) => arr.concat(this.$slots[key]), [])

            // this.$vnode.context === this.$vnode.componentOptions.children[0].context
            .map(vnode => {
                vnode.context = this._self;
                return vnode;
            });
            return h(WrapprdComponent, {
                on: this.$listeners,
                attrs: this.$attrs,
                props: this.$props,
                scopedSlots: this.$scopedSlots
            }, slots);
        }
    };
}
