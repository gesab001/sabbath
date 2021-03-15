import Vue from 'vue'
import App from './App.vue'
import VueGapi from 'vue-gapi'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './router'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false

Vue.use(VueGapi, {
  apiKey: 'AIzaSyAXfCxq9HJWIQ0dbQqv-Any0aNQwuLCsz8',
  clientId: '787297487118-1i2vh9u0e87d4btljri8uikc18la8os7.apps.googleusercontent.com',
  scope: 'https://www.googleapis.com/auth/photoslibrary.readonly',
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


