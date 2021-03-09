import Vue from "vue";
import Element from "./element";
import 'element-ui/lib/theme-chalk/index.css'

[...Element.components, ...WlUi].forEach(i => Vue.use(i))