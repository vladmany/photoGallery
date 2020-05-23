<template>
    <div class="wrap-list container">
        <div class="row">
            <div class="text-center col-12">
                <router-link
                    :to="{ name: 'OneAlbum', params: { id: album.id } }">
                    <img :src="album.cover" class="img-fluid img-cover">
                </router-link>
            </div>
            <div class="name-album col-12 text-center mt-2">
                <router-link
                    :to="{ name: 'OneAlbum', params: { id: album.id } }">
                    <p class="name-album">{{ album.name}}</p>
                </router-link>
            </div>
            <div class="justify-content-around col-12 d-flex">
                <div class="pl-2 pt-2">
                    <!--<input type="checkbox" class="mx-1 mb-1 custom-checkbox" :id="'album-' + album.id" v-model="isSelected">-->
                    <input type="checkbox" class="mx-1 mb-1 custom-checkbox" :id="'album-' + album.id" v-model="isSelected">
                    <label :for="'album-' + album.id"></label>
                </div>
                <div class="pr-2">
                    <p class="text-center"><img src="/storage/albums/ico_calendar.png">
                        {{ formatDate(album.created_at) }}
                    </p>
                </div>
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
    .wrap-list {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        color: #666666 !important;

    }
    .checkbox-album{
        width: 21px;
        height: 21px;
        border: 1px solid #dddddd;
        background-color: #ffffff;
    }

    .img-cover {
        /*width: 180px;*/
        /*height: 100px;*/
        width: 220px;
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
