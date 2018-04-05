// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueSession from 'vue-session'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify, {
  theme: {
    primary: '#212A3F',
    secondary: '#64708A',
    accent: '#A2EADE',
    error: '#b30000',
    info: '#BAC3D8',
    score: '#3B4459',
    answer: '#8790A5'
  }
})
Vue.use(VueSession)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
