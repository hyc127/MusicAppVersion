// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyLoad from 'vue-lazyload'
import Mint from 'mint-ui'
import '../node_modules/mint-ui/lib/style.css'
import { createStore } from './store'
import player from './components/player.vue'
Vue.component('player', player)

Vue.use(Mint)
Vue.use(VueLazyLoad, {
  loading: './assets/logo.png'
})

Vue.config.productionTip = false

const store = createStore()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
