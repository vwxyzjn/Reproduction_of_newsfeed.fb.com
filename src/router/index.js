import Vue from 'vue'
import Router from 'vue-router'
import Welcome1 from '@/components/Welcome1'
import Stories2 from '@/components/Stories2'

Vue.use(Router)

const routes_record = [
    {
      path: '/',
      name: 'Welcome1',
      component: Welcome1
    },
    {
      path: '/the-stories-you-care-about',
      name: 'Stories2',
      component: Stories2
    }
  ]

export default new Router({
  routes: routes_record
})

export {routes_record}
