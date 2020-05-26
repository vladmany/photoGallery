<template>
    <div class="action-panel">
        <div class="action change_album" :class="isSelectedEveryTime" @click="changeAlbumName" title="Изменить имя альбома">
            <object type="image/svg+xml" data="/storage/albums/actions/ic_change_album.svg"></object>
        </div>
        <div class="action turn_download" :class="isSelectedPhotos" @click="turnDownload" title="Скачать выбранные фото">
            <object type="image/svg+xml" data="/storage/albums/actions/ic_download.svg"></object>
        </div>
        <div class="action delete_image" :class="isSelectedPhotos" @click="deleteImages" title="Удалить выбранные фото">
            <object type="image/svg+xml" data="/storage/albums/actions/ic_delete.svg"></object>
        </div>
        <div class="action change_date" :class="isSelectedSinglePhoto" @click="ChangeCover" title="Сделать выбранное фото обложкой альбома">
            <object type="image/svg+xml" data="/storage/albums/actions/ic_change_cover.svg"></object>
        </div>
        <change-name-album></change-name-album>
    </div>
</template>

<script>
    import ChangeNameAlbum from "../../Modals/ChangeNameAllbum";
    import {mapGetters} from "vuex";
    export default {
        name: "ActionOneAlbum",
        components: {ChangeNameAlbum},
        methods: {
            changeAlbumName(){
                this.$store.state.isChangeNameAlbum = true;
            },
            CloseModalChangeNameAlbum(){
                this.$store.state.isChangeNameAlbum = false;

            },
            ChangeCover(){
                let id = this.$store.getters.selectedPhotos;
                console.log(id);
                this.$store.dispatch('changeCover', [id[0], this.$store.state.IdAlbum])
            },
            turnDownload(){
                if (this.$store.getters.selectedPhotos.length > 0) {
                    this.$store.dispatch('downloadPhotos', this.$store.getters.selectedPhotos)
                }
            },
            deleteImages(){
                if (this.$store.getters.selectedPhotos.length > 0) {
                    this.$store.commit('showDeleteImagesFromAlbum')
                }
            }
        },
        props: {
            albumId: {
                required: true,
                type: Number,
            }
        },
        selectedPhotos() {
            if (this.selectedPhotos.length === 0) {
                this.isSelected = false
            }
        },
        computed: {
            album() {
                return this.$store.getters['ListAlbum/album'](this.albumId);
            },
            isSelectedPhotos: function() {
                return (this.$store.getters.selectedPhotos.length > 0) ? 'available' : ''
            },
            isSelectedEveryTime: function() {
                return  'available'
            },
            isSelectedSinglePhoto: function() {
                return (this.$store.getters.selectedPhotos.length === 1) ? 'available' : ''
            },
            ...mapGetters({
                selectedPhotos: 'selectedPhotos',

            })

        }

    }
</script>

<style scoped>
    .action-panel {
        display: flex;
        flex-direction: row;
        align-items: center;
        min-height: 93px;
        height: 100%;
        max-width: 203px;
        width: 100%;
    }

    .action-panel.available object {
        filter: brightness(75%);
        pointer-events: none;
    }

    .action-panel.available:hover object {
        filter: brightness(50%);
    }

    .action-panel.available:hover {
        cursor: pointer;
    }

    .change_album {
        margin-left: 28px;
    }

    .action-panel div:not(:first-child) {
        margin-left: 15px;
    }
    .action-ever {
        margin-left: 15px;
        user-select: text;
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
