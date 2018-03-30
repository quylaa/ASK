<template>

</template>

<script>
import axios from 'axios'
export default {
  name: 'logout',
  created () {
    if (this.$session.exists()) {
      this.$session.destroy()
      axios.defaults.headers.common['Authorization'] = ''
    }
    this.$router.push('/')
  }
}
</script>
