<template>
  <v-container grid-list-md fill-height fluid>
    <v-layout row wrap>
      <query v-for="q in questions" :key="q.id" :query="q"></query>
    </v-layout>
  </v-container>
</template>

<style>
@media only screen and (max-width: 599px) .container {
  padding: 12px;
}
</style>

<script>
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
      votes: [],
      errors: []
    }
  },
  created () {
    axios.get('http://192.168.80.14:8000/api/questions')
    .then(res => {
      this.questions = res.data
      if (this.$session.exists()) {
        let user = this.$session.get('userdata')
        axios.get('http://192.168.80.14:8000/api/users/' + user.userid + '/votes/q')
        .then(results => {
          this.votes = results.data
        })
      }
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
</script>
