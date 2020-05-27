<template>
    <div class="wrapper-album container">
        <div v-if="this.$store.getters['ListAlbum/countAlbums'] > 0" class="row sub-cont">
            <OneAlbumSmall v-for="album in pageOfItems" :key="album.id"
                           :album="album"
                           class="pt-3 pb-3 col-12 col-md-6 col-lg-4 one-album mb-3 border"/>
            <div class="album-paginate col-12" v-if="this.pages > 0">
                <Paginator :pages="pages" :func="onChangePage"></Paginator>
            </div>
        </div>
        <no-albums v-else />
    </div>
</template>

<script>
    import noAlbums from "./noAlbums";
    import Paginator from "../../Global/Paginator";
    import {mapGetters} from "vuex";
    import OneAlbumSmall from "./OneAlbumSmall";
    export default {
        components: {noAlbums, Paginator, OneAlbumSmall},
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
            },
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
            onChangePage(page) {
                let perPage = this.paginateCount;
                let from = (page * perPage) - perPage;
                let to = (page * perPage);
                this.pageOfItems = this.albums.slice(from, to);
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
            this.$store.dispatch('ListPhoto/getPhotos');
            this.$store.dispatch('ListAlbum/getAlbums');
        },
    }
</script>

<style scoped>
    @media (min-width: 768px) {
        .sub-cont {
            justify-content: start;
        }
    }
    @media (max-width: 767px) {
        .sub-cont {
            justify-content: center;
        }
    }

    .wrapper-album {
        background-color: #ffffff;
        padding-top: 35px;
    }
    .album-paginate {
        flex: 0 0 auto;
    }
    .one-album:hover {
        -webkit-transform: scale(1.05);
        -ms-transform: scale(1.05);
        transform: scale(1.05);
        z-index: 100;
        box-shadow: -4px -4px 4px rgba(0, 0, 0, 0.15), 4px 4px 4px rgba(0, 0, 0, 0.15);
        border-color: #DFDFDF;
        background-color: #ffffff;
        border-radius: 3px;
        justify-content: start;
    }
</style>
