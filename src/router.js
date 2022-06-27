import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/consultas',
      name: 'consultas',
      component: () => import('./views/Consultas.vue')
    },
    {
      path: '/',
      name: 'login',
      component: () => import('./views/Login.vue')
    },
    {
      path: '/cadastro',
      name: 'cadastro',
      component: () => import('./views/Cadastro.vue')
    }
  ]
})
