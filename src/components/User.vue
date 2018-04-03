<template>
<v-container>
 <v-tabs icons-and-text centered dark color="info">
    <v-tabs-slider color="accent"></v-tabs-slider>
    <v-tab href="#tab-1">
      User Info
      <v-icon>account_circle</v-icon>
    </v-tab>
    <v-tab href="#tab-2">
      Questions
      <v-icon>help_outline</v-icon>
    </v-tab>
    <v-tab href="#tab-3">
      Answers
      <v-icon>question_answer</v-icon>
    </v-tab>
    <v-tab-item
      v-for="i in items"
      :key="i"
      :id="'tab-' + i.id"
    >
      <v-card flat v-if="i.id === 1">
          <v-card-text>
            <v-list subheader>
              <v-list-title avatar>
                <v-list-title-avatar>
                  <v-icon color="info" class="helpme">person</v-icon>
                </v-list-title-avatar>
              </v-list-title>
              <v-list-title-content>
                <v-list-tile-title class="font">Name: {{ i.name }}</v-list-tile-title>
                <v-list-tile-title class="font">Username: {{ i.username }}</v-list-tile-title>
                <v-list-tile-title class="font">Email: {{ i.email }}</v-list-tile-title>
              </v-list-title-content>
            </v-list>
          </v-card-text>
      </v-card>
      <v-card flat v-else-if="i.id === 2">
        <v-card-text>
          <query v-for="q in i.questions" :key="q.questionid" :query="q"></query>
        </v-card-text>
      </v-card>
      <v-card flat v-else="i.id === 3">
        <v-card-text>
          <answer v-for="a in i.answers" :key="a.answerid" :answer="a"></answer>
        </v-card-text>
      </v-card>
    </v-tab-item>
  </v-tabs>
</v-container>
</template>

<style>
.font {
    font-size: 22px;
    text-align: center;
}
.helpme {
    display: flex;
    justify-content: center;
    font-size: 130px;
}
</style>
<script>
import axios from 'axios'
import query from '@/components/Query.vue'
import answer from '@/components/Answer.vue'
export default {
  name: 'user',
  components: {
    query: query,
    answer: answer
  },
  data () {
    return {
      items: [
        {
          title: 'User Information',
          name: '',
          username: '',
          email: '',
          id: 1
        },
        {
          title: 'Questions',
          questions: [],
          id: 2
        },
        {
          title: 'Answers',
          answers: [],
          id: 3
        }
      ]
    }
  },
  created () {
    let userdata = this.$session.get('userdata')
    this.items[0].name = userdata.name
    this.items[0].username = userdata.username
    this.items[0].email = userdata.email
    // this.items[1].questions = userdata.questions
    // this.items[2].answers = userdata.answers
    if (this.$session.exists()) {
      this.user = this.$session.get('userdata')
      if (typeof axios.defaults.headers.common['Authorization'] === 'undefined') axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.$session.get('jwt')
      axios.get('http://192.168.80.14:8000/api/users/' + this.user.userid)
      .then(res => {
        if (res.data) {
          this.items[1].questions = res.data.questions
          this.items[2].answers = res.data.answers
        }
      })
    }
  }
}
</script>
