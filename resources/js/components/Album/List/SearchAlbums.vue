<template>
    <div class="search-panel">
        <input type="text" placeholder="Искать здесь...">
        <button type="submit"><object type="image/svg+xml" data="/storage/albums/actions/ic_search.svg"></object></button>
    </div>
</template>

<script>
    export default {
        name: "SearchAlbums"
    }
</script>

<style scoped>
    * {box-sizing: border-box;}
    .search-panel {
        position: relative;
        width: 300px;
        margin: 0 auto;
        background: #A3D0C3;
    }
    input, button {
        border: none;
        outline: none;
        background: transparent;
    }
    input {
        width: 100%;
        height: 42px;
        padding-left: 15px;
    }
    button {
        height: 42px;
        width: 42px;
        position: absolute;
        top: 0;
        right: 0;
        cursor: pointer;
    }
</style>
