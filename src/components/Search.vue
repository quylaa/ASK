<template>
  <v-container fluid>
    <v-layout row>
      <v-flex xs8 offset-xs1>
        <v-text-field
          name="query-search"
          label="What question..."
          single-line>
        </v-text-field>
      </v-flex>
      <v-flex xs2>
        <v-btn color="primary">Submit</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      results: [],
      errors: []
    }
  }
}
</script>
