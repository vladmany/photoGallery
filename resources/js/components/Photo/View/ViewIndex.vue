<template>
    <Section>
        <template v-slot:title>
            <h1>Просмотр фото</h1>
        </template>
        <template v-slot:content>
            <div class="back-button">
                <router-link :to="{ name: 'IndexPhoto' }" >
                    <object type="image/svg+xml" data="/storage/ic_arrow_left.svg"></object>
                </router-link>
            </div>
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
