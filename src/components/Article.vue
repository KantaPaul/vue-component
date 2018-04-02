<template>
  <div class="article my-4">
    <h2>{{ title }}</h2>
    <strong class="text-info">{{ published | dates }}</strong>
    <p class="lead">{{ content }}</p>
    <author></author>
  </div>
</template>

<script>
import Author from './Author'

export default {
  data () {
    return {
      title: '10 reasons why vue is awesome',
      published: new Date(),
      content: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.'
    }
  },
  components: {
    'author': Author
  }
}
</script>

<style scoped>
  * {
    color: #28b992d1;
  }
</style>
