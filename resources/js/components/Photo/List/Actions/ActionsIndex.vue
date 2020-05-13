<template>
    <div class="actions">
        <div class="action select_all">
            <input type="checkbox" class="custom-checkbox" id="all-selector" v-model="isSelected">
            <label for="all-selector"></label>
        </div>
        <div class="action create">
            <object type="image/svg+xml" data="/storage/photos/actions/ic_create.svg"></object>
        </div>
        <div class="action add_to_album" @click="addToAlbum">
            <object type="image/svg+xml" data="/storage/photos/actions/ic_add_to_album.svg"></object>
        </div>
        <div class="action download" @click="download">
            <object type="image/svg+xml" data="/storage/photos/actions/ic_download.svg"></object>
        </div>
        <div class="action change_date" @click="changeDate">
            <object type="image/svg+xml" data="/storage/photos/actions/ic_change_date.svg"></object>
        </div>
        <div class="action to_favorite" @click="toFavorite">
            <object type="image/svg+xml" data="/storage/photos/actions/ic_add_to_favorite.svg"></object>
        </div>
        <div class="action turn_image" @click="turnImage">
            <object type="image/svg+xml" data="/storage/photos/actions/ic_turn.svg"></object>
        </div>
        <div class="action image_correction" @click="imageCorrection">
            <object type="image/svg+xml" data="/storage/photos/actions/ic_photo_correction.svg"></object>
        </div>
        <div class="action delete_image" @click="deleteImages">
            <object type="image/svg+xml" data="/storage/photos/actions/ic_delete.svg"></object>
        </div>
    </div>
</template>

<script>
    // import ListPhoto from "../../../store/modules/ListPhoto";

    export default {
        name: "Actions",
        methods: {
            addToAlbum() {
                // if (this.$store.getters.selectedPhotos.length > 0) {
                //     this.$store.commit('showAddPhotoToAlbum')
                // }
            },
            download() {

            },
            changeDate() {

            },
            toFavorite() {

            },
            turnImage() {

            },
            imageCorrection() {

            },
            deleteImages() {

            }
        },
        computed: {
            selectedPhotos: function() {
                return (this.$store.getters.selectedPhotos.length > 0) ? 'available' : ''
            }
        },
        data() {
            return {
                isSelected: false
            }
        },
        watch: {
            isSelected() {
                this.$store.dispatch('ListPhoto/selectAllPhotos', this.isSelected);
            }
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
