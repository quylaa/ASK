<template>
  <v-container grid-list text-xs-center>
    <v-layout row child-flex justify-center align-center wrap>
      <v-flex xs4>
        <v-form v-model="valid" @keyup.native.enter="valid && login($event)">
          <v-text-field label="Username" v-model="username" :rules="usernameRules" required></v-text-field>
          <v-text-field type="password" label="Password" v-model="password" :rules="passwordRules" required></v-text-field>
          <v-btn type="button" @click="login" :disabled="!valid">submit</v-btn>
        </v-form>
        No account?<v-spacer></v-spacer>
       <v-btn to="/register">register</v-btn>
     </v-flex>
    </v-layout>
  </v-container>
</template>

<style>

</style>

<script>
import axios from 'axios'
export default {
  name: 'login',
  data () {
    return {
      valid: true,
      username: '',
      usernameRules: [
        v => !!v || 'Username is required',
        v => (v && v.length >= 3) || 'Username must be greater than 3 characters'
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Password is required'
      ]
    }
  },
  methods: {
    login () {
      axios.post('http://192.168.80.14:8000/api/users/login',
        {
          username: this.username,
          password: this.password
        }
      )
      .then(response => {
        if (response.data.success) {
          this.$session.start()
          this.$session.set('jwt', response.data.token)
          this.$session.set('userdata', response.data.data)
          axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.token
          this.$router.push('/')
        } else if (!response.data.success) {
          alert('Invalid username or password')
        }
      }, err => {
        console.error('err', err)
      })
    }
  }
}
</script>
