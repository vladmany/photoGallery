<template>
    <Section>
        <template v-slot:title>
            <h1>Просмотр фото</h1>
        </template>
        <template v-slot:content>
<!--            <div>-->
<!--                <a href="#" @click.prevent="back">Назад</a>-->
<!--            </div>-->
            <div>
                <SliderPhoto :id="id"></SliderPhoto>
            </div>
        </template>
    </Section>
</template>

<script>
    import OnePhoto from "./OnePhoto";
    import SliderPhoto from "./SliderPhoto";

    export default {
        name: "ViewIndex",
        components: {SliderPhoto, OnePhoto },
        props: {
            id: {
                required: true,
                type: Number
            }
        },
        methods: {
            back() {
                // this.$router.go(-1);
            }
        }
    }

</script>

<style scoped>

</style>
