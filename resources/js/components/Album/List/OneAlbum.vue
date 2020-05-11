<template>
    <div class="wrapper">
        <div class="header">
            <div class="name-album">
<!--                //Name albums :D-->
            </div>
            <div class="main-panel">
                <upload-photos-component></upload-photos-component>
            </div>
        </div>
        <div v-if="noPhotos">
<!--            Images ;D-->
        </div>
        <div v-else="noPhotos" class="noPhotos content">
            <div class="pt-4">
                <p class="album-name">Альбом 1</p>
            </div>
            <div class="text-center">
                <img src="/storage/albums/placeholderNoPhotosInAlbums.png" class="img-bord">
            </div>
                <div class="text-empty">
                <p>Альбом пуст</p>
            </div>
        </div>
    </div>
</template>

<script>
    import UploadPhotosComponent from "../../Photo/Upload/UploadPhotosComponent";
    export default {
        name: "OneAlbum",
        components: {UploadPhotosComponent},
        data: function () {
            return {
                noPhotos: false
            }
        },
    }
</script>

<style scoped>
    .wrapper{
        width: 100%;
        display: flex;
        background-color: #ffffff !important;
        flex-direction: column;
    }
    .album-name .text-empty{
        color: #666;
    }
    .album-name{
        font-size: 24px;
        align-items: center;
    }
    .text-empty{
        font-size: 16px;
    }
    .noPhotos div{
        text-align: center;
    }
    .img-bord {
        max-width: 540px;
        max-height: 330px;
        width: 100%;
        height: 100%;
    }
</style>
