import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Reading from  '@/components/Reading.vue'
import More from  '@/components/More.vue'
import Sort from  '@/components/Sort.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path:'/Reading',
      name:'Reading',
      component:Reading,
    },
    {
      path:'/More',
      name:'More',
      component:More,
    },
    {
      path:'/Sort/:id',
      name:'Sort',
      component:Sort,
    },
  ]
})
