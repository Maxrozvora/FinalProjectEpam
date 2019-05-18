<template>
    <form class="form" @submit.prevent="onSubmit">
        <div class="input-group">
            <img class="image" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1211695/me_3.jpg">
            <label for="image">Фото</label>
            <input
                    v-model="image"
                    @blur="$v.image.$touch()"
                    type="text"
                    class="input"
                    :class="{'invalid': $v.image.$error}"
                    id="image"
                    placeholder="Виберіть фото"
                    name="image">
            <div class="invalid-feedback" v-if="!$v.image.email">Фото обов'язкове</div>
        </div>
        <div class="input-group">
            <label for="description">Опис</label>
            <textarea
                    v-model="description"
                    class="input"
                    id="description"
                    placeholder="Добавте опис фото"
                    name="description">
            </textarea>
        </div>

        <button class="button" type="submit"
                :disabled="$v.$invalid"
        >Опублікувати</button>
    </form>
</template>

<script>
    import { required } from 'vuelidate/lib/validators'
    export default {
        name: "NewPost",
        data () {
            return {
                image: '',
                description: ''
            }
        },
        methods: {
            onSubmit () {
                const newPost = {
                    image: this.image,
                    description: this.description,
                    likes: 0
                }
                // console.log(newPost); // TODO console.log
            }
        },
        validations: {
            image: {
                required
            }
        }
    }
</script>

<style scoped lang="sass" src="./../styles/sass/form.sass">

</style>