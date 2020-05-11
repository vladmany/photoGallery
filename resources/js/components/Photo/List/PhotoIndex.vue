<template>
    <Section>
        <template v-slot:title>
            <span>Фото</span>
        </template>
        <template v-slot:button>
            <upload-photos-component/>
        </template>
        <template v-slot:content>
            <AllPhoto
                :photos="photos"
                :paginate-count="20"
            ></AllPhoto>
        </template>
    </Section>
</template>

<script>
    import AllPhoto from "./AllPhoto";
    import UploadPhotosComponent from "../Upload/UploadPhotosComponent";
    import { mapGetters } from 'vuex'

    export default {
        name: "PhotoIndex",
        components: {UploadPhotosComponent, AllPhoto,},
        computed: {
            ...mapGetters({
                photos: 'ListPhoto/photos',
            }),
        },
        created() {
            this.$store.dispatch('ListPhoto/getPhotos');
        },
    }
</script>

<style scoped>

</style>
