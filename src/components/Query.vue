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
    <v-card dark color="secondary" class="card-content">
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
a {
  text-decoration: none;
}
.card-content {
  -webkit-transition: box-shadow 0.5s, -webkit-box-shadow 0.7s;
  transition: box-shadow 0.5s, -webkit-box-shadow 0.7s;
}
.card-content:hover {
  -webkit-box-shadow: 0 4px 5px -2px rgba(0,0,0,.2),0 7px 10px 1px rgba(0,0,0,.14),0 2px 16px 1px rgba(0,0,0,.12);
  box-shadow: 0 4px 5px -2px rgba(0,0,0,.2),0 7px 10px 1px rgba(0,0,0,.14),0 2px 16px 1px rgba(0,0,0,.12);
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
