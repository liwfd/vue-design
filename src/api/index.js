class Api {
    constructor() {}

    install(Vue) {
        // exposed $utils to instance
        Object.assign(Vue.prototype, {
            $getNode(nodeKey) {
                return this.$children[0].findUI(nodeKey);
            }
        });
    }
}

export default new Api();
