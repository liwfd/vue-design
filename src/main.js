import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import fullscreen from 'vue-fullscreen'
import vueFetch from './plugin/vueFetch'
import "./directive"
import VueHighlightJS from 'vue-highlightjs'
import VeCharts from 've-charts'
import 've-charts/lib/ve-charts.min.css'
import 'element-ui/lib/theme-chalk/index.css'
import 'highlightjs/styles/atom-one-dark.css'
import VueClipboard from "vue-clipboard2"
import _ from 'lodash'
import Api from './api'
import Constant from './constant'
import './components/widget'
import './components/demo'
import "styles/total.scss";
import "./icons";

Vue.config.productionTip = false
Vue.use(ElementUI, { size: 'small' })
Vue.use(VueHighlightJS);
Vue.use(VueClipboard);
Vue.use(fullscreen)
Vue.use(vueFetch)
Vue.use(VeCharts)
Vue.use(Api)
Vue.use(Constant)
Vue.prototype._ = _;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
