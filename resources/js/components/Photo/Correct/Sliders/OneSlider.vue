<template>
    <div class="slidecontainer">
        <p class="val-range">{{ title }}({{ value - 100 }})</p>
        <input type="range" min="0" max="200" v-model="value"
               class="w-100 slider">
    </div>
</template>

<script>
    export default {
        name: "OneSlider",
        props: {
            name: {
                required: true,
                type: String
            },
            title: {
                required: true,
                type: String
            }
        },
        data() {
            return {
                value: 0,
            }
        },
        computed: {
            val() {
                return this.$store.getters['getCssAttr'](this.name)
            },
            correctPhotoId() {
                return this.$store.getters['correctPhotoId']
            }
        },
        watch: {
            val(newVal, oldVal) {
                this.value = newVal
            },
            value() {
                this.$store.dispatch('setCssAttr', {
                    name: this.name,
                    value: this.value
                })
                this.$store.dispatch('makeCssFilter');
            },
            correctPhotoId() {
                this.value = this.val;
            }
        },
        created() {
            this.value = this.val;
        }
    }
</script>

<style scoped>
    .slider {
        -webkit-appearance: none;
        width: 100%;
        height: 7px;
        border-radius: 5px;
        background: #F5F5F5;
        outline: none;
        opacity: 0.7;
        -webkit-transition: .2s;
        transition: opacity .2s;
    }

    .slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 17px;
        height: 17px;
        border-radius: 50%;
        background: #1875F0;
        cursor: pointer;
    }

    .slider::-moz-range-thumb {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background: #1875F0;
        cursor: pointer;
    }
    .val-range{
        font-weight: 500;
        font-size: 16px;
        line-height: 30px;
        color: #808080;
    }
</style>
