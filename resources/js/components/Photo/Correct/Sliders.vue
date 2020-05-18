<template>
    <div class="row mt-3">
        <div v-for="(title, name) in sliderNames" :key=name
                class="col-12 col-lg-6 col-md-6 px-4">
            <OneSlider :name=name :title=title />
        </div>
    </div>
</template>

<script>
    import OneSlider from "./Sliders/OneSlider";
    export default {
        name: "Sliders",
        components: { OneSlider },
        data() {
            return {
                sliderNames: {
                    brightness: 'Яркость',
                    contrast: 'Контрастность',
                    grayscale: 'Осветление',
                    saturate: 'Насыщенность',
                }
            }
        }
    }
</script>

<style scoped>

</style>
