<template>
    <div class="row">
        <div class="col-12">
            <div class="row justify-content-between">
                <div class="col-12 col-lg-6">
                    <div class="back-button">
                        <router-link :to="{ name: 'OneAlbum', props: { id: album.id } }" >
                            <object type="image/svg+xml" data="/storage/ic_arrow_left.svg"></object>
                        </router-link>
                    </div>
                </div>
                <div class="col-12 col-lg-6 text-right">
                    <!--                            <a href="#" @click.prevent="save">Сохранить</a>-->
                    <span @click="save" class="save">Сохранить</span>
                </div>
            </div>
        </div>
        <div class="col-12">
            <Sliders></Sliders>
        </div>
        <div class="col-12">
            <SliderPhoto :id="currentImageId"></SliderPhoto>
        </div>
    </div>
</template>

<script>
    import Sliders from "./Sliders";
    import SliderPhoto from "../View/SliderPhoto";

    export default {
        name: "Maker",
        components: { Sliders, SliderPhoto },
        computed: {
            currentImageId() {
                this.$store.getters['ListPhoto/currentPhotoId'];
            },
            currentImage() {
                this.$store.getters['ListPhoto/photo'](this.currentImageId);
            }
        }
    }
</script>

<style scoped>

</style>
