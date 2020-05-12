<template>
    <div>
        <Slider :images="images" :current-index="start"></Slider>
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
        data() {
            return {

            }
        },
        computed: {
            // imagesind() {
            //     let ret = this.$store.getters['ListPhoto/groupByPhoto'](this.id);
            //     return ret;
            // },
            images() {
                return this.$store.getters['ListPhoto/photos'];
            },
            start() {
                return this.$store.getters['ListPhoto/getPhotoIndex'](this.ind);
            },
            slides(){
                let ret = [];
                for(let image of this.images) {
                    ret.push(
                        `<div><img src="${image}"></div>`
                    )
                }

                return ret;
            }
        },
        created() {

        }
    }
</script>

<style scoped>

</style>
