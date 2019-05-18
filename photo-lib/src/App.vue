<template>
  <div id="app">
    <app-header :links="links"></app-header>
    <router-view></router-view>
    <app-footer :links="links"></app-footer>
  </div>
</template>

<script>
  import Header from './components/Header'
  import Footer from './components/Footer'

  export default {
    name: 'App',
    computed: {
      isUserLoggedIn () {
        return this.$store.getters.isUserLoggedIn
      },
      links () {
        if (this.isUserLoggedIn) {
          return [
            {title: 'Головна', url: '/'},
            {title: 'Добавити фото', url: 'new-post'},
            {title: 'Контакти', url: 'contacts'},
            {title: 'Profile', url: 'user/:id'}
          ]
        }
        return [
          {title: 'Головна', url: '/'},
          {title: 'Контакти', url: 'contacts'},
          {title: 'Profile', url: 'enter',
            sublinks: [
              {title: 'Вхід', url: 'login'},
              {title: 'Реєстрація', url: 'register'}
            ],

          }
        ]
      }
    },
    components: {
      'app-header': Header,
      'app-footer': Footer
    }
  }
</script>

<style lang="sass" src="./styles/sass/main.sass">

</style>
