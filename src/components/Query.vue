<template>
<v-container d-flex>
  <v-flex xs2 align-start>
<<<<<<< HEAD
    <v-card light color="accent" class="score">
      <v-card-text class="text-xs-center"><v-btn icon><v-icon color="white">keyboard_arrow_up</v-icon></v-btn>{{ score }}<v-btn icon><v-icon color="white">keyboard_arrow_down</v-icon></v-btn></v-card-text>
=======
    <v-card light color="accent">
      <v-card-text class="text-xs-center score"><v-btn icon><v-icon color="white">keyboard_arrow_up</v-icon></v-btn>{{ query.score }}<v-btn icon><v-icon color="white">keyboard_arrow_down</v-icon></v-btn></v-card-text>
>>>>>>> bceb3ef0a5f33bef90cb4a7c68a7be962a271b9b
    </v-card>
  </v-flex>
  <v-flex xs10><router-link :to="{name: 'Question', params: {id: query.id}}">
    <v-card dark color="secondary">
      <v-container fill-height fluid>
        <v-layout fill-height>
          <v-flex xs10 align-start flexbox>
            <span class="question-text">{{ query.question }}</span>
          </v-flex>
          <v-flex xs1 align-end flexbox>
            <span class="asker-text">{{ query.asker }}</span>
          </v-flex>
          <v-flex xs1 align-end flexbox>
            <span class="text-xs-center">{{ query.id }}</span>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
<<<<<<< HEAD
  </v-flex>
  <v-flex xs2 class="text-xs-center">
    <v-card light color="accent">
     <v-btn icon>
       <v-icon color="white">question_answer</v-icon>
     </v-btn>
    </v-card>
=======
  </router-link></v-flex>
  <v-flex xs2 fill-height fluid>
    <v-btn light color="accent">
     <v-icon color="white">question_answer</v-icon>
    </v-btn>
>>>>>>> bceb3ef0a5f33bef90cb4a7c68a7be962a271b9b
  </v-flex>
</v-container>
</template>

<style>
.score {
<<<<<<< HEAD
  padding:2px;
  width:105%;
=======
  padding: 2px;
  width: 105%;
>>>>>>> bceb3ef0a5f33bef90cb4a7c68a7be962a271b9b
}
</style>

<script>
export default {
  name: 'query',
  props: {
    query: {type: Object, required: true}
  }
}
</script>
