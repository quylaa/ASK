<template>
  <v-container grid-list text-xs-center>
    <v-layout row wrap>
      <v-flex xs6>
        <v-form v-model="valid">
          <v-text-field label="Username" v-model="username" :rules="usernameRules" required></v-text-field>
          <v-text-field type="password" label="Password" v-model="password" :rules="passwordRules" required></v-text-field>
          <v-btn @submit="login" :disabled="!valid">submit</v-btn>
        </v-form>
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
        console.log(response.data)
        if (response.status === 200 && response.data.success) {
          this.$session.start()
          this.$session.set('jwt', response.data.token)
          this.$session.set('userdata', response.data.data)
          // axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.token
          this.$router.push('/user/' + response.data.data.userid)
        }
      }, err => {
        console.error('err', err)
      })
    }
  }
}
</script>
