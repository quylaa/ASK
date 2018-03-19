<template>
<v-app>
  <v-toolbar dark color="primary" app>
    <v-toolbar-title>ASK</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon to="/search">
      <v-icon>search</v-icon>
    </v-btn>
    <v-btn icon to="/">
      <v-icon>question_answer</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>account_box</v-icon>
    </v-btn>
  </v-toolbar>
  <v-content>
    <router-view></router-view>
  </v-content>
  <v-footer app>
    IT410 Project
  </v-footer>
</v-app>
</template>

<script>
// import score from '@/components/Score.vue'
// import query from '@/components/Query.vue'
// import axios from 'axios'
export default {
  name: 'Ask'
}
</script>
