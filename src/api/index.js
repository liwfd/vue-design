import Vue from 'vue';
import WidgetPage from '../components/layout/widgetPage';
// define class

console.log('WidgetPage', WidgetPage);
const WidgetConstructor = Vue.extend(WidgetPage);
let ctx = new WidgetConstructor();
console.log('ctx', ctx);

class Api {
    constructor() {

    }

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
