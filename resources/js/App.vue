<template>
<div>
    <errors-modal-window v-if="this.$store.state.isUploadError"></errors-modal-window>
    <upload-photos-component></upload-photos-component>
    <IndexAlbums></IndexAlbums>
</div>
</template>

<script>
    import ErrorsModalWindow from "./components/Photo/Upload/ErrorsModalWindow";
    import UploadPhotosComponent from "./components/Photo/Upload/UploadPhotosComponent";
    import AllAlbums from "./components/Album/AllAlbums";
    import IndexAlbums from "./components/Album/Index";

    export default {
        name: "App",
        components: {AllAlbums, UploadPhotosComponent, ErrorsModalWindow, IndexAlbums}
    }
</script>

<style scoped>

</style>
