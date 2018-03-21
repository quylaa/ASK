import Vue from 'vue'
import Router from 'vue-router'
import Ask from '@/components/Ask'
import Search from '@/components/Search'
import Question from '@/components/Question'

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
      path: '/question/:id',
      name: 'Question',
      component: Question
    }
  ]
})
