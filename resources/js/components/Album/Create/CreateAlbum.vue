<template>
    <div>
        <modal-create-album v-if="isInfoPopupVisible" @closeModal="CloseModal"></modal-create-album>
        <button  @click="modalCreate" class="btn btn-primary btn-lg">Добавить альбом</button>
    </div>
</template>

<script>

    import ModalCreateAlbum from "./ModalCreateAlbum";
    export default {
        name: "CreateAlbum",
        components: {ModalCreateAlbum},
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
