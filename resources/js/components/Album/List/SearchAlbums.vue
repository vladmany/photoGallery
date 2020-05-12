<template>
    <div class="search-panel">
        <input type="text" placeholder="Найти альбом">
        <button type="submit"><img src="/storage/albums/actions/ic_search.png"></button>
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
        max-width: 100%;
        width: 350px;
        background: #ffffff;
        height: 35px;
        display: flex;
        align-self: center;
    }
    input, button {
        border: none;
        outline: none;
        background: transparent;
    }
    input {

        width: 100%;
    }
    button {
        height: 35px;
        width: 42px;
        position: absolute;
        top: 0;
        right: 0;
        cursor: pointer;
    }
</style>
