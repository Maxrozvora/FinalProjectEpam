<template>
    <div>
        <footer class="main-footer">

                <nav class="main-menu footer-menu">
                    <ul>
                        <router-link
                                v-for="link of links"
                                :key="link.title"
                                :to="link.url"
                                tag="li"
                                >
                            <a>{{link.title}}</a>
                        </router-link>
                    </ul>
                </nav>
                <nav class="soc">
                    <ul>
                        <li>
                            <a href="#"><i class="fa fa-vk"></i></a>
                        </li>
                        <li>
                            <a href="#"><i class="fa fa-facebook"></i></a>
                        </li>
                        <li>
                            <a href="#"><i class="fa fa-instagram"></i></a>
                        </li>
                        <li>
                            <a href="#"><i class="fa fa-odnoklassniki"></i></a>
                        </li>
                        <li>
                            <a href="#"><i class="fa fa-rss"></i></a>
                        </li>
                    </ul>
                </nav>


        </footer>
        <footer class="bottom-footer">
            <div class="text-center">
                <div class="footer-copy">2019 © <span class="logo-footer logo-litera">PhotoTop</span></div>
            </div>
        </footer>
    </div>
</template>

<script>
    export default {
        name: "Footer",
        props: {
            links: Array
        }
    }
</script>

<style scoped lang="sass" src="../styles/sass/footer.sass">

</style>