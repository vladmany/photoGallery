<template>
    <Section>
        <template v-slot:title>
            <span>Просмотр альбома</span>
        </template>
        <template v-slot:button>
            <div class="row">
                <div>
                    <router-link :to="{ name: 'AddPhotoToAlbum', params: { id: album.id } }">
                        <span class="btn btn-primary btn-lg text-nowrap">Добавить фото</span>
                    </router-link>
                </div>
            </div>
        </template>
        <template v-slot:actions>
            <ActionOneAlbum></ActionOneAlbum>
        </template>
        <template v-slot:content>
            <div class="back-button">
                <router-link :to="{ name: 'AlbumIndex' }" >
                    <object type="image/svg+xml" data="/storage/ic_arrow_left.svg"></object>
                </router-link>
            </div>
            <div class="row">
                <div class="col-12">
                    <p class="text-center album-name mt-2 mt-md-4 mt-5 mb-2 mb-md-4 mb-5">{{ album.name }}</p>
                </div>
                <AllPhotoAlbum :paginate-count="20" :album-id="album.id" class="col-12"></AllPhotoAlbum>
            </div>

        </template>
    </Section>

</template>

<script>
    import AllPhotoAlbum from "./AllPhotoAlbum";
    import ActionOneAlbum from "./ActionOneAlbum";

    export default {
        name: "OneAlbum",
        components: {ActionOneAlbum, AllPhotoAlbum},
        props: {
            id: {
                required: true,
                type: Number,
            }
        },
        computed: {
            album() {
                return this.$store.getters['ListAlbum/album'](this.id);
            }
        },
        created() {
            this.$store.dispatch('ListAlbum/getAlbums');
            this.$store.state.IdAlbum = this.id;
        }
    }
</script>

<style scoped>
    .album-name {
        font-size: 24px;
        align-items: center;
        font-weight: bolder;
        color: #666666;
    }
    object {
        pointer-events: none;
        filter: brightness(75%);
    }
    .back-button {
        display: flex;
        margin-top: 15px;
        width: 30px;
    }
    .back-button:hover object {
        filter: brightness(50%);
    }
</style>
