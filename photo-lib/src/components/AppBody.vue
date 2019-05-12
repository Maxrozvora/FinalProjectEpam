<template>
    <div class="post-wrapper">
        <post-item v-for="post in posts"
                   :post="post"
                   :key="posts.indexOf(post)"
        ></post-item>
    </div>
</template>

<script>
    import PostItem from './PostItem'

    export default {
        name: "AppBody",
        props: {
            posts: Array,
            filters: Array
        },
        components: {
            'post-item': PostItem
        }
    }
</script>

<style scoped>

</style>