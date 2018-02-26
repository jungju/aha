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

import {setDomain as daemonSetDomain} from './daemon'
import {setDomain as makezipSetDomain} from './makezip'

daemonSetDomain("http://localhost:38378/v1");
makezipSetDomain("http://main.makezip.com/v1");

// if(__DEV__){
//   daemonSetDomain("http://localhost:38378/v1")
//   //makezipSetDomain("http://makezip-beta.olimzone.com/v1")
//   makezipSetDomain("http://localhost:8080/v1")
//   Vue.prototype.$ProdEnv = 'local'
// } else {
//   axios.get('/apis/info')
//   .then(function (response) {
//     daemonSetDomain(response.data.daemonAPIURL)
//     makezipSetDomain(response.data.makezipAPIURL)
//     Vue.prototype.$ProdEnv = response.data.prodEnv
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
// }

Vue.use(ElementUI)

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title?to.meta.title+'-'+Config.siteName:Config.siteName;
    NProgress.start();
    if(to.path == '/login') {
      next();
    } else {
      if(!Function.getToken()) {
        next({path: '/login'});
        NProgress.done();
      }
      //TODO: 토큰 검증
      next();
    }
});
router.afterEach(transition => {
    NProgress.done()
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
