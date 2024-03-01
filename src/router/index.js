import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/pages/Home.vue';
import About from '@/views/pages/About.vue';
import loginVue from '@/views/pages/login.vue';
import ApplyLeave from '@/views/pages/ApplyLeave.vue';
import Logout from '@/views/pages/Logout.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: { requiresAuth: true } // Require authentication for Home route
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      meta: { requiresAuth: true } // Require authentication for About route
    },
    {
      path: '/login',
      name: 'Login',
      component: loginVue,
      meta: { layout: 'no-layout' }
    },
    {
      path: '/applyleave',
      name:'ApplyLeave',
      component: ApplyLeave,
      meta: { requiresAuth: true } 
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout,
      meta: {requiresAuth: true}
    }
  ]
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('token'); // Check if user is authenticated
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isAuthenticated) {
      next({ name: 'Login' }); // Redirect to login if not authenticated
    } else {
      next();
    }
  } else {
    next(); // Proceed to route
  }
});

export default router;
