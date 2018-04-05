<template>
  <v-flex xs3 lg2 align-start>
    <v-card dark color="score">
      <v-card-text class="text-xs-center score">
        <v-btn @click="upscore" icon>
          <v-icon :class="{disabled: upvoted}">keyboard_arrow_up</v-icon>
        </v-btn>
        {{ value }}
        <v-btn @click="downscore" icon>
          <v-icon :class="{disabled: downvoted}">keyboard_arrow_down</v-icon>
        </v-btn>
      </v-card-text>
    </v-card>
  </v-flex>
</template>

<style>
.disabled {
  color: #8790A5!important;
}
.score {
  padding: 2px!important;
}
</style>

<script>
import axios from 'axios'
export default {
  name: 'score',
  props: {
    score: {type: Number, required: true},
    id: {type: Number},
    answer: {default: false},
    question: {default: false}
  },
  data () {
    return {
      upvoted: false,
      downvoted: false,
      voted: '',
      value: this.score,
      endp: (this.question) ? 'q' : 'a',
      user: {}
    }
  },
  methods: {
    upscore () {
      if (this.$session.exists()) {
        if (!this.upvoted) {
          this.upvoted = !this.upvoted
          this.downvoted = false
          axios.put('/api/users/' + this.user.userid + '/votes/' + this.endp, {id: this.id, vote: '+'})
          .then(res => {
            this.value = res.data.score
          })
        } else {
          this.nullscore('-')
        }
      }
    },
    downscore () {
      if (this.$session.exists()) {
        if (!this.downvoted) {
          this.downvoted = !this.downvoted
          this.upvoted = false
          axios.put('/api/users/' + this.user.userid + '/votes/' + this.endp, {id: this.id, vote: '-'})
          .then(res => {
            this.value = res.data.score
          })
        } else {
          this.nullscore('+')
        }
      }
    },
    nullscore (vote) {
      if (this.$session.exists()) {
        axios.put('/api/users/' + this.user.userid + '/votes/' + this.endp, {id: this.id, vote: vote, reset: true})
        .then(res => {
          this.value = res.data.score
        })
        this.upvoted = this.downvoted = false
        this.voted = ''
      }
    }
  },
  created () {
    if (this.$session.exists()) {
      this.user = this.$session.get('userdata')
      if (typeof axios.defaults.headers.common['Authorization'] === 'undefined') axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.$session.get('jwt')
      axios.get('/api/users/' + this.user.userid + '/votes/' + this.endp + '/' + this.id)
      .then(res => {
        if (res.data) this.voted = res.data.vote
      })
      .then(() => {
        if (this.voted === '+') this.upvoted = true
        else if (this.voted === '-') this.downvoted = true
      })
    }
  }
}
</script>
