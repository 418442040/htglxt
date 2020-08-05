//导入路由 
import VueRouter from "vue-router";

//导入vue
import Vue from 'vue';

//导入首页
import index from "../views/index/index.vue";

//导入登录页
import login from "../views/login/login.vue";

//注册router
Vue.use(VueRouter);

//创建路由对象
const router = new VueRouter ({
    routes: [
        {
            path: "/index",
            component: index
        },
        {
            path: "/login",
            component: login
        }
    ]
})

//导出路由
export default router
