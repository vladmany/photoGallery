<template>
<div>
    <TestModalWindow v-if="false"></TestModalWindow>
    <upload-photos-component></upload-photos-component>
</div>
</template>

<script>
    import TestModalWindow from "./components/TestModalWindow";
    import UploadPhotosComponent from "./components/UploadPhotosComponent";

    export default {
        name: "App",
        components: {UploadPhotosComponent, TestModalWindow}
    }
</script>

<style scoped>

</style>
