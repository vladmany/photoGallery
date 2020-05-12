<template>
    <div class="wrapper">
        <div class="body-wrapper">
            <div v-if="albums.length > 0" v-for="album in albums" :key="album.id" class="album pt-3 pb-3" >
                <div class="align-self-center d-flex justify-content-center text-center ml-4 mr-4">
                    <input type="checkbox" class="checkbox-album text-center">
                </div>
                <div class="text-center mr-5">
                    <img :src="album.cover" class="img-cover">
                </div>
                <div class="text-center d-flex flex-column name-album">
                    <router-link
                        :to="{ name: 'OneAlbum', params: { id: album.id } }">
                        <p class="pt-1">{{ album.name}}</p>
                    </router-link>
                    <button class="btn mt-auto pt-1"><img src="/storage/albums/ico-dell.png">Удалить</button>
                </div>
                <div class="align-self-end text-center d-flex flex-column ml-4 mr-5">
                    <p class="ml-md-5 mt-auto mb-2"><img src="/storage/albums/ico_calendar.png">{{ formatDate(album.created_at)}}</p>
                </div>
                <div class="align-self-end text-center">
                    <p class="text-center mb-2"><img src="/storage/albums/ico-user.png">Пользователи с доступом<img src="/storage/albums/ico-select.png">
                    </p>
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
    </div>

</template>

<script>
    import noAlbums from "./noAlbums";
    import { mapGetters } from "vuex";

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
                pages: 0
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
                let pageOfItems = this.albums.slice(from, to);

                this.$store.dispatch('ListAlbum/makeGroups', pageOfItems);
            },
            setPages () {
                let pages =[]
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
        width: 100%;
    }

    .body-wrapper {
        display: flex;
        background-color: #ffffff;
        width: 100%;
        flex-direction: column;
    }

    .img-cover {
        width: 180px;
        height: 100px;
    }

    .album {
        border-bottom-width: 3px;
        border-bottom-style: solid;
        border-color: #DADADA;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        background-color: #ffffff;
    }

    .checkbox-album {
        height: 20px;
        width: 20px;
    }
    .album-paginate {
        flex: 0 0 auto;
    }
    .name-album{
        font-size: 16px;
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
    a{
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
