import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: resolve => require(['~/views/layout/Mypage.vue'], resolve),
      meta: {
        title: '나의 페이지',
        keepAlive: false
      },
      children: [
        {
            path: '/',
            name: 'AHAView',
            meta: {
              title: '',
              keepAlive: false
            },
            component: resolve => require(['~/views/AhaView.vue'], resolve),
        },
      ]
    }
  ]
})
