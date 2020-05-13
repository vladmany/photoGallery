<template>
    <div class="wrapper">
        <div v-if="albums.length > 0" v-for="album in pageOfItems" :key="album.id" class="pt-3 pb-3 album">
            <div class="align-self-center justify-content-center text-center ml-4 mr-4">
                <input type="checkbox" class="checkbox-album text-center">
            </div>
            <div class="align-items-center">
                <router-link
                    :to="{ name: 'OneAlbum', params: { id: album.id } }">
                    <img :src="album.cover" class="img-cover">
                </router-link>
            </div>
            <div class="right-info">
                <div class="name-album pt-2 pl-lg-5">
                    <router-link
                        :to="{ name: 'OneAlbum', params: { id: album.id } }">
                        <p class="name-album">{{ album.name}}</p>
                    </router-link>
                </div>
                <div class="second-info pl-lg-5">
                    <div class="text-center">
                        <p class="text-center"><img src="/storage/albums/ico_calendar.png">{{
                            formatDate(album.created_at)}}</p>
                    </div>
                    <div class="text-center pr-lg-5">
                        <p class="text-center"><img src="/storage/albums/ico-user.png">Пользователи с
                            доступом<img src="/storage/albums/ico-select.png">
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <no-albums v-if="albums.length == 0"></no-albums>
        <div class="album-paginate" v-if="albums.length > 0">
            <paginate
                :page-count="pages"
                :page-range="3"
                :margin-pages="2"
                :click-handler="onChangePage"
                :prev-text="'&#129120;'"
                :next-text="'&#129122;'"
                :prev-class="'one-page prev'"
                :next-class="'one-page next'"
                :container-class="'paginate'"
                :page-class="'one-page'">
            </paginate>
        </div>

    </div>

</template>

<script>
    import noAlbums from "./noAlbums";
    import {mapGetters} from "vuex";

    export default {
        components: {noAlbums},
        name: "AllAlbums",
        computed: {
            ...mapGetters({
                albums: 'ListAlbum/albums',
                photos: 'ListPhoto/photos',
                groups: 'ListAlbum/groups',
            }),
        },
        watch: {
            albums() {
                this.setPages();
                this.onChangePage(1);
            }
        },
        props: {
            album: {
                required: true,
                type: Object,
            },
            paginateCount: {
                type: Number,
                default: 5
            }
        },
        data() {
            return {
                pages: 0,
                pageOfItems: 0
            }
        },

        methods: {
            formatDate(date) {
                let months = [
                    "января", "февраля", "марта",
                    "апреля", "мая", "июня", "июля",
                    "августа", "сентября", "октября",
                    "ноября", "декабря"
                ]
                let dat = date.split('T')[0];
                dat = new Date(dat)

                return `${dat.getDate()} ${months[dat.getMonth()]} ${dat.getFullYear()}`
            },
            onChangePage(page) {
                let perPage = this.paginateCount;
                let from = (page * perPage) - perPage;
                let to = (page * perPage);
                this.pageOfItems = this.albums.slice(from, to);

                // this.$store.dispatch('ListAlbum/makeGroups', pageOfItems);
            },
            setPages() {
                let pages = []
                let numberOfPages = Math.ceil(this.albums.length / this.paginateCount);
                for (let index = 1; index <= numberOfPages; index++) {
                    pages.push(index);
                }
                this.pages = pages.length;
            },
        },
        created() {
            this.$store.dispatch('ListAlbum/getAlbums');
        },
    }
</script>

<style scoped>
    .wrapper {
        display: flex;
        background-color: #ffffff;
        width: 100%;
        flex-direction: column;
        padding-top: 35px;
    }

    .album {
        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-color: #DADADA;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        background-color: #ffffff;
        justify-content: center;
    }

    .second-info {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;

    }

    .img-cover {
        width: 180px;
        height: 100px;
    }


    .checkbox-album {
        height: 20px;
        width: 20px;
    }

    .album-paginate {
        flex: 0 0 auto;
    }

    .name-album {
        font-size: 16px;
        word-wrap: break-word;
    }
    @media (max-width: 1332px) {
        .name-album{
            text-align: center;
        }
    }
    @media (min-width: 1333px) {
        .name-album{
            text-align: left;
        }
    }
    .right-info{
        max-width: 800px;
        width: 100%;

    }
    .paginate {
        display: flex;
        margin-bottom: 0;
        user-select: none;
        outline: none;
        margin-top: 53px;
    }

    .one-page {
        width: 60px;
        height: 60px;
        color: #666;
        border-left: 2px solid #DADADA;

    }

    a {
        color: black;
        text-decoration: #666666;
    }

    .one-page a {
        display: block; /* Ссылка как блочный элемент */
        text-align: center; /* Выравнивание по центру */
        height: 100%; /* Высота на весь слой */
        line-height: 60px;
        outline: none;
    }

    .one-page:hover ~ .disable {
        color: #000;

    }

    .prev {
        /*border-bottom-left-radius: 3px;*/
        /*border-top-left-radius: 3px;*/
        color: #D8D8D8;
        border-left: none;
    }

    .next {
        border-bottom-right-radius: 3px;
        border-top-right-radius: 3px;
        color: #D8D8D8;
    }

</style>
