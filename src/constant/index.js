class Constants {
    constructor(data) {
        this.data = data;
    }

    install(Vue) {
        // exposed $constants to Vue class
        Object.assign(Vue, {
            $constants: this.data
        });

        // exposed $constants to instance
        Object.assign(Vue.prototype, {
            $constants: this.data
        });
    }
}

let instances = {}
const requireContext = require.context('./context', false, /\.js$/)
requireContext.keys().forEach(path => {
    let module = path.replace(".js", "").replace("./", "")
    instances[module] = requireContext(path).default;
})

// export instance
export default new Constants(instances);
