<template>
    <Section>
        <template v-slot:title>
            <h1>Просмотр фото</h1>
        </template>
        <template v-slot:content>
            <SliderPhoto :id="id"></SliderPhoto>
        </template>
    </Section>
</template>

<script>
    import OnePhoto from "./OnePhoto";
    import SliderPhoto from "./SliderPhoto";

    export default {
        name: "ViewIndex",
        components: {SliderPhoto, OnePhoto },
        props: {
            id: {
                required: true,
                type: Number
            }
        },
    }

</script>

<style scoped>

</style>
