import Vue from 'vue'
import Router from 'vue-router'
import Ask from '@/components/Ask'
import Search from '@/components/Search'
<<<<<<< HEAD
import User from '@/components/User'
// import Card from '@/components/Card'
=======
import Question from '@/components/Question'
>>>>>>> bceb3ef0a5f33bef90cb4a7c68a7be962a271b9b

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
<<<<<<< HEAD
      path: '/user',
      name: 'User',
      component: User
=======
      path: '/question/:id',
      name: 'Question',
      component: Question
>>>>>>> bceb3ef0a5f33bef90cb4a7c68a7be962a271b9b
    }
  ]
})
