<template>
  <div class="announcement">
    <div class="alert alert-info">{{ announcement }}</div>
  </div>
</template>

<script>
export default {
  name: 'announcement',
  data () {
    return {
      announcement: 'This site will go down under maintance soon!'
    }
  }
}
</script>

<style scoped>

</style>
