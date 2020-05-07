<template>
<div>
<!--    <IndexAlbums></IndexAlbums>-->
    <BlockPhotoList></BlockPhotoList>
</div>
</template>

<script>
    import ErrorsModalWindow from "./components/Photo/Upload/ErrorsModalWindow";
    import UploadPhotosComponent from "./components/Photo/Upload/UploadPhotosComponent";
    import AllAlbums from "./components/Album/AllAlbums";
    import IndexAlbums from "./components/Album/Index";
    import BlockPhotoList from "./components/Photo/List/BlockPhotoList";

    export default {
        name: "App",
        components: {AllAlbums, UploadPhotosComponent, ErrorsModalWindow, IndexAlbums, BlockPhotoList}
    }
</script>

<style scoped>

</style>
