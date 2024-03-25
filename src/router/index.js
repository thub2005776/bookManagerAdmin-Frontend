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
      component: () => import('../views/BookEdit.vue')
    },
    {
      path: '/book/add',
      name: 'bookadd',
      component: () => import('../views/BookAdd.vue')
    },
    {
      path: '/profile/:id',
      name: 'profile',
      component: () => import('../views/Profile.vue')
    },
    {
      path: '/editprofile/:id',
      name: 'editprofile',
      component: () => import('../views/EditProfile.vue')
    }
  ]
})

export default router
