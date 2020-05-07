<template>
    <div class="container body-wrapper">

        <div class="row mt-4 pb-2 album" v-for="(album, index) in albums">
            <div class="col-1 align-self-center d-flex justify-content-center">
                <input type="checkbox" class="checkbox-album">
            </div>
            <div class="col-2">
                <img class="img-cover" src="/placeholderAlbum.png">
            </div>
            <div class="col-2 align-self-stretch">
                <p class="pl-3">{{ album.name}}</p>
                <button class="btn"><img src="/ico-dell.png">Удалить</button>
            </div>
            <div class="col-2 align-self-end">
                <p><img src="/ico_calendar.png">{{ formatDate(album.created_at)}} {{date}}</p>
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
    export default {
        name: "AllAlbums",
        data(){
            return{
                albums:[],
                monthes:["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"],
                date:''

            }
        },
        methods:{
            getAlbums(){
                axios.get('api/albums/index')
                .then(r => this.albums = r.data)
            },
            formatDate(created_at) {
                created_at = new Date(created_at)
                this.date =  created_at.getDate() +' '+this.monthes[created_at.getMonth()] + ' '+ created_at.getFullYear();

            }
        },
        created() {
            this.getAlbums()
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