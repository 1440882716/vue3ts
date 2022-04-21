import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    meta:{
      isShow:true,
      title:"首页"
    },
    component: HomeView,
    children:[
      {
      path: 'order',
      name: 'order',
      meta:{
        isShow:true,
        title:"商品列表"
      },
      component: () => import(/* webpackChunkName: "order" */ '../views/OrderView.vue'),
    },
    {
      path: 'user',
      name: 'user',
      meta:{
        isShow:true,
        title:"用户管理"
      },
      component: () => import(/* webpackChunkName: "user" */ '../views/UserList.vue'),
    }
    
    ]
  },
  {
    path: '/about',
    name: 'about',
    meta:{
      isShow:true,
      title:"菜单管理"
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',

    component: () => import(/* webpackChunkName: "about" */ '../views/login.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
