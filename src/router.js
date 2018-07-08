import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Cart from './views/Cart.vue'
import Grid from './views/Grid.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/grid',
      name: 'grid',
      component: Grid,
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
