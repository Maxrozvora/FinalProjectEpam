<template>
  <div id="app">
    <app-header></app-header>
    <app-body
        :posts="posts"
        :filters="filters"
    ></app-body>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import Header from './components/Header'
  import AppBody from './components/AppBody'
  import Footer from './components/Footer'

  import posts from "./data/posts"
  import filters from "./data/filters"

  export default {
    name: 'App',
    data () {
      return {
        posts,
        filters
      }
    },
    components: {
      'app-body': AppBody,
      'app-header': Header,
      'app-footer': Footer
    }
  }
</script>

<style lang="sass" src="./styles/sass/main.sass">

</style>
