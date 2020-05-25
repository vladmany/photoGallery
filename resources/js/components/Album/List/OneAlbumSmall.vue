<template>
    <div class="wrap-list container">
        <div class="row">
            <div class="col-12 cover_element text-center">
                <input type="checkbox" class="mx-1 mb-1 custom-checkbox" :id="'album-' + album.id" v-model="isSelected">
                <label :for="'album-' + album.id"></label>
                <router-link
                    :to="{ name: 'OneAlbum', params: { id: album.id } }">
                    <img :src="album.cover" class="img-cover">
                </router-link>
            </div>
            <div class="name-album col-12 text-center mt-2">
                <router-link
                    :to="{ name: 'OneAlbum', params: { id: album.id } }">
                    <p class="name-album">{{ album.name}}</p>
                </router-link>
            </div>
            <div class="justify-content-around col-12 d-flex">
                    <p class="text-center"><img src="/storage/albums/ico_calendar.png">
                        {{ formatDate(album.created_at) }}
                    </p>
            </div>
        </div>
    </div>

</template>
<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "OneAlbumSmall",
        props: {
            album: {
                required: true,
                type: Object,
            },
        },
        computed: {
            ...mapGetters({
                selectAll: 'ListAlbum/selectAllAlbums'
            }),
        },
        watch: {
            selectAll() {
                this.isSelected = this.selectAll;
            },
            isSelected() {
               if (this.isSelected) {
                   this.$store.dispatch('addAlbum', this.album.id);
               } else {
                   this.$store.dispatch('delAlbum', this.album.id);
               }
            }
        },
        data() {
            return {
                isSelected: false,
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
        }
    }
</script>

<style>
    .cover_element{
        width: 100%;
        max-height: 180px;
        display: block;
    }
    .cover_element input[type=checkbox] {
        display: flex;
        position: absolute;
        transform:scale(1.5);
        margin-top: 6px;
        margin-left: 6px!important;
    }

    .wrap-list {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        max-width: 350px;
        color: #666666 !important;

        border: 1px;
        border: solid;
        border-color: #DFDFDF;
        border-radius: 3px;

    }
    .cover_element .custom-checkbox+label{
        position: absolute;
        margin-top: 6px;
        margin-left: 6px;
    }

    .img-cover {
        max-height: 180px;
        max-width: 100%;
    }

    .name-album {
        font-size: 16px;
        word-wrap: break-word;
        font-weight: bold;
    }


    a {
        color: #666666;
        text-decoration: none !important;
    }

    a:hover{
        color: #666666;
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

</style>
