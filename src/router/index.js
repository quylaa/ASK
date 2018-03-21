import Vue from 'vue'
import Router from 'vue-router'
import Ask from '@/components/Ask'
import Search from '@/components/Search'
import User from '@/components/User'
// import Card from '@/components/Card'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Ask',
      component: Ask
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/user',
      name: 'User',
      component: User
    }
  ]
})
