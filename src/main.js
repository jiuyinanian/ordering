// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import routes from './router/routes'
import VueRouter from 'vue-router'
import axios from 'axios'
import store from './store/store'

Vue.config.productionTip = false
Vue.use(VueRouter)

// axios.defaults.baseURL = "https://wd5318880673xdcauy.wilddogio.com/"

//路由配置
const router = new VueRouter({
  routes: routes,
  mode: "history"
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
