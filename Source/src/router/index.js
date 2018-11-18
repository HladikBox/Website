import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import plan from '@/components/plan'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/plan',
      name: 'plan',
      component: plan
    }
  ]
})
