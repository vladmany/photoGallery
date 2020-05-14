<template>
    <div class="actions">
        <div class="action select_all">
            <input type="checkbox" class="custom-checkbox" id="all-selector" v-model="isSelected">
            <label for="all-selector"></label>
        </div>
        <div class="action to_provide_access">
            <object type="image/svg+xml" data="/storage/albums/actions/ic_provide_access.svg"></object>
        </div>
        <div class="action turn_download">
            <object type="image/svg+xml" data="/storage/albums/actions/ic_download.svg"></object>
        </div>
        <div class="action delete_image">
            <object type="image/svg+xml" data="/storage/albums/actions/ic_delete.svg"></object>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ActionAllAlbums",
        data() {
            return {
                isSelected: false
            }
        },
        watch: {
            isSelected() {
                this.$store.dispatch('ListAlbum/selectAllAlbums', this.isSelected);
            }
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
