<template>
    <div class="actions">
        <div class="action select_all" :class="(photos.length > 0) ? 'available' : ''">
            <input type="checkbox" class="custom-checkbox" id="all-selector" v-model="isSelected">
            <label for="all-selector" title="Выбрать все фото"></label>
        </div>
<!--        <div class="action create">-->
<!--            <object type="image/svg+xml" data="/storage/photos/actions/ic_create.svg"></object>-->
<!--        </div>-->
        <div class="action add_to_album" :class="isSelectedPhotos" @click="addToAlbum" title="Добавить выбранные фото в альбом">
            <object type="image/svg+xml" data="/storage/photos/actions/ic_add_to_album.svg"></object>
        </div>
        <div class="action download" :class="isSelectedPhotos" @click="download" title="Скачать выбранные фото">
            <object type="image/svg+xml" data="/storage/photos/actions/ic_download.svg"></object>
        </div>
        <div class="action change_date" :class="isSelectedPhotos" @click="changeDate" title="Изменить дату">
            <object type="image/svg+xml" data="/storage/photos/actions/ic_change_date.svg"></object>
        </div>
<!--        <div class="action to_favorite" @click="toFavorite">-->
<!--            <object type="image/svg+xml" data="/storage/photos/actions/ic_add_to_favorite.svg"></object>-->
<!--        </div>-->
<!--        <div class="action turn_image" @click="turnImage">-->
<!--            <object type="image/svg+xml" data="/storage/photos/actions/ic_turn.svg"></object>-->
<!--        </div>-->
        <div class="action delete_image" :class="isSelectedPhotos" @click="deleteImages" title="Удалить выбранные фото">
            <object type="image/svg+xml" data="/storage/photos/actions/ic_delete.svg"></object>
        </div>
        <div class="action image_correction" :class="isSelectedPhotos1" @click="imageCorrection" title="Открыть окно коррекции фото">
            <object type="image/svg+xml" data="/storage/photos/actions/ic_photo_correction.svg"></object>
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
                if (this.$store.getters.selectedPhotos.length > 0) {
                    this.$store.commit('showChangeDate')
                }
            },
            toFavorite() {

            },
            turnImage() {

            },
            imageCorrection() {
                if (this.$store.getters.selectedPhotos.length === 1) {
                    this.$store.dispatch('setCorrectPhotoId')
                    let id = this.$store.getters.correctPhotoId;
                    this.$router.push({ name: 'CorrectIndexOne', params: { id: id, previousRoute: {name: 'IndexPhoto'} }});
                }
            },
            deleteImages() {
                if (this.$store.getters.selectedPhotos.length > 0) {
                    this.$store.commit('showDeleteImages')
                }
            },
        },
        computed: {
            isSelectedPhotos() {
                return (this.$store.getters.selectedPhotos.length > 0) ? 'available' : '';
            },
            isSelectedPhotos1() {
                if(this.$store.getters.selectedPhotos.length === 1){
                    let id = this.$store.getters.correctPhotoId;
                    let photo = this.$store.getters['ListPhoto/photo'](id)
                    if(photo.extension !== 'gif') {
                        return 'available';
                    }
                }
                return '';
            },
            ...mapGetters({
                selectedPhotos: 'selectedPhotos',
                photos: 'ListPhoto/photos'
            })
        },
        data() {
            return {
                isSelected: false
            }
        },
        watch: {
            isSelected() {
                this.$store.dispatch('ListPhoto/selectAllPhotos', this.isSelected);
            },
            selectedPhotos() {
                if (this.selectedPhotos.length === 0) {
                    this.isSelected = false
                }
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
        opacity: 0;
    }
    .action.available {
        opacity: 1;
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
