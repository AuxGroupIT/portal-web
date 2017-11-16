import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: resolve => require(['../components/Home.vue'], resolve),
      children: [
        {
          path: 'blank',
          component: resolve => require(['../components/page/Blank.vue'] , resolve),
          name: '空白页'
          // meta : {tag:'3-1'},
          // tag: '3-1',
          // iconClass: 'fa fa-desktop'
        },
        {
          path: 'dashboard',
          component: resolve => require(['../components/page/Dashboard.vue'] , resolve),
          name: '展示页'
          // meta : {tag:'3-1'},
          // tag: '3-1',
          // iconClass: 'fa fa-desktop'
        }
      ]
    },
   {
      path: '/portal',
      component: resolve => require(['../components/Portal.vue'], resolve),
   },
   {
      path: '*',
      component: resolve => require(['../components/common/404.vue'], resolve)
   }
  ]
})

