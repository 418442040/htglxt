import Vue from 'vue'
import App from './App.vue'

//导入路由
import router from './router/index.js'

//导入element组件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//注册element
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
