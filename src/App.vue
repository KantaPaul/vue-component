<template>
  <div id="app">
    <div class="container">
      <announcement></announcement>
      <h1> {{ massage }} </h1>
      <contact-us></contact-us>
      <contact-us></contact-us>
      <counter></counter>
      <about></about>
      <myArticle></myArticle>
    </div>
  </div>
</template>

<script>
// local component example
var aboutUs = {
  data () {
    return {
      counter: 0
    }
  },
  template: `
    <div>
      <h2>Hi i am local component</h2>
      <button class="btn btn-primary" @click="counter++"> {{ counter }} </button>
    </div>
  `
}

export default {
  name: 'App',
  components: {
    'about': aboutUs
  },
  data () {
    return {
      massage: 'Welcome to my page'
    }
  }
}
</script>

<style>
root {
  font-size: 14px;
}
body {
  margin: 2% 0;
  font-weight: 400;
  color: #333333;
  overflow-x: hidden;
  font-family: 'Ubuntu', sans-serif;
}
</style>
