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
                v-else-if="previousRoute.name === 'IndexViewPhoto'"
                :crumbs="{
                    'Фотографии': 'none',
                    'Альбомы': {name: 'AlbumIndex'},
                    'Просмотр альбома': {name: 'OneAlbum', params: {id: albumId}},
                    'Просмотр фото': previousRoute,
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
            <MakerOne></MakerOne>
        </template>
    </Section>
</template>

<script>
    import MakerOne from "./MakerOne";
    import Breadcrumbs from "../../Global/Breadcrumbs";

    export default {
        name: "CorrectIndex",
        components: { MakerOne, Breadcrumbs },
        props: {
            id: {
                required: true,
                type: Number
            },
            previousRoute: {
                type: Object
            },
            albumId: {
                type: Number
            }
        },
    }
</script>

<style scoped>

</style>

