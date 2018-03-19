<template>
  <v-flex xs1 align-start>
    <v-card light color="accent">
      <v-card-text class="text-xs-center">{{ score }}</v-card-text>
    </v-card>
  </v-flex>
</template>

<script>
export default {
  name: 'score',
  props: {
    score: {type: Number, required: true}
  }
}
</script>
