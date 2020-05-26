<template>
    <modal-window
        v-if="this.$store.state.isDeleteImagesFromAlbum"
        title="Выберите действие"
        :close-action="close"
        :min-width="610"
    >
        <template v-slot:content>
            <span>Вы хотите удалить {{selectedPhotos.length}} фото полностью или только из текущего альбома?</span>
        </template>
        <template v-slot:buttons>
            <c-button
                text="Полностью"
                :action="deleteImages"
            />
            <c-button
                text="Из альбома"
                :action="deleteImagesFromAlbum"
            />
            <c-button
                text="Отмена"
                type="secondary"
                :action="close"
            />
        </template>
    </modal-window>
</template>

<script>
    import ModalWindow from "../../../../../Global/ModalWindow";
    import CButton from "../../../../../Global/CButton";
    export default {
        name: "DeleteImagesFromAlbumModal",
        components: {ModalWindow, CButton},
        computed: {
            selectedPhotos: function() {
                return this.$store.getters.selectedPhotos
            },
            albumId: function () {
                return this.$store.getters['ListAlbum/album'](this.$store.state.IdAlbum).id;
            }
        },
        methods: {
            deleteImages() {
                this.$store.dispatch('deletePhotos')
            },
            deleteImagesFromAlbum() {
                this.$store.dispatch('deletePhotosFromAlbum', this.albumId)
            },
            close() {
                this.$store.commit('hideDeleteImagesFromAlbum')
            }
        }
    }
</script>

<style scoped>
    span {
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 30px;
        color: #808080;
        margin-top: 10px;
        margin-bottom: 33px;
    }
</style>
