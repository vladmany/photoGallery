<template>
    <Section>
        <template v-slot:title>
            <span>Фото</span>
        </template>
        <template v-slot:button>
            <upload-photos-component/>
        </template>
        <template v-slot:actions>
            <actions/>
        </template>
        <template v-slot:content>
            <AllPhoto :paginate-count="20"></AllPhoto>
        </template>
    </Section>
</template>

<script>
    import AllPhoto from "./AllPhoto";
    import UploadPhotosComponent from "../Upload/UploadPhotosComponent";
    import Actions from "./Actions";

    export default {
        name: "PhotoIndex",
        components: {Actions, UploadPhotosComponent, AllPhoto,}
    }
</script>

<style scoped>

</style>
