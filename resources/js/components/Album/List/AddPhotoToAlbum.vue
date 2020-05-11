<template>
    <Section>
        <template v-slot:title>
            <span>Фото</span>
        </template>
        <template v-slot:button>
            <upload-photos-component/>
        </template>
        <template v-slot:content>
            <div class="row">
                <div class="col-12 px-3">
                    <div class="row justify-content-between">
                        <div class="col-12 col-lg-6">
                            <router-link :to="{ name: 'OneAlbum', props: { id: album.id } }" >
                                Назад
                            </router-link>
                        </div>
                        <div class="col-12 col-lg-6">
                            <span class="text-right" @click="save">Сохранить</span>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <h2 class="text-center text-uppercase">
                        Добавить фото в {{ album.name }}
                    </h2>
                </div>
                <AllPhoto
                    :photos="photos"
                    :paginate-count="20"
                ></AllPhoto>
            </div>
        </template>
    </Section>
</template>

<script>
    import UploadPhotosComponent from "../../Photo/Upload/UploadPhotosComponent";
    import AllPhoto from "../../Photo/List/AllPhoto";
    import { mapGetters } from 'vuex'

    export default {
        name: "AddPhotoToAlbum",
        components: {UploadPhotosComponent, AllPhoto,},
        props: {
            id: {
                required: true,
                type: Number
            }
        },
        methods: {
            save() {

            }
        },
        computed: {
            ...mapGetters({
                photos: 'ListPhoto/photos',
            }),
            album() {
                return this.$store.getters['ListAlbum/album'](this.id);
            },
        },
    }
</script>

<style scoped>

</style>
