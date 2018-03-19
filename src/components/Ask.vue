<template>
  <v-container grid-list-xl fill-height fluid>
    <v-layout row wrap>
      <query v-for="q in questions"
      :key="q.id"
      :asker="q.asker" :question="q.question" :id="q.id" :score="q.score"></query>
    </v-layout>
  </v-container>
</template>

<script>
// import score from '@/components/Score.vue'
import query from '@/components/Query.vue'
import axios from 'axios'
export default {
  name: 'Ask',
  components: {
    query: query
  },
  data () {
    return {
      questions: [],
      errors: []
    }
  },
  created () {
    axios.get('http://192.168.80.14:8001/api/questions')
    .then(res => {
      this.questions = res.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
</script>
