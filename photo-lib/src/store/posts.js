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
        posts: [
            {
                username: "socleansofreshh",
                userImage: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/me_3.jpg",
                postImage:
                    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/tropical_beach.jpg",
                likes: 36,
                hasBeenLiked: false,
                caption: "When you're ready for summer '18 ☀️",
                filter: "perpetua"
            },
            {
                username: "djirdehh",
                userImage: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/me2.png",
                postImage:
                    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/downtown.jpg",
                likes: 20,
                hasBeenLiked: false,
                caption: "Views from the six...",
                filter: "clarendon"
            },
            {
                username: "puppers",
                userImage:
                    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/pug_personal.jpg",
                postImage:
                    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/puppers.jpg",
                likes: 49,
                hasBeenLiked: false,
                caption: "Current mood 🐶",
                filter: "lofi"
            }
        ]
    },
    mutations: {
        createPost (state, payload) {
            state.posts.push(payload)
        }
    },
    actions: {
        async createPost ({commit, getters}, payload) {
            commit('clearError')
            commit('setLoading', true)
            
            try {
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