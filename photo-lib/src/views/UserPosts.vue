<template>
    <div id="user-profile">
        <profile-item></profile-item>
        <div class="post-wrapper">
            <post-item
                    v-for="(post, index) in getPost" :key="index"
                    :post="post"
            ></post-item>
        </div>
    </div>
</template>

<script>
    import Profile from '@/components/Profile'
    export default {
        name: "UsersPosts",
        computed: {

        },
        components: {
            'profile-item': Profile,
        }
    }
</script>

<style scoped>

</style>