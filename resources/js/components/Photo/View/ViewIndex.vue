<template>
    <Section>
        <template v-slot:breadcrumbs>
            <breadcrumbs
                v-if="previousRoute.name === 'IndexPhoto'"
                :crumbs="{
                    'Фотографии': 'none',
                    'Фото': {name: 'IndexPhoto'},
                    'Просмотр фото': 'none'
                }"
            />
            <breadcrumbs
                v-else
                :crumbs="{
                    'Фотографии': 'none',
                    'Альбомы': {name: 'AlbumIndex'},
                    'Просмотр альбома': previousRoute,
                    'Просмотр фото': 'none'
                }"
            />
        </template>
        <template v-slot:title>
            <h1>Просмотр фото</h1>
        </template>
        <template v-slot:actions>
            <actions
                :previousRoute="previousRoute"
                :album-id="albumId"
            />
        </template>
        <template v-slot:content>
            <div class="back-button">
                <router-link :to="previousRoute" >
                    <object type="image/svg+xml" data="/storage/ic_arrow_left.svg"></object>
                </router-link>
            </div>
            <div>
                <SliderPhoto :id="id"></SliderPhoto>
            </div>
        </template>
    </Section>
</template>

<script>
    import OnePhoto from "./OnePhoto";
    import SliderPhoto from "./SliderPhoto";
    import Actions from "../View/Actions/ActionsIndex";
    import Breadcrumbs from "../../Global/Breadcrumbs";

    export default {
        name: "ViewIndex",
        components: {Breadcrumbs, Actions, SliderPhoto, OnePhoto },
        props: {
            id: {
                required: true,
                type: Number
            },
            previousRoute: {
                required: true,
                type: Object
            },
            albumId: {
                type: Number
            }
        },
        methods: {
            back() {
                // this.$router.go(-1);
            }
        },
        created() {
            this.$root.$emit('showPhotosSidebar')
        }
    }

</script>

<style scoped>
    object {
        pointer-events: none;
        filter: brightness(75%);
    }
    .back-button {
        display: flex;
        margin-top: 15px;
        width: 30px;
    }
    .back-button:hover object {
        filter: brightness(50%);
    }
</style>
