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
      <v-card flat v-if="i.id === 1" class="user-info">
          <v-card-text>
            <v-list subheader class="user-list">
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
      <v-container grid-list-md fill-height fluid v-else-if="i.id === 2">
        <v-layout row wrap>
          <query v-for="q in i.questions" :key="q.questionid" :query="q"></query>
        </v-layout>
      </v-container>
      <v-container grid-list-md fill-height fluid v-else-if="i.id === 3">
        <v-layout row wrap>
          <answer v-for="a in i.answers" :key="a.answerid" :answer="a"></answer>
        </v-layout>
      </v-container>
    </v-tab-item>
  </v-tabs>
</v-container>
</template>

<style>
.font {
    font-size: 22px;
    text-align: center!important;
}
.helpme {
    display: flex!important;
    justify-content: center!important;
    font-size: 130px!important;
}
.user-info, .user-list {
  background: inherit!important;
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
    if (this.$session.exists()) {
      this.user = this.$session.get('userdata')
      if (typeof axios.defaults.headers.common['Authorization'] === 'undefined') axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.$session.get('jwt')
      axios.get('/api/users/' + this.user.userid)
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
