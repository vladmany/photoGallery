<template>
    <div class="row">
        <div class="col-12">
            <div class="row justify-content-between">
                <div class="col-12 col-lg-6">
                    <div class="back-button">
                        <router-link :to="previousRoute" @click="updatePhoto">
                            <object type="image/svg+xml" data="/storage/ic_arrow_left.svg"></object>
                        </router-link>
                    </div>
                </div>
                <div class="col-12 col-lg-6 text-right save-wrapper">
                    <span @click="save" class="save">Сохранить</span>
                </div>
            </div>
        </div>
        <div class="col-12">
            <Sliders></Sliders>
        </div>
        <div class="col-12">
            <SliderPhoto :id="currentImageId" :is-correct="true"></SliderPhoto>
        </div>
    </div>
</template>

<script>
    import Sliders from "./Sliders";
    import SliderPhoto from "../View/SliderPhoto";

    export default {
        name: "Maker",
        components: { Sliders, SliderPhoto },
        props: ['previousRoute'],
        computed: {
            currentImageId() {
                return this.$store.getters['correctPhotoId'];
            }
        },
        methods: {
            save() {
                let ret = {};
                ret['photo_id'] = this.currentImageId;
                let corrects = this.$store.getters['cssAttrs'];
                for(let key of Object.keys(corrects)) {
                    ret[key] = corrects[key]
                }
                this.$store.dispatch('saveCorrectedImage', ret)
                this.$store.dispatch('showToasted', {
                    text: 'Фото после коррекции сохранено',
                })
                this.$store.dispatch('getCorrects')
                this.store.dispatch('clearAngle')
                // this.$store.dispatch('ListPhoto/getPhotos')
            },
            updatePhoto() {
                // this.$store.dispatch('ListPhoto/getPhotos')
                this.$store.dispatch('clearAngle')
            }
        },
        created() {
            this.$store.dispatch('getCorrects');
        }
    }
</script>

<style scoped>
    .save-wrapper {
        display: flex;
        justify-content: flex-end;
    }
    .save {
        margin-top: 15px;
        cursor: pointer;
        font-weight: bold;
        color: #999999;
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
</style>
