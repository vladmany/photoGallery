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
                    <img src="/storage/navbar_logo.png" alt="navbar_logo">
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
                    <li @click="photosOpen = !photosOpen" :class="photosOpen ? 'group-tab-open' : ''" style="cursor: pointer; user-select: none">
                        <a>
                            <object type="image/svg+xml" data="/storage/sidebar_icons/photos/ic_camera_alt.svg"></object>
                            <span>Фотографии</span>
                        </a>
                    </li>
                    <div class="group-tabs" :style="'display: ' + (photosOpen ? 'block' : 'none')">
                        <li>
                            <router-link to="/photos" >
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
                        <li>
                            <router-link to="/studio" >
                                <object type="image/svg+xml" data="/storage/sidebar_icons/ic_business_center.svg"></object>
                                <span>Креативная студия</span>
                            </router-link>
                        </li>
                    </div>
                    <li>
                        <router-link to="/contacts" >
                            <object type="image/svg+xml" data="/storage/sidebar_icons/ic_people.svg"></object>
                            <span>Контакты</span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/manage" >
                            <object type="image/svg+xml" data="/storage/sidebar_icons/ic_business_center.svg"></object>
                            <span>Управление</span>
                        </router-link>
                    </li>

                </ul>
            </nav>
            <div class="main_content">
                <nav class="navbar navbar-light">
                    <div class="user_block">
                        <div class="user_menu-wrapper">
                            <div></div>
                            <ul class="user_menu" :class="userMenuOpen ? 'user_menu-opened' : ''">
                                <li>
                                    <router-link to="user/profile/">Мой профиль</router-link>
                                </li>
                                <li>
                                    <router-link to="user/profile/security">Настройки безопасности</router-link>
                                </li>
                                <li>
                                    <router-link to="/authorization" @click="logout">Выход из системы</router-link>
                                </li>
                            </ul>
                        </div>
                        <router-link to="/user/profile">
                            {{ name }}
                            <img :src="'/storage/avatars/' + avatar">
                        </router-link>
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
                                <img src="/storage/navbar_logo.png" alt="navbar_logo">
                            </li>
                            <li>Все права защищены</li>
                            <li>© OOO «IT 2.0»</li>
                        </ul>
                    </li>
                    <li class="col-lg-4 col-md-6 col-sm-12 pl-sm-3">


                        <h4 class="text">Инструменты</h4>
                        <ul>
                            <li>Диск</li>
                            <li>Календарь</li>
                            <li>Контакты</li>
                            <li>Почта</li>
                            <li>Фото</li>
                        </ul>
                    </li>
                    <!--                    <li class="col-lg-4 offset-md-6 offset-sm-0 offset-lg-0 col-md-6 col-sm-12 pl-sm-3">-->
                    <!--                        <h4 class="text">Контакты</h4>-->
                    <!--                        <ul>-->
                    <!--                            <li>+38095 900 38 00 </li>-->
                    <!--                            <li>mail@aiti20.com</li>-->
                    <!--                        </ul>-->

                    <!--                        <ul class="social_block">-->
                    <!--                            <li>-->
                    <!--                                <a href="google.com">-->
                    <!--                                    <object type="image/svg+xml" data="/storage/social_ic/ic_facebook.svg"></object>-->
                    <!--                                </a>-->
                    <!--                            </li>-->
                    <!--                            <li>-->
                    <!--                                <a href="google.com">-->
                    <!--                                    <object type="image/svg+xml" data="/storage/social_ic/ic_twitter.svg"></object>-->
                    <!--                                </a>-->
                    <!--                            </li>-->
                    <!--                            <li>-->
                    <!--                                <a href="google.com">-->
                    <!--                                    <object type="image/svg+xml" data="/storage/social_ic/ic_instagram.svg"></object>-->
                    <!--                                </a>-->
                    <!--                            </li>-->
                    <!--                        </ul>-->
                    <!--                    </li>-->
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

    export default {
        components: {
            DeleteImagesFromAlbumModal,
            ChangeDateModal,
            DeleteImagesModal,
            DownloadProgress,
            SelectionFilesErrorModal,
            UploadPhotosModal,
            ModalWindow, AddPhotoToAlbumModalWindow, SelectionErrorModal, ErrorsModalWindow, SuccessModalWindow},
        data: function () {
            return {
                name : 'Анна Кононенко',
                avatar : 'test_avatar.png',
                userMenuOpen : false,
                sidebarOpen : true,
                photosOpen : true
            }
        },
        methods: {
            logout() {
            },
            getAllData() {
                this.$store.dispatch('ListPhoto/getPhotos');
                this.$store.dispatch('ListAlbum/getAlbums');
                this.$store.dispatch('getCorrects');
            },
            switchPhotoOpen() {
                this.$store.commit('switchPhotoOpen')
            }
        },
        watch: {
            currentRoute() {
                console.log(this.currentRoute.name)
                if (['AlbumIndex','OneAlbum','AddPhotoToAlbum','IndexPhoto','IndexViewPhoto', 'CorrectIndex', 'CorrectIndexOne'].includes(this.currentRoute.name))
                    this.photosOpen = true
                else
                    this.photosOpen = false
            }
        },
        created() {
            loadProgressBar()
            this.$store.dispatch('getCorrects');
            // if  ($('.router-link-active').length > 0)
            //     this.photosOpen = true
        },
        computed: {
            currentRoute() {
                console.log(this.$router.currentRoute)
                return this.$router.currentRoute
            },
            isPhotoOpen() {
                return this.$store.state.isPhotoOpen
            }
        },
        mounted() {
            this.$root.$on('showPhotosSidebar', () => {
                this.photosOpen = true
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
        height: 100vh;
        max-height: 100%;
        z-index: 0;
        background: #fff;
        color: #fff;
        transition: all 0.3s;
        box-shadow: 0px -2px 5px rgba(0, 0, 0, 0.05);
        border-radius: 6px;
        max-width: 160px;
        width: 100%;
    }
    .sidebar-open {
        max-width: 255px!important;
    }
    #side_menu a {
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
        color: #999999;
        height: 100%;
    }
    #side_menu a span {
        width: 150px;
        text-align: center;
    }
    .sidebar-open a span {
        text-align: left!important;
        margin-left: 22px;
    }
    .sidebar-open li {
        border-bottom: 2px solid #F5F5F5;
    }
    #side_menu .router-link-active {
        color: #666666;
    }
    #side_menu .router-link-active object {
        filter: brightness(0) saturate(100%) invert(35%) sepia(60%) saturate(3842%) hue-rotate(203deg) brightness(97%) contrast(94%);
    }
    #side_menu object{
        margin-top: 12px;
        margin-bottom: 7px;
        z-index: -1;
    }
    #side_menu li{
        height: 60px;
    }
    #side_menu li{
        margin-bottom: 14px;
        transition: margin-bottom .3s;
    }
    .sidebar-open li{
        margin-bottom: 0px!important;
    }
    #side_menu .router-link-active {
        border-left: 3px solid #1875F0;
    }
    #side_menu .group-tab-open {
        cursor: pointer;
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
    }
    .group-tabs li {
        border: none
    }
    .sidebar-open .group-tabs li:last-child {
        border-bottom: 2px solid #F5F5F5;
    }
    .wrapper {
        display: flex;
        flex-wrap: nowrap;
        position: relative;
    }
    .main_content {
        flex-grow: 1;
    }
    #sidebar .navbar-brand {
        padding: 19px 0;
        margin-right: 0;
        width: 100%;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);
        position: relative;
    }
    #sidebar .navbar-brand img {
        max-width: 160px;
        margin-left:20px;
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
    }
    .user_block img{
        margin-left: 20px;
    }

    .user_menu-wrapper {
        max-height: 0px;
        overflow: hidden;
        transition: max-height .7s ease-in-out;
        position: absolute;
        left: -20%;
        transform: translateY(100%);
        bottom: -8px;
        z-index: 9;
    }

    .user_menu-wrapper > div:first-child {
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

    .user_menu {
        position: absolute;
        background: #fff;
        border-radius: 6px;
        list-style: none;
        /*left: -97%;*/
        bottom: -33px;
        padding: 0;
        transform: translateY(100%);
        max-height: 0px;
        overflow: hidden;
        transition: max-height .7s ease-in-out;
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
    .user_menu a {
        font-style: normal;
        font-weight: 500;
        font-size: 13px;
        text-align: center;
        color: #808080;
    }
    .user_menu-opened:after {
        display: block;
        content: '';
        position: absolute;
        width: 0;
        height: 0;
        top: -9px;
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
        color: #B3B3B3;
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
    }
    footer li{
        margin-bottom: 20px;
    }
    .social_block li:hover object{
        filter: brightness(0) saturate(100%) invert(35%) sepia(60%) saturate(3842%) hue-rotate(203deg) brightness(97%) contrast(94%);
    }
    .footer_wrapper {
        width: 100%;
        background: #fff;
        padding-top: 48px;
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
