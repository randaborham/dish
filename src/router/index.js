import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Layout from '../router/Layout.vue';
import UserPage from '../views/UserPage.vue';

const routes = [
  {
    path: '/',
    component: Layout, // استخدام Layout كمكون عادي
    children: [
      {
        path: '',
        name: 'view',
        component: HomeView
      },
      {
        path: 'account',
        name: 'Account',
        component: () => import('../views/AccountPage.vue')
      },
      {
        path: 'user',
        name: 'Users',
        component: UserPage
      },
      {
        path: 'about',
        name: 'Settings',
        component: () => import('../views/AboutView.vue')
      },
    ],
  },
  {
    path:"/user",
    name:"user",
    component:UserPage
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
