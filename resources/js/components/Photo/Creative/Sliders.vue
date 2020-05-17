<template>
    <div class="row">
        <div class="col-12 col-lg-4 col-md-6">
            <input type="range" min="-100" max="100" v-model="one">
        </div>
        <div class="col-12 col-lg-4 col-md-6">
            <input type="range" min="-100" max="100" v-model="one">
        </div>
        <div class="col-12 col-lg-4 col-md-6">
            <input type="range" min="-100" max="100" v-model="one">
        </div>
        <div class="col-12 col-lg-4 col-md-6">
            <input type="range" min="-100" max="100" v-model="one">
        </div>
        <div class="col-12 col-lg-4 col-md-6">
            <input type="range" min="-100" max="100" v-model="one">
        </div>
        <div class="col-12 col-lg-4 col-md-6">
            <input type="range" min="-100" max="100" v-model="one">
        </div>
    </div>
</template>

<script>
    export default {
        name: "Sliders",
        computed: {
            one() {
                return 0
            }
        }
    }
</script>

<style scoped>

</style>
