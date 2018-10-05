import Vue from 'vue'
import ElementUI from 'element-ui'
import NProgress from 'nprogress'
import 'element-ui/lib/theme-chalk/index.css'
import 'es6-promise/auto'
import axios from 'axios'

import router from './router'
import Config from './config'
import Function from './function'

import App from './App.vue'
Vue.prototype.$Config = Config
Vue.prototype.$Func = Function

Vue.use(ElementUI)

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title?to.meta.title+'-'+Config.siteName:Config.siteName;
  NProgress.start();
  next();
});
router.afterEach(transition => {
    NProgress.done()
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
