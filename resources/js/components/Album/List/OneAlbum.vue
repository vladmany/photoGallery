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
                <div class="col-12 col-md-2">
                    <router-link :to="{ name: 'AddPhotoToAlbum', params: { id: album.id } }">
                        <span class="btn btn-primary btn-lg text-nowrap">Добавить фото</span>
                    </router-link>
                </div>
            </div>
        </template>
        <template v-slot:content>
            <div class="row">
                <div class="col-12">
                    <h2 class="text-center">{{ album.name }}</h2>
                </div>
                <AllPhotoAlbum :paginate-count="20" :album-id="album.id" class="col-12"></AllPhotoAlbum >
            </div>

        </template>
    </Section>

</template>

<script>
    import AllPhotoAlbum from "./AllPhotoAlbum";
    export default {
        name: "OneAlbum",
        components: { AllPhotoAlbum },
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

</style>
