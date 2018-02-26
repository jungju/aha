import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
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
            name: '콘텐트',
            meta: {
              title: '',
              keepAlive: false
            },
            component: resolve => require(['~/views/Products.vue'], resolve),
        },
        {
            path: '/login',
            name: '로그인',
            meta: {
              title: '',
              keepAlive: false
            },
            component: resolve => require(['~/views/Login.vue'], resolve),
        }
      ]
    }
  ]
})
