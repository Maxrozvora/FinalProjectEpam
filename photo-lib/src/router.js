import Vue from 'vue'
import Router from 'vue-router'
import AuthGuard from './auth-guard'
import Home from './views/Home'
import Login from './views/Auth/Login'
import Registration from './views/Auth/Registration'
import NewPost from './views/NewPost'
import UserPosts from './views/UserPosts'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            beforeEnter: AuthGuard
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/register',
            name: 'register',
            component: Registration
        },
        {
            path: '/user/:id',
            name: 'user',
            component: UserPosts
        },
        {
            path: '/new-post',
            name: 'new-post',
            component: NewPost
        }
    ]
})
