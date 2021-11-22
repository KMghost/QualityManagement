import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import NotFound from "../views/NotFound";
import home from "../views/home/Home";


export default new Router({
    mode: 'history',  // mode两种模式 hash是路径带#的，mode是路径不带#的
    routes: [
        {
            path: '/',
            component: home,
        },
        {
            path:'*',
            component: NotFound
        }
    ]
})
