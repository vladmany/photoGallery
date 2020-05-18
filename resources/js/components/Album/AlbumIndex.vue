<template>
    <Section>
        <template v-slot:title>
            <h1 class="pl-3">Альбомы</h1>
        </template>
        <template v-slot:button>
                <CreateAlbum></CreateAlbum>
        </template>
        <template v-slot:actions>
            <div class="panel" v-if="albums.length > 0">
                <action-all-albums></action-all-albums>
                <search-albums></search-albums>
            </div>
        </template>
        <template v-slot:content>
            <div class="albums-wrap">
                <div class="main-panel">
                    <AllAlbums :paginate-count="5"></AllAlbums>
                </div>
            </div>
        </template>
    </Section>
</template>

<script>
    import AllAlbums from "./List/AllAlbums";
    import Index from "./Index";
    import ModalCreateAlbum from "./Create/ModalCreateAlbum";
    import CreateAlbum from "./Create/CreateAlbum";
    import ActionAllAlbums from "./List/ActionAllAlbums";
    import SearchAlbums from "./List/SearchAlbums";
    import {mapGetters} from "vuex";

    export default {
        name: "BlockAlbumList",
        components: {SearchAlbums, ActionAllAlbums, CreateAlbum, AllAlbums, Index, ModalCreateAlbum},
        data: function () {
            return {
                album: {},
                isInfoPopupVisible: false
            }
        },
        methods: {
            modalCreate() {
                this.isInfoPopupVisible = true;
            },
            CloseModal() {
                this.isInfoPopupVisible = false;

            },
        },
        computed: {
            ...mapGetters({
                albums: 'ListAlbum/albums',
            }),
        },
    }
</script>

<style scoped>
    .top-panel {
        width: 100%;
        max-width: 1110px;
        background: #ffffff;


    }

    .albums-wrap {
        width: 100%;
    }

    .main-panel {
        display: flex;
        width: 100%;
        max-width: 1110px;
        border-bottom: 2px solid #F5F5F5;
    }

    .buttons-edit {
        border-right-width: 2px;
        border-right-style: solid;
        border-color: #DADADA;
        border-left-width: 2px;
        border-left-style: solid;
        border-color: #DADADA;
    }
    .panel {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        min-height: 92px;
    }
    @media (min-width: 1055px) {
        .panel {
            justify-content: space-between;
        }
    }
    @media (max-width: 1054px){
        .panel{
            justify-content: center;
        }

    }

    .upload {
        display: flex;
        max-width: 214px;
        width: 100%;
        justify-content: center;
        align-items: center;
        border-right: 2px solid #F5F5F5;
    }
</style>
