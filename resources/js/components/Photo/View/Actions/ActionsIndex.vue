<template>
    <div class="actions">
        <div class="action add_to_album" :class="(this.correctPhotoId !== -1) ? 'available': ''" @click="addToAlbum">
            <object type="image/svg+xml" data="/storage/photos/actions/ic_add_to_album.svg"></object>
        </div>
        <div class="action download" :class="isSelectedPhotos" @click="download">
            <object type="image/svg+xml" data="/storage/photos/actions/ic_download.svg"></object>
        </div>
        <div class="action change_date" @click="changeDate">
            <object type="image/svg+xml" data="/storage/photos/actions/ic_change_date.svg"></object>
        </div>
        <div class="action to_favorite" @click="toFavorite">
            <object type="image/svg+xml" data="/storage/photos/actions/ic_add_to_favorite.svg"></object>
        </div>
        <div class="action image_correction" :class="isSelectedPhotos1" @click="imageCorrection">
            <object type="image/svg+xml" data="/storage/photos/actions/ic_photo_correction.svg"></object>
        </div>
        <div class="action delete_image" @click="deleteImages">
            <object type="image/svg+xml" data="/storage/photos/actions/ic_delete.svg"></object>
        </div>
    </div>
</template>

<script>
    // import ListPhoto from "../../../store/modules/ListPhoto";

    import {mapGetters} from "vuex";

    export default {
        name: "Actions",
        methods: {
            addToAlbum() {
                if (this.$store.getters.selectedPhotos.length > 0) {
                    this.$store.commit('showAddPhotoToAlbum')
                }
            },
            download() {
                if (this.$store.getters.selectedPhotos.length > 0) {
                    this.$store.dispatch('downloadPhotos', this.$store.getters.selectedPhotos)
                }
            },
            changeDate() {

            },
            toFavorite() {

            },
            turnImage() {

            },
            imageCorrection() {
                if (this.$store.getters.selectedPhotos.length === 1) {
                    this.$store.dispatch('setCorrectPhotoId')
                    let id = this.$store.getters.correctPhotoId;
                    this.$router.push({ name: 'CorrectIndex', params: { id: id }});
                }
            },
            deleteImages() {

            },
        },
        computed: {
            isSelectedPhotos() {
                return (this.$store.getters.selectedPhotos.length > 0) ? 'available' : '';
            },
            isSelectedPhotos1() {
                return (this.$store.getters.selectedPhotos.length === 1) ? 'available' : '';
            },
            ...mapGetters({
                selectedPhotos: 'selectedPhotos',
                correctPhotoId: 'correctPhotoId'

            })
        },
        data() {
            return {
                isSelected: false
            }
        },
        created() {
            console.log(this.correctPhotoId)
        }
    }
</script>

<style scoped>
    .actions {
        display: flex;
        align-items: center;
        min-height: 90px;
    }
    .action {
        margin-left: 15px;
        user-select: none;
    }
    .action.available object {
        filter: brightness(75%);
        pointer-events: none;
    }
    .action.available:hover object {
        filter: brightness(50%);
    }
    .action.available:hover {
        cursor: pointer;
    }
</style>
