<template>
    <div>
        <div class="align-self-center justify-content-center text-center ml-4 mr-4">
<!--            <input type="checkbox" class="mx-1 mb-1 custom-checkbox" :id="'album-' + album.id" v-model="isSelected">-->
<!--            <input type="checkbox" class="checkbox-album text-center" :id="'album-' + album.id"-->
<!--                   v-model="isSelected"-->
<!--            >-->
            <input type="checkbox" class="mx-1 mb-1 custom-checkbox" :id="'album-' + album.id" v-model="isSelected">
            <label :for="'album-' + album.id"></label>
        </div>
        <div class="align-items-center">
            <router-link
                :to="{ name: 'OneAlbum', params: { id: album.id } }">
                <img :src="album.cover" class="img-fluid img-cover">
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
                    <p class="text-center"><img src="/storage/albums/ico_calendar.png">
                        {{ formatDate(album.created_at) }}
                    </p>
                </div>
                <div class="text-center pr-lg-5">
                    <p class="text-center"><img src="/storage/albums/ico-user.png">Пользователи с
                        доступом<img src="/storage/albums/ico-select.png">
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
    .second-info {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;

    }

    .img-cover {
        /*width: 180px;*/
        /*height: 100px;*/
        width: 180px;
    }

    /*.checkbox-album {*/
    /*    height: 20px;*/
    /*    width: 20px;*/
    /*}*/

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
        text-decoration: none !important;
        color: #666666!important;
        font-weight: 600;
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
