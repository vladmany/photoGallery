<template>
    <div>
        <p>{{ title }}({{ value }})</p>
        <input type="range" min="0" max="200" v-model="value"
               class="w-100">
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
            }
        },
        watch: {
            value() {
                this.$store.dispatch('setCssAttr', {
                    name: this.name,
                    value: this.value
                })
                this.$store.dispatch('makeCssFilter');
            }
        },
        created() {
            this.value = this.val;
        }
    }
</script>

<style scoped>

</style>
