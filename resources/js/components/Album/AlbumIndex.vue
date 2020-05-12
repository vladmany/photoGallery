<template>
    <Section>
        <template v-slot:title>
            <h1 class="pl-3">Альбомы</h1>
        </template>
        <template v-slot:button>
            <div class="top-panel">
                <div>
                    <CreateAlbum></CreateAlbum>
                </div>
            </div>
        </template>
        <template v-slot:content>
            <div class="albums-wrap">
                <div class="main-panel">
                    <AllAlbums></AllAlbums>
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

    export default {
        name: "BlockAlbumList",
        components: {CreateAlbum, AllAlbums, Index, ModalCreateAlbum},
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

    .upload {
        display: flex;
        max-width: 214px;
        width: 100%;
        justify-content: center;
        align-items: center;
        border-right: 2px solid #F5F5F5;
    }
</style>
