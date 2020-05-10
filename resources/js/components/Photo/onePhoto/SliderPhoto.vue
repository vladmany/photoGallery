<template>
    <div>
        <p>Слайдер</p>
    </div>
</template>

<script>
    import Slider from "../../Global/Slider";

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
                // group: {},
            }
        },
        computed: {
            group(photoId) {
                let gr = this.$store.getters.groupByPhoto(photoId);
                return gr;
            }
        },
        created() {

        }
    }
</script>

<style scoped>

</style>
