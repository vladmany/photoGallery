<template>
    <div>
        <Slider :images="slides" :current-index="start"></Slider>
<!--        <carousel :data="slides" :autoplay="false"></carousel>-->
    </div>
</template>

<script>
    import Slider from "../../Global/Slider";
    import ListPhoto from "../../../store/modules/ListPhoto";

    export default {
        name: "SliderPhoto",
        components: { Slider },
        props: {
            id: {
                required: true,
                type: Object,
            }
        },
        computed: {
            images() {
                return this.$store.getters['ListPhoto/photos'];
            },
            start() {
                return this.$store.getters['ListPhoto/getPhotoIndex'](this.images, this.id);
            },
            slides() {
                let ret = [];
                for(let image of this.images) {
                    ret.push(
                        image.url
                        // `<div>
                        //     <img class="img-fluid" src="${ image.url }">
                        // </div>`
                    )
                }

                return ret;
            }
        },
    }
</script>

<style scoped>

</style>
