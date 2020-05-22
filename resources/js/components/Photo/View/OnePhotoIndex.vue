<template>
    <Section>
        <template v-slot:title>
            <h1>Просмотр фото</h1>
        </template>
        <template v-slot:actions>
            <actions/>
        </template>
        <template v-slot:content>
            <div class="back-button">
                <router-link :to="{ name: 'IndexPhoto' }" >
                    <object type="image/svg+xml" data="/storage/ic_arrow_left.svg"></object>
                </router-link>
            </div>
            <div>
                <OnePhoto :id="id"></OnePhoto>
            </div>
        </template>
    </Section>
</template>

<script>
    import Actions from "./Actions/ActionsIndex";
    import SliderPhoto from "./SliderPhoto";
    import OnePhoto from "./OnePhoto";

    export default {
        name: "OnePhotoIndex",
        components: {Actions, OnePhoto },
        props: {
            id: {
                required: true,
                type: Number
            }
        },
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
