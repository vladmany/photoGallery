<template>
    <div class="actions">
        <div class="action add_to_album" :class="(this.correctPhotoId !== 0) ? 'available': ''" @click="addToAlbum">
            <object type="image/svg+xml" data="/storage/photos/actions/ic_add_to_album.svg"></object>
        </div>
        <div class="action download" :class="(this.correctPhotoId !== 0) ? 'available': ''" @click="download">
            <object type="image/svg+xml" data="/storage/photos/actions/ic_download.svg"></object>
        </div>
        <div class="action change_date" :class="(this.correctPhotoId !== 0) ? 'available': ''" @click="changeDate">
            <object type="image/svg+xml" data="/storage/photos/actions/ic_change_date.svg"></object>
        </div>
<!--        <div class="action to_favorite" @click="toFavorite">-->
<!--            <object type="image/svg+xml" data="/storage/photos/actions/ic_add_to_favorite.svg"></object>-->
<!--        </div>-->
        <div class="action image_correction" :class="isSelectedPhotos1" @click="turnImage">
            <object type="image/svg+xml" data="/storage/photos/actions/ic_turn.svg"></object>
        </div>
        <div class="action image_correction" :class="isSelectedPhotos1" @click="imageCorrection">
            <object type="image/svg+xml" data="/storage/photos/actions/ic_photo_correction.svg"></object>
        </div>
        <div class="action delete_image" :class="(this.correctPhotoId !== 0) ? 'available': ''" @click="deleteImages">
            <object type="image/svg+xml" data="/storage/photos/actions/ic_delete.svg"></object>
        </div>
    </div>
</template>

<script>
    // import ListPhoto from "../../../store/modules/ListPhoto";

    import {mapGetters} from "vuex";

    export default {
        name: "Actions",
        props: {
            previousRoute: {
                type: Object
            },
            albumId: {
                type: Number
            }
        },
        methods: {
            addToAlbum() {
                console.log(this.correctPhotoId)
                if (this.correctPhotoId !== 0) {
                    this.$store.commit('clearPhotos')
                    this.$store.commit('showAddPhotoToAlbum')
                }
            },
            download() {
                if (this.correctPhotoId !== 0) {
                    this.$store.commit('clearPhotos')
                    this.$store.dispatch('downloadPhotos', [this.correctPhotoId])
                }
            },
            changeDate() {
                if (this.correctPhotoId !== 0) {
                    this.$store.commit('clearPhotos')
                    this.$store.commit('showChangeDate')
                }
            },
            toFavorite() {

            },
            turnImage() {
                let id = this.$store.getters.correctPhotoId;
                this.$store.dispatch('turnImage', id);
                let deltaAngle = this.$store.getters.rotAngleIncr;
                this.$store.dispatch('rotatePhoto', deltaAngle);
                this.$store.dispatch('showToasted', {
                    text: 'Поворот фото сохранен'
                })
                // console.log(this.$store.getters.rotAngle)
                // this.$store.dispatch('ListPhoto/getPhotos')
            },
            imageCorrection() {
                if (this.$store.getters.selectedPhotos.length === 1) {
                    this.$store.dispatch('setCorrectPhotoId')
                    let id = this.$store.getters.correctPhotoId;
                    this.$router.push({
                        name: 'CorrectIndexOne',
                        params:
                            {
                                id: id,
                                previousRoute: {
                                    name: 'IndexViewPhoto',
                                    params: {
                                        id: this.correctPhotoId,
                                        previousRoute: (this.albumId) ? {
                                            name: 'OneAlbum',
                                            params: {
                                                id: this.albumId
                                            }
                                            } :
                                            {
                                                name:'IndexPhoto'
                                            }
                                    }
                                },
                                albumId: this.albumId
                            }
                    });
                } else if(this.$store.getters.selectedPhotos.length === 0
                                || this.$router.name === 'IndexViewPhoto') {
                    let id = this.$store.getters.correctPhotoId;
                    this.$router.push({
                        name: 'CorrectIndexOne',
                        params:
                            {
                                id: id,
                                previousRoute: {
                                    name: 'IndexViewPhoto',
                                    params: {
                                        id: this.correctPhotoId,
                                        previousRoute: (this.albumId) ? {
                                                name: 'OneAlbum',
                                                params: {
                                                    id: this.albumId
                                                }
                                            } :
                                            {
                                                name:'IndexPhoto'
                                            }
                                    }
                                },
                                albumId: this.albumId
                            }
                    });
                }
            },
            deleteImages() {
                if (this.correctPhotoId !== 0) {
                    this.$store.commit('clearPhotos')
                    this.$store.commit('showDeleteImages')
                }
            },
        },
        computed: {
            isSelectedPhotos() {
                return (this.$store.getters.selectedPhotos.length > 0) ? 'available' : '';
            },
            isSelectedPhotos1() {
                if(this.$store.getters.selectedPhotos.length === 1 || this.$route.name === 'IndexViewPhoto'){
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
                correctPhotoId: 'correctPhotoId'

            })
        },
        data() {
            return {
                isSelected: false
            }
        },
        created() {
            // console.log(this.correctPhotoId)
            // console.log(this.$route.name);
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
