<template>
    <Section>
        <template v-slot:title>
            <h1>Просмотр фото</h1>
        </template>
        <template v-slot:content>
            <div>
                <p class="pl-5">Панель инструментов</p>
                <SliderPhoto :id="id"></SliderPhoto>
            </div>
        </template>
    </Section>
</template>

<script>
    import OnePhoto from "./OnePhoto";
    import SliderPhoto from "./SliderPhoto";

    export default {
        name: "BlockOnePhoto",
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
