<template>
    <Section>
        <template v-slot:breadcrumbs>
            <breadcrumbs
                :crumbs="{
                    'Фотографии': 'none',
                    'Альбомы': {name: 'AlbumIndex'},
                    'Просмотр альбома': 'none',
                }"
            />
        </template>
        <template v-slot:title>
            <span>Просмотр альбома</span>
        </template>
        <template v-slot:button>
            <div class="row button-main-wrapper">
                <div class="button-wrapper">
                    <c-button
                        text="Добавить фото"
                        :action="addToAlbum"
                    />
                </div>
            </div>
        </template>
        <template v-slot:actions>
            <ActionOneAlbum></ActionOneAlbum>
        </template>
        <template v-slot:content>
            <div class="back-button">
                <router-link :to="{ name: 'AlbumIndex' }" >
                    <object type="image/svg+xml" data="/storage/ic_arrow_left.svg"></object>
                </router-link>
            </div>
            <div class="row">
                <div class="col-12">
                    <p class="text-center album-name mt-2 mt-md-4 mt-5 mb-2 mb-md-4 mb-5">{{ albumName }}</p>
                </div>
                <AllPhotoAlbum :paginate-count="20" :album-id="id" class="col-12"></AllPhotoAlbum>
            </div>

        </template>
    </Section>

</template>

<script>
    import AllPhotoAlbum from "./AllPhotoAlbum";
    import ActionOneAlbum from "./ActionsOneAlbum/ActionsIndex";
    import CButton from "../../Global/CButton";
    import routes from '../../../routes';
    import Breadcrumbs from "../../Global/Breadcrumbs";

    export default {
        name: "OneAlbum",
        components: {CButton, ActionOneAlbum, AllPhotoAlbum, Breadcrumbs},
        props: {
            id: {
                required: true,
                type: Number,
            }
        },
        computed: {
            album() {
                return this.$store.getters['ListAlbum/album'](this.id);
            },
            albumName() {
                return this.album ? this.album.name : ''
            }
        },
        created() {

            this.$store.dispatch('ListAlbum/getAlbums');
            this.$store.dispatch('clearPhotos')
            this.$store.dispatch('clearAlbums')
            this.$store.state.IdAlbum = this.id;
        },
        methods: {
            addToAlbum() {
                routes.push({ name: 'AddPhotoToAlbum', params: { id: this.id } })
            },
        },
    }
</script>

<style scoped>
    .album-name {
        font-size: 24px;
        align-items: center;
        font-weight: bolder;
        color: #666666;
        word-wrap: break-word;
    }
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
    .button-wrapper {
        width: 100%;
        display: flex;
        /*justify-content: center;*/
    }
    .button-main-wrapper {
        width: 100%;
        display: flex;
        /*justify-content: center;*/
    }
</style>
