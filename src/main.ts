import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
//import VueRouter from 'vue-router'
//import Vuetify from 'vuetify'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  //VueRouter,
  render: h => h(App)
}).$mount('#app')
