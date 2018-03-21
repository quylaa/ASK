<template>
  <v-container grid-list-xl fluid>
    <v-layout row>
      <v-flex xs8 offset-xs2>
        <v-card light color="secondary"
          <v-container fill-height fluid>
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
      <answer v-for="a in qna.ans" :key="a.id" :answer="a"></answer>
    </v-layout>
  </v-container>
</template>

<script>
import answer from '@/components/Answer.vue'
import axios from 'axios'
export default {
  name: 'Question',
  components: {
    answer: answer
  },
  data () {
    return {
      qna: {que: {question: '', asker: ''}, ans: []},
      errors: []
    }
  },
  props: {
    id: {type: [String, Number], required: true}
  },
  created () {
    const endpoint = 'http://192.168.80.14:8000/api/answers/' + this.$route.params.id
    axios.get(endpoint)
    .then(res => {
      this.qna = res.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
</script>
