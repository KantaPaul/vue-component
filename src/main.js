// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Announcement from './components/Announcement'
import moment from 'moment'
import Article from './components/Article'

Vue.config.productionTip = false

// global component example
Vue.component('contact-us', {
  data () {
    return {
      email: 'mail@example.com'
    }
  },
  template: `
    <div>
      <h1>Hello's world</h1>
      <p>Please contact us {{ email }}</p>
    </div>
  `
})

// global component example
Vue.component('counter', {
  data () {
    return {
      counter: 0
    }
  },
  template: `
    <div>
      <h2>Hi i am global component</h2>
      <button class="btn btn-primary" @click="counter++"> {{ counter }} </button>
    </div>
  `
})

// moment filter
Vue.filter('dates', function (value) {
  return moment(value).format('MMMM Do')
})

// global component
Vue.component('announcement', Announcement)
Vue.component('myArticle', Article)

// vue use
Vue.use(require('vue-moment'))

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
