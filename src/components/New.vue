<template>
  <v-container grid-list-xl fill-height fluid>
    <v-layout row wrap justify-center>
      <v-form @submit.prevent="newask" class="question-form">
        <v-flex xs10>
          <v-text-field name="question-content" label="Ask a question..." id="content" v-model="content"></v-text-field>
        </v-flex>
        <v-flex xs2>
          <v-btn type="submit">ASK!</v-btn>
        </v-flex>
      </v-form>
    </v-layout>
  </v-container>
</template>

<style>
.question-form {
  display: flex;
  width: 60%;
}
</style>

<script>
import axios from 'axios'
export default {
  name: 'new',
  data () {
    return {
      content: '',
      user: {}
    }
  },
  methods: {
    newask () {
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
  },
  created () {
    if (!this.$session.exists()) this.$router.push('/login')
    this.user = this.$session.get('userdata')
  }
}
</script>
