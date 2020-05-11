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
                <div class="col-12">
                    <div class="row justify-content-between">
                        <div class="col-12 col-lg-6">
                            <a @click="$router.go(-1)" href="#">Назад</a>
                        </div>
                        <div class="col-12 col-lg-6">
                            <span @click="save">Сохранить</span>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <h2 class="text-center text-uppercase">
                        Добавить фото в {{ album.name }}
                    </h2>
                </div>
                <AllPhoto :paginate-count="20"></AllPhoto>
            </div>
        </template>
    </Section>
</template>

<script>
    import UploadPhotosComponent from "../../Photo/Upload/UploadPhotosComponent";
    import AllPhoto from "../../Photo/List/AllPhoto";

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
            album() {
                return this.$store.getters['ListAlbum/album'](this.id);
            }
        },
    }
</script>

<style scoped>

</style>
