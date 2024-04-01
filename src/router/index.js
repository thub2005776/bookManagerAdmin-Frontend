import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/Admin.vue')
    },
    {
      path: '/book/:id',
      name: 'bookedit',
      props:true,
      component: () => import('../views/EditBook.vue')
    },
    {
      path: '/book/add',
      name: 'bookadd',
      component: () => import('../views/AddBook.vue')
    },
    {
      path: '/profile/:id',
      name: 'profile',
      props:true,
      component: () => import('../views/Profile.vue')
    },
    {
      path: '/user',
      name: 'adduser',
      component: () => import('../views/AddUser.vue')
    },
    {
      path: '/editprofile/:id',
      name: 'editprofile',
      component: () => import('../views/EditProfile.vue')
    },
    {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: () => import("@/views/NotFound.vue"),
    }
  ]
})

export default router;
