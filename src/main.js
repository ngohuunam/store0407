import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import './registerServiceWorker'

Vue.config.productionTip = false
Vue.config.devtools = true
Vue.config.performance = true

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
