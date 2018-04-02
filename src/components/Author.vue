<template>
  <div class="author-name">
    <p>Author name is <strong>{{ author.firstName }} {{ author.lastName }}</strong></p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      author: {
        firstName: 'Kanta',
        lastName: 'paul'
      }
    }
  }
}
</script>

<style scoped>

</style>
