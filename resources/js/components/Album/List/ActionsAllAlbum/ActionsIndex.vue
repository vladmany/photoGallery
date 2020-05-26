<template>
    <div class="actions">
        <div class="action select_all" :class="(albums.length > 0) ? 'available' : ''">
            <input type="checkbox" class="custom-checkbox" id="all-selector" v-model="isSelected">
            <label for="all-selector" title="Выбрать все альбомы"></label>
        </div>
        <div class="action turn_download" :class="isSelectedAlbums" @click="downloadAlbums" title="Скачать выбранные альбомы">
            <object type="image/svg+xml" data="/storage/albums/actions/ic_download.svg"></object>
        </div>
        <div class="action delete_image" :class="isSelectedAlbums" @click="deleteAlbum" title="Удалить выбранные альбомы">
            <object type="image/svg+xml" data="/storage/albums/actions/ic_delete.svg"></object>
        </div>
        <del-albums></del-albums>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";
    import DelAlbums from "../../Modals/DelAlbums";
    import ModalWindow from "../../../Global/ModalWindow";
    import CButton from "../../../Global/CButton";

    export default {
        name: "ActionAllAlbums",
        components: {ModalWindow, CButton, DelAlbums},
        data() {
            return {
                isSelected: false,
                i:0,
            }
        },
        methods: {
            downloadAlbums() {
                if (this.$store.getters.selectedAlbums.length > 0) {
                    this.$store.dispatch('downloadAlbums', this.$store.getters.selectedAlbums)
                }
            },
            deleteAlbum() {
                if (this.$store.getters.selectedAlbums.length > 0) {
                    this.$store.commit('showDelAlbum');
                }
            }
        },
        watch: {
            isSelected() {
                console.log('watch IsSelected do + dovnUp ' + this.downUp.v + 'isSelected ' + this.isSelected)
                if(this.downUp.v === 0 /*&& this.isSelected === true*/){
                    this.$store.dispatch('ListAlbum/selectAllAlbums', this.isSelected);
                    console.log('watch IsSelected posle ' + this.isSelected)
                }
            },
            downUp(){
                console.log('watch downUp do uslovij' + this.downUp.v)
                if(this.isSelected && this.downUp.v === 1){
                     this.isSelected = false;
                    console.log('watch downUp 2 uslovija' + this.downUp.v)
                }
                if(this.downUp.v === 1){
                    this.downUp.v = 0;
                    console.log('watch downUp 1 uslovija' + this.downUp.v)
                }
            },
            selectedAlbums() {
                console.log('watch selectedAlbums do uslovija ' + this.selectedAlbums.length + ' dovnUp ' + this.downUp.v)
                if (this.selectedAlbums.length === 0) {
                     this.isSelected = false
                    this.downUp.v = 0;
                    console.log('watch selectedAlbums v uslovie ' + this.isSelected)
                }

                if (this.selectedAlbums.length < 6 && this.downUp.v === 1) {
                    this.isSelected = false
                    this.downUp.v = 0;
                    console.log('watch selectedAlbums v uslovie 2' + this.isSelected)
                }
            },
        },

        computed: {
            isSelectedAlbums: function() {
                return (this.$store.getters.selectedAlbums.length > 0) ? 'available' : ''
                console.log('computed IsSelectedAlbums ' + this.$store.getters.selectedAlbums.length)
            },
            ...mapGetters({
                selectedAlbums: 'selectedAlbums',
                albums: 'ListAlbum/albums',
                downUp: 'ListAlbum/downUp'
            })
        },
        created() {
            this.isSelected = false
            this.selectedAlbums.length = 0
        }
    }
</script>

<style scoped>
    .actions {
        display: flex;
        align-items: center;
        max-height: 93px;
        height: 100%;
        max-width: 285px;
        width: 100%;
        align-self: center;
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
    .select_all{
        margin-left: 28px;
    }
    .actions div:not(:first-child){
        margin-left: 13px;
    }
</style>
