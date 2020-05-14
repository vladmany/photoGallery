<template>
    <div class="wrapper">
        <div v-if="albums.length > 0">
            <OneAlbumSmall v-for="album in pageOfItems" :key="album.id"
                           :album="album"
                           class="pt-3 pb-3 album" />
            <div class="album-paginate">
                <!--            <paginate-->
                <!--                :page-count="pages"-->
                <!--                :page-range="3"-->
                <!--                :margin-pages="2"-->
                <!--                :click-handler="onChangePage"-->
                <!--                :prev-text="'&#129120;'"-->
                <!--                :next-text="'&#129122;'"-->
                <!--                :prev-class="'one-page prev'"-->
                <!--                :next-class="'one-page next'"-->
                <!--                :container-class="'paginate'"-->
                <!--                :page-class="'one-page'">-->
                <!--            </paginate>-->
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

    .album-paginate {
        flex: 0 0 auto;
    }

</style>
