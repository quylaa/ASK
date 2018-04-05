<template>
  <v-container grid-list-xl fluid>
    <v-layout row>
      <v-flex xs8 offset-xs2>
        <v-text-field v-on:submit.prevent="getResults"
          v-model="querySearch"
          name="query-search"
          label="What question..."
          single-line>
        </v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <query v-for="r in results" :key="r.id" :query="r"></query>
    </v-layout>
  </v-container>
</template>

<script>
import query from '@/components/Query.vue'
import axios from 'axios'
export default {
  name: 'Search',
  components: { query: query },
  data () {
    return {
      querySearch: '',
      results: [],
      questions: [],
      errors: []
    }
  },
  watch: {
    querySearch: function () {
      this.filterResults()
    }
  },
  methods: {
    filterResults: function () {
      const searchTerm = this.querySearch.toLowerCase()
      if (searchTerm) {
        this.results = this.questions.filter(q => {
          return (
            q.question.toLowerCase().search(searchTerm) >= 0 ||
            q.asker.toLowerCase().search(searchTerm) >= 0
          )
        })
      } else {
        this.results = []
      }
    }
  },
  created () {
    axios.get('/api/questions')
    .then(res => {
      this.questions = res.data
    })
    .catch(e => {
      this.errors.push(e)
    })
    this.filterResults()
  }
}
</script>
