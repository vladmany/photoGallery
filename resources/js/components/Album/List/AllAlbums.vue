<template>
    <div class="wrapper">
        <div class="body-wrapper">
            <div class="album pt-3 pb-3" v-for="album in albums">
                <div class="align-self-center d-flex justify-content-center text-center ml-4 mr-4">
                    <input type="checkbox" class="checkbox-album text-center">
                </div>
                <div class="text-center mr-5">
                    <img :src="album.cover" class="img-cover">
                </div>
                <div class="align-self-stretch text-center">
                    <router-link
                        :to="{ name: 'OneAlbum', params: { id: album.id } }">
                        {{ album.name}}
                    </router-link>
                    <button class="btn pr-md-4"><img src="/storage/albums/ico-dell.png">Удалить</button>
                </div>
                <div class="align-self-end text-center ml-4 mr-5">
                    <p class="ml-md-5"><img src="/storage/albums/ico_calendar.png">{{ formatDate(album.created_at)}} {{date}}</p>
                </div>
                <div class="align-self-end text-center">
                    <p class="text-center"><img src="/storage/albums/ico-user.png">Пользователи с доступом<img src="/storage/albums/ico-select.png">
                    </p>
                </div>
            </div>
            <no-albums v-if="NoAlbum"></no-albums>
        </div>
    </div>

</template>

<script>
    import noAlbums from "./noAlbums";
    import {mapGetters} from "vuex";

    export default {
        components: {noAlbums},
        comments: {
            noAlbums
        },
        name: "AllAlbums",
        data() {
            return {
                //albums:[],
                monthes: ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"],
                date: '',
                NoAlbum: true

            }
        },
        computed: {
            ...mapGetters([
                'albums'
            ]),
        },
        methods: {
            getAlbums() {
                axios.get('api/albums')
                    .then(r => this.albums = r.data)
            },
            formatDate(created_at) {
                created_at = new Date(created_at)
                this.date = created_at.getDate() + ' ' + this.monthes[created_at.getMonth()] + ' ' + created_at.getFullYear();

            },
            emptyAlbums() {
                if (this.albums.length === 0)
                    this.NoAlbum = true;
                else this.NoAlbum = false;
            },
        },
        props: {
            album: {
                required: true,
                type: Object,
            },
            elements: {
                required: true,
                type: Array
            }
        },
        created() {
            this.$store.dispatch('getAlbums');
        },
        updated() {
            this.emptyAlbums()
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

</style>
