<template>
<div>
    <errors-modal-window v-if="this.$store.state.isUploadError"></errors-modal-window>
    <upload-photos-component></upload-photos-component>
</div>
</template>

<script>
    import ErrorsModalWindow from "./components/Photo/Upload/ErrorsModalWindow";
    import UploadPhotosComponent from "./components/Photo/Upload/UploadPhotosComponent";

    export default {
        name: "App",
        components: {UploadPhotosComponent, ErrorsModalWindow},
        methods: {

        }
    }
</script>

<style scoped>

</style>
