<template>
  <div id="app">
    <app-header :links="links"></app-header>
    <!--<app-body-->
        <!--:posts="posts"-->
        <!--:filters="filters"-->
    <!--&gt;</app-body>-->
    <router-view></router-view>
    <app-footer :links="links"></app-footer>
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
        filters,
        links: [
          {title: 'Головна', url: '/'},
          {title: 'Добавити фото', url: 'add-photo'},
          {title: 'Контакти', url: 'contacts'},
          {title: 'Profile', url: 'enter',
            sublinks: [
              {title: 'Profile', url: 'profile'},
              {title: 'Вхід', url: 'enter'},
              {title: 'Вихід', url: 'enter'}
            ],

          },
        ]
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
