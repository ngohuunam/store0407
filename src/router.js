import Vue from 'vue'
import Router from 'vue-router'
import Swiper from './views/Swiper.vue'
import About from './views/About.vue'
import Cart from './views/Cart.vue'
import Grid from './views/Grid.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'grid',
      component: Grid,
    },
    {
      path: '/swiper',
      name: 'swiper',
      component: Swiper,
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
  ],
})
