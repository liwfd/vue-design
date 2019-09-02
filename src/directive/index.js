import Vue from "vue";
import drag from "./el-dragDialog";
import clickoutside from './clickoutside';

Vue.directive("el-drag-dialog", drag);
Vue.directive('clickoutside', clickoutside);

export default drag;
