<template>
    <div class="content">
        <div class="text-center pt-4">
            <p class="main-text pt-2 pt-md-3 pt-lg-4">Создать новый альбом</p>
        </div>
        <div class="text-center">
            <img src="/storage/albums/placeholderNoAlbums.png" class="img-bord">
        </div>
    </div>
</template>

<script>
    export default {
        name: "noAlbums"
    }
</script>

<style scoped>
    .content{
        display: flex;
        background-color: #ffffff;
        width: 100%;
        flex-direction: column;

    }
    .img-bord {
        max-width: 540px;
        max-height: 330px;
        width: 100%;
        height: 100%;
    }

    .main-text {
        font-size: 30px;
        color: #666;

    }
</style>
