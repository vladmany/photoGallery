<template>
    <div>
        <modal-create-album v-if="isInfoPopupVisible" @closeModal="CloseModal"></modal-create-album>
        <button  @click="modalCreate" class="btn btn-primary btn-lg">Добавить альбом</button>
    </div>

</template>

<script>
    import ModalCreateAlbum from "./Create/ModalCreateAlbum";
    import AllAlbums from "./List/AllAlbums";
    export default {
        name: "Index",
        components: {AllAlbums, ModalCreateAlbum},
        comments:{
            ModalCreateAlbum,
            AllAlbums
        },
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

</style>
