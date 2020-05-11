<template>
    <div class="" v-if="photos.length > 0">
        <div class="photo-wrapper">
            <div class="photo-content">
                <GroupPhoto v-for="(elements, title) in groups"
                            :elements="elements" :title="title"
                            :key="title" />
            </div>
            <div class="photo-paginate">
                <paginate
                    :page-count="pages"
                    :page-range="3"
                    :margin-pages="2"
                    :click-handler="onChangePage"
                    :prev-text="'&#129120;'"
                    :next-text="'&#129122;'"
                    :prev-class="'one-page prev'"
                    :next-class="'one-page next'"
                    :container-class="'paginate'"
                    :page-class="'one-page'">
                </paginate>
                <!--                    <jw-pagination :items="photos" @changePage="onChangePage"-->
                <!--                                :pageSize="paginateCount"-->
                <!--                                :labels="customLabels"-->
                <!--                                :styles="customStyles"-->
                <!--                    />-->
            </div>
        </div>
    </div>
    <div v-else class="placeholder">
        <h2>Здесь вы можете добавить свои фотографии</h2>
        <img src="/storage/photos/placeholder.png">
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
    import Paginator from "../../Global/Paginator"

    export default {
        name: "AllPhoto",
        components: {
            Checkbox, Section,
            GroupPhoto, ErrorsModalWindow,
            UploadPhotosComponent
        },
        props: {
            paginateCount: {
                type: Number,
                default: 20
            }
        },
        data() {
            return {
                pages: 0
            }
        },
        computed: {
            ...mapGetters([
                'photos',
                'groups'
            ])
        },
        watch: {
            photos() {
                this.setPages();
                this.onChangePage(1);
            }
        },
        methods: {
            onChangePage(page) {
                let perPage = this.paginateCount;
                let from = (page * perPage) - perPage;
                let to = (page * perPage);
                let pageOfItems = this.photos.slice(from, to);

                this.$store.dispatch('makeGroups', pageOfItems);
            },
            setPages () {
                let pages =[]
                let numberOfPages = Math.ceil(this.photos.length / this.paginateCount);
                for (let index = 1; index <= numberOfPages; index++) {
                    pages.push(index);
                }
                this.pages = pages.length;
            },
        },
        created() {
            this.$store.dispatch('getPhotos');
        },
    }
</script>

<style>
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

    .photo-wrapper {
        min-height: 710px;
        display: flex;
        flex-direction: column;
    }

    .photo-wrapper .photo-content {
        flex: 1 0 auto;
    }

    .photo-wrapper .photo-paginate {
        flex: 0 0 auto;
    }

    ul {
        padding: 0;
    }
    ul, li {
        list-style: none;
    }
    .paginate {
        display: flex;
        margin-bottom: 0;
        user-select: none;
        outline: none;
    }
    .one-page {
        width: 60px;
        height: 60px;
        color: #666;
        border-left: 2px solid #DADADA;

    }
    .one-page a {
        display: block; /* Ссылка как блочный элемент */
        text-align: center; /* Выравнивание по центру */
        height: 100%; /* Высота на весь слой */
        line-height: 60px;
        outline: none;
    }
    .one-page:hover ~ .disable {
        color: #000;

    }
    .prev {
        /*border-bottom-left-radius: 3px;*/
        /*border-top-left-radius: 3px;*/
        color: #D8D8D8;
        border-left: none;
    }
    .next {
        border-bottom-right-radius: 3px;
        border-top-right-radius: 3px;
        color: #D8D8D8;
    }
    li.active > a {
        /*background-color: red;*/
        background: #FAFAFA;
    }
</style>
