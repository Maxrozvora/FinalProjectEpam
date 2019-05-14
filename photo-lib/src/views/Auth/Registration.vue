<template>
    <div class="from-wrapper">
        <form class="form">
            <input type="text" class="input" placeholder="Логін" name="login">
            <input type="email" class="input" placeholder="Email" name="email">
            <input type="password" class="input" placeholder="Пароль" name="password">
            <input type="password" class="input" placeholder="Повторити пароль" name="repeat-password">
            <button class="button" type="submit">Реєстрація</button>
        </form>
    </div>

</template>

<script>
    export default {
        name: "Registration"
    }
</script>

<style scoped lang="sass" src="../../styles/sass/form.sass">

</style>