import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/pages/Home.vue'
import About from '@/views/pages/About.vue'
import loginVue from '@/views/pages/login.vue'
import ApplyLeave from '@/views/pages/ApplyLeave.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/login',
      name: 'Login',
      component: loginVue,
      meta: { layout: 'no-layout' } // Adding meta field to specify no-layout

    },
    {
      path: '/applyleave',
      name:'ApplyLeave',
      component: ApplyLeave
    }
  ]
})

export default router
