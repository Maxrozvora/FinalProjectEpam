<template>
    <div class="from-wrapper">
        <form class="form" @submit.prevent="onSubmit">
            <div class="input-group">
                <label for="login">Логин</label>
                <input
                        v-model="login"
                        @blur="$v.login.$touch()"
                        type="text"
                        class="input"
                        :class="{'invalid': $v.login.$error}"
                        id="login"
                        placeholder="Email"
                        name="email">
                <div class="invalid-feedback" v-if="$v.login.required">Логін обов'язковий</div>
            </div>
            <div class="input-group">
                <label for="email">Email</label>
                <input
                        v-model="email"
                        @blur="$v.email.$touch()"
                        type="email"
                        class="input"
                        :class="{'invalid': $v.email.$error}"
                        id="email"
                        placeholder="Email"
                        name="email">
                <div class="invalid-feedback" v-if="!$v.email.email">Email обов'язковий</div>
            </div>
            <div class="input-group">
                <label for="password">Пароль</label>
                <input
                        v-model="password"
                        @blur="$v.password.$touch()"
                        type="password"
                        class="input"
                        :class="{'invalid': $v.password.$error}"
                        id="password"
                        placeholder="Пароль"
                        name="password">
                <div class="invalid-feedback" v-if="!$v.password.minLength">Пароль повинен бути быльше 6-ти символів</div>
            </div>
            <div class="input-group">
                <label for="confirm">Повторити пароль</label>
                <input
                        v-model="confirm"
                        @blur="$v.confirm.$touch()"
                        type="password"
                        class="input"
                        :class="{'invalid': $v.confirm.$error}"
                        id="confirm"
                        placeholder="Пароль"
                        name="password">
                <div class="invalid-feedback" v-if="!$v.confirm.sameAs">Паролі повинні співпадати</div>
            </div>
            <button
                    :disabled="$v.$invalid"
                    class="button" type="submit">Реєстрація</button>
        </form>
    </div>

</template>

<script>
    import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'

    export default {
        name: "Registration",
        data () {
            return {
                login: '',
                email: '',
                password: '',
                confirm: ''
            }
    },
        methods: {
            onSubmit () {
                // const user = {
                //     login: this.login,
                //     email: this.email,
                //     password: this.password,
                // }
            }
        },
        validations: {
            login: {
                required
            },
            email: {
                required,
                email
            },
            password: {
                minLength: minLength(6)
            },
            confirm: {
                sameAs: sameAs('password')
            }
        }
    }
</script>

<style scoped lang="sass" src="../../styles/sass/form.sass">

</style>