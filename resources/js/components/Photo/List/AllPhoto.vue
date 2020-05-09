<template>
    <div class="photos-wrap">
        <div class="main-panel">
            <div class="upload">
                <UploadPhotosComponent />
            </div>
            <div class="actions-panel"></div>
        </div>
        <div class="" v-if="photos.length > 0">
            <GroupPhoto v-for="(elements, title) in groups"
                        :elements="elements" :title="title"
                        :key="title" />
        </div>
        <div v-else class="placeholder">
            <h2>Здесь вы можете добавить свои фотографии</h2>
            <img src="/storage/photos/placeholder.png">
        </div>
    </div>
</template>

<script>
    import Section from '../../Global/Section'
    import GroupPhoto from './GroupPhoto'
    import { mapGetters } from 'vuex'
    import ListPhoto from "../../../store/modules/ListPhoto";
    import ErrorsModalWindow from "../Upload/ErrorsModalWindow";
    import UploadPhotosComponent from "../Upload/UploadPhotosComponent";
    import Checkbox from "../../Global/Checkbox";

    export default {
        name: "AllPhoto",
        components: {Checkbox, Section, GroupPhoto, ErrorsModalWindow, UploadPhotosComponent},
        props: {
            paginateCount: {
                type: Number,
                default: 20
            }
        },
        data() {
            return {
                groups: {},
                weekdays: ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб',],
                months: [
                    'января', 'февраля', 'марта', 'апреля',
                    'мая', 'июня', 'июля', 'августа',
                    'сентября', 'октября', 'ноября', 'декабря',
                ],
            }
        },
        computed: {
            ...mapGetters([
                'photos'
            ]),
        },
        methods: {
            makeDataFormat(title) {
                let date = new Date(title);
                let weekday = this.weekdays[date.getDay()];
                let month = this.months[date.getMonth()];
                return `${weekday}, ${date.getDate()} ${month}`;
            }
        },
        watch: {
            photos() {
                let key = 'created_at';
                this.photos.forEach(item => {
                    let val = this.makeDataFormat(item[key].split('T')[0]);
                    if (!this.groups[val]){
                        this.groups[val] = []
                    }
                    this.groups[val].push(item)
                });
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
</style>
