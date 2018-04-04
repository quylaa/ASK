<template>
  <v-container grid list text-xs-center class="register">
    <v-layout row child-flex justify-center align-center wrap>
      <v-flex xs4>
        <v-form v-model="valid" @submit="register">
          <v-text-field label="Name" v-model="name" :rules="nameRules" required></v-text-field>
          <v-text-field label="Username" v-model="username" :rules="usernameRules" required></v-text-field>
          <v-text-field label="Email" v-model="email" :rules="emailRules" required></v-text-field>
          <v-text-field type="password" label="Password" v-model="password" :rules="passwordRules" required></v-text-field>
          <v-btn type="submit" :disbaled="!valid">submit</v-btn>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style>
.register {
  background: inherit!important;
}
</style>

<script>
import axios from 'axios'
export default {
  name: 'register',
  data () {
    return {
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required'
      ],
      username: '',
      usernameRules: [
        v => !!v || 'Username is required',
        v => (v && v.length > 3) || 'Username must be greater than 3 characters'
      ],
      password: '',
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length >= 8) || 'Password must be at least 8 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'Email is required',
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
      ]
    }
  },
  methods: {
    register () {
      axios.post('http://192.168.80.14:8000/api/users/add',
        {
          name: this.name,
          username: this.username,
          password: this.password,
          email: this.email
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
          alert('Please register')
        }
      }, err => {
        console.error('err', err)
      })
    }
  }
}
</script>
