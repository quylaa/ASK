<template>
  <v-container grid-list-md fill-height fluid>
    <v-layout row wrap>
      <v-container d-flex>
      <v-form ref="newask" v-model="valid" @submit.prevent="newask" class="question-form" v-if="this.$session.exists()">
        <v-flex xs10>
          <v-text-field v-model="content" name="question-content" :rules="contentRules" label="Ask a question..." id="content" required></v-text-field>
        </v-flex>
          <v-btn type="submit" >ASK!</v-btn>
      </v-form>
      </v-container>
      <query v-for="q in questions" :key="q.id" :query="q"></query>
    </v-layout>
  </v-container>
</template>

<style>
@media only screen and (max-width: 599px) .container {
  padding: 12px;
}
.question-form {
  display: flex;
  width: 60%;
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
  methods: {
    newask () {
      if (this.$session.exists() && this.$refs.newask.validate()) {
        axios.post('http://192.168.80.14:8000/api/questions/add',
          {
            content: this.content,
            userid: this.user.userid
          }
        )
        .then(response => {
          if (response.data.success) {
            this.$router.push('/question/' + response.data.questionid)
          }
        })
      }
    }
  },
  data () {
    return {
      questions: [],
      votes: [],
      errors: [],
      user: {},
      content: '',
      contentRules: [
        v => !!v || 'Please ask a question',
        v => (v && v.length >= 5) || 'Please ask a question with substance',
        v => /^[\w\W\s]+\?$/.test(v) || 'A question usually ends with a certain mark...'
      ],
      valid: false
    }
  },
  created () {
    axios.get('http://192.168.80.14:8000/api/questions')
    .then(res => {
      this.questions = res.data
      if (this.$session.exists()) {
        this.user = this.$session.get('userdata')
        axios.get('http://192.168.80.14:8000/api/users/' + this.user.userid + '/votes/q')
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
