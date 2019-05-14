<template>
    <div class="home">
        <slider-item
            :posts="posts"
        ></slider-item>
        <div class="post-wrapper">
            <post-item
                    v-for="(post, index) in getPost" :key="index"
                    :post="post"
            ></post-item>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src
    import PostItem from '@/components/PostItem'
    import Slider from '@/components/Slider'

    import posts from "../data/posts"
    import filters from "../data/filters"

    export default {
        name: 'home',
        data() {
            return {
                posts,
                filters,
            }
        },
        computed: {
            getPost () {
                return this.$store.getters.posts
            }
        },
        components: {
            'post-item': PostItem,
            'slider-item': Slider
        }
    }
</script>
