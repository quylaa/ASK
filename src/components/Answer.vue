<template>
  <v-flex xs10>
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
</template>

<script>
export default {
  name: 'Answer',
  props: {
    answer: {type: Object, required: true}
  }
}
</script>
