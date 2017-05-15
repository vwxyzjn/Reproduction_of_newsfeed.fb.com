import Vue from 'vue'
import Router from 'vue-router'
import Welcome1 from '@/components/Welcome1'
import 

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome1',
      component: Welcome1
    }
  ]
})
