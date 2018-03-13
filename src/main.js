// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

Vue.config.productionTip = false

Vue.component('query', {
  props: ['asker', 'question', 'id'],
  template: `
  <v-flex xs10>
    <v-card dark color="purple">
      <v-container fill-height fluid>
        <v-layout fill-height>
          <v-flex xs10 align-start flexbox>
            <span class="question-text">{{ question }}</span>
          </v-flex>
          <v-flex xs1 align-end flexbox>
            <span class="asker-text">{{ asker }}</span>
          </v-flex>
          <v-flex xs1 align-end flexbox>
            <span>{{ id }}</span>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-flex>`
})

Vue.component('score', {
  props: ['id'],
  template: `
  <v-flex xs1 align-end>
    <v-card dark color="blue">
      <v-card-text>{{ id }}</v-card-text>
    </v-card>
  </v-flex>`
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router,
  components: { App },
  template: '<App/>'
})
