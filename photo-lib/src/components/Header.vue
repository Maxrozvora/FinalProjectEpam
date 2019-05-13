<template>
    <header class="top-line">
        <a href="/" class="logo logo-litera">PhotoTOP</a>
        <div class="search-wrap">
            <div class="search" title="Поиск по сату">
                <div class="fa fa-search"></div>
            </div>
            <div class="search-field">
                <form action="/search.html" id="cse-search-box">
                    <input type="hidden" name="cx" value="partner-pub-xxx:xxx"/>
                    <input type="hidden" name="cof" value="FORID:10"/>
                    <input type="hidden" name="ie" value="UTF-8"/>
                    <input type="text" name="q" placeholder="Поиск по сайту..."/>
                </form>
            </div>
        </div>
        <div class="mobile-menu-button"><i class="fa fa-bars"></i> Меню</div>
        <nav class="main-menu top-menu">
            <ul class="main-menu__list">
                <li class="main-menu__item active"><a href="#" class="main-menu__link">Головна</a></li>
                <li class="main-menu__item"><a href="#" class="main-menu__link">Контакти</a></li>
                <li class="main-menu__item"><a href="#" class="main-menu__link">Добавити фото</a></li>
                <li class="main-menu__item">
                    <a href="#" class="main-menu__link">Профіль</a>
                    <ul class="main-menu__sub-menu">
                        <li class="main-menu__item-sub">
                            <a href="#" class="main-menu__link">Вхід</a>
                        </li>
                        <li class="main-menu__item-sub">
                            <a href="#" class="main-menu__link">Реєстрація</a>
                        </li>
                        <li class="main-menu__item-sub">
                            <a href="#" class="main-menu__link">Вихід</a>
                        </li>
                    </ul>
                </li>

            </ul>
        </nav>
    </header>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped lang="sass" src="../styles/sass/header.sass">

</style>