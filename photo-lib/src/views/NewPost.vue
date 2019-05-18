<template>
    <form class="form" @submit.prevent="onSubmit">
        <div class="input-group">
            <label for="image">Фото</label>
            <input
                    @change="image"
                    @blur="$v.image.$touch()"
                    type="file"
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
                description: '',
                like: 0,
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