<template>
    <div class="profile">
        <div class="profile__top">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/me_3.jpg" alt="Max Rozvora" class="profile__img">
            <div class="profile__count">
                <div class="profile__number"></div>
                <div class="profile__subtitle">Дописів</div>
            </div>
        </div>
        <div class="profile__bottom">
            <div class="profile__name">Max Rozvora</div>
            <div class="profile__email">max.rozvora@gmail.com</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Profile"
    }
</script>

<style scoped lang="sass" src="../styles/sass/profile.sass">

</style>