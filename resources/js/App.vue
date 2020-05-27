<template>
    <div>
        <div class="wrapper">
<!--            <errors-modal-window v-if="this.$store.state.isUploadError"/>-->
<!--            <success-modal-window v-if="this.$store.state.isSuccessUpload"/>-->
<!--            <selection-error-modal v-if="this.$store.state.isSelectFilesError"/>-->
            <selection-files-error-modal/>
            <upload-photos-modal/>
            <add-photo-to-album-modal-window/>
            <change-name-album/>
            <download-progress/>
            <delete-images-modal/>
            <change-date-modal/>
            <delete-images-from-album-modal/>

            <nav id="sidebar" :class="sidebarOpen ? 'sidebar-open' : ''">
                <a class="navbar-brand">
                    <a href="/photos">
                        <img src="/storage/navbar_logo.png" alt="navbar_logo">
                    </a>
                </a>
                <div @click="sidebarOpen = !sidebarOpen" class="p-3"><div class="toggle_sidebar" :class="sidebarOpen ? 'toggled' : ''"></div></div>
                <ul id="side_menu" class="list-unstyled components">
                    <li>
                        <router-link to="/home" >
                            <object type="image/svg+xml" data="/storage/sidebar_icons/ic_home.svg"></object>
                            <span>Главная страница</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/disk" >
                            <object type="image/svg+xml" data="/storage/sidebar_icons/ic_cloud_download.svg"></object>
                            <span>Диск</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/mail" >
                            <object type="image/svg+xml" data="/storage/sidebar_icons/ic_email.svg"></object>
                            <span>Почта</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/calendar" >
                            <object type="image/svg+xml" data="/storage/sidebar_icons/ic_today.svg"></object>
                            <span>Календарь</span>
                        </router-link>
                    </li>
                    <li @click="photosOpen = !photosOpen" class="main-group-tab group-tab-open photos">
                        <a>
                            <object type="image/svg+xml" data="/storage/sidebar_icons/photos/ic_camera_alt.svg"></object>
                            <span>Фотографии</span>
                        </a>
                    </li>
                    <div class="group-tabs photos" @click="closeSidebar()">
                        <li>
                            <router-link to="/photos">
                                <object type="image/svg+xml" data="/storage/sidebar_icons/ic_people.svg"></object>
                                <span>Фото</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/albums" >
                                <object type="image/svg+xml" data="/storage/sidebar_icons/photos/ic_albums.svg"></object>
                                <span>Альбомы</span>
                            </router-link>
                        </li>
                    </div>
                    <li>
                        <router-link to="/contacts" >
                            <object type="image/svg+xml" data="/storage/sidebar_icons/ic_people.svg"></object>
                            <span>Контакты</span>
                        </router-link>
                    </li>
<!--                    <li @click="manageOpen = !manageOpen" class="main-group-tab manage">-->
<!--                        <a>-->
<!--                            <object type="image/svg+xml" data="/storage/sidebar_icons/ic_business_center.svg"></object>-->
<!--                            <span>Управление</span>-->
<!--                        </a>-->
<!--                    </li>-->
<!--                    <div class="group-tabs manage">-->
<!--                        <li>-->
<!--                            <router-link to="/departaments" >-->
<!--                                <object type="image/svg+xml" data="/storage/sidebar_icons/ic_location_city.svg"></object>-->
<!--                                <span>Отделы</span>-->
<!--                            </router-link>-->
<!--                        </li>-->
<!--                        <li>-->
<!--                            <router-link to="/users" >-->
<!--                                <object type="image/svg+xml" data="/storage/sidebar_icons/ic_people.svg"></object>-->
<!--                                <span>Пользователи</span>-->
<!--                            </router-link>-->
<!--                        </li>-->
<!--                    </div>-->
                </ul>
            </nav>
            <div class="main_content">
                <nav class="navbar navbar-light" :class="sidebarOpen ? 'phone_navbar' : ''">
                    <div id="sidebar-phone_toggle" @click="sidebarToggle" :class="sidebarOpen ? 'open' : ''">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <div class="user_block">
                        <div class="user_menu-wrapper"
                             v-click-outside="closeMenu"
                             :class="userMenuOpen ? 'user_menu-opened' : ''">
                            <div></div>
                            <ul class="user_menu" :class="userMenuOpen ? 'user_menu-opened' : ''">
                                <li>
                                    <a href="http://team1-group-project.azurewebsites.net/user/profile/"
                                    >Мой профиль</a>
                                </li>
                                <li>
                                    <a href="http://team1-group-project.azurewebsites.net/user/profile/security/settings"
                                    >Настройки безопасности</a>
                                </li>
                                <li>
                                    <a href="https://it20-tools-photogallery.azurewebsites.net/auth/logout"
                                    >Выход из системы</a>
                                </li>
                            </ul>
                        </div>
                        <User/>
<!--                        <a href="http://team1-group-project.azurewebsites.net/user/profile">-->
<!--                            {{ user.name }} {{ user.surname }}-->
<!--                            <img v-if="user.avatar_url" :src="'http://team1-group-project.azurewebsites.net/storage/avatars/' + user.avatar">-->
<!--                            <div v-if="!user.avatar_url" class="initials">{{ getFirstLetter(user.name) }}{{ getFirstLetter(user['surname']) }}</div>-->
<!--&lt;!&ndash;                            <img :src="'http://team1-group-project.azurewebsites.net/storage/avatars/' + user.avatar">&ndash;&gt;-->
<!--&lt;!&ndash;                            <img :src="user.avatar">&ndash;&gt;-->
<!--                        </a>-->
                        <div @click="userMenuOpen = !userMenuOpen" class="toggle_user-menu"></div>
                    </div>
                </nav>
                <main>
                    <router-view style="position: relative; background-color: #FAFAFA"></router-view>
                </main>
            </div>
        </div>
        <div class="footer_wrapper">
            <footer class="container">
                <ul class="row">
                    <li class="col-lg-4 col-md-6 col-sm-12 pl-sm-3">
                        <ul>
                            <li>
                                <a href="/photos">
                                    <img src="/storage/navbar_logo.png" alt="navbar_logo">
                                </a>
                            </li>
                            <li>Все права защищены</li>
                            <li>© OOO «IT 2.0»</li>
                        </ul>
                    </li>
                    <li class="col-lg-4 col-md-6 col-sm-12 pl-sm-3">
                        <h4 class="text">Инструменты</h4>
                        <ul>
                            <li><a href="/disk" class>Диск</a></li>
                            <li><a href="http://laravelproject.s-host.net/" class>Календарь</a></li>
                            <li><a href="https://contacts.s-host.net/" class>Контакты</a></li>
                            <li><a href="http://cu66460.tmweb.ru/" class>Почта</a></li>
                            <li><a href="/" class>Фото</a></li>
                        </ul>
                    </li>
                    <li class="col-lg-4 offset-md-6 offset-sm-0 offset-lg-0 col-md-6 col-sm-12 pl-sm-3">
                        <h4 class="text">Контакты</h4>
                        <ul>
                            <li><a href="tel:380959003800">+38095 900 38 00</a></li>
                            <li><a href="mailto:mail@aiti20.com">mail@aiti20.com</a></li>
                        </ul>
                        <ul class="social_block">
                            <li>
                                <a href="https://www.facebook.com/">
                                    <object type="image/svg+xml" data="/storage/social_ic/ic_facebook.svg"/>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/">
                                    <object type="image/svg+xml" data="/storage/social_ic/ic_twitter.svg"/>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/">
                                    <object type="image/svg+xml" data="/storage/social_ic/ic_instagram.svg"/>
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </footer>
        </div>
    </div>

</template>

<script>
    // import ErrorsModalWindow from "./components/Photo/Upload/ErrorsModalWindow";
    // import UploadPhotosComponent from "./components/Photo/Upload/UploadPhotosComponent";
    // import AllAlbums from "./components/Album/AllAlbums";
    // import IndexAlbums from "./components/Album/Index";
    import ErrorsModalWindow from "./components/Photo/Upload/ErrorsModalWindow";
    import SuccessModalWindow from "./components/Photo/Upload/SuccessModalWindow";
    import SelectionErrorModal from "./components/Photo/Upload/SelectionErrorModal";
    import AddPhotoToAlbumModalWindow from "./components/Photo/List/Actions/AddToAlbum/Modals/AddPhotoToAlbum";
    import ModalWindow from "./components/Global/ModalWindow";
    import UploadPhotosModal from "./components/Photo/Upload/Modals/UploadPhotos";
    import SelectionFilesErrorModal from "./components/Photo/Upload/Modals/SelectionFilesError";
    import {loadProgressBar} from "axios-progress-bar";
    import DownloadProgress from "./components/Photo/Download/Modals/DownloadProgress";
    import DeleteImagesModal from "./components/Photo/List/Actions/DeleteImages/Modals/DeleteImages";
    import ChangeDateModal from "./components/Photo/List/Actions/СhangeDate/Modals/changeDate";
    import DeleteImagesFromAlbumModal
        from "./components/Album/List/ActionsOneAlbum/DeleteImagesFromAlbum/Modals/DeleteImagesFromAlbum";
    import User from "./components/Global/User";

    export default {
        components: {
            User,
            DeleteImagesFromAlbumModal,
            ChangeDateModal,
            DeleteImagesModal,
            DownloadProgress,
            SelectionFilesErrorModal,
            UploadPhotosModal,
            ModalWindow, AddPhotoToAlbumModalWindow, SelectionErrorModal, ErrorsModalWindow, SuccessModalWindow},
        data: function () {
            return {
                // user: {
                //     name : 'Анна Кононенко',
                //     avatar : 'test_avatar.png',
                // },
                userMenuOpen : false,
                sidebarOpen : true,
                photosOpen : true,
                manageOpen: false
            }
        },
        methods: {
            logout() {
                // location.href
                // this.$store.dispatch('logout')
                // function setCookie(name, value, options = {}) {
                //
                //     options = {
                //         path: '/',
                //         // при необходимости добавьте другие значения по умолчанию
                //         ...options
                //     };
                //
                //     if (options.expires instanceof Date) {
                //         options.expires = options.expires.toUTCString();
                //     }
                //
                //     let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
                //
                //     for (let optionKey in options) {
                //         updatedCookie += "; " + optionKey;
                //         let optionValue = options[optionKey];
                //         if (optionValue !== true) {
                //             updatedCookie += "=" + optionValue;
                //         }
                //     }
                //
                //     document.cookie = updatedCookie;
                // }
                // setCookie('laravel_session', "", {
                //     'max-age': -1
                // });



                // axios.get('https://team1-group-project.azurewebsites.net/api/client_logout',
                //     {headers: {Authorization: "Bearer " + this.user.token}})
                //     .then(r => location.href = r.data)


            },
            getAllData() {
                this.$store.dispatch('ListPhoto/getPhotos');
                this.$store.dispatch('ListAlbum/getAlbums');
                this.$store.dispatch('getCorrects');
            },
            sidebarToggle() {
                if (!this.sidebarOpen) {
                    this.sidebarOpen = true
                    $('#sidebar-phone_toggle').addClass('open')
                }
                else {
                    this.sidebarOpen = false
                    $('#sidebar-phone_toggle').removeClass('open')
                }
            },
            closeSidebar() {
                if(!($('#sidebar-phone_toggle').css('display') === 'none'))
                {
                    this.sidebarOpen = false
                }
            },
            // getUser() {
            //     this.$store.dispatch('getUser')
            //     // this.name = this.user.name + ' ' + this.user.surname;
            //     // this.avatar = this.user.avatar;
            // },
            // getFirstLetter(val) {
            //     try{ return val.substring(0, 1); }
            //     catch { return '' }
            // },
        },
        watch: {
            currentRoute() {
                console.log(this.currentRoute.name)
                if (['AlbumIndex','OneAlbum','AddPhotoToAlbum','IndexPhoto','IndexViewPhoto', 'CorrectIndex', 'CorrectIndexOne'].includes(this.currentRoute.name))
                    this.photosOpen = true
                else
                    this.photosOpen = false
            },
            photosOpen() {
                $('.group-tabs.photos').slideToggle(200)
                if (!this.photosOpen) {
                    $('.main-group-tab.photos').removeClass('group-tab-open')
                }
                else {
                    this.manageOpen = false
                    $('.main-group-tab.photos').addClass('group-tab-open')
                }
            },
            manageOpen() {
                $('.group-tabs.manage').slideToggle(200)
                if (!this.manageOpen) {
                    $('.main-group-tab.manage').removeClass('group-tab-open')
                }
                else {
                    this.photosOpen = false
                    $('.main-group-tab.manage').addClass('group-tab-open')
                }
            },
        },
        computed: {
            currentRoute() {
                // console.log(this.$router.currentRoute)
                return this.$router.currentRoute
            },
            isPhotoOpen() {
                return this.$store.state.isPhotoOpen
            },
            user() {
                let usr = this.$store.getters['user']
                // console.log(usr)
                return usr
            },
            // user() {
            //     let usr = this.$store.getters['user']
            //     // console.log(usr)
            //     return usr
            // },
            // initials() {
            //     return `${this.user.name.substr(0,1)} ${this.user.surname.substr(0,1)}`
            // }
        },
        created() {
            console.log(document.cookie)
            loadProgressBar()
            this.$store.dispatch('getCorrects');

            let mql = window.matchMedia('(max-width: 1380px)');
            mql.addListener((e) => {
                this.sidebarOpen = !e.matches
            });
            let mql1 = window.matchMedia('(max-width: 550px)');
            mql1.addListener((e) => {
                this.sidebarOpen = !mql1
            });

            let mql3 = window.matchMedia('(max-width: 1000px)');
            mql3.addListener((e) => {
                this.sidebarOpen = !mql3
            });

            $(() => {
                this.sidebarOpen = !mql.matches
                // this.sidebarOpen = !mql3.matches
            });

            $(document).mouseup((e) => { // событие клика по веб-документу
                let div = $(".user_menu"); // тут указываем ID элемента
                let div2 = $(".toggle_user-menu");
                if (!div.is(e.target) && (!div2.is(e.target)) && div.has(e.target).length === 0 && div2.has(e.target).length === 0)
                {
                    this.userMenuOpen = false
                }
            });
        },
        mounted() {
            this.$root.$on('changeActiveAlbums', () => {
                $('#side_menu .router-link-active').removeClass('router-link-active');
                $('#side_menu a[href="/albums"]').addClass('router-link-active');
            })
        },
    }
</script>

<style>
    nav {
        background-color: #fff;
    }
    #sidebar {
        top: 0;
        left: 0;
        max-height: 100%;
        min-height: -webkit-fit-content;
        min-height: -moz-fit-content;
        min-height: fit-content;
        z-index: 999;
        background: #fff;
        color: #fff;
        transition: all 0.3s;
        box-shadow: 0px -2px 5px rgba(0, 0, 0, 0.05);
        border-radius: 6px;
        max-width: 160px;
        width: 100%;
        flex-grow: 5;
    }
    .sidebar-open {
        max-width: 255px!important;
    }
    #side_menu a, .second_level-toggle {
        display: flex;
        align-items: center;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        width: 100%;
        font-style: normal;
        font-weight: 500;
        font-size: 13px;
        text-decoration: none;
        color: #808080;
        height: 100%;
    }
    #side_menu a span,
    .second_level-toggle a span{
        width: 150px;
        text-align: center;
        z-index: -3;
    }
    .sidebar-open a span,
    .sidebar-open .second_level-toggle a span
    {
        text-align: left!important;
        margin-left: 22px;
    }
    .sidebar-open li {
        border-bottom: 2px solid #F5F5F5;
    }
    #side_menu .router-link-active {
        color: #666666;
    }
    #side_menu .router-link-active {
        -webkit-filter: brightness(0) saturate(100%) invert(35%) sepia(60%) saturate(3842%) hue-rotate(203deg) brightness(97%) contrast(94%);
        filter: brightness(0) saturate(100%) invert(35%) sepia(60%) saturate(3842%) hue-rotate(203deg) brightness(97%) contrast(94%);
    }
    #side_menu object{
        margin-top: 12px;
        margin-bottom: 7px;
        z-index: -1;
        pointer-events: none;
    }
    #side_menu li{
        height: 60px;
    }
    #side_menu li{
        margin-bottom: 14px;
        transition: margin-bottom .3s;
    }
    .sidebar-open li{
        min-height: 0px!important;
        margin-bottom: 0px!important;
    }
    #side_menu .router-link-active {
        border-left: 3px solid #1875F0;
    }
    .wrapper {
        display: flex;
        flex-wrap: nowrap;
        position: relative;
    }
    .main_content {
        flex-grow: 1;
        max-width: 100%;
    }
    #sidebar .navbar-brand {
        padding: 19px 15px;
        margin-right: 0;
        width: 100%;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);
        /*position: relative;*/
    }
    #sidebar .navbar-brand img {
        max-width: 160px;
        width: 100%
    }
    #sidebar .toggle_sidebar {
        cursor: pointer;
        display: block;
        position: absolute;
        width: 10px;
        height: 10px;
        top: 40px;
        transform: translate(50%) rotate(-45deg);
        left: 214px;
        border-right: 2px solid #D8D8D8;;
        border-bottom: 2px solid #D8D8D8;;
        padding: 4px;
        transition: transform .3s ;
    }
    .user_block {
        position: relative;
        margin-left: auto;
        display: flex;
        align-items: center;
    }
    .user_block > a{
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 75px;
        text-align: right;
        color: #999999;
        position: relative;
        display: flex;
        align-items: center;
    }
    .user_block img{
        margin-left: 20px;
        max-height: 50px;
        max-width: 50px;
        border-radius: 50%;
    }
    .user_block .initials{
        display: inline-flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin-left: 20px;
        max-height: 50px;
        max-width: 50px;
        min-width: 50px;
        min-height: 50px;
        font-size: 28px;
        color: #999;
        border-radius: 50%;
        border: 1px solid #666;
    }
    .user_menu-wrapper {
        max-height: 0px;
        overflow: hidden;
        transition: max-height .3s ease-in-out;
        position: absolute;
        left: -20%;
        transform: translateY(100%);
        bottom: -8px;
        z-index: 9;
    }
    .user_menu {
        background: #fff;
        border-radius: 6px;
        list-style: none;
        padding: 0;
    }
    .user_menu li {
        border-bottom: 2px solid #F5F5F5;
        justify-content: center;
        height:60px;
        display:flex;
        align-items: center;
        width: 100%;
        padding: 0 50px;
    }
    .user_menu li:last-child {
        border-bottom: none;
    }
    .user_block a:hover {
        color: #1875F0;
        text-decoration: none;
    }
    .user_menu a {
        font-style: normal;
        font-weight: 500;
        font-size: 13px;
        text-align: center;
        color: #808080;
    }
    .user_menu .router-link-active {
        color: #1875F0;
    }
    .user_menu-wrapper > div {
        display: block;
        position: relative;
        width: 0;
        height: 0;
        margin-left: auto;
        right: 30px;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-bottom: 9px solid #fff;
    }
    .toggle_user-menu {
        width: 26px;
        height: 26px;
        margin-left: 7px;
        position: relative;
        cursor: pointer;
    }
    .toggle_user-menu:after {
        content: '';
        display: block;
        content: '';
        position: absolute;
        width: 0;
        height: 0;
        top: 50%;
        transform: translate(50%,-50%) rotate(45deg);
        right: 50%;
        border-right: 2px solid #D8D8D8;;
        border-bottom: 2px solid #D8D8D8;;
        padding: 4px;
    }
    .user_menu-opened {
        max-height: 251px;
    }
    .toggled {
        transform: rotate(-220deg)!important;
    }
    footer {
        background: #fff;
        width: 100%;
        display: flex;
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 30px;
        color: #9B9B9B;
    }
    footer ul {
        list-style: none;
        width:100%;
        padding: 0;
    }
    body * {
        font-family: 'Roboto', sans-serif;
    }
    footer h4 {
        color: #666666;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 30px;
        padding-bottom: 29px;
    }
    footer ul li:not(:first-of-type) ul:not(.social_block) {
        columns: 2;
        -webkit-columns: 2;
        -moz-columns: 2;
    }
    .social_block {
        display: flex;
    }
    .social_block a {
        display: block;
        margin-right: 19px;
    }
    .social_block object{
        z-index: -1000;
        pointer-events: none;
    }
    footer li{
        margin-bottom: 20px;
    }
    footer a{
        text-decoration: none;
        color: inherit;
    }
    footer a:hover{
        text-decoration: none;
        color: #1875F0;
    }
    .social_block li:hover object{
        -webkit-filter: brightness(0) saturate(100%) invert(35%) sepia(60%) saturate(3842%) hue-rotate(203deg) brightness(97%) contrast(94%);
        filter: brightness(0) saturate(100%) invert(35%) sepia(60%) saturate(3842%) hue-rotate(203deg) brightness(97%) contrast(94%);
        pointer-events: none;
    }
    #side_menu li:not(.second_level-wrapper):not(.main-group-tab):hover a:not(.router-link-active) object {
        -webkit-filter: brightness(0) saturate(100%) invert(35%) sepia(60%) saturate(3842%) hue-rotate(203deg) brightness(97%) contrast(94%);
        filter: brightness(0) saturate(100%) invert(35%) sepia(60%) saturate(3842%) hue-rotate(203deg) brightness(97%) contrast(94%);
        opacity: .6;
        pointer-events: none;
    }
    #side_menu li.main-group-tab:not(.group-tab-open):hover a object {
        filter: brightness(70%);
        pointer-events: none;
    }
    .social_block object {
        pointer-events: none;
    }
    .footer_wrapper {
        width: 100%;
        background: #fff;
        padding-top: 48px;
    }
    .second_level-wrapper {
        max-height: 68px;
        margin-bottom: 0!important;
        overflow: hidden;
        transition: all .3s!important;
        height: -webkit-fit-content!important;
        height: -moz-fit-content!important;
        height: fit-content!important;
    }
    .second_level-wrapper a {
        cursor: pointer;
        max-height: 60px;
        margin-bottom: 14px;
    }
    .second_level-open {
        max-height: 250px;
    }
    .second_level-toggled object{
        -webkit-filter: brightness(0) saturate(100%) invert(61%) sepia(26%) saturate(0%) hue-rotate(228deg) brightness(94%) contrast(93%);
        filter: brightness(0) saturate(100%) invert(61%) sepia(26%) saturate(0%) hue-rotate(228deg) brightness(94%) contrast(93%);
        pointer-events: none;
    }
    #side_menu .second_level-wrapper:hover > a:first-of-type:not(.second_level-toggled) object {
        -webkit-filter: brightness(0) saturate(100%) invert(61%) sepia(26%) saturate(0%) hue-rotate(228deg) brightness(94%) contrast(93%);
        filter: brightness(0) saturate(100%) invert(61%) sepia(26%) saturate(0%) hue-rotate(228deg) brightness(94%) contrast(93%);
        opacity: .6;
        pointer-events: none;
    }
    #side_menu .second_level-wrapper a:not(:first-of-type):not(.router-link-active):hover object {
        -webkit-filter: brightness(0) saturate(100%) invert(35%) sepia(60%) saturate(3842%) hue-rotate(203deg) brightness(97%) contrast(94%);
        filter: brightness(0) saturate(100%) invert(35%) sepia(60%) saturate(3842%) hue-rotate(203deg) brightness(97%) contrast(94%);
        opacity: .6;
        pointer-events: none;
    }
    .sidebar-open .second_level-wrapper {
        max-height: 60px;
    }
    .sidebar-open .second_level-wrapper a {
        margin-bottom: 0px;
        min-height: 60px;
    }
    .sidebar-open .second_level-open {
        max-height: 180px;
    }

    /* sidebar animated toggler for phones */
    #sidebar-phone_toggle {
        display: none;
        width: 60px;
        height: 45px;
        position: relative;
        transform: rotate(0deg);
        transition: .5s ease-in-out;
        cursor: pointer;
    }
    #sidebar-phone_toggle span{
        display: block;
        position: absolute;
        height: 7px;
        width: 100%;
        background: #D8D8D8;
        opacity: 1;
        left: 0;
        transform: rotate(0deg);
        transition: .25s ease-in-out;
    }
    #sidebar-phone_toggle span:nth-child(1) {
        top: 0px;
    }
    #sidebar-phone_toggle span:nth-child(2),#sidebar-phone_toggle span:nth-child(3) {
        top: 18px;
    }
    #sidebar-phone_toggle span:nth-child(4) {
        top: 36px;
    }
    #sidebar-phone_toggle.open span:nth-child(1) {
        top: 18px;
        width: 0%;
        left: 50%;
    }
    #sidebar-phone_toggle.open span:nth-child(2) {
        transform: rotate(45deg);
    }
    #sidebar-phone_toggle.open span:nth-child(3) {
        transform: rotate(-45deg);
    }
    #sidebar-phone_toggle.open span:nth-child(4) {
        top: 18px;
        width: 0%;
        left: 50%;
    }
    @media(max-width: 1000px)  {
        #sidebar:not(.sidebar-open) span {
            display: none;
        }
        .navbar-brand img {
            width: 100%;
            height: auto;
        }
        .navbar-brand  {
            height: 91px;
            display: flex;
            align-items: center;
        }
        #sidebar {
            max-width: 60px;
        }
    }
    .navbar {
        border-bottom: 2px solid #F5F5F5;
    }
    @media(max-width: 550px)  {
        .phone_navbar {
            position: fixed;
            z-index: 999;
            width: 100%;
        }
        .navbar-brand {
            display: none;
        }
        #sidebar {
            position: fixed;
            max-width: 0;
            overflow-x: hidden;
            top: 91px;
            border-radius: 0;
            width: 100%;
            height: 100vh;
            max-height: -webkit-max-content;
            max-height: -moz-max-content;
            max-height: max-content;
        }
        #sidebar-phone_toggle {
            display: block;
            width: 50px;
        }
        .sidebar-open {
            max-width: 100%!important;
        }
        .toggle_sidebar {
            display: none!important;
        }
    }

    .group-tab-open {
        user-select: none;
    }
    .group-tab-open a span{
        color: #666666;
        font-weight: 500;
        font-size: 13px;
        /*line-height: 60px;*/
    }
    li.group-tab-open {
        border-bottom: none;
    }
    .group-tab-open a object {
        filter: brightness(15%);
        pointer-events: none;
    }

    .group-tab-open:hover a object {
        filter: brightness(40%);
        pointer-events: none;
    }

    .group-tabs {
        display: block;
    }

    .group-tabs.manage {
        display: none;
    }

    .group-tabs li {
        border: none
    }
    .sidebar-open .group-tabs li:last-child {
        border-bottom: 2px solid #F5F5F5;
    }
    .main-group-tab {
        cursor: pointer;
        user-select: none;
    }
</style>


<!--<template>-->
<!--<div>-->
<!--    <errors-modal-window v-if="this.$store.state.isUploadError"></errors-modal-window>-->
<!--    <upload-photos-component></upload-photos-component>-->
<!--    <IndexAlbums></IndexAlbums>-->
<!--</div>-->
<!--</template>-->

<!--<script>-->
<!--    import ErrorsModalWindow from "./components/Photo/Upload/ErrorsModalWindow";-->
<!--    import UploadPhotosComponent from "./components/Photo/Upload/UploadPhotosComponent";-->
<!--    import AllAlbums from "./components/Album/AllAlbums";-->
<!--    import IndexAlbums from "./components/Album/Index";-->

<!--    export default {-->
<!--        name: "App",-->
<!--        components: {AllAlbums, UploadPhotosComponent, ErrorsModalWindow, IndexAlbums},-->
<!--        data() {-->
<!--            return {-->
<!--            }-->
<!--        },-->
<!--    }-->
<!--</script>-->

<!--<style scoped>-->

<!--</style>-->
