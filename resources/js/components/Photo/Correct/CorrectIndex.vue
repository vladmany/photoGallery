<template>
    <Section>
        <template v-slot:breadcrumbs>
            <breadcrumbs
                v-if="previousRoute.name === 'IndexPhoto'"
                :crumbs="{
                    'Фотографии': 'none',
                    'Фото': {name: 'IndexPhoto'},
                    'Коррекция фото': 'none'
                }"
            />
            <breadcrumbs
                v-else
                :crumbs="{
                    'Фотографии': 'none',
                    'Альбомы': {name: 'AlbumIndex'},
                    'Просмотр альбома': previousRoute,
                    'Коррекция фото': 'none'
                }"
            />
        </template>
        <template v-slot:title>
            <span>Коррекция фото</span>
        </template>
        <template v-slot:content>
            <Maker
                :previousRoute="previousRoute"
            />
        </template>
    </Section>
</template>

<script>
    import Maker from "./Maker";
    import Breadcrumbs from "../../Global/Breadcrumbs";

    export default {
        name: "CorrectIndex",
        components: { Maker, Breadcrumbs },
        props: {
            id: {
                required: true,
                type: Number
            },
            previousRoute: {
                type: Object
            }
        },
    }
</script>

<style scoped>

</style>
