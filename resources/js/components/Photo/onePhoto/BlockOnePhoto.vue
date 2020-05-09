<template>
    <Section>
        <template v-slot:title>
            <h1>Просмотр фото</h1>
        </template>
        <template v-slot:content>
            <div>
                <p class="pl-5">Панель инструментов</p>
                <OnePhoto :id="photoId"></OnePhoto>
            </div>
        </template>
    </Section>
</template>

<script>
    import OnePhoto from "./OnePhoto";
    import Section from "../../Global/Section";

    export default {
        name: "BlockOnePhoto",
        components: { OnePhoto, Section },
        props: {
            photoId: {
                required: true,
                type: Number
            }
        },
    }

</script>

<style scoped>

</style>
