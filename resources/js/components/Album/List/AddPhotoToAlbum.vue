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
                <div class="col-12 py-3">
                    <div class="row justify-content-between">
                        <div class="col-12 col-lg-6">
                            <router-link :to="{ name: 'OneAlbum', props: { id: album.id } }" >
                                Назад
                            </router-link>
                        </div>
                        <div class="col-12 col-lg-6 text-right">
                            <a href="#" @click.prevent="save">Сохранить</a>
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
                this.$store.dispatch('savePhotosToAlbum', this.id);
                this.$router.push({name: 'OneAlbum', params: { id: this.id}});
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
