<template>
<v-container d-flex>
  <score :score="query.score" :id="query.id" :question="true"></score>
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
            <v-icon>comment</v-icon>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </router-link></v-flex>
</v-container>
</template>

<style>
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
import score from '@/components/Score.vue'
export default {
  name: 'query',
  components: {
    score: score
  },
  props: {
    query: {type: Object, required: true}
  }
}
</script>
