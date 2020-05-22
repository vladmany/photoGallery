<template>
    <Section>
        <template v-slot:title>
            <span>Коррекция фото</span>
        </template>
        <template v-slot:content>
            <MakerOne></MakerOne>
        </template>
    </Section>
</template>

<script>
    import MakerOne from "./MakerOne";

    export default {
        name: "CorrectIndex",
        components: { MakerOne },
        props: {
            id: {
                required: true,
                type: Number
            }
        },
    }
</script>

<style scoped>

</style>

