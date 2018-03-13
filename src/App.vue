<template>
<v-app>
  <v-toolbar dark app>
    <v-toolbar-title>ASK</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>search</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>question_answer</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>account_box</v-icon>
    </v-btn>
  </v-toolbar>
  <v-content>
    <v-container grid-list-xl>
      <v-layout row wrap
          v-for="q in questions"
          v-bind:key="q.id">
          <score :id="q.id"></score>
          <query :asker="q.asker" :question="q.question" :id="q.id"></query>
      </v-layout>
    </v-container>
  </v-content>
  <v-footer app>
    IT410 Project
  </v-footer>
</v-app>
</template>


<script>
export default {
  data () {
    return {
      questions: [
        { asker: 'Anna', question: 'How do i vue??!?!‽', id: 0 },
        { asker: 'Aleks', question: 'But why a Mac tho?', id: 1 },
        { asker: 'Nate', question: 'Can you add real sprinklers to your model?', id: 2 }
      ]
    }
  },
  name: 'App'
}
</script>
