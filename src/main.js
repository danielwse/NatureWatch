import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routescomp from './routes.js'
import 'leaflet/dist/leaflet.css'
import SuiVue from 'semantic-ui-vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


Vue.use(VueRouter)
Vue.use(SuiVue)
Vue.config.productionTip = false
const myRouter =  new VueRouter({
  routes:Routescomp,
  mode:'history'
})

new Vue({
  render: h => h(App),
  router:myRouter
}).$mount('#app')

