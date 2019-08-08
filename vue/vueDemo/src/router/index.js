import Vue from 'vue'
import Router from 'vue-router'
import EventBusDemo from '@/components/EventBusDemo'
import VuexDemo from '@/components/VuexDemo'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/EventBusDemo",
      component: EventBusDemo
    },
    {
      path: "/VuexDemo",
      component: VuexDemo
    },
  ]
})
