<template>
    <div class="post">
            <router-link tag="a" :to="'/user/' + post.username" class="post__author">
                <img :src="post.userImage" :alt="post.username" class="post__avatar">
                <span class="post__author-name">{{post.username}}</span>
            </router-link>
            <div class="post__image"
                 :class="post.filter"
                 :style="{ backgroundImage: 'url(' + post.imageSrc + ')' }"
                 @dblclick="like"
            >
            </div>
            <div class="post__content">
                <div class="post__heart">
                    <i class="fa"
                       :class="[this.post.hasBeenLiked ? 'fa-heart' : 'fa-heart-o']"
                    @click="like"
></i>
                    <span class="post__likes">{{post.likes}} подобається</span>
                </div>
                <span class="post__author-name">{{post.username}}</span>
                <span class="post__caption">{{post.description}}</span>
            </div>
        </div>
</template>

<script>
    export default {
        name: "PostItem",
        props: {
            post: Object
        },
        methods: {
            like () {
                this.post.hasBeenLiked
                ? this.post.likes--
                : this.post.likes++;
                this.post.hasBeenLiked = !this.post.hasBeenLiked;
            }
        }
    }
</script>

<style scoped lang="sass" src="../styles/sass/item.sass">

</style>