<template>
    <div class="actions">
        <div class="action add_to_album available" @click="console.log('TEST')">
            <object type="image/svg+xml" data="/storage/photos/actions/ic_add_to_album.svg"></object>
        </div>
        <div class="action add_to_album">
            <object type="image/svg+xml" data="/storage/photos/actions/ic_add_to_album.svg"></object>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Actions"
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
