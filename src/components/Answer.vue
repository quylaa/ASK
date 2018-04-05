<template>
<v-container justify-center d-flex>
  <score :score="answer.answerScore" :id="answer.id" :answer="true"></score>
  <v-flex xs9 lg8 align-end>
    <v-card dark color="answer">
      <v-container fill-height fluid>
        <v-layout fill-height>
          <v-flex xs10 align-start flexbox>
            <span class="answer-text">{{ answer.answer }}</span>
          </v-flex>
          <v-flex xs1 align-end flexbox>
            <span class="author-text">{{ answer.author }}</span>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-flex>
</v-container>
</template>

<style>

</style>

<script>
import score from '@/components/Score.vue'
export default {
  name: 'Answer',
  components: {
    score: score
  },
  props: {
    answer: {type: Object, required: true}
  }
}
</script>
