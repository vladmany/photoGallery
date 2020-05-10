<template>
    <Section>
        <template v-slot:title>
            <h1>Альбомы</h1>
        </template>
        <template v-slot:content>
            <div class="album-wrap">
                <div class="main-panel">
                    <div class="upload">
                        <Index></Index>
                    </div>
                    <div class="actions-panel"></div>
                </div>
                <div class="" v-if="1">
                    <AllAlbums></AllAlbums>
                </div>
                <div v-else class="placeholder">
                    <h2>Здесь вы можете добавить свои альбомы</h2>
                    <img src="/storage/photos/placeholder.png">
                </div>
            </div>

        </template>
    </Section>
</template>

<script>
    import AllAlbums from "./AllAlbums";
    import Index from "./Index";


    export default {
        name: "BlockAlbumList",
        components: {AllAlbums, Index},
    }
</script>

<style scoped>
    .albums-wrap {
        width: 100%;
    }
    .main-panel {
        display: flex;
        height: 90px;
        width: 100%;
        border-bottom: 2px solid #F5F5F5;
    }
    .upload {
        display: flex;
        max-width: 214px;
        width: 100%;
        justify-content: center;
        align-items: center;
        border-right: 2px solid #F5F5F5;
    }
</style>
