<template>
    <Section>
        <template v-slot:title>
            <h1>Альбомы</h1>
        </template>
        <template v-slot:content>
            <div class="albums-wrap">
                <div class="top-panel">

                            <div class="create-button col-12 col-sm-6 col-lg-3 pt-3 pb-3">
                                <CreateAlbum></CreateAlbum>
                            </div>



                </div>
                <div class="main-panel">
                        <AllAlbums></AllAlbums>
                    <div class="actions-panel"></div>
                </div>
                <!--<div v-else class="placeholder">
                    <h2>Здесь вы можете добавить свои альбомы</h2>
                    <img src="/storage/photos/placeholder.png">
                </div>-->
            </div>

        </template>
    </Section>
</template>

<script>
    import AllAlbums from "./AllAlbums";
    import Index from "./Index";
    import ModalCreateAlbum from "./ModalCreateAlbum";
    import CreateAlbum from "./Create/CreateAlbum";


    export default {
        name: "BlockAlbumList",
        components: {CreateAlbum, AllAlbums, Index, ModalCreateAlbum},
        data: function () {
            return {
                album: {},
                isInfoPopupVisible:false
            }
        },
        methods: {
            modalCreate(){
                this.isInfoPopupVisible = true;
            },
            CloseModal(){
                this.isInfoPopupVisible = false;

            },
        }
    }
</script>

<style scoped>
    .top-panel{
        width: 100%;
        max-width: 1110px;
        background: #ffffff;
        border-bottom-width: 3px;
        border-bottom-style: solid;
        border-color: #DADADA;

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
    .buttons-edit{
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
