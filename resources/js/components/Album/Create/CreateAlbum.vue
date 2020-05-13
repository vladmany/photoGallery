<template>
    <div class="createAlbum">
        <modal-create-album v-if="isInfoPopupVisible" @closeModal="CloseModal"></modal-create-album>

        <CButton text="Добавить альбом" :action="modalCreate" class="btn-create-album"></CButton>
    </div>
</template>

<script>

    import ModalCreateAlbum from "./ModalCreateAlbum";
    import CButton from "../../Global/CButton";
    export default {
        name: "CreateAlbum",
        components: {ModalCreateAlbum, CButton},
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
    .createAlbum{

    }
</style>
