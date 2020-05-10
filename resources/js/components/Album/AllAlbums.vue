<template>
    <div class="container body-wrapper">

        <div v-for="(album, index) in albums" :key="album.id"
                class="row mt-4 pb-2 album">
            <div class="col-1 align-self-center d-flex justify-content-center">
                <input type="checkbox" class="checkbox-album">
            </div>
            <div class="col-2">
                <router-link :to="{ name: 'OneAlbum', params: { id: album.id } }">
                    <img class="img-cover" src="/placeholderAlbum.png">
                </router-link>
            </div>
            <div class="col-2 align-self-stretch">
                <p class="pl-3">{{ album.name }}</p>
                <button class="btn"><img src="/ico-dell.png">Удалить</button>
            </div>
            <div class="col-2 align-self-end">
                <p><img src="/ico_calendar.png">{{ formatDate(album.created_at) }}</p>
            </div>
            <div class="col-5 align-self-end">
                <p class=""><img src="/ico-user.png">Пользователи с доступом<img src="/ico-select.png"></p>

            </div>
        </div>
        <!--<ul>
            <li v-for="(album, index) in albums">
                <img class="img-cover" src="/placeholderAlbum.png">
                {{ index }} - {{ album.name }}
            </li>
        </ul>-->
    </div>

</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        name: "AllAlbums",
        data(){
            return{
                date: ''

            }
        },
        computed: {
            ...mapGetters([
                'albums'
            ]),
        },
        methods:{
            formatDate(date) {
                let months = [
                    "января", "февраля", "марта",
                    "апреля", "мая", "июня",
                    "июля", "августа", "сентября",
                    "октября", "ноября", "декабря"
                ]

                let dat = date.split('T')[0];
                dat = new Date(dat);

                return `${dat.getDate()} ${months[dat.getMonth()]} ${dat.getFullYear()}`;
            }
        },
        watch: {

        },
        created() {
            this.$store.dispatch('getAlbums');

        }

    }
</script>

<style scoped>
    .img-cover{
        width: 180px;
        height: 100px;
    }
    .album {
        border-bottom-width: 3px;
        border-bottom-style: solid;
        border-color: #DADADA;
    }
    .checkbox-album{
        height: 20px;
        width: 20px;
    }
    .body-wrapper{
        background-color: #ffffff;
    }
</style>
