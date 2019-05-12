<template>
  <div id="app">
    <app-header></app-header>
    <post-item></post-item>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import Header from './components/Header'
  import PostItem from './components/PostItem'
  import Footer from './components/Footer'

  export default {
    name: 'App',
    components: {
      'post-item': PostItem,
      'app-header': Header,
      'app-footer': Footer
    }
  }
</script>

<style lang="sass" src="./styles/sass/main.sass">

</style>
