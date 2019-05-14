<template>
    <div class="home">
        <slider-item
            :posts="getTopPosts"
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

    export default {
        name: 'home',
        computed: {
            getPost () {
                return this.$store.getters.posts
            },
            getTopPosts () {
                return this.$store.getters.getTopPosts
            }
        },
        components: {
            'post-item': PostItem,
            'slider-item': Slider
        }
    }
</script>
