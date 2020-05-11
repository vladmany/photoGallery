<template>
    <Section>
        <template v-slot:title>
            <span>Фото</span>
        </template>
        <template v-slot:button>
            <upload-photos-component/>
        </template>
        <template v-slot:content>
            <AllPhoto :paginate-count="20"></AllPhoto>
        </template>
    </Section>
</template>

<script>
    import AllPhoto from "./AllPhoto";
    import UploadPhotosComponent from "../Upload/UploadPhotosComponent";

    export default {
        name: "PhotoIndex",
        components: {UploadPhotosComponent, AllPhoto,}
    }
</script>

<style scoped>

</style>
