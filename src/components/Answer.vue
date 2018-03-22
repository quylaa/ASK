<template>
<v-container justify-center d-flex>
  <v-flex xs2 align-start>
    <v-card dark color="error" class="score">
      <v-card-text class="text-xs-center"><v-btn icon><v-icon color="white">keyboard_arrow_up</v-icon></v-btn>{{ answer.answerScore }}<v-btn icon><v-icon color="white">keyboard_arrow_down</v-icon></v-btn></v-card-text>
    </v-card>
  </v-flex>
  <v-flex xs8 align-end>
    <v-card dark color="error">
      <v-container fill-height fluid>
        <v-layout fill-height>
          <v-flex xs10 align-start flexbox>
            <span class="answer-text">{{ answer.answer }}</span>
          </v-flex>
          <v-flex xs1 slign-end flexbox>
            <span class="author-text">{{ answer.author }}</span>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-flex>
</v-container>
</template>

<style>
.score {
  width: 105%;
}
.score div {
  padding: 2px;
}
</style>

<script>
export default {
  name: 'Answer',
  props: {
    answer: {type: Object, required: true}
  }
}
</script>
