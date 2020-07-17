import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Dashboard from '../views/Dashboard.vue';

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard,
  },
  {
    path: '/projects',
    name: 'projects',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Projects.vue')
  },
  {
    path: '/team',
    name: 'team',    
    component: () => import(/* webpackChunkName: "about" */ '../views/Team.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
