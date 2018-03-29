<template>

</template>

<script>
export default {
  name: 'logout',
  created () {
    if (this.$session.exists()) {
      this.$session.destroy()
    }
    this.$router.push('/')
  }
}
</script>
