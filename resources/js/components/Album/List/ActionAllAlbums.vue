<template>
    <div class="actions">
        <div class="action select_all">
            <input type="checkbox" class="custom-checkbox" id="all-selector" v-model="isSelected">
            <label for="all-selector"></label>
        </div>
        <div class="action to_provide_access" v-if="isSelectedAlbums" :class="isSelectedAlbums" @click="provideAccess">
            <object type="image/svg+xml" data="/storage/albums/actions/ic_provide_access.svg"></object>
        </div>
        <div class="action turn_download" v-if="isSelectedAlbums" :class="isSelectedAlbums" @click="downloadAlbum">
            <object type="image/svg+xml" data="/storage/albums/actions/ic_download.svg"></object>
        </div>
        <div class="action delete_image" v-if="isSelectedAlbums" :class="isSelectedAlbums" @click="deleteAlbum">
            <object type="image/svg+xml" data="/storage/albums/actions/ic_delete.svg"></object>
        </div>
        <del-albums></del-albums>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";
    import DelAlbums from "../Modals/DelAlbums";
    import ModalWindow from "../../Global/ModalWindow";
    import CButton from "../../Global/CButton";

    export default {
        name: "ActionAllAlbums",
        components: {ModalWindow, CButton, DelAlbums},
        data() {
            return {
                isSelected: false,
                i:0
            }
        },
        methods: {
            provideAccess() {
                if (this.$store.getters.selectedAlbums.length > 0) {
                }
            },
            downloadAlbum() {
                if (this.$store.getters.selectedAlbums.length > 0) {
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
                this.$store.dispatch('ListAlbum/selectAllAlbums', this.isSelected);
            }
        },
        selectedAlbums() {
            if (this.selectedAlbums.length === 0) {
                this.isSelected = false
            }
        },
        computed: {
            isSelectedAlbums: function() {
                return (this.$store.getters.selectedAlbums.length > 0) ? 'available' : ''
            },
            ...mapGetters({
                selectedAlbums: 'selectedAlbums',
                albums: 'ListAlbum/albums',
            })
        },
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
