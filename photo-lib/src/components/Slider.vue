<template>
    <hooper :itemsToShow="4" :infiniteScroll="true">
        <slide v-for="(post, index) in posts" :key="index">
            <img :src="post.imageSrc" :alt="post.description">
        </slide>
    </hooper>
</template>

<script>
    import { Hooper, Slide } from 'hooper';
    import 'hooper/dist/hooper.css';

    export default {
        name: 'Slider',
        props: {
            posts: Array
        },
        components: {
            Hooper,
            Slide
        }
    }
</script>
<style scoped>
    .hooper {
         height: auto;
     }
    .hooper-slide img {
        width: 100%;
        height: auto;
    }
</style>