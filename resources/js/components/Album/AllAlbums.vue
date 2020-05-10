<template>
    <div>
        <div class="container body-wrapper">
            <div class="row mt-4 pb-2 album" v-for="(album, index) in albums">
                <div class="col-2 col-md-1 align-self-center d-flex justify-content-center text-center">
                    <input type="checkbox" class="checkbox-album text-center">
                </div>
                <div class="col-10 col-md-6 col-xl-3 text-center">
                    <img class="img-cover" src="/placeholderAlbum.png">
                </div>
                <div class="col-12 col-md-5 col-xl-2 align-self-stretch text-center">
                    <p class="pl-3">{{ album.name}}</p>
                    <button class="btn pr-md-4"><img src="/ico-dell.png">Удалить</button>
                </div>
                <div class="col-12 col-md-6 col-xl-2 align-self-end text-center">
                    <p class="ml-md-5"><img src="/ico_calendar.png">{{ formatDate(album.created_at)}} {{date}}</p>
                </div>
                <div class="col-12 col-md-6 col-xl-4 align-self-end text-center">
                    <p class="text-center"><img src="/ico-user.png">Пользователи с доступом<img src="/ico-select.png"></p>
                </div>
            </div>
        </div>
        <noAlbums v-if="NoAlbum"></noAlbums>
    </div>

</template>

<script>
    import noAlbums from "./noAlbums";
    export default {
        components: {noAlbums},
        comments: {
            noAlbums
        },
        name: "AllAlbums",
        data(){
            return{
                albums:[],
                monthes:["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"],
                date:'',
                NoAlbum: true

            }
        },
        methods:{
            getAlbums(){
                axios.get('api/albums')
                .then(r => this.albums = r.data)
            },
            formatDate(created_at) {
                created_at = new Date(created_at)
                this.date =  created_at.getDate() +' '+this.monthes[created_at.getMonth()] + ' '+ created_at.getFullYear();

            },
            emptyAlbums(){
                if (this.albums.length === 0)
                    this.NoAlbum = true;
                else this.NoAlbum = false;
            },
        },
        created() {
            this.getAlbums()
        },
        updated() {
            this.emptyAlbums()
        },


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