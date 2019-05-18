import * as firebase from 'firebase'

class Post {
    constructor(imageSrc = '', description, likes = 0, ownerId, id = null) {
        this.imageSrc = imageSrc
        this.description = description
        this.likes = likes
        this.ownerId = ownerId
        this.id = id
    }

}

export default {
    state: {
        posts: []
    },
    mutations: {
        createPost (state, payload) {
            state.posts.push(payload)
        },
        loadPost (state, payload) {
            state.posts = payload
        }
    },
    actions: {
        async createPost ({commit, getters}, payload) {
            commit('clearError')
            commit('setLoading', true)
            
            try {
                console.log(payload); // TODO console.log
                const newPost = new Post(
                    payload.imageSrc,
                    payload.description,
                    payload.likes,
                    getters.user.id
                )
                const post = await firebase.database().ref('posts').push(newPost)
                commit('setLoading', false)
                commit('createPost', {
                    ...newPost,
                    id: post.id
                })
            } catch (error) {
                commit('setError', error.message)
                commit('setLoading', false)
                throw error
            }
        },

        async fetchPosts ({commit}) {
            commit('clearError')
            commit('setLoading', true)
            const resultPost = []
            try {
                const fbVal = await firebase.database().ref('posts').once('value')
                const posts = fbVal.val()
                Object.keys(posts).forEach(key => {
                    const post = posts[key]
                    resultPost.push(
                        new Post(post.imageSrc, post.description, post.like, post.ownerId, key)
                    )
                })
                commit('loadPost', resultPost)
            }  catch (error) {
                commit('setError', error.message)
                commit('setLoading', false)
                throw error
            }
        }
    },
    getters: {
        posts (state) {
            return state.posts
        },
        getTopPosts(state) {
            const sortArr =  state.posts.sort((a,b) => {
                return b.likes - a.likes
            })
            return sortArr.slice(0,4)
        }
    }
}