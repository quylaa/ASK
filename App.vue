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
      <v-layout row wrap>
        <v-flex xs10 offset-xs1>
          <v-card dark color="purple">
            <v-card-text>How do i vue???!?!/</v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs10 offset-xs1>
          <v-card dark color="red">
            <v-card-text>What do I need to make a git?</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
  <v-footer app>
    IT410 Project
  </v-footer>
  <v-app>
</template>
