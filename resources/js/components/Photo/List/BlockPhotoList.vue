<template>
    <Section>
        <template v-slot:title>
            <h1>Фото</h1>
        </template>
        <template v-slot:content>
            <AllPhoto></AllPhoto>
        </template>
    </Section>
</template>

<script>
    import Section from "../../Global/Section";
    import AllPhoto from "./AllPhoto";

    export default {
        name: "BlockPhotoList",
        components: {
            AllPhoto,
            Section,
        }
    }
</script>

<style scoped>

</style>