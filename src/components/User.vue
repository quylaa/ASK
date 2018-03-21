<template>
<v-container>
 <v-tabs icons-and-text centered dark color="info">
    <v-tabs-slider color="accent"></v-tabs-slider>
    <v-tab href="#userInfo">
      User Info
      <v-icon>account_circle</v-icon>
    </v-tab>
    <v-tab href="#userQuestions">
      Questions
      <v-icon>help_outline</v-icon>
    </v-tab>
    <v-tab href="#userAnswers">
      Answers
      <v-icon>question_answer</v-icon>
    </v-tab>
    <v-tab-item
      v-for="i in 3"
      :key="i"
      :id="'tab-' + i"
    >
      <v-card flat>
        <v-card-text>{{ text }}</v-card-text>
      </v-card>
    </v-tab-item>
  </v-tabs>
</v-container>
</template>

<script>
export default {
  name: 'user',
  props: {
    id: {type: Number, required: true},
    asker: {type: String, required: true},
    question: {type: String, required: true},
    score: {type: Number, required: true}
  }
}
</script>
