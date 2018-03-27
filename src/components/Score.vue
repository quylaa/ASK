<template>
  <v-flex xs2 align-start>
    <v-card dark color="error">
      <v-card-text class="text-xs-center score"><v-btn @click="upscore" icon><v-icon :class="{disabled: upvoted}">keyboard_arrow_up</v-icon></v-btn>{{ score }}<v-btn @click="downscore" icon><v-icon :class="{disabled: downvoted}">keyboard_arrow_down</v-icon></v-btn></v-card-text>
    </v-card>
  </v-flex>
</template>

<style>
.disabled {
  color: #137E1D;
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
    question: {default: false},
    voted: String
  },
  data () {
    return {
      upvoted: false,
      downvoted: false
    }
  },
  methods: {
    upscore () {
      this.upvoted = !this.upvoted
      this.downvoted = false
      axios.get("http://192.168.80.14:8000/api/questions/${id}/upscore
    },
    downscore () {
      this.downvoted = !this.downvoted
      this.upvoted = false
    },
    updateScore () {
  },
  created () {
    if (voted === "+") this.upscore()
    else if (voted === "-") this.downscore()
  },
  computed: {
    votes () {
      if (this.upvoted) return this.score + 1
      else if (this.downvoted) return this.score - 1
      else return this.votes
}
</script>
