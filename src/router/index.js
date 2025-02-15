import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  linkExactActiveClass: 'active_link',
  linkActiveClass: 'active_link',
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/products',
      name: 'Product',
      component: () => import('../views/Products.vue'),
    },

    {
      path: '/cart',
      name: 'Cart',
      component: () => import('../views/Cart.vue'),
    },

    {
      path: '/contact',
      name: 'Contact',
      component: () => import('../views/contact.vue'),
    },
    {
      path: '/productdetails/:id',
      name: 'ProductDetails',
      component: () => import('../views/Product-Details.vue'),
    },
    { path: '/:pathMatch(.*)*', component: () => import('../views/NotFound.vue') },
  ],
})
export default router