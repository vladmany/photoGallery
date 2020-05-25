<template>
    <Section>
        <template v-slot:breadcrumbs>
            <breadcrumbs
                :crumbs="{
                    'Фотографии': 'none',
                    'Альбомы': 'none',
                }"
            />
        </template>
        <template v-slot:title>
            <h1 class="pl-3">Альбомы</h1>
        </template>
        <template v-slot:button>
                <CreateAlbum></CreateAlbum>
        </template>
        <template v-slot:actions>
            <div class="panel">
                <action-all-albums v-if="showPanels"></action-all-albums>
                <search-albums v-if="showPanels" class="search-panel" ></search-albums>
            </div>
        </template>
        <template v-slot:content>
            <div class="albums-wrap">
                <div v-if="showNoSearch">
                    <p class="empty-search">Альбом не найден</p>
                </div>
                <div class="main-panel">
                    <AllAlbums :paginate-count="6"></AllAlbums>
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
    import ActionAllAlbums from "./List/ActionsAllAlbum/ActionsIndex";
    import SearchAlbums from "./List/SearchAlbums";
    import {mapGetters} from "vuex";
    import Breadcrumbs   from "../Global/Breadcrumbs";

    export default {
        name: "BlockAlbumList",
        components: {SearchAlbums, ActionAllAlbums, CreateAlbum, AllAlbums, Index, ModalCreateAlbum, Breadcrumbs},
        data: function () {
            return {
                album: {},
                isInfoPopupVisible: false,
                isPanelVisible: false,
                NoAvalAlbums: false

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
            showPanels: function() {
                if(this.$store.getters['ListAlbum/countAlbums'] > 0)
                {console.log("count "+this.$store.getters['ListAlbum/countAlbums']);
                    return true}
                else return false

            },
            showNoSearch: function () {
                if(this.albums.length === 0 && this.$store.getters['ListAlbum/countAlbums'] !==0){
                    return true
                } else
                    return false
            },
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
    .empty-search{
        font-size: 20px;
        text-align: center;
        color: #666666;
        font-weight: bold;
        padding-top: 25px;
    }
</style>
