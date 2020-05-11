<template>
    <div>
        <GroupPhoto v-if="photos.length > 0"
            :elements="photos"
            :group-id="albumId"
        ></GroupPhoto>
        <noAlbums v-else></noAlbums>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import GroupPhoto from "../../Photo/List/GroupPhoto";
    import noAlbums from "./noAlbums";

    export default {
        name: "AllPhotoAlbum",
        components: { GroupPhoto, noAlbums },
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

</style>
