<template>
    <div class="action-panel">
        <div class="action change_album" @click="changeAlbum">
            <object type="image/svg+xml" data="/storage/albums/actions/ic_change_album.svg"></object>
        </div>
        <div class="action to_provide_access" @click="toProvideAccess">
            <object type="image/svg+xml" data="/storage/albums/actions/ic_provide_access.svg"></object>
        </div>
        <div class="action turn_download" @click="turnDownload">
            <object type="image/svg+xml" data="/storage/albums/actions/ic_download.svg"></object>
        </div>
        <div class="action change_date" @click="ChangeDate">
            <object type="image/svg+xml" data="/storage/albums/actions/ic_change_cover.svg"></object>
        </div>
        <div class="action delete_image" @click="deleteImages">
            <object type="image/svg+xml" data="/storage/albums/actions/ic_delete.svg"></object>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ActionOneAlbum"
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
</style>
