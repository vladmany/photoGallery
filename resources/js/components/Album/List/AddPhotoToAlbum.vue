<template>
    <Section>
        <template v-slot:breadcrumbs>
            <breadcrumbs
                :crumbs="{
                    'Фотографии': 'none',
                    'Альбомы': {name: 'AlbumIndex'},
                    'Просмотр альбома': { name: 'OneAlbum', params: { id: id } },
                    'Добавление фото в альбом': 'none',
                }"
            />
        </template>
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
                            <div class="back-button">
                                <router-link :to="{ name: 'OneAlbum', props: { id: album.id } }" >
                                    <object type="image/svg+xml" data="/storage/ic_arrow_left.svg"></object>
                                </router-link>
                            </div>
                        </div>
                        <div class="col-12 col-lg-6 text-right">
<!--                            <a href="#" @click.prevent="save">Сохранить</a>-->
                            <span @click="save" class="save">Сохранить</span>
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
                    :reverse-group="true"
                ></AllPhoto>
            </div>
        </template>
    </Section>
</template>

<script>
    import UploadPhotosComponent from "../../Photo/Upload/UploadPhotosComponent";
    import AllPhoto from "../../Photo/List/AllPhoto";
    import { mapGetters } from 'vuex'
    import Breadcrumbs from "../../Global/Breadcrumbs";

    export default {
        name: "AddPhotoToAlbum",
        components: {UploadPhotosComponent, AllPhoto, Breadcrumbs},
        props: {
            id: {
                required: true,
                type: Number
            }
        },
        methods: {
            save() {
                this.$store.dispatch('savePhotosToAlbum', this.id);
                this.$store.commit('clearSelectedPhotos');
                this.$store.dispatch('ListAlbum/getAlbums');
                this.$store.dispatch('ListPhoto/getPhotos');
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
        created() {
            this.$store.dispatch('ListPhoto/getPhotos');
            console.log(this.photos);
        }
    }
</script>

<style scoped>
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
    .save {
        margin-top: 15px;
        cursor: pointer;
        font-weight: bold;
        color: #999999;
    }
    .save:hover {
        color: #6e6e6e;
    }
</style>
