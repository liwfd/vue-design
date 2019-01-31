import WidgetPage from '../components/layout/widgetPage';
// define class
class Api {
    constructor(data) {
        this.data = data;
    }
    install(Vue) {
        // exposed $utils to instance
        Object.assign(Vue.prototype, {
            $api: this.data
        });
    }
}

export default new Api({
    findUI: WidgetPage.methods.findUI
})
