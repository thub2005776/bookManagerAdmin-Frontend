import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import publisherService from '@/services/publisher.service';

const publishers = await publisherService.getAll();


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
      component: () => import('../views/EditBook.vue'),
      meta: {
        publishers: publishers,
      }
    },
    {
      path: '/book/add',
      name: 'bookadd',
      component: () => import('../views/AddBook.vue'),
      meta: {
        publishers: publishers,
      }
    },
    {
      path: '/publisher/:id',
      name: 'publisherEdit',
      props:true,
      component: () => import('../views/EditPublisher.vue')
    },
    {
      path: '/publisher/add',
      name: 'publisherAdd',
      component: () => import('../views/AddPublisher.vue')
    },
    {
      path: '/profile/:id',
      name: 'profile',
      props:true,
      component: () => import('../views/Profile.vue')
    },
    {
      path: '/user/add',
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
