<template>
  <v-container grid-list-xl fluid>
    <v-layout row>
      <v-flex xs10 offset-xs1>
        <v-card dark color="secondary">
          <v-container d-flex fill-height fluid>
            <v-layout fill-height>
              <v-flex xs10 align-start flexbox>
                <span class="question-text">{{ qna.que.question }}</span>
              </v-flex>
              <v-flex xs1 align-end flexbox>
                <span class="asker-text">{{ qna.que.asker }}</span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row justify-center v-if="shown">
      <v-form @submit.prevent="newanswer" class="answer-form">
        <v-flex xs10>
          <v-text-field name="answer-content" label="Answer this question..." id="content" v-model="content"></v-text-field>
        </v-flex>
        <v-flex xs2>
          <v-btn type="submit">Answer</v-btn>
        </v-flex>
      </v-form>
    </v-layout>
    <v-layout row wrap>
      <answer v-for="a in qna.ans" :key="a.id" :answer="a"></answer>
    </v-layout>
  </v-container>
</template>

<style>
.answer-form {
  width: 60%;
  display: flex;
}
</style>

<script>
import answer from '@/components/Answer.vue'
import axios from 'axios'
export default {
  name: 'Question',
  components: {
    answer: answer
  },
  props: {
    id: {type: [String, Number], required: true}
  },
  methods: {
    newanswer () {
      if (this.$session.exists()) {
        axios.post('/api/answers/add',
          {
            questionid: this.$route.params.id,
            content: this.content,
            userid: this.user.userid
          }
        )
        .then(response => {
          if (response.data.success) {
            this.shown = false
            axios.get('/api/answers/' + this.$route.params.id)
            .then(res => {
              this.qna = res.data
            })
          }
        })
      }
    }
  },
  data () {
    return {
      qna: {que: {question: '', asker: ''}, ans: []},
      errors: [],
      user: {},
      content: '',
      shown: false
    }
  },
  created () {
    const endpoint = '/api/answers/' + this.$route.params.id
    axios.get(endpoint)
    .then(res => {
      this.qna = res.data
    })
    .catch(e => {
      this.errors.push(e)
    })
    if (this.$session.exists()) {
      this.user = this.$session.get('userdata')
      this.shown = true
    }
  }
}
</script>
