<template>
<v-container d-flex>
  <v-flex xs1 align-start>
    <v-card light color="accent">
      <v-card-text class="text-xs-center">{{ score }}</v-card-text>
    </v-card>
  </v-flex>
  <v-flex xs10>
    <v-card dark color="secondary">
      <v-container fill-height fluid>
        <v-layout fill-height>
          <v-flex xs10 align-start flexbox>
            <span class="question-text">{{ question }}</span>
          </v-flex>
          <v-flex xs1 align-end flexbox>
            <span class="asker-text">{{ asker }}</span>
          </v-flex>
          <v-flex xs1 align-end flexbox>
            <span class="text-xs-center">{{ id }}</span>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-flex>
</v-container>
</template>

<script>
export default {
  name: 'query',
  props: {
    id: {type: Number, required: true},
    asker: {type: String, required: true},
    question: {type: String, required: true},
    score: {type: Number, required: true}
  }
}
</script>
