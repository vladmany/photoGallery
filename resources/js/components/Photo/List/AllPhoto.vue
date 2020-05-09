<template>
    <div class="photos-wrap">
        <div class="main-panel">
            <div class="upload">
                <UploadPhotosComponent></UploadPhotosComponent>
            </div>
            <div class="actions-panel"></div>
        </div>
        <div class="" v-if="photos.length > 0">
            <div class="group">
                <div class="group-selector">
                    <input type="checkbox">
                    <label class="group-date">пт, 8 мая</label>
                </div>
                <div class="group-content">
                    <OnePhoto v-for="photo in photos" :key="photo.id" :photo="photo"
                    ></OnePhoto>
                </div>
            </div>
        </div>
        <div v-else class="placeholder">
            <span>Здесь вы можете добавить свои фотографии</span>
            <img src="/storage/photos/placeholder.png">
        </div>
    </div>
</template>

<script>
    import Section from '../../Global/Section'
    import GroupPhoto from './GroupPhoto'
    import OnePhoto from "./OnePhoto";
    import { mapGetters } from 'vuex'
    import ListPhoto from "../../../store/modules/ListPhoto";
    import ErrorsModalWindow from "../Upload/ErrorsModalWindow";
    import UploadPhotosComponent from "../Upload/UploadPhotosComponent";
    import Checkbox from "../../Global/Checkbox";

    export default {
        name: "AllPhoto",
        components: {Checkbox, Section, OnePhoto, ErrorsModalWindow, UploadPhotosComponent},
        props: {
            paginateCount: {
                type: Number,
                default: 40
            }
        },
        computed: {
            ...mapGetters([
                'photos'
            ]),
        },
        methods: {
            getPhotos() {
                // this.$store.dispatch('getPhotos', null, { root:true });
            }
        },
        created() {
            this.$store.dispatch('getPhotos');
        },
    }
</script>

<style scoped>
    .photos-wrap {
        width: 100%;
    }
    .main-panel {
        display: flex;
        height: 90px;
        width: 100%;
        border-bottom: 2px solid #F5F5F5;
    }
    .upload {
        display: flex;
        max-width: 214px;
        width: 100%;
        justify-content: center;
        align-items: center;
        border-right: 2px solid #F5F5F5;
    }
    .placeholder {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .placeholder span {
        margin-top: 60px;
        margin-bottom: 50px;
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 900;
        font-size: 24px;
        line-height: 30px;
        /* identical to box height, or 125% */

        text-align: center;
        letter-spacing: 2px;

        color: #666666;
    }
    .placeholder img {
        display: flex;
        max-width: 420px;
        width: 100%;
        max-height: 256px;
        height: 100%;
        margin-right: auto;
        margin-left: auto
    }
    .group {
        display: flex;
        flex-direction: column;
        margin-top: 53px;
    }
    .group-selector {
        display: flex;
        flex-direction: row;
    }
    .group-selector input[type=checkbox] {
        display: flex;
        transform:scale(1.5);
        margin-top: 7px;
        margin-right: 4px;
    }
    .group-date {
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 30px;
        text-align: center;
        color: #999999;
    }
    .group-content {
        display: flex;
        flex-direction: row;
        /*justify-content: space-between;*/
        flex-wrap: wrap;
    }
</style>
