<template>
    <modal-window
        v-if="this.$store.state.isDeleteImages"
        title="Удалить фото?"
        :close-action="close">
        <template v-slot:content>
            <span>Вы уверены что хотите удалить {{((selectedPhotos.length === 0) && (correctPhotoId !== 0)) ? 1 : selectedPhotos.length}} фото?</span>
        </template>
        <template v-slot:buttons>
            <c-button
                text="Подтвердить"
                :action="deleteImages"
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
        name: "DeleteImagesModal",
        components: {CButton, ModalWindow},
        methods: {
            deleteImages() {
                this.$store.dispatch('deletePhotos')
            },
            close() {
                this.$store.commit('hideDeleteImages')
            }
        },
        computed: {
            selectedPhotos: function() {
                return this.$store.getters.selectedPhotos
            },
            correctPhotoId : function () {
                return this.$store.getters.correctPhotoId
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
