<template>
    <div>
        <AllPhoto v-if="photos.length > 0"
            :photos="photos"
            :paginate-count="20"
        ></AllPhoto>
        <noAlbums v-else></noAlbums>
    </div>
</template>

<script>
    import noAlbums from "./noAlbums";
    import AllPhoto from "../../Photo/List/AllPhoto";

    export default {
        name: "AllPhotoAlbum",
        components: { AllPhoto, noAlbums },
        props: {
            albumId: {
                required: true,
                type: Number,
            }
        },
        computed: {
            photos() {
                let ret = this.$store.getters['ListAlbum/photosByAlbum'](this.albumId);
                return ret;
            }
        }
    }
</script>

<style scoped>

</style>
