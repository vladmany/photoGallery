<template>
    <Section>
        <template v-slot:title>
            <h1>Фото</h1>
        </template>
        <template v-slot:content>
            <AllPhoto :paginate-count="3"></AllPhoto>
        </template>
    </Section>
</template>

<script>
    import AllPhoto from "./AllPhoto";

    export default {
        name: "BlockPhotoList",
        components: {AllPhoto,}
    }
</script>

<style scoped>

</style>
