<template>
    <div class="post">
            <div class="post__author">
                <img :src="post.userImage" :alt="post.username" class="post__avatar">
                <span class="post__author-name">{{post.username}}</span>
            </div>
            <div class="post__image" :style="{ backgroundImage: 'url(' + post.postImage + ')' }">
            </div>
            <div class="post__content">
                <div class="post__heart">
                    <i class="fa fa-heart-o"></i>
                    <span class="post__likes">{{post.likes}} подобається</span>
                </div>
                <span class="post__author-name">{{post.username}}</span>
                <span class="post__caption">{{post.caption}}</span>
            </div>
        </div>
</template>

<script>
    export default {
        name: "PostItem",
        props: {
            post: Object
        }
    }
</script>

<style scoped lang="sass" src="../styles/sass/item.sass">

</style>