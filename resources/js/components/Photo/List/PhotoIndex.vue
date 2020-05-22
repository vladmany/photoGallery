<template>
    <Section>
        <template v-slot:breadcrumbs>
            <breadcrumbs
                :crumbs="{
                    'Фотографии': 'none',
                    'Фото': 'none',
                }"
            />
        </template>
        <template v-slot:title>
            <span>Фото</span>
        </template>
        <template v-slot:button>
            <upload-photos-component/>
        </template>
        <template v-slot:actions>
            <actions
            />
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
    import Actions from "./Actions/ActionsIndex";
    import Breadcrumbs from "../../Global/Breadcrumbs";

    export default {
        name: "PhotoIndex",
        components: {Breadcrumbs, Actions, UploadPhotosComponent, AllPhoto,},
        props: {
            albumId: {
                type: Number
            }
        },
        // computed: {
        //     ...mapGetters({
        //         photos: 'ListPhoto/photos',
        //     }),
        // },
        methods: {
            // loadData() {
            //     this.$store.dispatch('ListPhoto/getPhotos');
            // }
        },
        created() {
            // setTimeout(this.load, 1000);
            // this.loadData()
            console.log('главная страница с фото')
            this.$store.dispatch('clearPhotos');
        },
    }
</script>

<style scoped>

</style>
