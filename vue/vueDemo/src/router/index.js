import Vue from 'vue'
import Router from 'vue-router'
import EventBusDemo from '@/components/EventBusDemo'
import VuexDemo from '@/components/VuexDemo'
import FullName from '@/components/FullName'
import Area from '@/components/Area'


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
    {
      path: "/FullName",
      component: FullName
    },
    {
      path: "/Area",
      component: Area
    },
  ]
})
