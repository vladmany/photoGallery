<template>
<div>
    <TestModalWindow v-if="true"></TestModalWindow>
</div>
</template>

<script>
    import TestModalWindow from "./components/TestModalWindow";

    export default {
        name: "App",
        components: {TestModalWindow}
    }
</script>

<style scoped>

</style>
