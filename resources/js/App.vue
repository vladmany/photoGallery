<template>
<div>
    <errors-modal-window v-if="this.$store.state.isUploadError"></errors-modal-window>
    <all-photo></all-photo>
</div>
</template>

<script>
    import ErrorsModalWindow from "./components/Photo/Upload/ErrorsModalWindow";
    import AllPhoto from "./components/Photo/List/AllPhoto";

    export default {
        name: "App",
        components: {AllPhoto, ErrorsModalWindow},
        methods: {

        }
    }
</script>

<style scoped>

</style>
