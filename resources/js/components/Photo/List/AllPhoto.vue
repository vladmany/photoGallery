<template>
    <div class="section">
        <div class="panel">
            <div class="upload">
                <upload-photos-component></upload-photos-component>
            </div>
            <div class="actions"></div>
        </div>
    </div>
</template>

<script>
    import UploadPhotosComponent from "../Upload/UploadPhotosComponent";
    // import Section from '../../Global/Section'
    // import jwPaginator from '../../Global/jwPaginator'
    // import GroupPhoto from './GroupPhoto'
    import { mapGetters } from 'vuex'

    export default {
        name: "AllPhoto",
        components: {UploadPhotosComponent},
        // components: {Section, GroupPhoto, jwPaginator},
        props: {
            paginateCount: {
                type: Number,
                default: 40
            }
        },
        computed: {
            ...mapGetters([
                'groups',
            ]),
        },

    }
</script>

<style scoped>
    .section {
        max-width: 1110px;
        width: 100%;
        height: 804px;
        background: #FFFFFF;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);
        border-radius: 6px;
    }
    .panel {
        height: 90px;
        border-bottom: 2px solid #F5F5F5;
    }

    .outer:before {
        content: '';
        display: inline-block;
        height: 100%;
        vertical-align: middle;
    }

    .inner {
        display: inline-block;
        vertical-align: middle;
    }

    /* добавим горизонтальное центрирование */
    .outer {
        text-align: center;
    }

    .upload {
        height: 100%;
        max-width: 214px;
        width: 100%;
        padding-top: 21px;
        padding-left: 31px;
        border-right: 2px solid #F5F5F5;
    }
</style>