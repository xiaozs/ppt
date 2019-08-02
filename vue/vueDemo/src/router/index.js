import Vue from 'vue'
import Router from 'vue-router'
import Name from '@/components/Name'
import IfElse from '@/components/IfElse'
import For from '@/components/For'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/name',
      component: Name
    },
    {
      path: '/ifelse',
      component: IfElse
    },
    {
      path: '/for',
      component: For
    }
  ]
})
