<template>
    <div class="" v-if="photos.length > 0">
        <div class="photo-wrapper">
            <div class="photo-content">
                <GroupPhoto v-for="(elements, title, index) in groups" :key="title"
                            :elements="elements"
                            :title="title"
                            :groupId="index"/>
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
            </div>
        </div>
    </div>
    <div v-else class="placeholder-wrapper">
        <div class="placeholder">
            <span>Здесь вы можете добавить свои фотографии</span>
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
    import Paginator from "../../Global/Paginator"

    export default {
        name: "AllPhoto",
        components: {
            Checkbox, Section,
            GroupPhoto, ErrorsModalWindow,
            UploadPhotosComponent
        },
        props: {
            photos: {
                required: true,
                type: Object
            },
            paginateCount: {
                type: Number,
                default: 20
            },
            reverseGroup: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                pages: 0
            }
        },
        computed: {
            ...mapGetters({
                groups: 'ListPhoto/groups',
            })
        },
        watch: {
            photos() {
                this.setPages();
                this.onChangePage(1);
            }
        },
        methods: {
            onChangePage(page = 1) {
                let perPage = this.paginateCount;
                let from = (page * perPage) - perPage;
                let to = (page * perPage);
                let pageOfItems = this.photos.slice(from, to);

                this.$store.dispatch('ListPhoto/makeGroups', {
                    items: pageOfItems,
                    reverse: this.reverseGroup,
                });

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
            this.setPages();
            this.onChangePage(1);
        }
    }
</script>

<style>
    .placeholder-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 710px;
    }
    .placeholder span {
        margin-top: 60px;
        margin-bottom: 50px;
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 900;
        font-size: 24px;
        line-height: 30px;
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
        margin-top: 53px;
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

    .custom-checkbox {
        position: absolute;
        z-index: -1;
        opacity: 0;
    }

    .custom-checkbox+label {
        display: inline-flex;
        align-items: center;
        user-select: none;
    }
    .custom-checkbox+label::before {
        content: '';
        display: inline-block;
        width: 16px;
        height: 16px;
        flex-shrink: 0;
        flex-grow: 0;
        border: 1px solid #adb5bd;
        border-radius: 0.25em;
        margin-right: 0.5em;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 50% 50%;
    }

    .photo_element .custom-checkbox+label {
        position: absolute;
        margin-top: 6px;
        margin-left: 6px;
    }

    .custom-checkbox:checked+label::before {
        border-color: #0b76ef;
        background-color: #0b76ef;
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
    }

    .custom-checkbox:not(:disabled):not(:checked)+label::before {
        background: #ffffff;
    }

    .custom-checkbox:not(:disabled):active+label::before {
        background-color: #b3d7ff;
        border-color: #b3d7ff;
    }

    /* стили для чекбокса, находящегося в фокусе и не находящегося в состоянии checked */
    .custom-checkbox:focus:not(:checked)+label::before {
        border-color: #80bdff;
    }
    /* стили для чекбокса, находящегося в состоянии disabled */
    .custom-checkbox:disabled+label::before {
        background-color: #e9ecef;
    }
</style>
