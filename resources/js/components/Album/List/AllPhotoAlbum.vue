<template>
    <div>
        <AllPhoto v-if="photos.length > 0"
                  :photos="photos"
                  :paginate-count="20"
        ></AllPhoto>
        <div v-else class="noPhotos content">
            <div class="text-center">
                <img src="/storage/albums/placeholderNoPhotosInAlbums.png" class="img-bord">
            </div>
            <div class="mt-2 mt-md-5 mt-lg-5">
                <p class="text-empty">Альбом пуст</p>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import GroupPhoto from "../../Photo/List/GroupPhoto";
    import noAlbums from "./noAlbums";
    import AllPhoto from "../../Photo/List/AllPhoto";

    export default {
        name: "AllPhotoAlbum",
        components: {AllPhoto, GroupPhoto, noAlbums},
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
    .noPhotos {
        width: 100%;
    }

    .noPhotos div {
        text-align: center;
    }

    .text-empty {
        color: #666;
        font-weight: medium;
    }

    .text-empty {
        font-size: 16px;
    }

    .img-bord {
        max-width: 540px;
        max-height: 330px;
        width: 100%;
        height: 100%;
    }
</style>
