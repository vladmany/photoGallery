<template>
    <Section>
        <template v-slot:title>
            <span>Коррекция фото</span>
        </template>
        <template v-slot:content>
            <Maker></Maker>
        </template>
    </Section>
</template>

<script>
    import Maker from "./Maker";

    export default {
        name: "CorrectIndex",
        components: { Maker },
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
