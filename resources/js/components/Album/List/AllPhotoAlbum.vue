<template>
    <div>
        <GroupPhoto v-if="photos.length > 0"
                    :elements="photos"
                    :group-id="albumId"
        ></GroupPhoto>
        <div v-else="noPhotos" class="noPhotos content">

            <template>
                <div class="pt-4">
                    <span class="album-name">Name</span>
                </div>
            </template>
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
    import {mapGetters} from 'vuex'
    import GroupPhoto from "../../Photo/List/GroupPhoto";
    import noAlbums from "./noAlbums";

    export default {
        name: "AllPhotoAlbum",
        components: {GroupPhoto, noAlbums},
        props: {
            albumId: {
                required: true,
                type: Number,
            }
        },
        computed: {
            photos() {
                return this.$store.getters['ListAlbum/photosByAlbum'](this.albumId);
            }
        }
    }
</script>

<style scoped>
    .noPhotos{
        width: 100%;
    }
    .noPhotos div{
        text-align: center;
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
    .img-bord {
        max-width: 540px;
        max-height: 330px;
        width: 100%;
        height: 100%;
    }
</style>
