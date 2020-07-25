import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
import VueAxios from 'vue-axios'

import 'bootstrap'

import textFilter from './filter/textFilter';

Vue.use(VueAxios, axios) 

Vue.config.productionTip = false

Vue.filter('textFilter',textFilter)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
