import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/css/common.scss'
import './assets/css/global.scss'
import utils from './util/utils'
Vue.config.productionTip = false
Vue.use(MintUI)

Vue.prototype.$utils = utils

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
