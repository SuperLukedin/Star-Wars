import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueResource from 'vue-resource'
import vuetify from './plugins/vuetify';


Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(vuetify)

new Vue({
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
