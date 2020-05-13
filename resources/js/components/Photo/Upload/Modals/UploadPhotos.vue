<template>
    <modal-window
        v-if="this.$store.state.isUploadPhotos"
        title="Загрузка фото"
        :close-action="cancel"
    >

    </modal-window>
</template>

<script>
    import ModalWindow from "../../../Global/ModalWindow";
    export default {
        name: "UploadPhotosModal",
        components: {ModalWindow},
        methods: {
            cancel() {

            }
        }
    }
</script>

<style scoped>

</style>
