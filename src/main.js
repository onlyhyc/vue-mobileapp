// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Goods from './components/goods/Goods.vue'
import Ratings from './components/ratings/Ratings.vue'
import Seller from './components/seller/Seller.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: '/goods',
    name: 'homeLink'
  },
  {
    path: '/goods',
    component: Goods,
    name: 'goodsLink'
  },
  {
    path: '/ratings',
    component: Ratings,
    name: 'ratingsLink'
  },
  {
    path: '/seller',
    component: Seller,
    name: 'sellerLink'
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})
/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  components: {
    App
  },
  template: '<App/>'
})