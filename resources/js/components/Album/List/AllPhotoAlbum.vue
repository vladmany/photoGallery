<template>
    <GroupPhoto
        :elements="photos"
        :group-id="albumId"

    ></GroupPhoto>
</template>

<script>
    import { mapGetters } from 'vuex'
    import GroupPhoto from "../../Photo/List/GroupPhoto";

    export default {
        name: "AllPhotoAlbum",
        components: { GroupPhoto },
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
