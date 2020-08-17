//导入路由 
import VueRouter from "vue-router";

//导入vue
import Vue from 'vue';

//导入首页
import index from "../views/index/index.vue";

//导入登录页
import login from "../views/login/login.vue";

//导入企业列表
import enterprise from '../views/index/enterprise/enterprise.vue'

//导入学科列表
import subject from '../views/index/subject/subject.vue'

//导入题库列表
import question from '../views/index/question/question.vue'

//导入用户列表
import user from '../views/index/user/user.vue'

//导入数据列表
import chart from '../views/index/chart/chart.vue'

//注册router
Vue.use(VueRouter);

//创建路由对象
const router = new VueRouter ({
    routes: [
        {
            path: "/index",
            component: index,
            children: [
                //企业列表
                {
                    path: 'enterprise',
                    component: enterprise
                },
                //学科列表
                {
                    path: 'subject',
                    component: subject
                },
                //用户列表
                {
                    path: 'user',
                    component: user
                },
                //数据列表
                {
                    path:'chart',
                    component: chart
                },
                //题库列表
                {
                    path:'question',
                    component: question
                }
            ]
        },
        {
            path: "/login",
            component: login
        }
    ]
})

//导出路由
export default router
