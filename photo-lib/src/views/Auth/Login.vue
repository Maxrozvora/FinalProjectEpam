<template>
    <div class="from-wrapper">
        <form class="form" @submit.prevent="onSubmit">
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

            <button class="button" type="submit"
                    :disabled="$v.$invalid"
            >Вхід</button>
        </form>
    </div>
</template>

<script>
    import { required, email, minLength } from 'vuelidate/lib/validators'

    export default {
        data () {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            onSubmit () {
               // console.log('email', this.email, 'pass', this.password); // TODO console.log
            }
        },
        validations: {
            email: {
                required,
                email
            },
            password: {
                minLength: minLength(6)
            }
        }

    }
</script>

<style scoped lang="sass" src="../../styles/sass/form.sass">

</style>