import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/Home"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'china',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'china',
        name: 'china',
        component: () => import(/* webpackChunkName: "country" */ '../views/China.vue')
      },
      {
        path: 'province',
        name: 'province',
        component: () => import(/* webpackChunkName: "province" */ '../views/Province.vue')
      },
      {
        path: 'news',
        name: 'news',
        component: () => import(/* webpackChunkName: "news" */ '../views/News.vue')
      },
      {
        path: 'rumor',
        name: 'rumor',
        component: () => import(/* webpackChunkName: "search" */ '../views/Rumor.vue')
      },
      {
        path: 'disknowledge',
        name: 'disknowledge',
        component: () => import(/* webpackChunkName: "identify" */ '../views/DiseaseKnowledge.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes,
  linkActiveClass: 'active'
})

export default router
