import Vue from 'vue'
import Router from 'vue-router'
import Ask from '@/components/Ask'
import Search from '@/components/Search'
import User from '@/components/User'
import Question from '@/components/Question'
import Login from '@/components/Login'
import Logout from '@/components/Logout'
import New from '@/components/New'

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
    },
    {
      path: '/question/:id',
      name: 'Question',
      components: {default: Question},
      props: {default: true}
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/logout',
      name: 'Logout',
      component: Logout
    },
    {
      path: '/new',
      name: 'New',
      component: New
    }
  ]
})
