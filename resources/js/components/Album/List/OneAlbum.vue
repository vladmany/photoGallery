<template>
    <!--    <div class="wrapper">-->
    <!--        <div class="header">-->
    <!--            <div class="name-album">-->
    <!--&lt;!&ndash;                //Name albums :D&ndash;&gt;-->
    <!--            </div>-->
    <!--            <div class="main-panel">-->
    <!--                <upload-photos-component></upload-photos-component>-->
    <!--            </div>-->
    <!--        </div>-->
    <!--        <div v-if="noPhotos">-->
    <!--&lt;!&ndash;            Images ;D&ndash;&gt;-->
    <!--        </div>-->
    <!--        <div v-else="noPhotos" class="noPhotos content">-->
    <!--            <div class="pt-4">-->
    <!--                <p class="album-name">Альбом 1</p>-->
    <!--            </div>-->
    <!--            <div class="text-center">-->
    <!--                <img src="/storage/albums/placeholderNoPhotosInAlbums.png" class="img-bord">-->
    <!--            </div>-->
    <!--                <div class="text-empty">-->
    <!--                <p>Альбом пуст</p>-->
    <!--            </div>-->
    <!--        </div>-->
    <!--    </div>-->
    <Section>
        <template v-slot:title>
            <span>{{ album.name }}</span>
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
</style>
